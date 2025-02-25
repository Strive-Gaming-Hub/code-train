import './card.css'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate = useNavigate();

    const headingText = 'Empowering brands with cutting-edge web solutions.';
    const paragraphText =
        ' Tired of ecommerce solutions that force you into a one-size-fits-all mold? At \n' +
        'Cartmint, we understand that your brand is unique and deserves a store that \n' +
        'reflects that. Our platform is built on modern technologies like React, Next.js, and \n' +
        'Node.js to provide you with an ecommerce solution thatʼs fully customizable—\n' +
        ' right down to the smallest detail. With our ready-made templates and custom \n' +
        'design options, you have the power to create a store that not only looks stunning \n' +
        'but also works flawlessly to drive your business growth.';

    const splitText = (text) => text.split(' ');

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Animation Variants for the paragraph
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

    const divVariants = {
        hidden: { x: -150, y: 10, opacity: 0 },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1, // Duration of the animation
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <div className='flex sm:flex-row flex-col justify-between sm:px-20 sm:py-20 px-3 mb-8 w-full relative overflow bg-[#030014]'>

                <div className='sm:w-[60%] xl:w-[40%] w-full flex gap-4 flex-col mt-8'>
                    <span className='text-blue-400'>Key Services</span>
                    <motion.h1
                        className="sm:text-5xl text-3xl text-gray-200 font-semibold font-ubuntu"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        {splitText(headingText).map((word, index) => (
                            <motion.span
                                key={`heading-${index}`}
                                variants={wordVariants}
                                style={{ display: 'inline-block', marginRight: '8px' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="sm:text-lg text-base sm:text-gray-400 text-gray-400/80 mt-3 mb-10 sm:leading-8 leading-6"
                        variants={paragraphVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }} // Trigger when 80% is in view
                    >
                        {paragraphText}
                    </motion.p>
                </div>

                <div className="relative xl:left-16 flex sm:gap-12 gap-6 flex-wrap flex-1 px-6 justify-center bg-transparent">
                        <ServiceCard
                            title="Unmatched Customization"
                            img="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg"
                            desc="Tailor every aspect of your online store to meet your brandʼs exact needs."
                        />

                        <ServiceCard
                            title="All-in-One Solution"
                            img="https://img.freepik.com/free-photo/top-view-nutritional-counter-app-concept_23-2149880602.jpg?uid=R103798305&ga=GA1.1.876949767.1667128645&semt=ais_hybrid"
                            desc="From payment gateways to shipping and marketing integrations, weʼve got it covered."
                        />

                        <ServiceCard
                            title="Tech-Forward Platform"
                            img="https://img.freepik.com/premium-photo/floating-computer-online-shop-shopping-bags_72104-2478.jpg?uid=R103798305&ga=GA1.1.876949767.1667128645&semt=ais_hybrid"
                            desc="Leverage the latest tech to ensure speed, security, and scalability."
                        />

                        <ServiceCard
                            title="Your Brand, Your Rules"
                            img="https://www.digitalopeners.com/images/portfolio/wordpress-frontend-development.png"
                            desc="Donʼt settle for standard designs. With Cartmint, youʼre in full control."
                        />
                </div>


                <div
                    className='h-[15rem] w-[15rem] bg-blue-600/40 absolute rounded-full top-80 right-0 blur-3xl z-10'
                ></div>

                <motion.div
                    className="sm:h-[30rem] h-[25rem] sm:w-[30rem] w-[25rem] bg-gradient-to-b from-blue-500/20 to-blue-900/5 absolute rounded-full sm:-bottom-40 -bottom-28 -left-[1rem] z-10"
                    variants={divVariants}
                    initial="hidden"
                    whileInView="visible" // Animation triggers when in view
                    viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
                >
                    <div className="h-[9.3rem] w-[9.3rem] rounded-full bg-[#1d1d1d] absolute right-0 top-4 border-2 border-blue-700 sm:flex hidden justify-center cursor-pointer items-center group-hover:border-4 z-50 group "
                        onClick={() => { navigate('/service') }}
                    >
                        <FaLocationArrow className="text-3xl text-blue-700 hover:scale-125 duration-300 transition-transform" />
                    </div>
                </motion.div>
            </div>
            <div className="w-full flex items-center justify-center">
                <motion.button
                    onClick={()=>navigate("/contact")}
                    className="px-6 py-3 text-white bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Talk to Our Experts
                </motion.button>
            </div>
        </>
    )
}

export default Services;