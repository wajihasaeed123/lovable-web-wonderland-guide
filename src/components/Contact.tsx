
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Home, Linkedin, Github } from 'lucide-react';

const contactInfo = {
  email: "wajihasaeed333@gmail.com",
  phone: "+923366614335",
  address: "House 165-Q(EXT), Wapda Town Phase 2, Multan, Punjab 66000, Pakistan",
  linkedin: "https://www.linkedin.com/in/wajiha-saeed-a3325523a/",
  github: "https://github.com/wajihasaeed123"
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <CardContent className="p-8 bg-portfolio-blue-dark text-white">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-4 mt-1 text-portfolio-purple" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-4 mt-1 text-portfolio-purple" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="h-5 w-5 mr-4 mt-1 text-portfolio-purple" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-300">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-8">
                    <a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue-dark">Send a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-portfolio-purple hover:bg-portfolio-blue-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
