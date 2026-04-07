import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Research', id: 'research' },
    { name: 'Experience', id: 'experience' },
    { name: 'Beyond Research', id: 'beyond-research' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const extraPadding = window.innerWidth <= 768 ? 300 : 64;
      const elementPosition = element.offsetTop - extraPadding;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const isActive = (sectionId) => activeSection === sectionId;

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl shadow-lg shadow-gray-200/30 dark:shadow-dark-950/50 border-b border-white/40 dark:border-dark-700/40'
        : 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm dark:shadow-dark-950/30'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('intro')}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Siying Wang
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.id)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50/80 dark:hover:bg-dark-800/80'
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-3"
              aria-label="Toggle dark mode"
            >
              <div className="theme-toggle-knob">
                {isDark
                  ? <Moon size={14} className="text-primary-400" />
                  : <Sun size={14} className="text-amber-500" />
                }
              </div>
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              <div className="theme-toggle-knob">
                {isDark
                  ? <Moon size={14} className="text-primary-400" />
                  : <Sun size={14} className="text-amber-500" />
                }
              </div>
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
              disabled={isAnimating}
            >
              <div className="transition-transform duration-300 ease-in-out">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/60 dark:bg-dark-800/60 backdrop-blur-lg border-t border-white/30 dark:border-dark-700/30 rounded-b-xl">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ease-out transform ${
                  isActive(item.id)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50/80 dark:hover:bg-dark-700/50'
                } ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
