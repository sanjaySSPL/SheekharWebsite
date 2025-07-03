import React from 'react'

import DairyProductsSection from './DairyProductsSection'
import DairyBasedDessertSection from './DairyBasedDessertSection'


function page() {
  return (
    <div className='w-full min-h-[100dvh] flex flex-col gap-4 pt-[100px]'>
      <DairyProductsSection />
      <DairyBasedDessertSection />
      {/* Advanced Stabilizers Section */}
      <section id="advanced-stabilizers" className="w-full h-[500px] bg-bg_light_blue">
        <h2 className="text-[36px] font-semibold pl-[88px] pt-[45px] font-inter">Advanced Stabilizers</h2>
      </section>
      {/* Sauces & Snacks Section */}
      <section id="sauces-snacks" className="w-full h-[500px] bg-white">
        <h2 className="text-[36px] font-semibold pl-[88px] pt-[45px] font-inter">Sauces & Snacks</h2>
      </section>
      {/* Premixes Section */}
      <section id="premixes" className="w-full h-[500px] bg-bg_light_blue">
        <h2 className="text-[36px] font-semibold pl-[88px] pt-[45px] font-inter">Premixes</h2>
      </section>
      {/* Plating Agents Section */}
      <section id="plating-agents" className="w-full h-[500px] bg-white">
        <h2 className="text-[36px] font-semibold pl-[88px] pt-[45px] font-inter">Plating Agents</h2>
      </section>
      {/* Product Holder Divs */}
      
    </div>
  )
}

export default page