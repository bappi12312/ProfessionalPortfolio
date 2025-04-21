import { motion } from "framer-motion";
import { Laptop, Server, Drill } from "lucide-react";
import { 
  SiReact, SiJavascript, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiDocker, SiTypescript, SiRedis, SiCplusplus
} from "react-icons/si";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React", icon: SiReact, color: "text-blue-500", proficiency: 90 },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", proficiency: 95 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400", proficiency: 85 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-blue-600", proficiency: 80 }
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", proficiency: 85 },
    { name: "Express", icon: SiExpress, color: "text-gray-700", proficiency: 90 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", proficiency: 80 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500", proficiency: 75 }
  ];

  const otherSkills = [
    { name: "Docker", icon: SiDocker, color: "text-blue-600", proficiency: 70 },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", proficiency: 80 },
    { name: "Redis", icon: SiRedis, color: "text-red-500", proficiency: 65 },
    { name: "C++ (DSA)", icon: SiCplusplus, color: "text-gray-700", proficiency: 85 }
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

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            My expertise spans across various technologies in both front-end and back-end development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Laptop className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Frontend</h3>
            
            <motion.div 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:translate-y-[-5px]"
                  variants={item}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <skill.icon className={`text-xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-primary h-1.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <Server className="text-secondary text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Backend</h3>
            
            <motion.div 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:translate-y-[-5px]"
                  variants={item}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <skill.icon className={`text-xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-secondary h-1.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6 mx-auto">
              <Drill className="text-[#6366F1] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Other Technologies</h3>
            
            <motion.div 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:translate-y-[-5px]"
                  variants={item}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <skill.icon className={`text-xl ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-[#6366F1] h-1.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
