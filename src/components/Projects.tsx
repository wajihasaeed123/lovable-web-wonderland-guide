
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "iFix - Automotive Diagnostic App",
    description: "Android application for automotive diagnostics using Bluetooth connectivity with ELM327 scanners. Diagnoses trouble codes, reads freeze frame data, and provides real-time vehicle performance insights.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
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
    achievements: ["First Position in Final Year Project Exhibition (Air University)"]
  },
  {
    id: 2,
    title: "ProMasters Only - Cross-Platform Diagnostic App",
    description: "Cross-platform automotive diagnostic application designed specifically for ProMaster vans. Built using Flutter for both Android and iOS platforms.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    technologies: ["Flutter", "Dart", "Android Studio", "TSMaster"],
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
    ]
  },
  {
    id: 3,
    title: "FineTerryTowels - E-Commerce Website",
    description: "Premium e-commerce website offering high-quality towels for all age groups with seamless shopping experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["WordPress", "WooCommerce", "HTML", "CSS", "PHP", "JavaScript", "Ajax", "jQuery"],
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
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-portfolio-blue-dark">{project.title}</CardTitle>
                <CardDescription className="text-portfolio-gray">
                  {project.technologies.join(" • ")}
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
                  <a 
                    href={project.links.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-portfolio-purple hover:bg-portfolio-purple/10 p-0"
                  onClick={() => window.location.href = `#project-${project.id}`}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
