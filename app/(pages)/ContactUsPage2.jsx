import React from 'react'
import ContactForm2 from '../(components)/ContactForm2'

function ContactUsPage2() {
  return (
    <div className='w-full md:h-[750px] flex flex-col md:flex-row justify-between items-center mb-10 gap-8 md:gap-2 px-6 md:px-12'>

        <div className='w-full md:w-1/3 h-[530px] md:h-fit flex flex-col justify-center md:pl-10'>
            <h2 className='text-xl font-semibold mb-6'>
                OFFICE ADDRESS
            </h2>
            <div className='flex flex-col gap-2 text-gray-500 mb-8'>
                <p>Neyohm Innovations</p>
                <p>Premises No. 9WA 138-SO-08</p>
                <p>Floor Number : First Floor</p>
                <p>Building Name : 9WA</p>
                <p>Area Name : Dubai Airport Freezone</p>
            </div>

            <h2 className='text-xl font-semibold mb-6'>
                WORKING HOURS
            </h2>
            <div className='flex flex-col gap-2 text-gray-500 mb-8'>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <h2 className='text-xl font-semibold mb-6'>
                CONTACT US
            </h2>
              <div className='flex flex-col gap-2 text-gray-500'>
                <p>Phone: (+91) 7397950657</p>
                        <p>Email: info@neyohm.com</p>
        <p>Website: www.neyohm.com</p>
            </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
            <ContactForm2 />
        </div>

    </div>
  )
}

export default ContactUsPage2