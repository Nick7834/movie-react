import React from 'react'
import { useEffect, useState } from 'react'
import { Header } from '../../Header/Header';
import { Search } from '../../ul/Search';
import { Film } from '../../Film/Film';
import { GrNext } from 'react-icons/gr'
import { FilmService } from '../../service/Film.Service';
import { useQuery } from 'react-query';
import { OpenM } from '../../ul/OpenM';
import { ModalSearch } from '../../ModalSearch/ModalSearch';
import { Loader } from '../../ul/Loader/Loader';

export const Movie = () => {
    const [currentM, setCurrentM] = useState(1)
    const movieTop = `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${currentM}`;

    const {data, isLoading, isError} = useQuery(['movie', currentM], () => FilmService.getFilms(movieTop), {
        keepPreviousData: true,
        refetchOnWindowFocus: false 
    })

    if (isError) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><div>Произошла ошибка при загрузке данных</div></div>;
    }

    if (isLoading) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><Loader /></div>
    }

  return (
    <div>

        <Header />
        <ModalSearch />

        <main>

            <section className='my-[80px]'>
                <div className="container">
                    <div className='flex flex-col text-center items-center justify-center'>
                        <h1 className='text-[#EBEEF5] text-title leading-[80px] font-semibold'>Movies</h1>
                        <p className='text-[#EBEEF5] text-text leading-[24px] font-normal mt-[20px] mb-[50px]'>Lots of movies, TV series, anime for every taste!</p>
                        <OpenM />
                     </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className='mb-[80px]'>
                        <div className='film-all mt-[80px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-y-[30px] gap-x-[20px] my-[24px] transition-all ease-in-out duration-[.3s]'>
                            {data?.items?.map(e => (
                                <Film key={e.kinopoiskId} film={e} />
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-[30px] text-[20px]">
                                <button onClick={() => setCurrentM(currentM - 1)} disabled={currentM === 1} className={`bg-[#EBEEF5] p-[10px] rounded-[12px] rotate-[180deg] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${currentM > 1 ? 'block' : 'hidden'}`}><GrNext /></button>
                                {data?.items?.length > 0 && 
                                    <button onClick={() => setCurrentM(currentM + 1)} disabled={currentM >= 35} className={`bg-[#EBEEF5] p-[10px] rounded-[12px] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${currentM < 35 ? 'block' : 'hidden'}`}><GrNext /></button>
                                }
                        </div>   
                    </div>
                </div>
            
            </section>

        </main>


    </div>
  )
}
