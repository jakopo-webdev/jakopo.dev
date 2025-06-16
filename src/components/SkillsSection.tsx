import { Code, Database, Globe, Smartphone, Zap, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Nuxt.js"],
      color: "cyan"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js", "Django"],
      color: "blue"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"],
      color: "purple"
    },
    {
      title: "DevOps & Tools",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Nginx"],
      color: "green"
    },
    {
      title: "Design & UX",
      icon: <Code className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "UI/UX", "Responsive Design"],
      color: "pink"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Team Leadership", "Communication", "Problem Solving", "Project Management", "Mentoring", "Agile"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-400/20 hover:border-cyan-400/50 group-hover:text-cyan-400",
      blue: "border-blue-400/20 hover:border-blue-400/50 group-hover:text-blue-400",
      purple: "border-purple-400/20 hover:border-purple-400/50 group-hover:text-purple-400",
      green: "border-green-400/20 hover:border-green-400/50 group-hover:text-green-400",
      pink: "border-pink-400/20 hover:border-pink-400/50 group-hover:text-pink-400",
      yellow: "border-yellow-400/20 hover:border-yellow-400/50 group-hover:text-yellow-400"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="skills" className="py-[6rem] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${getColorClasses(category.color)}`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gray-700/50 mr-4 transition-colors duration-300 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          i < 4 ? 'bg-cyan-400' : 'bg-gray-600'
                        }`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;