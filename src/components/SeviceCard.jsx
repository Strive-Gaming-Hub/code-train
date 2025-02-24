import { motion } from 'framer-motion';
import React, { useEffect } from 'react'

const SeviceCard = ({ title, desc, services, img, seviceName, subHeading  }) => {

    const textRevealVariant = {
        hidden: { opacity: 0, x: -50, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const containerVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 100, scale: 0.8, rotate: 15 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: .7,
                ease: "easeOut",
            },
        },
    };
    
    return (
        <div className="flex md:flex-row flex-col justify-between items-center w-full mx-auto">
            {/* Left Section */}
            <motion.div
                className="md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariant}
            >
                <motion.h1
                    className="md:text-5xl text-3xl font-bold"
                    variants={textRevealVariant}
                >
                    <span className='text-[#956afa]'>{title}</span>  Development
                </motion.h1>
                <motion.h2
                    className="font-semibold text-xl my-1.5"
                    variants={textRevealVariant}
                >
                    {subHeading}
                </motion.h2>
                <motion.p
                    className="my-4 text-gray-400"
                    variants={textRevealVariant}
                >
                   {desc}
                </motion.p>

                <div className="py-3">
                    <motion.h1
                        className="font-semibold md:text-2xl text-xl"
                        variants={textRevealVariant}
                    >
                        Our {title} Development Services
                    </motion.h1>
                    <motion.div
                        className="my-3 flex gap-3 flex-wrap"
                        variants={textRevealVariant}
                    >
                        {services.map((data, index) => (
                            <motion.p
                                key={index}
                                className="sm:text-sm text-xs bg-[#4B2FF6] font-medium px-2 rounded-xl text-nowrap py-0.5"
                                variants={textRevealVariant}
                            >
                                {data}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Section (Image) */}
            <motion.div
                className="md:w-1/2 flex items-center md:justify-end justify-center md:mt-0 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageVariant}
            >
                <img
                    src={img}
                    alt=""
                    className="rounded-t-xl rounded-b-full overflow-hidden max-w-[380px] md:w-[60%] w-[95%] max-h-[480px]"
                />
            </motion.div>
        </div>
    )
}

export default SeviceCard