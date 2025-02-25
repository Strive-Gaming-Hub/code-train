import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiGearSix } from "react-icons/pi";
import { GoCpu, GoMegaphone } from "react-icons/go";
import { IoCartOutline, IoRocketOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const features = [
    {
        title: 'Deep Customization Tools',
        description:
            'Create a store that’s uniquely yours with in-depth design options, from templates to fully custom builds.',
        icon: PiGearSix,
    },
    {
        title: 'Robust Technology Stack',
        description:
            'Built on React, Next.js, and Node.js for top performance, scalability, and security.',
        icon: GoCpu,
    },
    {
        title: 'Complete Ecommerce Ecosystem',
        description:
            'Manage products, orders, and customers with ease using our full-featured admin panel.',
        icon: IoCartOutline,
    },
    {
        title: 'Integrated Marketing Solutions',
        description:
            'Boost sales with built-in WhatsApp, email marketing, and analytics integrations.',
        icon: GoMegaphone,
    },
    {
        title: 'Compliance and Notifications',
        description:
            'Stay compliant with GST setups and get real-time sales notifications via WhatsApp.',
        icon: FaRegCircleCheck,
    },
    {
        title: 'Future-Proof Design',
        description:
            'Adaptable and flexible, CartMint grows with your business without limitations.',
        icon: IoRocketOutline,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function FeaturesContent() {
    const navigate = useNavigate();

    return (
        <main className="relative text-center py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 px-4 leading-tight font-ubuntu"
            >
                Unlock Total Ecommerce Freedom
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto px-4 leading-relaxed"
            >
                Say goodbye to cookie-cutter designs and hello to a platform that adapts to your brand, your way.
            </motion.p>

            {/* Features Section with Stagger Animation */}
            <motion.section
                className="mt-10 relative"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto border-white border-opacity-50">
                    {features.map((feature, index) => {
                        let borderClasses = "border-transparent border-opacity-50";

                        if (index < 3) borderClasses += " lg:border-b";
                        if (index % 3 !== 2) borderClasses += " lg:border-r";
                        if (index < 4) borderClasses += " sm:border-b";
                        if (index % 2 === 0) borderClasses += " sm:border-r";

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                className={`bg-transparent p-6 flex flex-col items-center gap-3 transition duration-300 ease-in-out
                                    ${borderClasses} hover:border-opacity-100 hover:shadow-[inset_0px_5px_15px_rgba(255,255,255,0.3)]`}
                            >
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                >
                                    <feature.icon className="text-white w-16 sm:w-20 h-16 sm:h-20"/>
                                </motion.div>

                                <h3 className="text-lg md:text-2xl font-medium text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 font-light text-sm sm:text-base leading-snug text-center">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex justify-center"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                    onClick={() => navigate('/contact')}
                >
                    Schedule a Demo
                </motion.button>
            </motion.div>
        </main>
    );
}

export default FeaturesContent;
