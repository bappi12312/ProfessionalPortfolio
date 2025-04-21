import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiDocker, 
  SiNpm 
} from "react-icons/si";

export default function HeroSection() {
  const techIcons = [
    { icon: SiReact, color: "text-blue-500" },
    { icon: SiNodedotjs, color: "text-green-600" },
    { icon: SiJavascript, color: "text-yellow-500" },
    { icon: SiHtml5, color: "text-orange-500" },
    { icon: SiCss3, color: "text-blue-400" },
    { icon: SiDocker, color: "text-blue-600" },
    { icon: SiNpm, color: "text-red-500" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-50 to-background dark:from-slate-900 dark:to-background">
      <div className="container mx-auto px-4 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Full-Stack <span className="text-primary">Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building robust and scalable web applications with cutting-edge technologies.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#projects" 
                className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-background dark:bg-gray-800 border border-primary text-primary hover:bg-primary/10 font-medium py-2 px-6 rounded-md transition duration-300 shadow-sm hover:shadow-md"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-[#6366F1] rounded-full flex items-center justify-center shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-2 bg-background dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-xl font-semibold">Full-Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techIcons.map((tech, index) => (
              <motion.div 
                key={index}
                className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <tech.icon className={`text-2xl md:text-3xl ${tech.color}`} />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 flex justify-center">
          <a 
            href="#about" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
