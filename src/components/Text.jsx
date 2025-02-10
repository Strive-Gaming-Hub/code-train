import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "tailwindcss/tailwind.css";

const Text = () => {
  const { scrollYProgress } = useScroll();
  const [colors, setColors] = useState([]);

  const text = "Scroll-triggered color change effect for text";
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const wordColors = words.map((_, index) => {
        const threshold = index / words.length;
        return scrollYProgress.current >= threshold ? "WHITE" : "gray";
      });
      setColors(wordColors);
    };

    handleScroll();
    return scrollYProgress.onChange(handleScroll);
  }, [scrollYProgress, words]);

  return (
    <div className=" bg-[#212121]">
      {/* Text Effect Section */}
      <div className="sticky top-[50%] text-4xl font-bold text-center h-[500px]  flex items-center justify-center">
        <div className="flex space-x-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              style={{ color: colors[index] || "gray" }}
              className="transition-colors duration-300"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      </div>

      {/* Placeholder Section */}
      <div className=" bg-[#212121] flex items-center justify-center">
        <h1 className="text-5xl font-bold">Next Section</h1>
      </div>
    </div>
  );
};

export default Text;
