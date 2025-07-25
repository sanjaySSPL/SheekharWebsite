'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import { RxHamburgerMenu } from 'react-icons/rx'
import { GiHamburgerMenu } from "react-icons/gi";

import Button from './Button'
import { useAnimation } from './AnimationContext';

function Navbar1() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShrunk , setIsShrunk] = useState(false);
    const { showNavbarName } = useAnimation();

    useEffect(()=>{
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Animation variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1 second delay between each child
        delayChildren: 0.2,   // 0.2 second delay before first child starts
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,  // Start 20px above final position
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,    // Move to final position
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  return (
    <motion.nav className='h-[100px] w-[100dvw] bg-white  fixed top-0 z-50 flex align-middle justify-center items-center'
    animate={{ height: isShrunk ? 75 : 100 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }} >
    <div className=" mx-auto w-full">
        
        <div className="flex justify-between align-middle items-center">
          {/* Logo can go here */}
          {/* <h1 className='my-auto '>Logo</h1> */}
          {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
          <Link href="/" className='flex items-center justify-center gap-[20px] -mt-1'> 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
            <Image src="/logo_only_no_background.png" alt="logo" width={50} height={50} />
          </motion.div>
        
            {showNavbarName && (
              <motion.span layoutId="brand-name" className="text-text_blue text-[20px] tracking-wider font-semibold">
                Sheekharr Ingredients Pvt Ltd
              </motion.span>
            )}
    
            </Link>
          
          {/* Primary Navbar items */}
          <motion.div 
            className="hidden h-full md:flex items-center space-x-18 gap-[16px] -mt-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/">
                <span className="relative group py-2 px-2 text-text_blue text-[20px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer">
                  Home
                  {/* <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span> */}
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/aboutus">
                <span className="relative group py-4 px-2 text-text_blue text-[20px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer">
                  About Us
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            {/* Products Dropdown */}
            <motion.div className="relative group" variants={itemVariants}>
              <span className="relative group py-4 px-2 text-text_blue text-[20px] tracking-widest transition duration-300 cursor-pointer group-hover:text-medium_blue group-hover:bg-white group-focus:bg-white rounded">
                Ingredients
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </span>
              {/* Dropdown menu */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50 p-6 flex flex-col">
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <Link href="/products"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">All Products</span></Link>
                  <Link href="/products/advance-stabilizers"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Advanced Stabilizers</span></Link>
                  <Link href="/products#dairy-products"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Best Sellers</span></Link>
                  <Link href="/products/dairy-ingredients"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Dairy Products</span></Link>
                  <Link href="/products/premixes"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Premixes</span></Link>
                  <Link href="/products/dessert-ingredients"><span className="block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800">Dairy Based Dessert</span></Link>
                  <Link href="/products/plating-agents"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Plating Agents</span></Link>
                  {/* <span className="block px-2 py-2 rounded text-gray-400 cursor-not-allowed">Menu item</span> */}
                  <Link href="/products/sauces-and-snacks"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Sauces & Snacks</span></Link>
                  {/* <span className="block px-2 py-2 rounded text-gray-400 cursor-not-allowed">Menu item</span> */}
                </div>
              </div>
            </motion.div>
            {/* End Products Dropdown */}
            <motion.div variants={itemVariants}>
              <Link href="/our-service">
                <span className="relative group py-4 px-2 text-text_blue text-[20px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer">
                  Services
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/career">
                <span className="relative group py-4 px-2 text-text_blue text-[20px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer">
                  Career
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <span className="relative group py-4 px-2 text-text_blue text-[20px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer">
                  Contact
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button button_link='/contact' customPaddingClass='py-[4px] px-[18.5px] tracking-widest mx-[20px]'>Talk to Experts</Button>
            </motion.div>
          </motion.div>

{/* Make allign ment for baove only */}

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center mr-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              name='mobile-menu-button' 
              className="outline-none mobile-menu-button scale-150" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {/* Hamburger Icon */}
              {/* <RxHamburgerMenu  classname='bg-white '/> */}
              <GiHamburgerMenu color="white" size={18}/>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        id="mobile-menu"
        className={`md:hidden w-[100dvw] absolute top-[100px] bg-gray-100 z-50 pb-10`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        aria-hidden={!isOpen}
      >
        <div className=" w-fit  mx-auto">
        <motion.div variants={mobileItemVariants}>
          <Link href="/"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Home</div></Link>
        </motion.div>
        <motion.div variants={mobileItemVariants}>
          <Link href="/about"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">About Us</div></Link>
        </motion.div>
        <motion.div variants={mobileItemVariants}>
          <Link href="/products"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Products</div></Link>
        </motion.div>
        <motion.div variants={mobileItemVariants}>
          <Link href="/our-service"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Services</div></Link>
        </motion.div>
        <motion.div variants={mobileItemVariants}>
          <Link href="/career"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Career</div></Link>
        </motion.div>
        <motion.div variants={mobileItemVariants}>
          <Link href="/contact"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Contact</div></Link>
        </motion.div>
        </div>
        <motion.div variants={mobileItemVariants}>
          <Button button_link='/contact' customPaddingClass='py-[10px] px-[10px] w-fit mx-auto' >Contact Expert</Button>
        </motion.div>
        {/* <Link href="/talk-to-experts"><div className="block text-sm px-2 py-4 text-gray-700 font-semibold cursor-pointer">Talk to Experts</div></Link> */}
      </motion.div>    
    </motion.nav>
  )
}

export default Navbar1