import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-900">TOOTHCARE</Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-slate-900">Home</Link></li>
          <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
          <li><Link to="/about" className="hover:text-slate-900">About</Link></li>
          <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-slate-900 text-white px-5 py-3 hover:bg-slate-700 transition"
        >
          MAKE AN APPOINTMENT
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={toggleMenu} className="text-slate-900">Home</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className="text-slate-900">Services</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="text-slate-900">About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="text-slate-900">Contact</Link></li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block bg-slate-900 text-white text-center px-4 py-2 hover:bg-slate-700 transition"
              >
                MAKE AN APPOINTMENT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
