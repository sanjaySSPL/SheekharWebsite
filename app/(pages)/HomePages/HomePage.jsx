import React from 'react'
import Logo from '@/app/(components)/Logo'
import Image from 'next/image'

function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
  {/* Image grid layer */}
  <div className="absolute inset-0 z-10">
    {/* <ImageGridWithAnimations /> */}
    <Image
        src={"/home_img.png"} // Assuming the image is in the public directory
        alt="Home Image"
        layout="fill"
        objectFit="cover" // This will cover the entire element area
        quality={100} // Adjust the quality as needed
      />

  </div>

  {/* Overlay */}
  <div className="absolute inset-0 z-20 from-black/20 via-black/80 to-black/90 bg-gradient-to-b" />

  {/* Hero Text */}
  <div className="absolute inset-0 z-30 flex items-center justify-center text-center text-white px-4">
    <div className='absolute left-10'>
      <Logo />
    </div>
    <div className='absolute right-10 bottom-20'>
        <p className='text-end'>We develop high-performance ingredient solutions --ready-to- <br/> use or custom-crafted--to solve real formulation challenges. <br/> From enhancing texture and yield to enabling clean-label <br/>innovation, every solution is designed around your product and <br/> process</p>
    </div>
  </div>
</div>
  )
}

export default HomePage