'use client'
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 
    <nav className="bg-black/50 shadow-lg h-[60px] px-4 py-4 w-full fixed top-0 z-50 backdrop-blur-sm">
      <div className=" mx-auto ">
        
        <div className="flex justify-between">
          {/* Logo can go here */}
          {/* <h1 className='my-auto '>Logo</h1> */}
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          
          {/* Primary Navbar items */}
          <div className="hidden h-full md:flex items-center space-x-18 gap-[16px] -mt-2">
        <Link href="/"><span className="py-2 px-2 text-white text-[20px] tracking-wider  hover:text-medium_blue transition duration-300 cursor-pointer">Home</span></Link>
        <Link href="/aboutus"><span className="py-4 px-2 text-white text-[20px] tracking-wider font- hover:text-medium_blue transition duration-300 cursor-pointer">About Us</span></Link>
        {/* Products Dropdown */}
        <div className="relative group">
          <span className="py-4 px-2 text-white text-[20px] tracking-wider hover:font-semibold hover:italic transition duration-300 cursor-pointer group-hover:text-medium_blue group-hover:bg-white group-hover:font-semibold group-hover:italic group-focus:bg-white group-focus:font-semibold group-focus:italic rounded">
            Products
          </span>
          {/* Dropdown menu */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50 p-6 flex flex-col">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link href="/products/dairy-ingredients"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Dairy Ingredients</span></Link>
              <Link href="/products/premixes"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Premixes</span></Link>
              <Link href="/products/dessert-ingredients"><span className="block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800">Dessert Ingredients</span></Link>
              <Link href="/products/plating-agents"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Plating Agents</span></Link>
              <Link href="/products/stabilizers"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">Stabilizers</span></Link>
              <span className="block px-2 py-2 rounded text-gray-400 cursor-not-allowed">Menu item</span>
              <Link href="/products/sauces-and-snacks"><span className="block px-2 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-800">sauces and snacks</span></Link>
              <span className="block px-2 py-2 rounded text-gray-400 cursor-not-allowed">Menu item</span>
            </div>
          </div>
        </div>
        {/* End Products Dropdown */}
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