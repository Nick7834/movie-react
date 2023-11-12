import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export const Search = ({ onChange }) => {

  const [search, setSearch] = useState('')

  function submitSearch(e) {
    e.preventDefault();
    if(!search || search.trim() === '') return;
    onChange(search)
  }

  return (
    <label onSubmit={submitSearch} className='block px-[16px] w-[100%] max-w-[600px] py-[12px] border-[1px] border-solid border-[#323B54] rounded-[12px] bg-search cursor-text'>
        <form className=' w-[100%] flex items-center gap-[16px]'>
            <span><RiSearch2Line className='text-[20px] text-[#475069]' /></span>
            <input 
                type="text" 
                placeholder='Top-Gun' 
                className='text-[#475069] font-normal leading-[16px] w-[100%] border-none outline-none focus:text-[#EBEEF5]' 
                onChange={e => setSearch(e.target.value)}
                value={search}
             />
        </form>
    </label>
  )
}
