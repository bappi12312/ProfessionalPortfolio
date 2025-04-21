import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Use SVG portrait instead of image */}
                <svg
                  className="w-full h-full text-gray-400 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M320 320c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zM160 256c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm320 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zM384 384H256c-35.3 0-64 28.7-64 64v32h256v-32c0-35.3-28.7-64-64-64zm-128 0H128c-35.3 0-64 28.7-64 64v32h192v-32c0-17.7-7.1-33.7-18.7-45.3zM448 384c-8.8 0-16.7 1.8-24 4.8V416h88v-32c0-13.3-10.7-24-24-24H448z" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary to-[#6366F1] rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 inline-block relative dark:text-white">
              About Me
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary"></span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am a passionate full-stack developer with extensive experience in building modern web applications. My journey in software development began with C++ and data structures, which gave me a strong foundation in algorithmic thinking and problem-solving.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Over the years, I've developed expertise in both front-end and back-end technologies, allowing me to create comprehensive solutions from database design to user interface development.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My multilingual background helps me communicate effectively with global teams and clients, bridging cultural gaps in the development process.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-blue-700 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary hover:text-blue-700 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary hover:text-blue-700 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
