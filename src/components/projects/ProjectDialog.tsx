
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ProjectType } from './types';

const ProjectDialog = ({ project }: { project: ProjectType }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  
  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
    
    const iframe = document.getElementById(`project-video-${project.id}`) as HTMLIFrameElement;
    
    if (iframe && iframe.contentWindow) {
      if (isVideoPlaying) {
        // Pause video
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        // Play video
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-portfolio-purple hover:bg-portfolio-purple/10 p-0"
        >
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {project.videoEmbed ? (
            <div className="aspect-[9/16] md:aspect-video rounded-md overflow-hidden bg-muted relative">
              <iframe
                id={`project-video-${project.id}`}
                src={`${project.videoEmbed}?enablejsapi=1&autoplay=1&mute=1&controls=0&modestbranding=1`}
                className="w-full h-full"
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <div className="absolute bottom-4 left-4 flex gap-2">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={toggleVideo}
                >
                  {isVideoPlaying ? "Pause" : "Play"}
                </Button>
                
                {project.links.youtube && (
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/80 hover:bg-white flex items-center gap-2"
                    onClick={() => window.open(project.links.youtube, '_blank')}
                  >
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-60 bg-gray-100 text-gray-400 rounded-md">
              No video available
            </div>
          )}
          
          <div className="mt-4">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-2">{project.description}</p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium">Technologies</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className="bg-portfolio-purple/10 text-portfolio-purple px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium">Features</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {project.achievements && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Achievements</h3>
              <ul className="list-disc pl-5 mt-2">
                {project.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="text-portfolio-purple font-medium">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.github && (
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open(project.links.github, '_blank')}
              >
                <Github className="h-4 w-4" />
                GitHub Repository
              </Button>
            )}
            {project.links.youtube && (
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open(project.links.youtube, '_blank')}
              >
                <Youtube className="h-4 w-4" />
                YouTube Video
              </Button>
            )}
            {project.links.website && (
              <Button 
                variant="outline"
                onClick={() => window.open(project.links.website, '_blank')}
              >
                Visit Website
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
