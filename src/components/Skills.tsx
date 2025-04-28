
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';

const skillsData = [
  {
    category: "Mobile Development",
    skills: [
      "Java", "Kotlin", "Flutter", "Dart", "React Native", 
      "Android SDK", "iOS Development", "Cross-platform Development"
    ]
  },
  {
    category: "Web Development",
    skills: [
      "HTML", "CSS", "JavaScript", "PHP", "WordPress",
      "WooCommerce", "jQuery", "Ajax"
    ]
  },
  {
    category: "Databases",
    skills: [
      "Firebase", "SQLite", "MySQL", "JSON"
    ]
  },
  {
    category: "Tools & Software",
    skills: [
      "Android Studio", "VS Code", "Xcode", "GitHub",
      "Postman", "TSMaster", "Command Line", "Adobe Illustrator"
    ]
  },
  {
    category: "Other Skills",
    skills: [
      "RESTful APIs", "OTP Verification", "Automotive Diagnostics",
      "UI/UX Design", "Problem Solving", "App Deployment"
    ]
  }
];

const SkillItem = ({ skill }: { skill: string }) => (
  <div className="skill-item">
    <Code className="h-5 w-5 mr-2 text-portfolio-purple" />
    <span>{skill}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
