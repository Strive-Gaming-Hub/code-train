import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: "What makes Cartmint different from other eCommerce platforms like Shopify?",
    content: "Cartmint is built for those who need total creative control. Unlike platforms with rigid templates, our solution offers deep customization tools—allowing you to tailor every aspect of your online store to match your brand’s unique identity. Our technology stack (React, Next.js, and Node.js) ensures a fast, secure, and scalable experience tailored to your business needs."
  },
  {
    title: "Can I choose between a ready-made template and a custom design?",
    content: "Absolutely. Cartmint offers two plans: a basic plan with a variety of highly customizable ready-made templates, and a custom website plan that provides a bespoke design built from scratch to reflect your brand’s vision."
  },
  {
    title: "How does Cartmint ensure my eCommerce store stays scalable and secure?",
    content: "Our platform is built on modern, reliable technologies such as React, Next.js, and Node.js. These frameworks not only offer high performance and speed but also ensure your store can grow with your business while maintaining top-level security."
  },
  {
    title: "What integrations does Cartmint support?",
    content: "Cartmint comes equipped with essential integrations including secure payment gateways, leading shipping partner integrations, and built-in retention marketing solutions like WhatsApp and email. Additionally, we integrate Meta Pixel and Google Shopping codes to enhance your advertising efforts."
  },
  {
    title: "Is Cartmint GST compliant?",
    content: "Yes, our platform is fully GST compliant, making it easier for you to manage your taxes and ensure regulatory adherence without additional hassle."
  },
  {
    title: "What kind of support can I expect with Cartmint?",
    content: "We pride ourselves on exceptional customer service. Our support team is available to assist you with onboarding, customization queries, and any technical issues you might encounter. For our custom plan customers, we also offer dedicated support and personalized guidance throughout your journey."
  },
  {
    title: "How can I upgrade or switch between plans?",
    content: "If your business needs evolve, upgrading to our custom plan is straightforward. Simply contact our support team to discuss your requirements, and we’ll work with you to transition smoothly to a more tailored solution."
  },
  {
    title: "How do I get started with Cartmint?",
    content: "Getting started is easy! For the basic plan, you can sign up directly on our website. If you’re interested in our custom website plan or have further questions, feel free to contact us via our support email or phone number."
  },
  {
    title: "I have more questions – how can I contact you?",
    content: "We’re here to help! Reach out to us at support@cartmint.com or call us at +91 [Your Phone Number]. You can also fill out our contact form on the website, and one of our experts will get back to you promptly."
  }
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
    <div className='w-full mx-auto section flex sm:flex-row flex-col gap-8 justify-center items-center px-6 md:px-20'>
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