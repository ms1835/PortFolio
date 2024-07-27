import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3 m-6 mb-6 md:mb-0 text-center">
          <h3 className="text-2xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 m-6">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 m-6 mb-6 md:mb-0 text-center">
          <h3 className="text-2xl font-bold mb-4">Social Media</h3>
          <ul className="space-y-2 m-6">
          <li>
              <img className='inline h-4 w-4 mr-2' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""></img>
              <a href="https://github.com/ms1835" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
            </li>
            <li>
              <img className='inline h-4 w-4 mr-2' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt=""></img>
              <a href="https://www.linkedin.com/in/mayank-singh-3a6379128/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
            </li>
            <li>
              <img className='inline h-4 w-4 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/120px-X_logo_2023.svg.png" alt=""></img>
              <a href="https://twitter.com/MayankS86503220" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
            </li>
            <li>
              <img className='inline h-4 w-4 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png" alt=""></img>
              <a href="https://www.instagram.com/mayank005_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 Mayank Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
