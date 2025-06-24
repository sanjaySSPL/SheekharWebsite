'use client'
import React from 'react'
import {motion} from 'framer-motion'
function TestPage() {
  return (

    <div className='h-[600px] w-full relative'>


        <motion.div
            className="w-12 h-12 bg-red-500 absolute top-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 100 }}
            />


            <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className='h-[100px] w-[100px] bg-red-500 rounded-full absolute top-[200px]'
        />

        <motion.div
            initial={{opacity:0 , y:50}}
            whileInView={{opacity:1 , y:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}>

                Scroll-in Animation
        </motion.div>


    </div>
    )
}

export default TestPage