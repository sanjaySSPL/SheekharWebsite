'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import Link from 'next/link';

function Display_Cards( { data_image , data_text , data_detailed_link } ){

    const[active , setActive] = useState(false);

  return (
    <div className={`${active ? 'w-[320px] h-[384px]' : null } w-[250px] relative z-10 h-[300px] rounded-[5px]  transition-all ease-in-out duration-500 overflow-hidden `}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => redirect(data_detailed_link)}
        >
        <Image className='w-[250px] h-[300px] rounded-[5px] relative z-10' src={data_image} alt="" objectFit='cover' layout='fill' placeholder='blur' blurDataURL='/brain.jpg'/>
        {active && <div className='w-[277px] h-[343px] bg-light_orange opacity-[83%] rounded-[5px] absolute z-30 bottom-0 left-0 flex align-middle justify-center items-center flex-col'
                onClick={() => redirect(data_detailed_link)} >
            <p className='text-text_blue text-[20px]'>{data_text}<br/></p>
            <Link href={data_detailed_link} className='underline text-text_blue italic cursor-pointer'>{data_detailed_link}</Link>
        </div>}
    </div>
  )
}

export default Display_Cards