import React from 'react'

function OurMission() {
  return (
    <div className='h-[750px] md:h-[200px] w-full relative pt-1 mt-[1px] md:mt-[10px]'>
        <div className='h-[284px] w-[100dvw] pt-[20px] md:pt-0 mt-[20px] md:mt-[56px] md:ml-[55px]'>
            <h2 className='text-[40px] italic font-bold font-inter text-text_blue md:text-start text-center mb-[30px] md:mb-[20px]'>Our Mission </h2>
            <div className="md:w-[91%]  md:p-0 p-4 text-[20px]  text-text_blue">
                <p className='mb-10'>Our mission is to deliver consistently high-quality, innovative, and affordable ingredient solutions—supported by personalized R&D expertise—while upholding the highest standards of ethics, safety, and sustainability, and fostering lasting partnerships built on trust, transparency, and shared success. </p>
                    <br/>
                {/* <p classname='mb-10 '>With R&D expertise and fully integrated manufacturing, we offer everything from custom-formulated ingredients to ready-to-use solutions—always tuned to your product, your process, and your market goals.</p> */}
            </div>
        </div>
    </div>
  )
}

export default OurMission