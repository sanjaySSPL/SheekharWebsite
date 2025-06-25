import React from 'react'
import ContactForm from '../(components)/ContactForm'

function ContactUsPage() {
  return (
    <div className= 'md:mt-20 md:h-[750px]  p-1 overflow-hidden'>
        <h2 className="md:text-[36px] sm:text-[20px] text-[30px] text-center text-text_blue font-inter italic mx-10 md:mt-[65px] mt-[50px] mb-[50px] md:mb-[40px]">Get your solution customized </h2>
        <div className="md:h-[500px] md:w-[100dvw] md:flex md:align-middle md:justify-around md:items-center">
            <ContactForm />
            <div className="md:h-[500px] w-[350px] bg-green-300">

            </div>
        </div>
    </div>
  )
}

export default ContactUsPage