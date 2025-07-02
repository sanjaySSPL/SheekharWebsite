// DisplayCards.tsx
'use client'
import React, { useState, forwardRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const DisplayCard = forwardRef(function DisplayCard(props, ref) {
  const { data_image, data_text, data_detailed_link, data_title } = props
  const [active, setActive] = useState(false)
  const router = useRouter()
  
  return (
    <div ref={ref} className={`${active ? 'w-[320px] h-[384px]' : null } w-[250px] relative  z-10 h-[300px] rounded-[5px]  transition-all ease-in-out duration-500 overflow-hidden `}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => router.push(data_detailed_link)}
        >
        <Image className='w-[250px] h-[300px] rounded-[5px] relative z-10' src={data_image} alt="" objectFit='cover' layout='fill' placeholder='blur' blurDataURL='/brain.jpg'/>
        {active && <div className='w-[277px] h-[343px] bg-light_orange opacity-[83%] rounded-[5px] absolute z-30 bottom-0 left-0 flex align-middle justify-start  items-start flex-col backdrop-blur-sm md:pt-[12px] pt-[10px]'
                onClick={() => router.push(data_detailed_link)} >
                  <h3 className='text-text_blue text-[25px] md:font-semibold md:px-[14px] mx-auto px-[10px] text-center'>{data_title}</h3>
            <p className='text-text_blue text-[20px] md:px-[14px] px-[10px] text-center md:mt-5'>{data_text}<br/></p>
            <Link href={data_detailed_link} className='underline text-text_blue italic cursor-pointer'>{data_detailed_link}</Link>
        </div>}
    </div>
  )
})

export default DisplayCard

