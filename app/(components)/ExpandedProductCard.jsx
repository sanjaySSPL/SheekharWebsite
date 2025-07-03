import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ExpandedProductCard({
  image,
  title,
  description,
  description1,
  keybenefits = [],
  onClose,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-3xl mx-auto mb-6 p-6 rounded-xl bg-white shadow-lg flex flex-col md:flex-row gap-6 relative z-20"
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        onClick={onClose}
        aria-label="Close"
        type="button"
      >
        &times;
      </button>
      <div className="w-full md:w-1/3 relative h-[220px] md:h-auto rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="text-2xl font-bold italic text-[#3b4381] mb-2">{title}</div>
        <div className="text-[#3b4381] text-base mb-2">{description}</div>
        {description1 && (
          <div className="text-[#3b4381] text-base mb-2">{description1}</div>
        )}
        {keybenefits && keybenefits.length > 0 && (
          <ul className="list-disc pl-5 text-[#3b4381] text-base">
            {keybenefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default ExpandedProductCard; 