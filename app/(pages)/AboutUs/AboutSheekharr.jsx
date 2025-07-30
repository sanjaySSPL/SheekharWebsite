import React from "react";
import Image from "next/image";

function AboutSheekharr() {
  return (
    <div className="h-[750px] md:h-[480px] w-full relative pt-1 bg-[#eef7ff]">
      <div className="h-[284px] w-[100dvw] pt-[20px] md:pt-0 mt-[20px] md:mt-[56px]  md:ml-[55px]">
        <h2 className="text-[40px] italic font-bold font-inter text-text_blue md:text-start text-center mb-[30px] md:mb-[20px]">
          About Sheekharr
        </h2>

        <div className="flex flex-col md:flex-row gap-[20px] w-full ">
          <div className="lg:w-6/12 md:w-8/12 md:p-0 p-4 text-[20px] text-text_blue ">
            <p className="">
              At Sheekharr, we turn natural raw materials into smart, functional
              ingredients that solve real problems for food and personal care
              brands. Based in Navi Mumbai, we specialize in the science of
              starches, fibres, sweeteners, and plant-based innovations—helping
              manufacturers create products that perform better, feel better,
              and last longer.
            </p>
            <br />
            <p classname="">
              Since 2012, we have worked closely with businesses across the
              food, beverage, personal care, and industrial sectors, delivering
              clean-label, non-GMO, gluten-free, and health-forward ingredient
              solutions tailored to their needs
            </p>
          </div>
          <div className="lg:w-6/12 md:w-4/12 h-full flex items-center justify-center">
            <Image src="https://res.cloudinary.com/dipc3ow9z/image/upload/v1752209735/sheekharr_logo_cbulsm.jpg" alt="about-sheekharr" width={400} height={400} className="rounded-sm"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSheekharr;
