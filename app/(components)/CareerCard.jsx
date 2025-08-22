import React from 'react';
import Button from './Button';

/**
 * CareerCard component
 * Props:
 * - title: string
 * - location: string
 * - experience: string
 * - employment: string
 * - description: string
 * - buttonLink: string (URL to the form)
 * - buttonText?: string (optional, defaults to 'Apply Now')
 */
function CareerCard({
  title = 'Sales Coordinator',
  location = 'Navi mumbai, India',
  experience = '2–5 Years',
  employment = 'Full-time',
  description = "We're hiring a Sales Coordinator to support our growing B2B operations at Neyohm. You'll manage client communication, order processing, and coordination between sales, logistics, and accounts teams. If you're organized, proactive, and great with follow-ups, this role is for you.",
  buttonLink = '/career/form',
  buttonText = 'Apply',
}) {
  return (
    <div className="w-full md:w-[421px] bg-white rounded-2xl shadow-lg flex flex-col px-6 md:px-[30px] py-8 md:py-8 mx-auto transition-all duration-200">
      <div className="text-[22px] font-bold text-black text-left">{title}</div>
      <div className="mt-4 text-[16px] text-black text-left leading-tight">
        Location: {location}<br />
        Experience: {experience}<br />
        Employment Type: {employment}
      </div>
      <div className="mt-4 text-[13px] text-black text-left">
        {description}
      </div>
      <div className="mt-6 flex justify-center">
        <Button button_link={buttonLink} customPaddingClass="py-2 px-6 w-fit">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default CareerCard;
