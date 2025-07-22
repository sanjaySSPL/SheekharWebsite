import React from 'react'
import ContactForm from '../(components)/ContactForm'

function ContactUsPage() {
  return (
    <div className= 'md:mt-20 md:h-[800px]  p-1 overflow-hidden mt-10'
       style={{
    backgroundImage: `url(https://res.cloudinary.com/dipc3ow9z/image/upload/v1752736885/contact_form_phoito_ki4jo4.svg)`,
    backgroundSize: 'cover', // Add this to cover the entire div
    backgroundRepeat: 'no-repeat', // Add this to prevent repeating the image
  }}
    >
        <h2 className="md:text-[36px] sm:text-[20px]  text-[30px] text-start md:ml-36 md:text-semibold text-text_blue font-inter italic mx-10 md:mt-[65px] mt-[50px] mb-[50px] md:mb-[40px]">Get your solution customized </h2>
        <div className="md:h-[500px] md:w-[100dvw] md:flex md:align-middle md:justify-around md:items-center mt-20">
            <ContactForm />
            <div className="md:h-[500px] w-[350px] ">

            </div>
        </div>
    </div>
  )
}

export default ContactUsPage