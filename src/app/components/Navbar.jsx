"use client"; // Add this line to mark the component as a client component

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 text-lg font-extrabold">
          <a href="#">SANJANA</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a 
            href="#" 
            className="text-white relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-white relative group"
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-white relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-white relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Updated icons */}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-end"> {/* Aligning menu items to the right */}
            <a 
              href="#" 
              className="block text-white relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#" 
              className="block text-white relative group"
            >
              About
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#" 
              className="block text-white relative group"
            >
              Projects 
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a 
              href="#" 
              className="block text-white relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;