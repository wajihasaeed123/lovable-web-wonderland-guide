
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Mobile } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projectsData = [
  {
    id: 1,
    title: "World Clock - Android App",
    description: "Feature-rich World Clock application built using Kotlin and XML in Android Studio with alarm, stopwatch, timer functionality, and Google AdMob integration.",
    image: "/lovable-uploads/039b7215-1274-477c-afe3-30cc9b6fdc5e.png",
    technologies: ["Kotlin", "XML", "Android Studio", "Room Database", "Google AdMob API"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/8sRqaQBaQF0?feature=share"
    },
    features: [
      "World Clock – Displays real-time clocks for countries and cities worldwide",
      "Alarm – Create, customize, and manage multiple alarms",
      "Stopwatch – Track time with precision, includes lap functionality",
      "Timer – Countdown feature with intuitive controls",
      "Room Database for local data storage"
    ],
    videoEmbed: "https://youtube.com/embed/8sRqaQBaQF0"
  },
  {
    id: 2,
    title: "Internet Speed Test App",
    description: "Comprehensive Android application for testing and optimizing internet connections with features like speed test, DNS optimization, WiFi mapping and analysis.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["Kotlin", "XML", "Android Studio", "Google Maps API", "Room Database"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio"
    },
    features: [
      "Internet speed test with download and upload metrics",
      "Speed optimization through DNS configuration",
      "App data usage tracking and analytics",
      "WiFi map using Google API for nearby networks",
      "WiFi analyzer for signal strength and channel analysis",
      "Connected devices detection for network monitoring"
    ]
  },
  {
    id: 3,
    title: "iFix - Automotive Diagnostic App",
    description: "Android application for automotive diagnostics using Bluetooth connectivity with ELM327 scanners. Diagnoses trouble codes, reads freeze frame data, and provides real-time vehicle performance insights.",
    image: "/lovable-uploads/bbb31169-f5bc-4f7f-9967-45a414bba0a2.png",
    technologies: ["Java", "XML", "Android Studio", "Firebase", "TSMaster", "OpenAI GPT-4 API"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/qxUiZfxbqU8?feature=share",
      tsMaster: "https://drive.google.com/file/d/1uHyL2BsP6b5XNpj4ie1oiwm29PcbYd8j/view?usp=sharing"
    },
    features: [
      "ISO CAN protocols (11-bit 500 baud, 29-bit 500 baud) support",
      "Real-time RPM monitoring with custom gauge",
      "SMS OTP verification with Firebase",
      "AI-powered DTC descriptions using ChatGPT",
      "Car profile management for personalized diagnostics"
    ],
    achievements: ["First Position in Final Year Project Exhibition (Air University)"],
    videoEmbed: "https://youtube.com/embed/qxUiZfxbqU8"
  },
  {
    id: 4,
    title: "ProMasters Only - Cross-Platform Diagnostic App",
    description: "Cross-platform automotive diagnostic application designed specifically for ProMaster vans. Built for both Android and iOS platforms.",
    image: "/lovable-uploads/1ee7a9f9-0166-48c9-aa93-dbc605da6fea.png",
    technologies: ["Android Studio", "TSMaster"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtu.be/uT3ZftO2v6Y",
      tsMaster: "https://drive.google.com/file/d/1uHyL2BsP6b5XNpj4ie1oiwm29PcbYd8j/view?usp=sharing"
    },
    features: [
      "Bluetooth connectivity with ELM327 scanners",
      "ProMaster Dodge van specific custom PID information",
      "Custom gauges for RPM and Coolant Temperature",
      "Real-time vehicle data monitoring",
      "Trouble code diagnosis"
    ],
    videoEmbed: "https://youtube.com/embed/uT3ZftO2v6Y"
  },
  {
    id: 5,
    title: "FineTerryTowels - E-Commerce Website",
    description: "Premium e-commerce website offering high-quality towels for all age groups with seamless shopping experiences.",
    image: "/lovable-uploads/dbed4469-2877-4b8d-a00c-7474541c004a.png",
    technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "PHP", "JavaScript"],
    links: {
      github: "https://github.com/wajihasaeed123/Project_Portfolio",
      youtube: "https://youtube.com/shorts/FD3TmYHzQJ0",
      website: "https://fineterrytowels.com"
    },
    features: [
      "Fully responsive design for all devices",
      "WooCommerce integration for product management",
      "Multiple payment options (COD and bank payments)",
      "Custom CSS modifications with Elementor",
      "Backend optimization for smooth operation"
    ],
    videoEmbed: "https://youtube.com/embed/FD3TmYHzQJ0"
  }
];

const ProjectDialog = ({ project }: { project: any }) => {
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

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col h-full">
              <div className="h-[320px] md:h-48 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mobile className="h-6 w-6 text-portfolio-purple/50" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
