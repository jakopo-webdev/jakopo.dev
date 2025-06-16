import { Download, Mail } from 'lucide-react';

const IntroSection = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative px-4 py-[6rem]">
      <div className="text-center max-w-4xl mx-auto">
        <div className="opacity-0 animate-fadeInUp">
          <h1 className="font-poppins font-bold text-7xl my-8 leading-tight">
            Hi, I'm <span className="text-cyan-400 glow-cyan">Jakopo</span>
          </h1>
        </div>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-400">
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with clean code and creative solutions. 
            Passionate about modern web technologies and user-centered design.
          </p>
        </div>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_16px_0_rgba(34,211,238,0.7)]">
            <Download size={20} />
            Download Resume
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
            <Mail size={20} />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;