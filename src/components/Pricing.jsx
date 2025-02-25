import './pricingcards.css'
import PricingCard from './PricingCard'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const Pricing = () => {

    const navigate = useNavigate();
    const handleCTAClick = () => {
        navigate("/contact");
    };

    const paragraphVariants = {
        hidden: {y: -70, opacity: 0, filter: 'blur(10px)'}, visible: {
            y: 0, opacity: 1, filter: 'blur(0px)', transition: {
                duration: .8, ease: 'easeOut',
            },
        },
    };

    const paragraphVariants2 = {
        hidden: {y: 70, opacity: 0, filter: 'blur(10px)'}, visible: {
            y: 0, opacity: 1, filter: 'blur(0px)', transition: {
                duration: .8, ease: 'easeOut',
            },
        },
    };

    const pricingData = [
        {
            price: 3895,
            time: "month",
            plan: "Basic Plan",
            icon: "🚀",
            cta: "Contact Us to Buy",
            features: [
                "Customizable templates",
                "Full ecommerce portal",
                "Secure payments & shipping",
                "Retention tools (WhatsApp & email)",
                "Meta Pixel & Google Shopping integration",
                "GST setup & real-time WhatsApp alerts"
            ]
        },
        {
            price: "Price on Request",
            plan: "Custom Website Plan",
            icon: "⚡",
            highlight: "Popular",
            cta: "Contact Us to Buy",
            features: [
                "All features in Basic Plan",
                "Fully custom templates",
                "Tailored features & integrations",
                "Expert guidance & support"
            ]
        }
    ];


    return (

        <div id='pricing' className='md:py-20 py-14 px-6 md:px-20'>
            <motion.p
                className="text-4xl px-4 mb-5 text-center font-medium font-ubuntu"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.8}}
            >
                Transparent Pricing for Unrivaled Ecommerce Freedom
            </motion.p>
            <motion.p
                className='mb-16 px-4 text-center text-gray-400'
                variants={paragraphVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.8}}
            >Choose a plan that gives you the flexibility and power to build your dream store.
            </motion.p>

            <div className="pricing-container">

                {pricingData.map((pricing, index)=>(<PricingCard key={index} {...pricing} />))}

            </div>
        </div>)
}

export default Pricing