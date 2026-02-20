import { ExternalLink, Github } from 'lucide-react';
import ecomindsImg from '../assets/ecominds-landing-page.png';
import worktrackImg from '../assets/worktrack-landing-page.png';

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Ecominds",
      description: "A project that competed in the Social Umbria Hackathon 2025",
      image: ecomindsImg,
      technologies: ["TypeScript", "Angular", "SCSS", "Vercel"],
      liveUrl: "https://ecominds.vercel.app/",
      githubUrl: "https://github.com/jakopo-webdev/ecominds"
    },
    {
      id: 2,
      title: "WorkTrack",
      description: "A modern full-stack task management application",
      image: worktrackImg,
      technologies: ["TypeScript", "React", "CSS", "Express.js", "PostgreSQL"],
      githubUrl: "https://github.com/jakopo-webdev/worktrack"
    },
  ];

  return (
    <section id="work" className="py-[6rem] px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Featured <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-110">
              <div className="relative overflow-hidden">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div> */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href={project.liveUrl} className="bg-black/50 backdrop-blur-sm p-2 rounded-lg text-white hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;