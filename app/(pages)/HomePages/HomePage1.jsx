import React from 'react'
import Tagline from '@/app/(components)/Tagline'
import HomeHeroSection from '@/app/(components)/HomeHeroSection'

function HomePage1() {
  return (
    <div className='w-[100dvw] h-[100dvh] bg-secondary_blue_bg relative overflow-hidden'>
        <HomeHeroSection />
        <Tagline />
    </div>
  )
}

export default HomePage1