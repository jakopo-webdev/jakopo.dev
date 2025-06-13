import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      description: "Lead development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "2021 - 2023",
      description: "Built responsive web applications and improved user experience metrics by 40%. Collaborated with design teams to implement pixel-perfect interfaces.",
      technologies: ["Vue.js", "JavaScript", "Sass", "Figma"]
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Developed custom websites for clients across various industries. Focused on performance optimization and SEO best practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through my professional growth and the impact I've made at each step.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-transparent"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
              <div className={`absolute w-4 h-4 bg-cyan-400 rounded-full top-6 ${index % 2 === 0 ? 'left-2 md:left-1/2 md:transform md:-translate-x-1/2' : 'left-2 md:right-1/2 md:left-auto md:transform md:translate-x-1/2'}`}></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="font-poppins font-semibold text-xl text-white mb-2 sm:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin size={16} className="mr-1" />
                    {exp.company} • {exp.location}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;