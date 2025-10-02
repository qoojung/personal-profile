import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('profile')}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Go to profile section"
          >
            AJ
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('profile')}
              className="text-gray-700 hover:text-blue-600 hover:shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 hover:shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-teal-600 hover:shadow-[0_0_8px_rgba(20,184,166,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 rounded px-2 py-1"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-cyan-600 hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1"
            >
              Contact
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => scrollToSection('profile')}
            className="text-2xl text-gray-700 hover:text-blue-600 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-4 py-2"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-2xl text-gray-700 hover:text-blue-600 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-4 py-2"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-2xl text-gray-700 hover:text-teal-600 hover:shadow-[0_0_12px_rgba(20,184,166,0.5)] transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 rounded px-4 py-2"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-2xl text-gray-700 hover:text-cyan-600 hover:shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-4 py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
