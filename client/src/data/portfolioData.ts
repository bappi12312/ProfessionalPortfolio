import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiDocker, 
  SiNpm,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiRedis,
  SiCplusplus
} from "react-icons/si";

// Frontend Skills
export const frontendSkills = [
  { name: "React", icon: SiReact, color: "text-blue-500", proficiency: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", proficiency: 95 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400", proficiency: 85 },
  { name: "Next.js", icon: SiNextdotjs, color: "text-blue-600", proficiency: 80 }
];

// Backend Skills
export const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", proficiency: 85 },
  { name: "Express", icon: SiExpress, color: "text-gray-700", proficiency: 90 },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", proficiency: 80 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500", proficiency: 75 }
];

// Other Skills
export const otherSkills = [
  { name: "Docker", icon: SiDocker, color: "text-blue-600", proficiency: 70 },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", proficiency: 80 },
  { name: "Redis", icon: SiRedis, color: "text-red-500", proficiency: 65 },
  { name: "C++ (DSA)", icon: SiCplusplus, color: "text-gray-700", proficiency: 85 }
];

// Tech Stack Icons
export const techIcons = [
  { icon: SiReact, color: "text-blue-500" },
  { icon: SiNodedotjs, color: "text-green-600" },
  { icon: SiJavascript, color: "text-yellow-500" },
  { icon: SiHtml5, color: "text-orange-500" },
  { icon: SiCss3, color: "text-blue-400" },
  { icon: SiDocker, color: "text-blue-600" },
  { icon: SiNpm, color: "text-red-500" }
];

// Projects
export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, payment processing, and order management.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Real-time Chat App",
    description: "A WebSocket-powered chat application with real-time messaging, user presence indicators, and message history.",
    technologies: ["React", "WebSocket", "Redis", "Express"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Project Management Dashboard",
    description: "A comprehensive project management tool with task tracking, team collaboration, and progress visualization.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Content Management System",
    description: "A modern CMS with intuitive content editing, user roles, media management, and API access.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing various algorithms like sorting, pathfinding, and data structures.",
    technologies: ["React", "C++", "JavaScript", "Canvas API"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location detection, 7-day forecasts, and animated weather visualizations.",
    technologies: ["React", "API Integration", "TypeScript", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#"
  }
];

// Languages
export const languages = [
  { name: "English", level: "Fluent", proficiency: 95 },
  { name: "Bangla", level: "Native", proficiency: 100 },
  { name: "Hindi", level: "Proficient", proficiency: 85 },
  { name: "Urdu", level: "Intermediate", proficiency: 75 },
  { name: "French", level: "Basic", proficiency: 40 }
];

// Contact Information
export const contactInfo = [
  { 
    icon: "mail", 
    title: "Email", 
    content: "contact@example.com", 
    link: "mailto:contact@example.com" 
  },
  { 
    icon: "map-pin", 
    title: "Location", 
    content: "Available for remote work worldwide",
    link: undefined
  },
  { 
    icon: "linkedin", 
    title: "LinkedIn", 
    content: "linkedin.com/in/yourprofile", 
    link: "#" 
  },
  { 
    icon: "github", 
    title: "GitHub", 
    content: "github.com/yourusername", 
    link: "#" 
  }
];
