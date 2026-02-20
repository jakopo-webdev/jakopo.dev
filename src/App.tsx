import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import FAQsSection from './components/FAQsSection';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white font-inter relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <IntroSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="bg-black py-8 text-center text-gray-400">
        <p>&copy; 2026 Jakopo Zhegrova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;