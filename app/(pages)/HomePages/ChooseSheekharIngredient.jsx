'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../(components)/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function ChooseSheekharIngredient() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

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
      x: isMobile ? 90 : -600,
      y: isMobile ? -250 : -350,
      color:'#EFF9FF',
      ht:'145',
      wt:'339'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747226/ImprovedStability_Appearance_we31ol.svg',
      alt: 'Improved Stability',
      x: isMobile ? -150 : -120,
      y: isMobile ? -280 : -400,
      color:"#EFF9FF",
      ht:'167',
      wt:'251'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747225/goodQuality_fl7kns.svg',
      alt: 'Good Quality',
      x: isMobile ? 120 : 290,
      y: isMobile ? -100 : -380,
      color:"#FFEFFA",
      ht:'153',
      wt:'252'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747225/HigherYieldLowerWastage_orrobj.svg',
      alt: 'Higher Yield Lower Wastage',
      x: isMobile ? -90 : -700,
      y: isMobile ? -30 : -100,
      color:"#f4ffef",
      ht:'156',
      wt:'272'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747224/BetterTexture_Mouthfeel_bgmb4n.svg',
      alt: 'Better Texture & Mouthfeel',
      x: isMobile ? 80 : 360,
      y: isMobile ? 10 : -130,
      color:"#F2FFEF",
      ht:'204',
      wt:'136'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747223/CustomizedProblemSpecificSOlutions_sezw6p.svg',
      alt: 'Customized, Problem-Specific Solutions',
      x: isMobile ? -70 : -700,
      y: isMobile ? 100 : 150,
      color:"#F9EFFF",
      ht:'225',
      wt:'225'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747224/StrongerConsumerRespomse_RevenueUplift_t1fwyp.svg',
      alt: 'Stronger Consumer Response & Revenue Uplift',
      x: isMobile ? 60 : 300,
      y: isMobile ? 160 : 230,
      color:"#ffefef",
      ht:'182',
      wt:'317'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750747223/CleanLabel_HealthFocused_vnqzqu.svg',
      alt: 'Clean Label & Health-Focused',
      x: isMobile ? -40 : -300,
      y: isMobile ? 160 : 300,
      color:"#f0effe",
      ht:'192',
      wt:'287'
    },
    {
      src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1752151408/unsplash_sw5qehkjlzI_1_c206ee.svg',
      alt: 'Premium Product',
      x: isMobile ? 30 : 30,
      y: isMobile ? 220 : 230,
      color:"#feffef",
      ht:'179',
      wt:'238'
    },
  ];

  return (
    <div ref={ref} className="h-[100dvh] md:h-[1100px] relative overflow-hidden ">
      {/* Desktop floating images */}
      <div className="absolute inset-0 z-20 hidden md:block">
        <div className="relative h-full w-full ">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -500, y: -500, opacity: 1, scale:0.5 }}
              animate={
                inView
                  ? { x: item.x, y: item.y, opacity: 1, scale:1 }
                  : { x: -120, y: -100, opacity: 1, scale:0.5 }
              }
              transition={{ duration: idx * 0.5, delay: 0.1, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.wt}
                height={item.ht}
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

      {/* Mobile carousel images */}
      <div className="block md:hidden w-full absolute z-20 top-2/3 left-0 h-fit flex items-center justify-center">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-row gap-6 px-6 py-8 min-w-full">
            {items.map((item, idx) => (
              <div key={idx} className=" flex flex-col items-center min-w-[220px] max-w-[220px] flex-shrink-0 h-[200px] justify-center">
                <div className="flex-1 flex items-center justify-center w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={180}
                    height={140}
                    className="rounded shadow-md mx-auto w-full h-auto max-h-[140px] object-contain"
                  />
                </div>
                <p
                  className="text-center text-[14px] px-3 py-1 rounded-full mt-2"
                  style={{ backgroundColor: item.color }}
                >
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[600px]  absolute z-10 top-1/3 -translate-y-[250px] md:left-1/2 md:top-1/2 md:-translate-y-1/2 transform md:-translate-x-1/2">
        <h2 className="md:text-[36px] md:w-full sm:text-[20px] text-[30px] text-center text-text_blue font-semibold italic mx-10 md:mt-[32px] mt-[50px] mb-[50px] md:mb-[40px]">
          Why Choose Neyohm Innovations?
        </h2>

        <p className="text-end md:text-[20px] px-4 font-inter text-text_blue">
          Trusted by brands to improve quality, shelf life, and <br />
          profitability — all through smarter food solutions
        </p>

        <Button
          button_link="/contact"
          customPaddingClass="py-[4px] px-[18.5px] tracking-widest w-fit mt-[63px] mx-auto"
        >
          Get your customized soltuion
        </Button>
      </div>
    </div>
  );
}

export default ChooseSheekharIngredient;
