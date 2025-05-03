
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube } from 'lucide-react';
import ProjectDialog from './ProjectDialog';
import { ProjectType } from './types';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="project-card overflow-hidden flex flex-col h-full">
      <div className="h-[320px] md:h-48 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-portfolio-purple/50">📱</span>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-portfolio-blue-dark">{project.title}</CardTitle>
        <CardDescription className="text-portfolio-gray">
          {project.technologies.slice(0, 3).join(" • ")}
          {project.technologies.length > 3 && " • ..."}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="mb-4">{project.description}</p>
        <div className="mt-4">
          <h4 className="font-medium text-portfolio-blue-dark mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>
        </div>
        
        {project.achievements && project.achievements.length > 0 && (
          <div className="mt-4 bg-portfolio-purple/10 p-2 rounded-md">
            <p className="text-sm font-medium text-portfolio-purple">
              🏆 {project.achievements[0]}
            </p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex space-x-2">
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          {project.links.youtube && (
            <a 
              href={project.links.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
            >
              <Youtube className="h-5 w-5" />
            </a>
          )}
        </div>
        
        <ProjectDialog project={project} />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
