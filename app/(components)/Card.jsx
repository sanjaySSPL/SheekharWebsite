'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Card({illustrations , title , paragraph}) {
  // console.log(illustrations)
  return (
    <motion.div className="w-[90dvw] md:w-[359px] h-[279px] md:h-[350px] bg-bg_light_blue rounded-[8px] p-6 hover:bg-[#343884] hover:text-white transition-all duration-300 group flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
    >
        <Image 
            src={illustrations}
            alt='illustration'
            width={44}
            height={44}
            className='mb-6 group-hover:brightness-0 group-hover:invert transition-all duration-300'
        />
        <h2 className='text-[24px] font-semibold mb-6 text-center group-hover:text-white transition-all duration-300'>
            {title}
        </h2>
        <div className='text-center group-hover:text-white transition-all duration-300 flex-1 flex items-center'>
            <div className='text-[20px]'>
                {paragraph}
            </div>
        </div>
    </motion.div>
  )
}

export default Card