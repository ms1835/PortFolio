import React from 'react';
import profile from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id='about' className="bg-gradient-to-tr to-blue-400 from-green-500 bg-blue-900 text-white py-48">
      <div className="container-fluid px-4 md:px-16 flex flex-col md:flex-row items-center justify-around">
        <div className="max-w-[450px] mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Hello, I'm Mayank Singh
          </h2>
          <p className="text-lg mb-8 text-center">
          Passionate Software Engineer with a flair for crafting elegant and efficient solutions. 
          Dedicated to pushing the boundaries of technology to create impactful applications and systems.
          </p>
          <div>
            <a 
              href='https://drive.google.com/file/d/1T4CqMxLpPvLt5Rxu8-POQRIqyj2kvZsI/view?usp=sharing'
              target="_blank"
              className="flex bg-white text-blue-900 font-semibold py-2 px-6 rounded-full text-lg transition ease-in-out duration-300 hover:bg-blue-100 justify-center"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={profile}
            alt="Your Name"
            className="w-full object-contain w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 rounded-full float-right border border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
