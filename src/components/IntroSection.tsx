import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const IntroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Web Developer";
  
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="opacity-0 animate-fadeInUp">
          <h1 className="font-poppins font-bold text-6xl md:text-8xl mb-6 leading-tight">
            Jakopo
            <br />
            <span className="text-cyan-400 glow-cyan">Zhegrova</span>
          </h1>
        </div>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-200">
          <h2 className="font-poppins font-medium text-2xl md:text-3xl mb-8 text-gray-300">
            {typedText}
            <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-pulse"></span>
          </h2>
        </div>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-400">
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with clean code and creative solutions. 
            Passionate about modern web technologies and user-centered design.
          </p>
        </div>
        
        <div className="opacity-0 animate-fadeInUp animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-cyan-glow flex items-center justify-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <Mail size={20} />
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400 w-8 h-8" />
      </div>
    </section>
  );
};

export default IntroSection;