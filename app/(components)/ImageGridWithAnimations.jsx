'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// 6 columns of image URLs (each array = 1 column)
const imageGrid = [
  [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747604/img_r1_c1_zbwu01.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747602/img_r2_c1_n4g2wj.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747601/img_r3_c1_l11okd.svg',
  ],
 
  [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747599/img_r1_c2_u7814r.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747598/img_r2_c2_thi9jd.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747597/img_r3_c2_s0gfgk.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747595/img_r4_c2_ypy5jf.svg',
  ],
  [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747595/img_r1_c3_sguhay.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747593/img_r2_c3_sz7raa.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747593/img_r3_c3_cn1exw.svg',
  ],
  [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747591/img_r1_c4_nmleqn.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747590/img_r2_c4_ewoia2.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747589/img_r3_c4_dlmaab.svg',
  ],
  [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750773816/bottle_f25xvi.webp',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747589/img_r2_c5_k9uqeh.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747588/img_r3_c5_tffrfj.svg',
  ],
   [
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774143/unsplash_WXJ33HOrzvE_zpd2ap.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774142/unsplash_6jHpcBPw7i8_lt4tgi.svg',
    'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774141/unsplash_rUyQayVEmxo_ldzpcx.svg',
  ],
];

// Size map in px corresponding to each image above
const sizeGrid = [
  [289, 339, 375],
  [313, 313, 188, 183],
  [375, 418, 178],
  [375, 375, 200],
  [374, 166, 313],
  [312, 289, 375],
];

// Animation variants
const getVariant = (rowIndex ) => {
  return {
    hidden: {
      y: rowIndex % 2 === 0 ? -100 : 100,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3.6,
        ease: 'easeOut',
      },
    },
  };
};

const ImageGridWithAnimations = () => {
  return (
    <div className="absolute inset-0 z-10 px-2 sm:px-4 md:px-8 flex gap-[10px] justify-center sm:flex hidden">
      {imageGrid.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-[10px]">
          {column.map((img, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={getVariant(rowIndex)}
              initial="hidden"
              whileInView="visible" // Use whileInView to trigger animation when in view
              viewport={{ once: true }} // Ensure animation runs only once
            >
              <Image
                src={img}
                alt={`img-${colIndex}-${rowIndex}`}
                width={160}
                height={sizeGrid[colIndex][rowIndex] || 200}
                className="rounded-[2px] object-cover md:w-[250px]"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGridWithAnimations;
