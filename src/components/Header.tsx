
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-2xl font-bold text-portfolio-blue-dark">
          <span className="text-portfolio-purple">Wajiha</span> Saeed
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a 
              key={item.title} 
              href={item.href}
              className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-portfolio-blue-dark"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in-right">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navItems.map(item => (
              <a 
                key={item.title} 
                href={item.href}
                className="text-portfolio-blue-dark hover:text-portfolio-purple transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
