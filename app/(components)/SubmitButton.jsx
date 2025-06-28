import React from 'react'

function SubmitButton({ children, disabled = false, customPaddingClass = "px-8 py-3" }) {
  return (
    <button 
      type="submit"
      disabled={disabled}
      className={`flex items-center w-full justify-center text-center rounded-lg bg-medium_blue hover:bg-dark_blue disabled:bg-gray-400 disabled:cursor-not-allowed transition-all ease-in-out duration-150 text-text_white ${customPaddingClass}`}
    >
      <p className='text-[20px]'>
        {children}
      </p>
    </button>
  )
}

export default SubmitButton 