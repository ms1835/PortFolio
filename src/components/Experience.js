import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'NimbleWork',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kXBfiTCsYzt0sC555qbw26ppiqWrG-sfF1lVViNLKHFl3QuMrY9o&usqp=CAE&s',
      position: 'Software Engineer',
      description: [
        "Played a pivotal role in the development and seamless integration of new features for Nimblework's product management tool.",
        "Employed a meticulous test-driven approach to swiftly address any defects, ensuring the robustness and reliability of the product.",
        "Demonstrated proficiency in writing comprehensive service tests for each component developed, guaranteeing optimal performance and functionality."
        ],
      tenure: 'July 2023 - Present',
      techStack: ['React', 'Redux', 'Java', 'Javascript', 'SCSS', 'MySQL', 'MongoDB']
    },
    {
      company: 'NimbleWork',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kXBfiTCsYzt0sC555qbw26ppiqWrG-sfF1lVViNLKHFl3QuMrY9o&usqp=CAE&s',
      position: 'Full Stack Developer Intern',
      description: [
        "Spearheaded the development of Android applications using React Native and Cordova, enhancing the functionality of Nimblework's product suite.",
        "Took charge of introducing new features to the Android applications, aligning them seamlessly with the established web application.",
        "Proactively addressed and resolved defects to ensure a robust and reliable user experience, maintaining high standards of quality and performance.",
        "Applied Test-Driven Development methodology in feature development, guaranteeing that every component met stringent testing standards for optimal functionality."
      ],
      tenure: 'Jan 2023 - Jun 2023',
      techStack: ['React Native', 'React', 'JavaScript', 'Redux', 'Jest']
    }
  ];

  return (
    <section id='experience' className="bg-gradient-to-tr to-blue-400 from-green-500 bg-blue-900 text-white py-16">
      <div className="container-fluid flex flex-col max-w-[800px] justify-center mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
        <p className="text-lg mb-8 text-center">
          My work journey as a software engineer.
          </p>
        <div className="grid grid-cols-1 gap-8 m-2 px-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-tr to-gray-600 from-gray-800 px-8 py-12 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img src={exp.image} alt={exp.company} className="w-8 h-8 mr-3" />
                <h3 className="text-xl text-gray-100 font-bold">{exp.company}</h3>
              </div>
              <p className="text-gray-300 mb-1">{exp.position}</p>
              <p className="text-gray-500 mb-4 text-sm">{exp.tenure}</p>
              <ul className="list-disc pl-6 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-300">{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {exp.techStack.map((tech, key) => (
                  <div key={key} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs mr-2 mb-2">{tech}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
