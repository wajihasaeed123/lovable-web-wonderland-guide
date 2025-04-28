
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const educationData = {
  degree: "Bachelor's of Computer Science",
  institution: "Bahauddin Zakariya University (BZU)",
  period: "September 2020 - May 2024",
  location: "Multan, Pakistan",
  gpa: "3.37/4.0",
  website: "https://www.bzu.edu.pk",
  keySubjects: [
    "Mobile Computing",
    "Web Engineering",
    "Data Structures and Algorithms",
    "Database Systems"
  ],
  achievements: [
    {
      title: "First Position – Final Year Project Exhibition and Competition",
      institution: "Air University, Multan Campus, Computer Science Department",
      date: "June 5, 2024",
      description: "Awarded first place for the Final Year Project, iFix, an automotive diagnostic Android application."
    }
  ]
};

const certifications = [
  {
    title: "The Ultimate React Native Series Part 1",
    provider: "CodeWithMosh",
    content: [
      "Basics of React Native components, props, state, and styling",
      "Creating apps with text input and button interactions",
      "Managing component state using hooks",
      "Styling React Native components"
    ],
    link: "https://wannacrack.com/elearning/video-tutorials/code-with-mosh-the-ultimate-react-native-series-part-1-2020-6?t=pfHrGZkS"
  },
  {
    title: "The Complete Front-End Web Development Course",
    provider: "Udemy",
    content: [
      "HTML, CSS, JavaScript, jQuery, Bootstrap, React",
      "Creating responsive web pages, forms, animations",
      "Working with APIs",
      "User experience and accessibility",
      "Deploying projects to host services"
    ],
    link: "https://www.udemy.com/course/front-end-web-development/"
  },
  {
    title: "C# Intermediate-Classes, Interfaces and Object-Oriented Programming",
    provider: "CodeWithMosh",
    content: [
      "Advanced concepts for building complex software systems in C#",
      "Classes, interfaces, inheritance, and polymorphism",
      "SOLID principles for clean and maintainable code"
    ],
    link: "https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue-dark">Academic Background</h3>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-portfolio-purple/10 p-4 rounded-full h-fit">
                    <BookOpen className="h-6 w-6 text-portfolio-purple" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-portfolio-blue-dark">{educationData.degree}</h4>
                    <div className="text-portfolio-gray mt-1">
                      {educationData.institution} | {educationData.period}
                    </div>
                    <div className="mt-2">
                      <span className="font-medium">GPA:</span> {educationData.gpa}
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium text-portfolio-blue-dark mb-2">Key Subjects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {educationData.keySubjects.map((subject, index) => (
                          <span 
                            key={index} 
                            className="bg-portfolio-purple/10 text-portfolio-purple px-3 py-1 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="font-medium text-portfolio-blue-dark mb-2">Achievements:</h5>
                      {educationData.achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="bg-portfolio-purple/5 border border-portfolio-purple/20 p-3 rounded-md mt-2"
                        >
                          <div className="font-medium text-portfolio-purple">{achievement.title}</div>
                          <div className="text-sm mt-1">{achievement.institution}</div>
                          <div className="text-sm text-portfolio-gray">{achievement.date}</div>
                          <p className="text-sm mt-2">{achievement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue-dark">Professional Certifications</h3>
            
            {certifications.map((certification, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 mb-6">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-portfolio-blue-dark">{certification.title}</h4>
                  <div className="text-portfolio-purple font-medium">{certification.provider}</div>
                  
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    {certification.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm">{item}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href={certification.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mt-3 text-sm text-portfolio-accent hover:underline"
                  >
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
