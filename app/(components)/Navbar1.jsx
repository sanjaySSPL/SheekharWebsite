"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useAnimation } from "./AnimationContext";
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


function Navbar1({ setShowExportOverlay }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const { showNavbarName } = useAnimation();
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1 second delay between each child
        delayChildren: 0.2, // 0.2 second delay before first child starts
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Start 20px above final position
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0, // Move to final position
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.nav
      className="h-[100px] w-[100dvw] bg-white  fixed top-0 z-50 flex align-middle justify-center items-center"
      animate={{ height: isShrunk ? 75 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className=" mx-auto w-full">
        <div className="flex justify-between align-middle items-center">
          {/* Logo can go here */}
          {/* <h1 className='my-auto '>Logo</h1> */}
          {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
          <Link
            href="/"
            className="flex items-center justify-center gap-[20px] -mt-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/logo_only_no_background.png"
                alt="logo"
                width={50}
                height={50}
              />
            </motion.div>

            {showNavbarName && (
              <motion.span
                layoutId="brand-name"
                className="text-text_blue text-[20px] tracking-wider font-semibold"
              >
                Sheekharr Ingredients Pvt Ltd
              </motion.span>
            )}
          </Link>

          {/* Primary Navbar items */}
          <motion.div
            className="hidden h-full md:flex items-center space-x-18 gap-[16px] -mt-[10px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/">
                <span
                  className={`relative group py-4 px-2 text-[18px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer
                    ${pathname === "/" ? "text-blue-600" : "text-text_blue"}`}
                >
                  Home
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                    ${pathname === "/" ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/aboutus">
                <span className={`relative group py-4 px-2 text-[18px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer
                  ${pathname === "/aboutus" ? "text-blue-600" : "text-text_blue"}`}>
                  About Us
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                    ${pathname === "/aboutus" ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
                </span>
              </Link>
            </motion.div>
            {/* Products Dropdown */}
            <motion.div className="relative group" variants={itemVariants}>
              <span className={`relative group py-4 px-2 text-[18px] tracking-widest transition duration-300 cursor-pointer group-hover:text-medium_blue group-hover:bg-white group-focus:bg-white rounded
                ${pathname.startsWith("/products") ? "text-blue-600" : "text-text_blue"}`}>
                Ingredients
                <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                  ${pathname.startsWith("/products") ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
              </span>
              {/* Dropdown menu */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50 p-6 flex flex-col">
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <Link href="/products">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      All Products
                    </span>
                  </Link>
                  <Link href="/products/advance-stabilizers">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/advance-stabilizers" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Advanced Stabilizers
                    </span>
                  </Link>
                  <Link href="/products#dairy-products">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      (pathname === "/products" && typeof window !== "undefined" && window.location.hash === "#dairy-products") ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Best Sellers
                    </span>
                  </Link>
                  <Link href="/products/sauces-and-snacks">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/sauces-and-snacks" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Sauces & Snacks
                    </span>
                  </Link>
                  <Link href="/products/dessert-ingredients">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/dessert-ingredients" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Dairy Based Dessert
                    </span>
                  </Link>
                  <Link href="/products/premixes">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/premixes" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Premixes
                    </span>
                  </Link>
                  <Link href="/products/dairy-ingredients">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/dairy-ingredients" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Dairy Products
                    </span>
                  </Link>
                  <Link href="/products/plating-agents">
                    <span className={`block px-2 py-2 rounded hover:bg-purple-100 cursor-pointer text-gray-800 ${
                      pathname === "/products/plating-agents" ? "bg-purple-100 font-semibold" : ""
                    }`}>
                      Plating Agents
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* End Products Dropdown */}
            <motion.div variants={itemVariants}>
              <Link href="/our-service">
                <span className={`relative group py-4 px-2 text-[18px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer
                  ${pathname === "/our-service" ? "text-blue-600" : "text-text_blue"}`}>
                  Services
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                    ${pathname === "/our-service" ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/career">
                <span className={`relative group py-4 px-2 text-[18px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer
                  ${pathname === "/career" ? "text-blue-600" : "text-text_blue"}`}>
                  Career
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                    ${pathname === "/career" ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <span className={`relative group py-4 px-2 text-[18px] tracking-wider hover:text-medium_blue transition duration-300 cursor-pointer
                  ${pathname === "/contact" ? "text-blue-600" : "text-text_blue"}`}>
                  Contact
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-300
                    ${pathname === "/contact" ? "w-full bg-gradient-to-r from-blue-400 to-blue-600" : "w-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full"}`}></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <button
                button_link="#"
                customPaddingClass="py-[4px] px-[18.5px] tracking-widest mx-[20px]"
                onClick={() => setShowExportOverlay(true)}
                
                
                className="bg-blue-500 text-white text-[18px] px-4 py-2 rounded-md mr-4"
              >
                Talk to Experts
              </button>
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
              name="mobile-menu-button"
              className="outline-none mobile-menu-button scale-150"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {/* Hamburger Icon */}
              {/* <RxHamburgerMenu  classname='bg-white '/> */}
              <GiHamburgerMenu color="black" size={14} className="-mt-2"/>
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
            <Link href="/">
              <div className={`block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer
                ${pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>
                Home
              </div>
            </Link>
          </motion.div>
          <motion.div variants={mobileItemVariants}>
            <Link href="/aboutus">
              <div className={`block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer
                ${pathname === "/aboutus" ? "text-blue-600 font-semibold" : ""}`}>
                About Us
              </div>
            </Link>
          </motion.div>
          <motion.div variants={mobileItemVariants}>
            <div
              className="flex items-center justify-between px-2 py-4 cursor-pointer hover:text-medium_blue transition duration-300"
              onClick={() => setIsProductsOpen((prev) => !prev)}
            >
              <span className={`${pathname.startsWith("/products") ? "text-blue-600 font-semibold" : ""}`}>
                Products
              </span>
              {isProductsOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </div>
            {isProductsOpen && (
              <div className="pl-6 flex flex-col gap-1">
                <Link href="/products">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>All Products</span>
                </Link>
                <Link href="/products/advance-stabilizers">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/advance-stabilizers" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Advanced Stabilizers</span>
                </Link>
                <Link href="/products#dairy-products">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    (pathname === "/products" && typeof window !== "undefined" && window.location.hash === "#dairy-products") ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Best Sellers</span>
                </Link>
                <Link href="/products/sauces-and-snacks">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/sauces-and-snacks" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Sauces & Snacks</span>
                </Link>
                <Link href="/products/dessert-ingredients">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/dessert-ingredients" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Dairy Based Dessert</span>
                </Link>
                <Link href="/products/premixes">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/premixes" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Premixes</span>
                </Link>
                <Link href="/products/dairy-ingredients">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/dairy-ingredients" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Dairy Products</span>
                </Link>
                <Link href="/products/plating-agents">
                  <span className={`block py-2 text-sm hover:text-blue-500 ${
                    pathname === "/products/plating-agents" ? "text-blue-600 font-semibold bg-blue-50 rounded" : ""
                  }`}>Plating Agents</span>
                </Link>
              </div>
            )}
          </motion.div>
          <motion.div variants={mobileItemVariants}>
            <Link href="/our-service">
              <div className={`block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer
                ${pathname === "/our-service" ? "text-blue-600 font-semibold" : ""}`}>
                Services
              </div>
            </Link>
          </motion.div>
          <motion.div variants={mobileItemVariants}>
            <Link href="/career">
              <div className={`block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer
                ${pathname === "/career" ? "text-blue-600 font-semibold" : ""}`}>
                Career
              </div>
            </Link>
          </motion.div>
          <motion.div variants={mobileItemVariants}>
            <Link href="/contact">
              <div className={`block text-sm px-2 py-4 hover:text-medium_blue transition duration-300 cursor-pointer
                ${pathname === "/contact" ? "text-blue-600 font-semibold" : ""}`}>
                Contact
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div variants={mobileItemVariants}>
          <Button
            button_link="/contact"
            customPaddingClass="py-[10px] px-[10px] w-fit mx-auto"
          >
            Contact Expert
          </Button>
        </motion.div>
        {/* <Link href="/talk-to-experts"><div className="block text-sm px-2 py-4 text-gray-700 font-semibold cursor-pointer">Talk to Experts</div></Link> */}
      </motion.div>

      {/* Overlay Modal */}
     
    </motion.nav>
  );
}

Navbar1.propTypes = {
  setShowExportOverlay: PropTypes.func.isRequired,
};

export default Navbar1;
