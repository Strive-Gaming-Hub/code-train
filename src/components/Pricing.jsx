import React, { useEffect, useRef } from 'react'
import './pricingcards.css'
import PricingCard from './PricingCard'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {

    const navigate = useNavigate();
    const handleCTAClick = () => {
        navigate("/contact");
      };

    const paragraphVariants = {
        hidden: { y: -70, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: .8, // Adjust the animation duration
                ease: 'easeOut',
            },
        },
    };

    const paragraphVariants2 = {
        hidden: { y: 70, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: .8, // Adjust the animation duration
                ease: 'easeOut',
            },
        },
    };

    return (

        <div id='pricing' className='md:py-20 py-14 px-0'>
            {/* <p className='text-center mb-4 text-blue-500/80'>Pricing</p> */}
            {/* <h2 className='text-4xl mb-5 text-center font-medium font-ubuntu'>Flexible Pricing Plans</h2> */}
            <motion.p
                className="text-4xl px-4 mb-5 text-center font-medium font-ubuntu"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }} // Trigger when 80% is in view
            >
                Flexible Pricing <span className='text-blue-500'>Plans</span>
            </motion.p>
            <motion.p
            className='mb-16 px-4 text-center text-gray-400'
                variants={paragraphVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >Choose a pricing plan tailored to your needs. From startups to enterprises.</motion.p>

            <div className="pricing-container">
                {/* Basic Plan */}

                <PricingCard onClick={handleCTAClick} plan='Basic Plan' icon='🚀' price='7999' cta='Contact Us to Buy' comparison='Best for just starting' features={['landing page', 'Shopify Setup', 'React.js Website' , 'Optimization Monthly']} />

                {/* Pro Plan */}

                <PricingCard onClick={handleCTAClick} plan='Pro Stack' icon='⚡' highlight='POPULAR' price='15999' cta='Contact Us to Buy' comparison='Ideal for growing startups' features={['Custom Website','E-Commerce', 'Shopify Customization', 'Cross-Platform App']} />

                <PricingCard onClick={handleCTAClick} plan='Enterprice' icon='🏢' price='21999' cta='Contact Us to Buy' comparison='For enterprise solutions' features={['Full-Stack Website', 'Advanced eCommerce', 'Cross-Platform Apps', 'Shopify']} />

            </div>
        </div>
    )
}

export default Pricing