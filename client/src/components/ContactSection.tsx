import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    reset();
  };

  const contactInfo = [
    { 
      icon: Mail, 
      title: "Email", 
      content: "contact@example.com", 
      link: "mailto:contact@example.com" 
    },
    { 
      icon: MapPin, 
      title: "Location", 
      content: "Available for remote work worldwide",
      link: undefined
    },
    { 
      icon: Linkedin, 
      title: "LinkedIn", 
      content: "linkedin.com/in/yourprofile", 
      link: "#" 
    },
    { 
      icon: Github, 
      title: "GitHub", 
      content: "github.com/yourusername", 
      link: "#" 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Contact Information</h3>
              
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-primary hover:underline">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Your email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  {...register("subject")}
                  className={errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  {...register("message")}
                  className={errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
