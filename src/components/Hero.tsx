
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white via-portfolio-purple-light/10 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <p className="text-portfolio-purple font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-blue-dark">
              Wajiha Saeed
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-portfolio-gray">
              Android Developer | Cross-Platform Mobile App Developer | WordPress Developer
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Creating innovative mobile applications with 1+ years of experience. Specialized in automotive diagnostic applications and building responsive user-centric web & mobile solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-purple hover:bg-portfolio-blue-dark text-white px-8 py-6">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
                Contact Me
              </Button>
            </div>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/wajihasaeed123/Project_Portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/wajiha-saeed-a3325523a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:wajihasaeed333@gmail.com"
                className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-portfolio-purple/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Wajiha Saeed"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
