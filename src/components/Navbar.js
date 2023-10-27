import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Your Name</div>
          <ul className="flex space-x-4">
            <li className="cursor-pointer"><button onClick={() => scrollToSection('home')} className="text-white">Home</button></li>
            <li className="cursor-pointer"><button onClick={() => scrollToSection('experience')} className="text-white">Experience</button></li>
            <li className="cursor-pointer"><button onClick={() => scrollToSection('projects')} className="text-white">Projects</button></li>
            <li className="cursor-pointer"><button onClick={() => scrollToSection('tech-stack')} className="text-white">Tech Stack</button></li>
            <li className="cursor-pointer"><button onClick={() => scrollToSection('contact')} className="text-white">Contact</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
