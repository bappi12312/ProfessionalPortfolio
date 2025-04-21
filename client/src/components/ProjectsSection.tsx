import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, cart functionality, payment processing, and order management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Real-time Chat App",
      description: "A WebSocket-powered chat application with real-time messaging, user presence indicators, and message history.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      technologies: ["React", "WebSocket", "Redis", "Express"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Management Dashboard",
      description: "A comprehensive project management tool with task tracking, team collaboration, and progress visualization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Content Management System",
      description: "A modern CMS with intuitive content editing, user roles, media management, and API access.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "An interactive tool for visualizing various algorithms like sorting, pathfinding, and data structures.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      technologies: ["React", "C++", "JavaScript", "Canvas API"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location detection, 7-day forecasts, and animated weather visualizations.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      technologies: ["React", "API Integration", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const colorMap: Record<string, string> = {
    "React": "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    "MongoDB": "bg-yellow-100 text-yellow-800",
    "Redux": "bg-purple-100 text-purple-800",
    "WebSocket": "bg-indigo-100 text-indigo-800",
    "Redis": "bg-red-100 text-red-800",
    "Express": "bg-green-100 text-green-800",
    "Next.js": "bg-blue-100 text-blue-800",
    "TypeScript": "bg-blue-100 text-blue-800",
    "PostgreSQL": "bg-blue-100 text-blue-800",
    "Tailwind CSS": "bg-purple-100 text-purple-800",
    "Docker": "bg-gray-100 text-gray-800",
    "C++": "bg-gray-100 text-gray-800",
    "JavaScript": "bg-yellow-100 text-yellow-800",
    "Canvas API": "bg-purple-100 text-purple-800",
    "API Integration": "bg-green-100 text-green-800"
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Here are some of the noteworthy projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              variants={item}
            >
              <Card className="h-full flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.5 7.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm5 9H7l1.8-3 1.6 1.2L12 12l5 6z" />
                    </svg>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`text-xs ${colorMap[tech]} px-2 py-1 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a href={project.demoLink} className="text-primary hover:text-blue-700 font-medium transition-colors duration-300 flex items-center">
                      <ArrowUpRight className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                    <a href={project.codeLink} className="text-gray-700 hover:text-black font-medium transition-colors duration-300 flex items-center">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            className="inline-flex items-center bg-white border border-primary text-primary hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition duration-300 shadow-sm hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
