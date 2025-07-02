import React from 'react';

function StaticLogo() {
  return (
    <div className='py-2 md:px-4 flex align-middle justify-center flex-col'>
      <h2
        className='font-abhaya-extraBold text-[70px] md:text-[152px] text-white m-0 text-center'
        style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
      >
        Sheekharr
      </h2>
      <p className='text-[20px] md:text-[40px] text-white text-center -mt-8 md:-mt-16 font-abhaya-extraBold'>
        Your{' '}
        <span className='text-[22px] md:text-[52px]' style={{ color: '#93c5fd' }}>
          Success
        </span>{' '}
        Our{' '}
        <span className='text-[22px] md:text-[50px]' style={{ color: '#93c5fd' }}>
          Ingredients
        </span>
      </p>
    </div>
  );
}

export default StaticLogo; 