import React from 'react';
import Image from 'next/image';

const certificates = [
  {
    src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751103285/1707841493fssai-logo-png_1_rzktov.svg',
    width: 209,
    height: 101,
    alt: 'FSSAI',
  },
  {
    src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751103286/images_1_u1lhpg.svg',
    width: 120,
    height: 120,
    alt: 'Halal',
  },
  {
    src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751103286/KLBD-Full_1_z6ejda.svg',
    width: 120,
    height: 120,
    alt: 'Kosher',
  },
  {
    src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751103285/fssc-22000-logo-png_seeklogo-518599_1_gixozb.svg',
    width: 280,
    height: 75,
    alt: 'FSSC 22000',
  },
  {
    src: 'https://res.cloudinary.com/dipc3ow9z/image/upload/v1751103286/haccp-hazard-analysis-critical-control-260nw-2369890213_1_mxhmqm.svg',
    width: 120,
    height: 120,
    alt: 'HACCP',
  },
];

const mobileWidths = [70, 50, 50, 80, 50]; // px, for mobile view
const mobileHeights = [34, 34, 34, 24, 34]; // px, for mobile view

const Certificate = () => (
  <div className="w-full h-[120px] md:h-[180px] flex items-center justify-center px-2 mb-10">
    <div className="flex items-center w-full justify-around xl:justify-between gap-4 md:gap-8 lg:gap-[100px] xl:gap-[138px]">
      {certificates.map((cert, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center"
          style={{
            width: `min(${cert.width}px, 18vw)` ,
            height: `min(${cert.height}px, 8vw)` ,
            maxWidth: cert.width,
            maxHeight: cert.height,
          }}
        >
          <div className="block md:hidden">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={mobileWidths[idx]}
              height={mobileHeights[idx]}
              style={{ objectFit: 'contain', width: mobileWidths[idx], height: mobileHeights[idx] }}
              sizes="70px"
              priority
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={cert.width}
              height={cert.height}
              style={{ objectFit: 'contain', width: cert.width, height: cert.height }}
              sizes="(max-width: 1200px) 18vw, 209px"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certificate;
