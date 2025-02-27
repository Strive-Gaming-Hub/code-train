import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiGearSix } from "react-icons/pi";
import { GoCpu } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const homeFeatures = [
    {
        title: "Deep Customization",
        description: "Design your store your way with powerful customization tools.",
        icon: PiGearSix,
    },
    {
        title: "Advanced Tech Stack",
        description: "Built on modern frameworks for top performance and security.",
        icon: GoCpu,
    },
    {
        title: "Ecommerce Management",
        description: "Easily handle products, orders, and customers in one place.",
        icon: IoCartOutline,
    },
    {
        title: "Marketing & Compliance",
        description: "Integrated tools for marketing, notifications, and compliance.",
        icon: FaRegCircleCheck,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function HomeFeatures() {
    const navigate = useNavigate();

    return (
        <section className="py-10 text-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-ubuntu font-semibold text-center mb-6"
                >
                    Why Choose CartMint?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
                >
                    Empower your business with powerful features that enhance your online store experience.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {homeFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                transition: { duration: 0.2 },
                            }}
                            className="p-8 shadow-md flex flex-col items-center text-center transition"
                        >
                            <feature.icon className="text-white w-16 h-16 mb-4" />
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-gray-300 text-sm mt-2">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-12 flex justify-center"
                >
                    <motion.button
                        className="px-5 py-3 font-semibold rounded-xl text-white border border-gray-800 bg-transparent shadow-md hover:bg-gray-900 transition duration-300"
                        onClick={() => navigate("/features")}
                    >
                        View All Features
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
