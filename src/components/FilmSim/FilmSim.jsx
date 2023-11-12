import React from 'react'
import { Link } from 'react-router-dom'

export const FilmSim = ({ filmSim }) => {
  return (
    <Link to={`/film/${filmSim.filmId}`} className='w-[100%] max-w-[224px] group'>
        <div className='bg-cover bg-no-repeat bg-center relative top-0 w-[100%] h-[300px] rounded-[12px] transition-all ease-in-out duration-[.3s] group-hover:top-[-10px] group-hover:shadow-[0px_0px_67px_5px_rgba(221,228,239,0.21)]' 
          style={{
            backgroundImage: `url(${filmSim.posterUrl})`,
          }}
        >
        </div>

        <div className="p-[7px]">
            <h2 className='text-[16px] text-[#EBEEF5] leading-[22px] font-semibold tracking-[.32px]'>{filmSim.nameRu}</h2>
        </div>

    </Link>
  )
}
