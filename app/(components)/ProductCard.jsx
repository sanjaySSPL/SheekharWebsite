'use client'
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

function ProductCard({
  image = '/brain.jpg',
  title = 'Paneer',
  description = '',
  description1 = '',
  keybenefits = [],
  onClick,
  expanded = false,
  onExpand,
  onCollapse,
  isMobile = false,
  product='',
}) {
  return (
    <motion.div
      layout
      className={`w-full md:w-full flex flex-col md:flex-row gap-0 border border-gray-200 rounded-lg bg-[#f9f8fe] p-3 md:p-6 mx-auto overflow-hidden flex-shrink-0 mb-2 md:mb-0 cursor-pointer ${
        expanded ? 'h-auto' : 'h-[375px]'
      }`}
      onClick={isMobile ? undefined : onClick}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Left: Image */}
      <div className={`w-full md:w-[45%] relative rounded-md mb-3 md:mb-0 overflow-hidden ${
        expanded ? 'h-[220px] md:h-[500px]' : 'h-[180px] md:h-full'
}`}>
        <Image 
          src={image} 
          alt={title} 
          fill
          className='object-cover w-full h-full rounded-md shadow-sm' 
          sizes="(max-width: 768px) 100vw, 45vw"
          placeholder='blur'
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9p6Q2wAAAABJRU5ErkJggg=="
        />
      </div>
      {/* Right: Product Info */}
      <div className='w-full md:w-[55%] flex flex-col justify-start items-start md:pl-6 h-auto md:h-full md:pt-[10px]'>
        <div className='text-lg md:text-2xl font-bold italic text-[#3b4381] mb-2 md:mb-[20px]'>{title}</div>
        {product && <div className='text-lg md:text-xl text-[#3b4381] mb-2 md:mb-[20px]'>{product}</div>}
        <div className='text-[#3b4381] text-sm md:text-base leading-relaxed whitespace-pre-line overflow-y-auto'>
          {description}
        </div>
        {/* Mobile: See More/Collapse */}
        {isMobile && (
          <button
            className="text-[#3b4381] text-sm md:text-base leading-relaxed hover:underline cursor-pointer mt-2 md:mt-[10px] text-left"
            onClick={expanded ? onCollapse : onExpand}
            type="button"
          >
            {expanded ? 'See Less' : 'See More'}
          </button>
        )}
        {/* Expanded content (for both mobile and desktop) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {description1 && (
                <div className="mt-2 text-[#3b4381] text-sm md:text-base">{description1}</div>
              )}
              {keybenefits && keybenefits.length > 0 && (
                <ul className="mt-2 list-disc pl-5 text-[#3b4381] text-sm md:text-base">
                  {keybenefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProductCard