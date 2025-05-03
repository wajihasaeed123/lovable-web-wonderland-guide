
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    company: "DreamEdge Technologies",
    role: "Android Developer",
    period: "Current",
    location: "Multan, Pakistan",
    description: "Working on Android app development projects including World Clock app and Internet Speed Test app.",
    highlights: [
      "Developed World Clock app with features like alarms, stopwatch, timer, and Google AdMob integration",
      "Built Internet Speed Test app with features like internet speed test, DNS optimization, WiFi analyzer",
      "Implementation of Room Database for local data storage",
      "Integration with Google APIs for WiFi mapping functionality"
    ]
  },
  {
    company: "TopEdge Technologies",
    role: "Android Developer",
    period: "Previous",
    location: "Multan, Pakistan",
    description: "Worked on Android app development projects focusing on automotive diagnostic applications.",
    highlights: [
      "Development and maintenance of Android applications",
      "Implementation of vehicle diagnostic features and protocols",
      "Integration with Bluetooth ELM327 scanners"
    ]
  },
  {
    company: "AppSqueeze Technologies",
    role: "Android Developer",
    period: "Previous",
    location: "Multan, Pakistan",
    description: "Worked on app development projects and gained foundational experience in mobile development.",
    highlights: [
      "Assisted in Android application development",
      "Implemented UI elements and features",
      "Participated in testing and debugging processes"
    ]
  },
  {
    company: "Freelance Projects",
    role: "Mobile App Developer",
    period: "Ongoing",
    location: "Remote",
    description: "Developing and selling custom automotive diagnostic applications on platforms like Fiverr.",
    highlights: [
      "Created and sold iFix Android application",
      "Developed ProMasters Only cross-platform application for ProMaster vans",
      "Implemented custom UI elements and vehicle communication protocols"
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: any }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 mb-6">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="bg-portfolio-purple/10 p-4 rounded-full">
          <Briefcase className="h-6 w-6 text-portfolio-purple" />
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <h3 className="text-xl font-semibold text-portfolio-blue-dark">{experience.role}</h3>
            <span className="bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full text-sm">
              {experience.period}
            </span>
          </div>
          
          <div className="text-portfolio-gray mt-1">
            {experience.company} | {experience.location}
          </div>
          
          <p className="mt-3">{experience.description}</p>
          
          <ul className="mt-3 space-y-1 list-disc pl-5">
            {experience.highlights.map((highlight: string, index: number) => (
              <li key={index} className="text-sm">{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="hidden md:block absolute left-6 top-8 bottom-0 w-0.5 bg-portfolio-purple/30 z-0"></div>
          
          {experienceData.map((experience, index) => (
            <div key={index} className="relative z-10">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
