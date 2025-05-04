import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone } from 'lucide-react';

const skillsData = [
  {
    category: "Mobile Development",
    skills: [
      "Java", "Kotlin", "Android SDK", "iOS Development"
    ]
  },
  {
    category: "Databases",
    skills: [
      "Firebase", "SQLite", "Room Database", "MySQL"
    ]
  },
  {
    category: "Tools & Software",
    skills: [
      "Android Studio", "GitHub", "Postman", "TSMaster"
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
                <h3 className="text-xl font-semibold mb-4 text-portfolio-purple flex items-center">
                  {category.category === "Mobile Development" && <Smartphone className="h-5 w-5 mr-2" />}
                  {category.category}
                </h3>
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
