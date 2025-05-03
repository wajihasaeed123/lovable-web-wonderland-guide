
import React from 'react';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
