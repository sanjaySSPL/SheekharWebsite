'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Custom hook for media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Helper to add Cloudinary transformation for WebP, auto quality, and width
function getCloudinaryWebP(url, width) {
  return url.replace('/upload/', `/upload/f_webp,q_auto,w_${width}/`);
}

// 6 columns of image URLs (each array = 1 column), now with WebP transformation
const imageGrid = [
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747604/img_r1_c1_zbwu01.svg', 289),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747602/img_r2_c1_n4g2wj.svg', 339),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747601/img_r3_c1_l11okd.svg', 375),
  ],
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747599/img_r1_c2_u7814r.svg', 313),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747598/img_r2_c2_thi9jd.svg', 313),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747597/img_r3_c2_s0gfgk.svg', 188),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747595/img_r4_c2_ypy5jf.svg', 183),
  ],
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747595/img_r1_c3_sguhay.svg', 375),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747593/img_r2_c3_sz7raa.svg', 418),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747593/img_r3_c3_cn1exw.svg', 178),
  ],
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747591/img_r1_c4_nmleqn.svg', 375),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747590/img_r2_c4_ewoia2.svg', 375),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747589/img_r3_c4_dlmaab.svg', 200),
  ],
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750773816/bottle_f25xvi.webp', 374),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747589/img_r2_c5_k9uqeh.svg', 166),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747588/img_r3_c5_tffrfj.svg', 313),
  ],
  [
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774143/unsplash_WXJ33HOrzvE_zpd2ap.svg', 312),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774142/unsplash_6jHpcBPw7i8_lt4tgi.svg', 289),
    getCloudinaryWebP('https://res.cloudinary.com/dipc3ow9z/image/upload/v1750774141/unsplash_rUyQayVEmxo_ldzpcx.svg', 375),
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
const getVariant = (colIndex ) => {
  return {
    hidden: {
      y: colIndex % 2 === 0 ? -200 : 200,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
};

// Animation Variant for Column 2 - staggered animation
const getVariant2 = (rowIndex) => {
  return {
    hidden: {
      y: rowIndex === 0 ? 200 : rowIndex === 1 ? -200 : 200, // First image comes from below, second from above, third from below
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: rowIndex * 0.2, // Stagger the animations
      },
    },
  };
};

// Animated grid (unchanged)
const AnimatedGrid = () => (
  <div className="absolute inset-0 z-10 px-2 sm:px-4 md:px-8 flex gap-[10px] justify-center sm:flex hidden">
    {imageGrid.map((column, colIndex) => (
      <div key={colIndex} className="flex flex-col gap-[10px]">
        {column.map((img, rowIndex) => (
          <motion.div
            key={rowIndex}
            variants={colIndex === 1 ? getVariant2(rowIndex) : getVariant(colIndex)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={img}
              alt={`img-${colIndex}-${rowIndex}`}
              width={160}
              height={sizeGrid[colIndex][rowIndex] || 200}
              className="rounded-[2px] object-cover md:w-[250px]"
              priority
              placeholder='blur' 
              blurDataURL={img}
              style={{height: "auto"}}
            />
          </motion.div>
        ))}
      </div>
    ))}
  </div>
);

// Wrapper component
const ImageGridWithAnimations = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return isLargeScreen ? <AnimatedGrid /> : null;
};

export default ImageGridWithAnimations;
