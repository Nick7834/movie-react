import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

export const Rating = ({ filmR }) => {
  return (
    <div className="w-fit text-[#FFAD49] bg-film px-[8px] py-[4px] inline-flex items-center gap-[4px] rounded-[8px]">
        <span><AiOutlineStar /></span>
        <div className="s">{`${filmR?.ratingImdb === null ? `${filmR?.ratingKinopoisk}` : `${filmR?.ratingImdb}`}`}</div>
    </div>
  )
}
