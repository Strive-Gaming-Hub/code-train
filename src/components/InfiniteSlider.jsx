import React from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";

const InfiniteSlider = () => {
    // Array of text items to display in the slider
    const textItems = [
        "E-Commerce",
        "Landing Page",
        "Dashboards",
        "Payment Gateway",
        "Shopping Cart",
        "Product Catalog",
        "Order Management",
        "E-Commerce",
        "Landing Page",
        "Dashboards",
        "Payment Gateway",
        "Shopping Cart",
        "Product Catalog",
        "Order Management",
        "E-Commerce",
        "Landing Page",
        "Dashboards",
        "Payment Gateway",
        "Shopping Cart",
        "Product Catalog",
        "Order Management"
    ];

    // Duplicate text items to ensure continuous loop
    const items = [...textItems, ...textItems];

    return (

        <div className="mb-6">

            <h1 className="md:text-4xl text-3xl font-semibold text-center mb-7 mt-5 capitalize px-0">Select your plan to get 
                <span className="text-blue-500"> best services</span>
            </h1>
            
            <div className="relative overflow-hidden w-full bg-black py-3">

                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 18, // Speed of the animation
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="sm:mx-4 mx-2  md:text-4xl text-lg font-ubuntu font-extralight uppercase text-gray-300 flex items-center gap-5"
                        >
                            {item} <PiStarFourFill />
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteSlider;
