import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="bg-blue-200 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-blue-800 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-white">Project Title</h2>
    <p className="text-white mb-4">Project description...</p>
    <a href="#" className="text-blue-500 hover:text-blue-400">View Project</a>
  </div>
  {/* Add more project cards */}
</div>

      </div>
    </section>
  );
}

export default Projects;
