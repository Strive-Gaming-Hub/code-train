import React from "react";
import { motion, useInView } from "framer-motion";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ServiceHero = () => {
   // Ref for the section element
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true, threshold: 0.2 });
   const navigate = useNavigate();
   return (
      <motion.section
         ref={ref}
         className="g-[#030014] text-white py-20 sm:px-6 w-full"
         // initial={{ scale: 1.5, opacity: 0 }}
         // animate={isInView ? { scale: 1, opacity: 1 } : {}}
         // transition={{ duration: 1, ease: "easeOut" }}
      >
         <motion.div
            className=" mx-auto flex md:flex-row flex-col justify-between items-center w-full gap-0 sm:px-28 px-4"
            // initial={{ opacity: 0, y: 50 }}
            // animate={isInView ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
         >
            {/* Left Section */}
            <div className="space-y-6">
               <div className="p-0">
                  <div className="loader">
                     <motion.p
                        className="text-2xl sm:text-6xl font-bold"
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: .8, delay: 1 }}
                     >
                        We Provide
                     </motion.p>
                     <div className="overflow-hidden text-2xl sm:text-6xl sm:h-full h-8 font-bold leading-tight">
                        {["Website", "Shopify", "Apps", "UI/UX"].map((word, index) => (
                           <motion.span
                              key={index}
                              className="wordd"
                              initial={{ scale: 1.5, opacity: 0 }}
                              animate={isInView ? { scale: 1 , opacity: 1 } : {}}
                              transition={{ duration: 0.8, delay: 1 }}
                           >
                              {word}
                           </motion.span>
                        ))}
                     </div>
                  </div>
                  <motion.p
                     className="text-2xl md:text-6xl font-bold leading-tight px-[10px]"
                     initial={{scale: 1.5, opacity: 0 }}
                     animate={isInView ? { scale: 1, opacity: 1 } : {}}
                     transition={{ duration: 1, delay: 1  }}
                  >
                     Solutions That Can <br className="sm:block hidden" />
                     Change Your Life
                  </motion.p>
               </div>

               <motion.button
                  className="styled-button text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                  onClick={()=>navigate("/contact")}
               >
                  Let's Catch Up
               </motion.button>
            </div>

            {/* Right Section */}
            <motion.div
               className="flex justify-center relative w-fit"
               initial={{ opacity: 0, scale: 0.4 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 1, delay: 1 }}
            >
               {/* Main VR Image */}
               <div className="relative z-10 md:w-full w-64">
                  <motion.img
                     src="./a.png" // Replace with actual VR image
                     alt="VR Experience"
                     className="rounded-xl"
                     initial={{ rotate: 0, opacity: 0 }}
                     animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                     transition={{ duration: .6, delay: 1.5 }}
                  />
               </div>
            </motion.div>
         </motion.div>
      </motion.section>
   );
};

export default ServiceHero;
