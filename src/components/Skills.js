import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="bg-gradient-to-tr to-blue-400 from-green-500 py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <p className="text-lg mb-8 text-center">
          Here are some of the skills I have aquired during my working experience.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12">
          {/* Frontend */}
          <div className="bg-gradient-to-tr to-gray-600 from-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-indigo-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Frontend</h3>
            <div className="flex flex-wrap justify-center">
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} className='inline w-8 h-8 pr-1' alt=""></img>
                </span>
                <span>React</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>HTML</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Javascript</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Redux</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>CSS</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Bootstrap</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Tailwind CSS</span>
              </div>
              {/* Add more technologies as needed */}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gradient-to-tr to-gray-600 from-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-indigo-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Backend</h3>
            <div className="flex flex-wrap justify-center">
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://nodejs.org/static/images/logo.svg"} className='inline w-8 h-8 pr-1 text-tean-600' alt=""></img>
                </span>
                <span>Node Js</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Express Js</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Java</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Python</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>MySQL</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>MongoDB</span>
              </div>
              {/* Add more technologies as needed */}
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-gradient-to-tr to-gray-600 from-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-indigo-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Mobile</h3>
            <div className="flex flex-wrap justify-center">
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://reactnative.dev/img/header_logo.svg"} className='inline w-8 h-8 pr-1 text-tean-600' alt=""></img>
                </span>
                <span>React Native</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://cordova.apache.org/static/img/cordova_bot.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Cordova</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Android Studio</span>
              </div>
              
              {/* Add more technologies as needed */}
            </div>
          </div>

          {/* Others */}
          <div className="bg-gradient-to-tr to-gray-600 from-gray-800 p-6 rounded-lg shadow-lg text-center border-2 border-indigo-300">
            <h3 className="text-2xl font-bold mb-4 text-white">Others</h3>
            <div className="flex flex-wrap justify-center">
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"} className='inline w-8 h-8 pr-1 text-tean-600' alt=""></img>
                </span>
                <span>Linux</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Git</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Github</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Docker</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>VS Code</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Intellij</span>
              </div>
              <div className="flex mb-2 mr-2 bg-blue-100 hover:bg-blue-200 text-black-400 font-semibold px-2 border border-green-400 rounded-lg shadow-lg items-center">
                <span>
                  <img src={"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"} className='inline w-6 h-6 pr-1' alt=""></img>
                </span>
                <span>Postman</span>
              </div>
              {/* Add more technologies as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
