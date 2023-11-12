import React from 'react'
import { FaSearchengin } from 'react-icons/fa'
import { useModal } from '../ContextModal'

export const OpenM = () => {

    const { openModal } = useModal()

  return (
    <button onClick={openModal} className='modal-button flex items-center gap-[10px] rounded-[20px] py-[16px] px-[40px] text-[16px] text-[#EBEEF5] leading-[10px] font-semibold'><FaSearchengin /> Search!</button>
  )
}
