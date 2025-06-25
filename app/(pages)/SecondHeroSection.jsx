import React from 'react'
import Image from 'next/image'
import Logo from '../(components)/Logo'

function SecondHeroSection() {
  return (
    <div className='h-[437px] w-[100dvw] relative'>
        <div className="h-full w-full absolute z-10 top-0 left-0">
            <Image 
                src='/home_img.png'
                alt='Home Image'
                layout='fill'
                objectFit='cover'
                quality={100}
                className = ''
            />
        </div>

        {/* Overflow div */}
        <div className="h-full w-full absolute inset-0 z-20 from-black/20 via-black/60 to-black/90 bg-gradient-to-b" />

        {/* Content div */}
        <div className="absolute inset-0 z-30 flex items-center justify-center text-center text-white px-4 h-full w-full top-0 left-0">
            <div className='absolute md:left-10 left-[50%] translate-x-[-50%] md:translate-x-[0%] md:top-50% '>
                <Logo />
            </div>
        </div>
    </div>
  )
}

export default SecondHeroSection