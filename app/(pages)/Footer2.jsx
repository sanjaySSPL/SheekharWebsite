"use client";
import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Ingredients", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Services", href: "/out-service" },
  { label: "Career", href: "/career" },
];

const legalLinks = [
  { label: "Dairy Products", href: "/products/dairy-ingredients" },
  { label: "Dairy Based Dessert", href: "/products/dessert-ingredients" },
  { label: "Advanced Stabilizers", href: "/products/advance-stabilizers" },
  { label: "Sauces & Snacks", href: "/products/sauces-and-snacks" },
  { label: "Premixes", href: "/products/premixes" },
  { label: "Plating Agent", href: "/products/plating-agent" },
];

function Footer2() {
  return (
    <footer className="w-full bg-blue-100/40 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Logo and Company Description */}
          <div className="md:col-span-1 py-10">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-10 h-10 bg-[#1D4E7A] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div> */}
              <Image
                src="https://res.cloudinary.com/dipc3ow9z/image/upload/v1752209735/sheekharr_logo_cbulsm.jpg"
                alt="Neyohm Logo"
                width={160}
                height={160}
                className="rounded-sm"
              />
              <div>
                <h1 className="text-[#1D4E7A] font-bold text-xl">NEYOHM</h1>
                <p className="text-gray-600 text-xs">Innovations</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Neyohm we simplify the mode of ingredients by providing 24/7
              accessibility and all round security.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col items-start md:ml-[120px] md:w-auto w-fit">
              <h3 className="text-gray-800 font-bold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[#1D4E7A] hover:font-semibold transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-start md:ml-20 md:w-auto w-fit">
              <h3 className="text-gray-800 font-bold text-lg mb-4">
                Ingredients
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[#1D4E7A] hover:font-semibold transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Contact */}
          {/* <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">Support Contact</h3>
            <ul className="space-y-2">
              {supportContact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-[#1D4E7A] transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Social Icons */}
        <div className="mt-4 md:h-[30px] pt-4 border-t border-gray-200">
          <div className="flex justify-center md:justify-between space-x-4 ">
            <div className=" flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com/"
                className="p-2 text-gray-600 hover:text-[#1D4E7A] hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/"
                className="p-2 text-gray-600 hover:text-[#1D4E7A] hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/neyohm-ingredients-pvt-ltd"
                className="p-2 text-gray-600 hover:text-[#1D4E7A] hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <div className="">
              <div className="text-gray-600 text-sm">
                Copyright © {new Date().getFullYear()} Neyohm Ingredients
                Pvt Ltd. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
