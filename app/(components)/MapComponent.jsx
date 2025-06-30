import React from 'react'

function MapComponent() {
  return (
    <div className="w-full h-[550px] flex items-center justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] h-[418px]">
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.171859202043!2d73.01300577343817!3d19.11127955086749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c28cdf949b%3A0x5199d1d2c6607fb7!2sRUPA%20SOLITAIRE%2C%20MILLENNIUM%20BUSINESS%20PARK%2C%20Millenium%20Business%20Park%2C%20Sector%202%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400701!5e1!3m2!1sen!2sin!4v1751266067247!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="RUPA SOLITAIRE, MILLENNIUM BUSINESS PARK Location"
        />
      </div>
    </div>
  )
}

export default MapComponent
