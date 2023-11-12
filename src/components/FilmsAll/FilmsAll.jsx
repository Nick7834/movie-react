import { useEffect, useState } from 'react'
import React from 'react'
import { Film } from '../Film/Film'

import { GrNext } from 'react-icons/gr'
import { FilmService } from '../service/Film.Service'
import { Loader } from '../ul/Loader/Loader'
import { useQuery } from 'react-query'

export const FilmsAll = () => {
    const [current, setCurrent] = useState(1);

    const [typeButton, setTypeButton] = useState('All')

    const tabsButton = [

        {
            title: 'All',
            type: 'All'
        },

        {
            title: 'Movies',
            type: 'FILM'
        },

        {
            title: 'TV Shows',
            type: 'TV_SERIES'
        }
    ];

    const filmsTop = `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=${current}`;

    const {data, isLoading, isError} = useQuery(['films', current], () => FilmService.getFilms(filmsTop), {
        keepPreviousData: true,
        refetchOnWindowFocus: false 
    });

    if (isError) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><div>Произошла ошибка при загрузке данных</div></div>;
    }

    if (isLoading) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><Loader /></div>
    }
    
  return (
    <div className='my-[80px]'>

        <div className='inline-flex bg-tabs rounded-[12px] p-[8px]'>
           {tabsButton.map((tab, index) => (
                <button key={index}
                     className={`px-pxM py-[8px] text-[#EBE9FE] rounded-[12px] ${typeButton === tab.type ? 'bg-[#7B6EF6]' : ''}`}
                     onClick={() => {
                        setTypeButton(tab.type);
                        setCurrent(1);
                      }}
                >
                    {tab.title}
                </button>
           ))}
        </div>

        <div className='film-all grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-y-[30px] gap-x-[20px] my-[24px] transition-all ease-in-out duration-[.3s]'>

         
            {data?.items?.filter((film) => typeButton === 'All' || film.type === typeButton).map((film) => (
                <Film key={film.kinopoiskId} film={film} />
            ))}
           

        </div>

        <div className="flex items-center justify-center gap-[30px] text-[20px]">
            <button onClick={() => setCurrent(current - 1)} disabled={current === 1}  className={`bg-[#EBEEF5] p-[10px] rounded-[12px] rotate-[180deg] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${current > 1 ? 'block' : 'hidden'}`}><GrNext /></button>
            {data?.items?.length > 0 && 
              <button onClick={() => setCurrent(current + 1)} disabled={current >= 20} className={`bg-[#EBEEF5] p-[10px] rounded-[12px] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${current < 20 ? 'block' : 'hidden'}`}><GrNext /></button>
            }
        </div>        

    </div>
  )
}
