import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: "What makes your company different from other startup development agencies?",
    content: "We stand out by offering comprehensive support. We go beyond just website or app development, providing services like legal guidance, marketing branding, and ongoing growth strategies. We're your one-stop shop for success!"
  },
  {
    title: "What stage of startups do you typically work with?",
    content: "We welcome startups at all stages! From ideation and validation to launch and growth, we tailor our services to your specific needs.",
  },
  {
    title: "What kind of websites and applications do you develop?",
    content: "We have expertise across various platforms and technologies, building everything from e-commerce websites and mobile apps to custom software solutions.",
  },
  {
    title: "How do you help me market and brand my startup effectively?",
    content: "We create tailored marketing strategies based on your target audience and goals. This includes branding development, social media management, content marketing, and paid advertising campaigns.",
  },
  {
    title: "How do you communicate and collaborate with your clients?",
    content: "We believe in open communication and transparency. We assign dedicated project managers and utilize collaboration tools to keep you informed and involved throughout the process.",
  },
  {
    title: "How much does it cost to work with your company?",
    content: "The cost depends on your specific needs and chosen services. We offer transparent pricing models and provide detailed proposals before work begins.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );
    const target = document.querySelector('.animated-heading');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);


  const paragraphText =
    'Frequently asked questions';

  const splitText = (text) => text.split(' ');

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { x: -70, opacity: 0, filter: 'blur(10px)' },
    visible: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1, // Adjust the animation duration
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start below
    },
    visible: {
      opacity: 1,
      y: 0, // Final position
      transition: {
        duration: 1, // Animation duration
        ease: 'easeOut', // Smooth easing
      },
    },
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Start below
    },
    visible: {
      opacity: 1,
      x: 0, // Final position
      transition: {
        duration: 1, // Animation duration
        ease: 'easeOut', // Smooth easing
      },
    },
  };


  return (
    <div className='w-full mx-auto section flex sm:flex-row flex-col gap-8 justify-between items-center px-6 md:px-20'>
      <div className="sm:ws-1/2">
        <div className="overflow-hidden">
          <motion.p
            className="sm:text-4xl sm:text-start text-center text-3xl font-ubuntu font-semibold relative z-20 animated-heading"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }} // Trigger when 80% is in view
          >
            {paragraphText}
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            className="w-full md:mx-auto rounded-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the component is visible
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center gap-3 py-4  text-xl  text-left  focus:outline-none"
      >
        <h1 className="text-base">{title}</h1>
        <span className="text-gray-500">
          {isOpen ?

            // <img src="./up-arrow.jpg" alt="down arrow" className=" max-w-5  md:min-w-8 md:max-w-8" />
            <IoIosArrowUp />
            : <IoIosArrowDown />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: contentHeight }}
        className="transition-all duration-300 ease-in-out overflow-hidden  text-gray-700"
      >
        <div className="">
          <p className="max-w-[800px] text-gray-400 font-josefin pb-3">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ