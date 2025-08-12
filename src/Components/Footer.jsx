import React from 'react';
import { Link } from 'react-router';
import { IoFastFood } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
        {/* Logo & Tagline */}
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <IoFastFood className="text-3xl" />
            TheFoodCycle
          </div>
          <p className="text-gray-400">
            Bridging surplus food with those in need. One meal at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/available-foods" className="hover:text-white transition">Available Foods</Link></li>
            <li><Link to="/add-food" className="hover:text-white transition">Donate Food</Link></li>
            <li><Link to="/my-foods" className="hover:text-white transition">My Foods</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">Email: thefoodcycle.com</p>
          <p className="text-gray-400 mb-4">Phone: +880 123 456 789</p>
          <div className="flex space-x-4 text-gray-300">
            <a href="https://www.facebook.com/share/1Aev5wQFd5/" target="_blank"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="https://x.com/tasniachy22?t=o4v9fknuoed1w3zHnF6Z0A&s=09" target='_blank'><FaTwitter className="hover:text-white transition" /></a>
            <a href="https://www.instagram.com/tasnia_chyyy?igsh=cmszemYxNXpmd3pn" target='_blank'><FaInstagram className="hover:text-white transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} TheFoodCycle — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
