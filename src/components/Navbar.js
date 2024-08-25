import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold">MAYANK SINGH</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-white" onClick={() => scrollToSection('about')}>About</button>
          <button className="text-white" onClick={() => scrollToSection('experience')}>Experience</button>
          <button className="text-white" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="text-white" onClick={() => scrollToSection('skills')}>Skills</button>
          <button className="text-white" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden py-2 mt-4">
          <button className="w-full block text-white px-4 py-2 hover:bg-white hover:text-black rounded-md" onClick={() => {toggleMenu(); scrollToSection('about')}}>About</button>
          <button className="w-full block text-white px-4 py-2 hover:bg-white hover:text-black rounded-md" onClick={() => {toggleMenu(); scrollToSection('experience')}}>Experience</button>
          <button className="w-full block text-white px-4 py-2 hover:bg-white hover:text-black rounded-md" onClick={() => {toggleMenu(); scrollToSection('projects')}}>Projects</button>
          <button className="w-full block text-white px-4 py-2 hover:bg-white hover:text-black rounded-md" onClick={() => {toggleMenu(); scrollToSection('skills')}}>Skills</button>
          <button className="w-full block text-white px-4 py-2 hover:bg-white hover:text-black rounded-md" onClick={() => {toggleMenu(); scrollToSection('contact')}}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
