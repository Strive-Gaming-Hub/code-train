import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { GoArrowRight, GoPlus } from 'react-icons/go';
const Projects = () => {

    const cards = [
        {
            img: "/reduxpay.png",
        },
        {
            img: "/aja.png",
        },
        {
            img: "/topfit.png",
        },
        {
            img: "/ascension.png",
        },
        {
            img: "/westcoast.png"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger effect between children
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const containerVariants2 = {
        hidden: { opacity: 0, clipPath: 'inset(0 50% 0 50%)', filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="sm:py-10 py-2 flex container sm:mx-8 mx-3 items-center justify-center flex-col w-fit">
                <motion.h1
                    className="text-center sm:text-5xl text-3xl font font-ubuntu font-semibold"
                    variants={containerVariants2}
                    initial="hidden"
                    animate="visible"
                >
                    Boost Sales with <br /> Smart Features
                </motion.h1>
                <div className="flex sm:justify-start justify-center flex-wrap gap-3 py-2 mt-10">
                    <button className="styled-button">Payments</button>
                    <button className="styled-button">Billing</button>
                    <button className="styled-button">Vendors</button>
                    <button className="styled-button">Security</button>
                    <button className="styled-button">Performance</button>
                </div>

                <div className="flex sm:justify-start justify-center flex-wrap gap-3 py-2">
                    <button className="styled-button">SEO</button>
                    <button className="styled-button">APIs</button>
                    <button className="styled-button">Mobile</button>
                    <button className="styled-button">More</button>
                </div>

                <motion.h1
                    className="text-center sm:text-5xl text-3xl font font-ubuntu font-semibold mb-10 mt-20"
                    variants={containerVariants2}
                    initial="hidden"
                    animate="visible"
                >
                    Our Previous Work
                </motion.h1>

                <motion.div
                    className="container mx-auto flex justify-center flex-wrap w-fit gap-6 pb-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {cards.map((src, index) => (
                        <motion.div
                            key={index}
                            className="shadow-lg rounded-xl overflow-hidden sm:w-[22rem] w-full sm:p-4 p-4 border-yellow-200/20 border bg-blue-300/10"
                        >
                            <div className='relative h-[300px] overflow-hidden rounded-xl '>
                                <div className=' w-full'>
                                    <div className='w-full h-full absolute bg-cover bg-no-repeat top-0 left-0 bg-top hover:bg-bottom   bg-red-100' style={{ backgroundImage: `url("${src?.img}")`, backgroundSize: "100%", transition: "all 11s" }} >
                                        {/* 
                                <img src={src?.img} alt={`Project ${index + 1}`} className='hover:scale-105 transition-transform rounded-xl duration-500' /> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className=" shadow-lg rounded-xl overflow-hidden sm:w-[22rem] w-full sm:p-4 p-4 border-yellow-200/20 border bg-blue-300/10"
                    >
                        <div className='relative w-full flex items-center justify-center h-[300px] overflow-hidden  flex-col rounded-xl '>
                            <span className='text-5xl' ><GoPlus /></span>
                            <button
                                className="bg-white text-center w-48  mt-4 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                                type="button"
                            >
                                <Link to="/contact">
                                    <div
                                        className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                                    >
                                        <GoArrowRight />
                                    </div>
                                    <p className="translate-x-2 text-[16px]">Your website</p>
                                </Link>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects