import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

interface NavBarProps {
  activeSection: string;
}

export default function NavBar({ activeSection }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#languages", label: "Languages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 bg-white/90 backdrop-blur-sm ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary">
          <span className="font-mono">&lt;</span>Portfolio<span className="font-mono">/&gt;</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`nav-link font-medium transition-colors duration-300 hover:text-primary ${
                activeSection === link.href.substring(1) ? 'text-primary font-semibold' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-4 py-3 bg-white/95 backdrop-blur-sm flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`nav-link py-2 font-medium ${
                activeSection === link.href.substring(1) ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
