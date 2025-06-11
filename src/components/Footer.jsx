import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl font-bold font-[Arial] mb-3">ToothCare</h3>
          <p className="text-gray-400 text-sm">
            ToothCare is your trusted partner in dental health. From preventive care to smile makeovers, we bring expertise with compassion.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold font-[Arial] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold font-[Arial] mb-4">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>01 LandMark, Silvassa, DNH, India</li>
            <li>+91 3876543210</li>
            <li>appointment@toothcare.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold font-[Arial] mb-4">Follow Us</h4>
          <div className="flex gap-2">
            <a href="#" className="hover:text-blue-500 text-sm"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 text-sm"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 text-sm"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 text-sm"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ToothCare Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
