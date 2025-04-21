import { Github, Linkedin, Twitter, CodepenIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              <span className="font-mono">&lt;</span>Portfolio<span className="font-mono">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform" 
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Codepen"
            >
              <CodepenIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} All Rights Reserved</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-600">
          Designed with ❤️ using React, Tailwind CSS and Framer Motion
        </p>
      </div>
    </footer>
  );
}
