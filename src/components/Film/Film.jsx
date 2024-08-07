import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../ul/Rating'

export const Film = ({film}) => {
  return (
    <Link to={`/film/${film.kinopoiskId}`} className='w-[100%] max-w-[224px]  group'>
        <div className='bg-cover bg-no-repeat bg-center relative top-0 w-[100%] h-[300px] rounded-[12px] transition-all ease-in-out duration-[.3s] group-hover:top-[-10px] group-hover:shadow-[0px_0px_67px_5px_rgba(221,228,239,0.21)]' 
          style={{
            backgroundImage: `url(${film.posterUrl})`,
          }}
        >

          <div className="p-[10px]">
            <Rating filmR={film} />
          </div>

        </div>

        <div className="p-[7px]">
            <h2 className='text-[16px] text-[#EBEEF5] leading-[22px] font-semibold tracking-[.32px]'>{film.nameRu}</h2>
            <span className='mt-[5px] flex text-[12px] text-[#a8abb8] leading-[20px] font-medium'>{film.genres.map(geng => ` ${geng.genre}`).join(',')}</span>
        </div>

    </Link>
  )
}
