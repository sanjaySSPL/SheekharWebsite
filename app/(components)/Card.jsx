'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Card({illustrations , title , paragraph}) {
  // console.log(illustrations)
  return (
    <motion.div className="w-[90dvw]  md:w-[359px] h-[279px] bg-bg_light_blue rounded-[8px] p-[1px] hover:bg-blue-100 transition-all duration-300 "
      initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
    >
        <Image 
            src={illustrations}
            alt='illustration'
            width={44}
            height={44}
            className='mt-[20px] mx-auto '
        />
        <h2 className='text-[24px] fomt-semibold mt-[23px] ml-[20px] text-text_blue md:text-center text-center'>
            {title}
        </h2>
        <div className='w-[90%] md:w-[319px] h-[120px] mt-[23px] mb-[20px] ml-[20px] text-text_blue md:text-center text-center
        '>
            {paragraph}
        </div>


    </motion.div>
  )
}

export default Card