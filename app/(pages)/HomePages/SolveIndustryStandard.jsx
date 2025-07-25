'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import {motion, useInView} from 'framer-motion'

function SolveIndustryStandard() {


    const card1Ref = useRef();
    const card1InView = useInView(card1Ref, { once: true, margin: "-120px" });

    const card2Ref = useRef();
    const card2InView = useInView(card2Ref, { once: true, margin: "-120px" });

    const card3Ref = useRef();
    const card3InView = useInView(card3Ref, { once: false, margin: "-120px" });

  return (
    <div className='mt-20 w-[100%] h-fit md:px-[110px] flex align-middle justify-center items-center'>

        <div className='w-full h-[1760px] md:h-[1454px] bg-bg_light_blue pt-1'>

            <h2 className='text-[36px] sm:text-[32px] md:text-[36px] text-text_blue font-semibold font-inter md:text-start text-center italic md:ml-[90px] mt-[80px] md:mt-[120px]'>How We Solve Industry Challenges</h2>

            {/* This is the div having the 3 cards for the solving challenges */}
            <div className='mt-[80px] md:mt-[118px] md:pl-[91px] bg-green-300 relative'>
                {/* Solving Challenge Number 1 */}
                <motion.div className='h-[500px] w-[90%] md:w-[816px] md:h-[214px] flex-col md:flex-row md:flex align-middle justify-around md:justify-center items-center  md:gap-[20.17px] md:mx-0 absolute left-[25px]  md:-translate-x-[0%] md:left-[105px]'
                    ref={card1Ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={card1InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2}}
                >
                    <Image 
                        src={'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750668396/solveChallengeOne_t2eu0x.svg'}
                        alt='hello world'
                        width={184}
                        height={214}
                        className=' mx-auto md:mx-0'
                    />
                    <div className='w-full md:w-[632px] h-[230px]  md:h-full flex align-middle justify-center items-center md:items-start flex-col'>
                        <h2 className='text-[24px] text-text_blue font-semibold font-inter italic md:text-start text-center mb-5'>The Challenge Behind Every Recipe</h2>
                        <p className='md:text-[20px] font-inter text-text_blue'>
                            From poor texture to short shelf life, food brands face real <br className='md:flex hidden'/> product issues. Whether it’s dairy, beverages, or snacks — the <br className='md:flex hidden'/> problem is unique, and so is the solution it needs.
                        </p>
                    </div>
                </motion.div>
                {/* Connector for the solving challenges 1-2 */}

                <Image 
                    src={'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750676787/connector1-2_o6gj7j.svg'}
                    alt='hello world'
                    width={100}
                    height={100}
                    className='absolute top-[400px] lg:left-[270px] md:left-[320px] md:top-[243px] mx-auto md:mx-0 md:flex hidden'
                    />

                {/* Solving Challenge Number 2 */}
                <motion.div className='h-[500px] w-[90%] md:w-[816px] md:h-[214px] flex-col md:flex-row md:flex align-middle justify-around md:justify-center items-center  md:gap-[20.17px] mx-auto md:mx-0 absolute top-[500px] lg:left-[270px] md:left-[320px] md:top-[423px] md:-translate-x-[0%] left-[25px] -translate-x-[50%]'
                    ref={card2Ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={card2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2}}
                >
                    <Image 
                        src={'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750668396/solveChallengeTwo_jivb8b.svg'}
                        alt='hello world'
                        width={184}
                        height={214}
                        className=' mx-auto md:mx-0'
                    />
                    <div className='w-full md:w-[632px] h-[230px] md:h-full flex align-middle justify-center items-start md:items-start flex-col'>
                        <h2 className='text-[24px] text-text_blue font-semibold font-inter italic md:text-start text-center mb-5'>Crafted Solutions, Not Just Ingredients</h2>
                        <p className='md:text-[20px] font-inter text-text_blue'>
                           Brands come to us with their challenges. We study the issue, create or customize the right ingredient, and fine-tune it to work perfectly in their process. No one-size-fits-all — just science that fits.
                        </p>
                    </div>
                </motion.div>
                {/* Connector for the solving challenges 1-2 */}

                    <Image 
                    src={'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750677432/connector2-3_d5tasr.svg'}
                    alt='hello world'
                    width={100}
                    height={100}
                    className='absolute top-[400px] lg:left-[270px] md:left-[320px] md:top-[660px] mx-auto md:mx-0 md:flex hidden'
                    />

                {/* Solving Challenge Number 3 */}
                <motion.div className='h-[500px] w-[90%] md:w-[816px] md:h-[214px] flex-col md:flex-row md:flex align-middle justify-around md:justify-center items-center md:gap-[20.17px] mx-auto md:mx-0 absolute top-[1000px] md:left-[105px] md:top-[845px] md:-translate-x-[0%] left-[25px] -translate-x-[50%] md:translate-y-[0%] '
                    ref={card3Ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={card3InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2}}
                >
                    <Image 
                        src={'https://res.cloudinary.com/dipc3ow9z/image/upload/v1750673668/solveChallengeThree_ijzwkf.svg'}
                        alt='hello world'
                        width={184}
                        height={214}
                        className=' mx-auto md:mx-0'
                    />
                    <div className='w-full md:w-[632px] h-[230px] md:h-full flex align-middle justify-center items-start md:items-start flex-col'>
                            
                            <h2 className='text-[24px] text-text_blue font-semibold font-inter italic md:text-start text-center mb-5'>Results You Can Taste and Measure</h2>
                        <p className='md:text-[20px] font-inter text-text_blue'>
                           The result? better texture, longer life, better yield — and a product that performs better in the market. Better ingredients lead to better business.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default SolveIndustryStandard