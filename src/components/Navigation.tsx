import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Intro', href: '#intro' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -60; // Change this value to your desired offset (negative for upward offset)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`mt-4 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300`}>
      <div className="flex items-center justify-center gap-[10rem] bg-black/85 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-800/50">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:glow-cyan text-sm font-medium"
        >
          {item.label}
        </button>
        ))}
      </div>
      {/* Logo */}
      <h2 className="md:hidden font-bold text-4xl">jk</h2>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
      </button>
      </div>
      {/* Mobile Menu Collapse */}
      {isMobileMenuOpen && (
      <div className="md:hidden absolute left-0 right-0 top-full w-full bg-black/85 backdrop-blur-sm rounded-2xl border-t border-gray-800/50 z-40 animate-dropdown">
        <div className="flex flex-col items-center">
        {navItems.map((item) => (
          <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="block w-full text-center px-6 py-2 mb-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 text-lg font-medium"
          >
          {item.label}
          </button>
        ))}
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navigation;