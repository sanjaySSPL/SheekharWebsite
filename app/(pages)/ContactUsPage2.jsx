import React from 'react'
import ContactForm2 from '../(components)/ContactForm2'

function ContactUsPage2() {
  return (
    <div className='w-full md:h-[670px] bg-red-400 flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-[800px] h-[400px] md:h-[300px] bg-blue-400'>
            <h2>
                OFFICE ADDRESS
            </h2>

            <h2>
                WORKING HOURS
            </h2>
        </div>
        <ContactForm2 />

    </div>
  )
}

export default ContactUsPage2