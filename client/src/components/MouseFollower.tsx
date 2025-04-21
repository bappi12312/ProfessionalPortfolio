import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Add debouncing for performance
    let timeout: NodeJS.Timeout;
    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    const handleMouseEnter = () => {
      clearTimeout(timeout);
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(timeout);
    };
  }, [isVisible]);

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-primary z-50 pointer-events-none mix-blend-difference hidden md:block"
        style={{ 
          left: mousePosition.x - 16, 
          top: mousePosition.y - 16
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-primary rounded-full z-50 pointer-events-none mix-blend-difference hidden md:block"
        style={{ 
          left: mousePosition.x - 4, 
          top: mousePosition.y - 4
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 350,
          mass: 0.3,
        }}
      />
    </>
  );
}