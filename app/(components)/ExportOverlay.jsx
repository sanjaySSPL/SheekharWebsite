import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function ExportOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="h-full w-full bg-gray-600/80 backdrop-blur-[1px] top-0 right-0 z-[60] fixed flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="h-full w-[90vw] max-w-[500px] -mr-2 absolute right-0 top-0 bg-gray-100 shadow-lg flex flex-col justify-center items-center p-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black focus:outline-none"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Content */}
            <div className="flex flex-col gap-8 items-center w-full">
              {/* Phone Number */}
              <div className="text-lg font-semibold text-gray-800 flex flex-col items-center">
                <span>Call us:</span>
                <a href="tel:+91 7397950657" className="text-2xl text-blue-700 underline mt-1">+91 7397950657</a>
              </div>
              {/* Download Brochure */}
              <a
                href="/brochure.pdf" // Replace with actual path
                download
                className="bg-gray-100 text-green-600 border  hover:bg-white font-semibold px-4 py-3 rounded shadow hover:bg-gray-100 transition"
              >
                Download Brochure
              </a>
              <a
                href="mailto:info@sheekharr.com"
                className="bg-gray-100 hover:bg-white text-blue-700 font-semibold px-4 py-3 rounded shadow hover:bg-gray-100 transition"
              >
                info@sheekharr.com
              </a>
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917397950657" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-600 transition flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.92L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.44.02 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                WhatsApp Us
              </a>
                             <div className='flex flex-col gap-3 items-center text-center'>
                 
                 
                 <a
                   href="https://maps.google.com/?q=Sheekharr+Starch+Private+Limited+Plot+No+A+Rupa+Solitaire+Millenium+Business+Park+14th+Floor+Thane+Belapur+Road+Navi+Mumbai+Maharashtra+400710"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="  font-semibold px-6 py-3 rounded shadow bg-gray-100 text-blue-600 hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                   </svg>
                   Get Directions
                 </a>
                 <span className="text-lg font-semibold text-gray-800 mt-5">Address:</span>
                 <div className="bg-white p-4 rounded-lg mt-1 shadow-md border-l-4 border-blue-500">
                   <div className="font-semibold text-gray-900 mb-1">Sheekharr Starch Private Limited</div>
                   <div className="text-gray-700 text-sm leading-relaxed">
                     Plot No. A, Rupa Solitaire Millenium Business Park, 14th Floor<br />
                     Thane Belapur Road, Navi Mumbai,<br />
                     Maharashtra 400710
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ExportOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExportOverlay;