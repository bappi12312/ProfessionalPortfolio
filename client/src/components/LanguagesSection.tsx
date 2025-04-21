import { motion } from "framer-motion";

export default function LanguagesSection() {
  const languages = [
    { name: "English", level: "Fluent", proficiency: 95 },
    { name: "Bangla", level: "Native", proficiency: 100 },
    { name: "Hindi", level: "Proficient", proficiency: 85 },
    { name: "Urdu", level: "Intermediate", proficiency: 75 },
    { name: "French", level: "Basic", proficiency: 40 }
  ];

  return (
    <section id="languages" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center dark:text-white">Language Proficiency</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            I'm fluent in multiple languages, which helps me collaborate with international teams and understand global perspectives.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
          <div className="space-y-6">
            {languages.map((language, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold dark:text-white">{language.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{language.level}</span>
                </div>
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="absolute left-0 h-2 rounded-full bg-gradient-to-r from-primary to-[#6366F1]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
