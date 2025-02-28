import './pricingcards.css';
import PricingCard from './PricingCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

const Pricing = () => {
    const [tab, setTab] = useState('quarter');
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate("/contact");
    };

    const paragraphVariants = {
        hidden: { y: -70, opacity: 0, filter: 'blur(10px)' },
        visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const paragraphVariants2 = {
        hidden: { y: 70, opacity: 0, filter: 'blur(10px)' },
        visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const pricingData = {
        quarter: [
            {
                price: 4999,
                time: "month",
                plan: "Basic Plan",
                paidTimes: "quarterly",
                icon: "🚀",
                cta: "Contact Us to Buy",
                features: [
                    "Customizable templates",
                    "Full ecommerce portal",
                    "Secure payments & shipping",
                    "Meta Pixel & Google Shopping integration",
                    "GST compliant site and invoicing",
                ],
            },
            {
                price: "Price on Request",
                plan: "Custom Website Plan",
                paidTimes: "quarterly",
                icon: "⚡",
                highlight: "Popular",
                cta: "Contact Us to Buy",
                features: [
                    "All features in Basic Plan",
                    "Fully custom templates",
                    "Tailored features & integrations",
                    "Expert guidance & support",
                ],
            },
        ],
        annual: [
            {
                price: 3999,
                time: "month",
                plan: "Basic Plan",
                paidTimes: "annually",
                icon: "🚀",
                cta: "Contact Us to Buy",
                features: [
                    "Customizable templates",
                    "Full ecommerce portal",
                    "Secure payments & shipping",
                    "Meta Pixel & Google Shopping integration",
                    "GST compliant site and invoicing",
                ],
            },
            {
                price: "Price on Request",
                plan: "Custom Website Plan",
                paidTimes: "annually",
                icon: "⚡",
                highlight: "Popular",
                cta: "Contact Us to Buy",
                features: [
                    "All features in Basic Plan",
                    "Fully custom templates",
                    "Tailored features & integrations",
                    "Expert guidance & support",
                ],
            },
        ]
    };

    return (
        <div id='pricing' className='md:py-20 py-14 md:px-20'>
            <motion.p
                className="text-3xl sm:text-5xl px-4 mb-5 text-center font-medium font-ubuntu"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                Transparent Pricing for Unrivaled Ecommerce Freedom
            </motion.p>
            <motion.p
                className='mb-16 px-4 text-center text-gray-400'
                variants={paragraphVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                Choose a plan that gives you the flexibility and power to build your dream store.
            </motion.p>

            <div className="w-full flex items-center justify-center mb-10">
                <motion.div
                    className="relative flex items-center justify-center gap-2 rounded-lg p-1 border border-blue-800/50"
                    initial="hidden"
                    animate="visible"
                    variants={tabVariants}
                >
                    <motion.div
                        className="absolute w-1/2 h-full bg-gradient-to-br from-[#6784ff] to-[#4462ff] rounded-md"
                        layout
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                        style={{
                            left: tab === "quarter" ? "0%" : "50%",
                            top: 0,
                        }}
                    />

                    <button
                        onClick={() => setTab("quarter")}
                        className={`px-10 py-2 rounded-md uppercase transition-all duration-300 relative z-10 ${
                            tab === "quarter" ? "text-white" : "hover:bg-indigo-950/40"
                        }`}
                    >
                        Quarter
                    </button>

                    <button
                        onClick={() => setTab("annual")}
                        className={`px-10 py-2 rounded-md uppercase transition-all duration-300 relative z-10 ${
                            tab === "annual" ? "text-white" : "hover:bg-indigo-950/40"
                        }`}
                    >
                        Annual
                    </button>
                </motion.div>
            </div>


            <motion.div className="pricing-container">
                {pricingData[tab].map((pricing, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <PricingCard {...pricing} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pricing;
