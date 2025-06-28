'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../(components)/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function ChooseSheekharIngredient() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const items = [
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747225/processCompatibility_ahj5na.svg',
      alt: 'Process Compatibility',
      x: isMobile ? 90 : 280,
      y: isMobile ? -250 : -300,
      color:'#EFF9FF'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747226/ImprovedStability_Appearance_we31ol.svg',
      alt: 'Improved Stability',
      x: isMobile ? -150 : -510,
      y: isMobile ? -280 : -350,
      color:"#EFF9FF"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747225/goodQuality_fl7kns.svg',
      alt: 'Good Quality',
      x: isMobile ? 120 : -90,
      y: isMobile ? -100 : -400,
      color:"#FFEFFA"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747225/HigherYieldLowerWastage_orrobj.svg',
      alt: 'Higher Yield Lower Wastage',
      x: isMobile ? -90 : -550,
      y: isMobile ? -30 : -100,
      color:"#f4ffef"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747224/BetterTexture_Mouthfeel_bgmb4n.svg',
      alt: 'Better Texture & Mouthfeel',
      x: isMobile ? 80 : 360,
      y: isMobile ? 10 : -130,
      color:"#F2FFEF"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747223/CustomizedProblemSpecificSOlutions_sezw6p.svg',
      alt: 'Customized, Problem-Specific Solutions',
      x: isMobile ? -70 : -500,
      y: isMobile ? 100 : 150,
      color:"#F9EFFF"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747224/StrongerConsumerRespomse_RevenueUplift_t1fwyp.svg',
      alt: 'Stronger Consumer Response & Revenue Uplift',
      x: isMobile ? 60 : 500,
      y: isMobile ? 160 : 500,
      color:"#ffefef"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747223/CleanLabel_HealthFocused_vnqzqu.svg',
      alt: 'Clean Label & Health-Focused',
      x: isMobile ? -40 : -120,
      y: isMobile ? 160 : 300,
      color:"#f0effe"
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747223/PremiumProduct_ecxrf8.svg',
      alt: 'Premium Product',
      x: isMobile ? 30 : 300,
      y: isMobile ? 220 : 200,
      color:"#feffef"
    },
  ];

  return (
    <div ref={ref} className="h-[100dvh] md:h-[1000px] relative overflow-hidden">
      <div className="absolute inset-0 z-20">
        <div className="relative h-full w-full">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={
                inView
                  ? { x: item.x, y: item.y, opacity: 1 }
                  : { x: 0, y: 0, opacity: 0 }
              }
              
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={isMobile ? 100 : 150}
                height={isMobile ? 80 : 100}
                className="rounded shadow-md mx-auto hover:scale-110 transition-all duration-1000"
              />
              <p 
                className="text-center mt-2 text-[12px] md:text-text_blue md:text-[20px] px-4 py-1 rounded-full"
                style={{ backgroundColor: item.color }}
              >
                {item.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-[688px] absolute z-10 top-1/2 -translate-y-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 transform md:-translate-x-1/2">
        <h2 className="md:text-[36px] sm:text-[20px] text-[30px] text-center text-text_blue font-inter italic mx-10 md:mt-[32px] mt-[50px] mb-[50px] md:mb-[40px]">
          Choose Sheekhar Ingredient
        </h2>

        <p className="text-end md:text-[20px] px-4">
          Trusted by brands to improve quality, shelf life, and <br />
          profitability — all through smarter food solutions
        </p>

        <Button
          button_link="https://google.com"
          customPaddingClass="py-[4px] px-[18.5px] tracking-widest w-fit mt-[63px] mx-auto"
        >
          Get your customized soltuion
        </Button>
      </div>
    </div>
  );
}

export default ChooseSheekharIngredient;
