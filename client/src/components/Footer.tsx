import { Github, Linkedin, Twitter, CodepenIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold text-white">
              <span className="font-mono">&lt;</span>Portfolio<span className="font-mono">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <CodepenIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} All Rights Reserved</p>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
