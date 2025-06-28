import React from 'react'

function MapComponent() {
  return (
    <div className="w-full h-[550px] flex items-center justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] h-[418px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.6338164231943!2d73.01282097343909!3d19.143792249844285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf580417eeb5%3A0xd17ff0344160a315!2sSheekharr%20Starch%20Private%20Limited!5e1!3m2!1sen!2sin!4v1751090837996!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sheekharr Starch Private Limited Location"
        />
      </div>
    </div>
  )
}

export default MapComponent
