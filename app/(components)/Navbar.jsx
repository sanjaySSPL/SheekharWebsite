'use client'
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 
    <nav className="bg-black/50 shadow-lg h-[60px] px-4 py-4 w-full fixed top-0 z-50 backdrop-blur-sm">
      <div className=" mx-auto ">
        
        <div className="flex justify-between">
          {/* Logo can go here */}
          <h1 className='my-auto '>Logo</h1>
          
          {/* Primary Navbar items */}
          <div className="hidden h-full md:flex items-center space-x-18 gap-[16px] -mt-2">
        <Link href="/"><span className="py-2 px-2 text-white text-[20px] tracking-wider  hover:text-medium_blue transition duration-300 cursor-pointer">Home</span></Link>
        <Link href="/aboutus"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">About Us</span></Link>
        <Link href="/products"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">Products</span></Link>
        <Link href="/our-service"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">Services</span></Link>
        <Link href="/career"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">Career</span></Link>
        <Link href="/contact"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">Contact</span></Link>
        <Button button_link='https://google.com' customPaddingClass='py-[4px] px-[18.5px] tracking-widest mx-[20px]'>Talk to Experts</Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              {/* Hamburger Icon */}
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-[100dvw] absolute bg-white z-50`}>
      <Link href="/"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Home</div></Link>
      <Link href="/about"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">About Us</div></Link>
      <Link href="/products"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Products</div></Link>
      <Link href="/our-service"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Services</div></Link>
      <Link href="/career"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Career</div></Link>
      <Link href="/contact"><div className="block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer">Contact</div></Link>
      <Button button_link='https://google.com' customPaddingClass='py-[10px] px-[10px] w-[90dvw]' >Hello world</Button>
      {/* <Link href="/talk-to-experts"><div className="block text-sm px-2 py-4 text-gray-700 font-semibold cursor-pointer">Talk to Experts</div></Link> */}
      </div>
    </nav>
  );
}