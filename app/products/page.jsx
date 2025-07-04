import React from 'react'

import DairyProductsSection from './DairyProductsSection'
import DairyBasedDessertSection from './DairyBasedDessertSection'
import AdvancedStabilizersSection from './AdvancedStabilizersSection'
import SaucesSnacksSection from './SaucesSnacksSection'
import PremixesSection from './PremixesSection'
import PlatingAgentsSection from './PlatingAgentsSection'


function page() {
  return (
    <div className='w-full min-h-[100dvh] flex flex-col gap-4 pt-[100px]'>
      <DairyProductsSection />
      <DairyBasedDessertSection />
      <AdvancedStabilizersSection />
      <SaucesSnacksSection />
      <PremixesSection />
      <PlatingAgentsSection />
    </div>
  )
}

export default page