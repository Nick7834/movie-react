import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { useModal } from '../ContextModal'

export const Header = () => {

    const { openModal } = useModal()

    const nav = [

        {
            link: '/movie',
            text: 'Movies' 
        },

        {
            link: '/tv_show',
            text: 'TV Shows'
        }

    ]
    

  return (
    <header className='pt-[20px] pb-[20px] backdrop-blur-[20px] bg-header'>
        <div className="container">
            <div className="flex justify-between items-center">

                <Link to='/'><img src="./logo.svg" alt="logo-header" /></Link>

                <nav className='flex items-center gap-header'> 
                    <button onClick={openModal}><IoSearch className='text-[#A8AEBF] text-[24px] 
                    transition-all ease-in-out duration-[.5s] hover:text-[white]' /></button>
                    <ul className='flex gap-header'>
                        {nav.map((navs, index) => (
                            <li key={index}><Link to={navs.link} className='text-[#A8AEBF] text-[16px] leading-[24px] font-semibold tracking-[.32px] transition-all ease-in-out duration-[.5s] hover:text-[white]'>{navs.text}</Link></li>
                        ))}
                    </ul>
                </nav>

            </div>
        </div>
    </header>
  )
}