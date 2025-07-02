import React from 'react'
import ContactForm2 from '../(components)/ContactForm2'

function ContactUsPage2() {
  return (
    <div className='w-full md:h-[670px]  flex flex-col md:flex-row justify-between items-center mb-10'>

      
        <div className='w-full md:w-[800px]  h-[530px] md:h-fit pl-6 md:pl-0 md:ml-[80px]'>
            <h2 className='text-xl font-semibold mt-10'>
                OFFICE ADDRESS
            </h2>
            <div className='flex flex-col gap-2 text-gray-500 md:my-2 mt-2 '>
                <p>Sheekharr Starch Private Limited</p>
                <p>W-406, Rabale, MIDC, TTC Industrial Area,</p>
                <p>Thane - Belapur Road, Navi Mumbai, <br/>Maharashtra 400701</p>
            </div>

            <h2 className='text-xl font-semibold mt-10'>
                WORKING HOURS
            </h2>
            <div className='flex flex-col gap-2 text-gray-500 md:my-2 mt-2 '>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <h2 className='text-xl font-semibold mt-10'>
                CONTACT US
            </h2>
              <div className='flex flex-col gap-2 text-gray-500 md:my-2 mt-2 '>
                <p>Phone: (+91) 9320381750</p>
                <p>Email: info@sheekharr.in</p>
                <p>Website: www.sheekharr.com</p>
            </div>
        </div>
        <ContactForm2 />

    </div>
  )
}

export default ContactUsPage2