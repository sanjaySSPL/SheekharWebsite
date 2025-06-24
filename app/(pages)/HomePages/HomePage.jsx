import React from 'react'
import Logo from '@/app/(components)/Logo'
import Image from 'next/image'
import ImageGridWithAnimations from '../../(components)/ImageGridWithAnimations'

function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
  {/* Image grid layer */}
  <div className="absolute inset-0 z-10  md:top-0 top-1/2 transform md:-translate-y-0 -translate-y-1/2 ">

    <ImageGridWithAnimations />

    <Image
        src={"/home_img.png"} // Assuming the image is in the public directory
        alt="Home Image"
        layout="fill"
        objectFit="cover" // This will cover the entire element area
        quality={100}
        className = 'md:hidden flex '
        // Adjust the quality as needed
      /> 

  </div>

  {/* Overlay */}
  <div className="absolute inset-0 z-20 from-black/20 via-black/60 to-black/90 bg-gradient-to-b" />

  {/* Hero Text */}
  <div className="absolute inset-0 z-30 flex items-center justify-center text-center text-white px-4">
    <div className='absolute md:left-10 left-[50%] translate-x-[-50%] md:translate-x-[0%] md:top-50% md:translate-y-[52%] top-[13%] '>
      <Logo />
    </div>
    <div className='absolute right-10 bottom-20 md:text-[20px] text-[12px]'>
        <p className='text-end'>We develop high-performance ingredient solutions --ready-to- <br className='hidden md:flex'/> use or custom-crafted--to solve real formulation challenges. <br className='hidden md:flex'/> From enhancing texture and yield to enabling clean-label <br className='hidden md:flex'/>innovation, every solution is designed around your product and <br className='hidden md:flex'/> process</p>
    </div>
  </div>
</div>
  )
}

export default HomePage