import React from 'react';
import VideoStreaming from '../assets/images/VideoStreaming.png';
import HomeBazaar from '../assets/images/HomeBazaar.png';
import ChitChat from '../assets/images/Chit-Chat.png';
import TaskManager from '../assets/images/TaskManager.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'VideoStreaming',
      image: VideoStreaming,
      techStack: ['React', 'NodeJS', 'ExpressJs', 'MongoDB'],
      description: 'Designed and developed a user-friendly video streaming platform allowing users to sign up and upload their content, fostering a vibrant community of creators and viewers.',
      githubLink: 'https://github.com/ms1835/VideoStreaming',
      liveDemoLink: 'https://videogram-y314.onrender.com/'
    },
    {
      name: 'Home Bazaar',
      image: HomeBazaar,
      techStack: ['React', 'NodeJS', 'ExpressJS', 'Socket.io', 'MongoDB'],
      description: 'Developed a comprehensive real estate management portal facilitating seamless interaction with authentication and authorization mechanisms, safeguarding user data and maintaining privacy.',
      githubLink: 'https://github.com/ms1835/RealEstate',
      liveDemoLink: 'https://homebazaar.onrender.com/'
    },
    {
      name: 'Chit-Chat',
      image: ChitChat,
      techStack: ['React', 'MongoDB', 'Socket.io', 'Tailwind'],
      description: 'developed a dynamic chat application with robust, real-time messaging capabilities, enabling users to connect and communicate instantly with others on the platform. The project ensures seamless and uninterrupted communication, fostering efficient and immediate interactions between users.',
      githubLink: 'https://github.com/ms1835/ChatBot',
      liveDemoLink: 'https://chatbot-m2ax.onrender.com/'
    },
    {
      name: 'TaskMaster Pro',
      image: TaskManager,
      techStack: ['React Native', 'Expo', 'Redux', 'NodeJS', 'ExpressJS', 'Cloudianary', 'MongoDB'],
      description: 'TaskMaster Pro is a comprehensive task management app that allows users to seamlessly create, manage, and complete their to-dos. With features like account creation, password updates, profile management via OTP, and intuitive task organization.',
      githubLink: 'https://github.com/ms1835/Todo-app',
      liveDemoLink: 'https://expo.dev/accounts/ms1835/projects/taskmaster/builds/a9aeb7fa-cbd6-4742-9907-ae91d1430621',
      isMobile: true
    }
    // Add more projects as needed...
  ];

  return (
    <section id='projects' className="bg-gradient-to-tr to-blue-400 from-green-500 py-16">
      <div className="container-fluid mx-auto flex flex-col max-w-[900px] justify-center">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">Projects</h2>
        <p className="text-lg mb-8 text-center">
          Here are a list of projects that I have worked upon.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-2 px-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-tr to-gray-600 from-gray-800 p-6 rounded-lg shadow-lg">
              <a href={project.image} target='_blank' rel="noopener noreferrer">
                <img src={project.image} alt={project.name} className="w-full min-h-[150px] max-h-[200px] object-contain mb-6 rounded-lg" />
              </a>
              <div className="flex flex-wrap mb-4">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs mr-2 mb-2">{tech}</div>
                ))}
              </div>
              <h3 className="text-gray-200 text-xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-col sm:flex-row justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex bg-white text-blue-900 py-2 px-4 rounded-full text-md transition ease-in-out duration-300 hover:bg-blue-100 justify-center mb-2"
                  >
                    GitHub Link
                </a>
                <a 
                  href={project.liveDemoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex bg-white text-blue-900 py-2 px-4 rounded-full text-md transition ease-in-out duration-300 hover:bg-blue-100 justify-center mb-2"
                  >{project.isMobile ? "Download APK" : "Live Demo"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
