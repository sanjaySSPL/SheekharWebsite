import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus ' },
  { label: 'Ingredients', href: '/ingredients' },
  { label: 'Services', href: '/services' },
  { label: 'Career', href: '/career' },
];

const products = [
  { label: 'dari products', href: '/products/dairy-ingredients' },
  { label: 'dairy based dessert', href: '/products/dessert-ingredients' },
  { label: 'advanced stablilisers', href: '/products/stabilizers' },
  { label: 'sauces and snacks', href: '/products/sauces-and-snacks' },
  { label: 'premixes', href: '/products/premixes' },
  { label: 'plating agents', href: '/products/plating-agents' },
];

const industry = [
  { label: 'Dairy', href: '#' },
  { label: 'Ice Cream', href: '#' },
  { label: 'Bakery', href: '#' },
  { label: 'Processed Foods', href: '#' },
  { label: 'Bevergaes', href: '#' },
  { label: 'Snacks', href: '#' },
  { label: 'More', href: '#' },
];

function Footer() {
  return (
    <footer className="w-full h-fit md:h-[497px] bg-[#1E164B] flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:flex-row md:justify-between w-full max-w-7xl mx-auto px-6 pt-16 pb-8 md:gap-0">
        {/* Quick Links */}
        <div className="min-w-[140px]">
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-[20px]">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-white text-base hover:text-orange-400 transition-colors hover:underline`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Industry */}
        <div className="min-w-[140px]">
          <h3 className="text-white text-lg font-bold mb-4">Industry</h3>
          <ul className="space-y-[20px]">
            {industry.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white text-base hover:text-orange-400 transition-colors hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Products */}
        <div className="min-w-[140px] col-span-1 md:col-auto">
          <h3 className="text-white text-lg font-bold mb-4">Products</h3>
          <ul className="space-y-[20px]">
            {products.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white text-base hover:text-orange-400 transition-colors hover:underline hover:underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social (on mobile, span both columns at the bottom) */}
        <div className="col-span-2 flex flex-col items-start md:items-end mt-2 md:mt-0">
          <h3 className="text-white text-lg font-bold mb-4">Follow Us On</h3>
          <div className="flex gap-4 mb-2 md:mb-0">
            <a href="#" className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-[#1E164B] transition-colors"><FaFacebookF size={22} /></a>
            <a href="#" className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-[#1E164B] transition-colors"><FaInstagram size={22} /></a>
            <a href="#" className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-[#1E164B] transition-colors"><FaXTwitter size={22} /></a>
            <a href="#" className="rounded-full border border-white p-3 text-white hover:bg-white hover:text-[#1E164B] transition-colors"><FaLinkedinIn size={22} /></a>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/20 w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <span className="text-white text-sm text-center md:text-left">Copyright © {new Date().getFullYear()} <span className="font-bold">Sheekharr Starch Ingredients Pvt. Ltd.</span> All Rights Reserved.</span>
        <a href="#" className="text-white text-sm mt-2 md:mt-0 hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;