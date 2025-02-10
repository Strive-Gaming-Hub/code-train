import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles
import { Autoplay } from "swiper/modules";
import { BiSolidQuoteLeft } from 'react-icons/bi';

export default function Testimonials() {

      const [isVisible, setIsVisible] = useState(false);
    
    const testimonials = [
        {
            name: "Sophia Martinez",
            position: "Marketing Manager",
            image: "https://via.placeholder.com/150",
            text: "Atyabiz has completely transformed our online presence with their exceptional web development services. Their work has exceeded all our expectations!",
            projectName: 'Reduxpay',
        },
        {
            name: "Liam Johnson",
            position: "Chief Technology Officer",
            image: "https://via.placeholder.com/150",
            text: "The mobile app developed by Atyabiz is phenomenal. It has enhanced user engagement and provided an incredible experience for our customers.",
            projectName: 'Venue Original',

        },
        {
            name: "Emily Davis",
            position: "Product Manager",
            image: "https://via.placeholder.com/150",
            text: "Atyabiz delivered exceptional UI/UX designs that have impressed our team and clients alike. Their attention to detail is unmatched.",
        },
        {
            name: "James Wilson",
            position: "Founder & CEO",
            image: "https://via.placeholder.com/150",
            text: "Partnering with Atyabiz has been an excellent decision. Their custom solutions have greatly improved our business processes and efficiency.",
        },
        {
            name: "Isabella Garcia",
            position: "Creative Director",
            image: "https://via.placeholder.com/150",
            text: "The design team at Atyabiz brought our vision to life beautifully. Their creativity and professionalism are truly commendable.",
        },
        {
            name: "Noah Brown",
            position: "Business Analyst",
            image: "https://via.placeholder.com/150",
            text: "Atyabiz has made our project a success with their flawless development process. Their team is reliable, skilled, and great to work with.",
        },
    ];

    const splitText = (text) => text.split(' ');

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 1, },
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
    
    const paragraphVariants = {
        hidden: { y: -70, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1, // Adjust the animation duration
                ease: 'easeOut',
            },
        },
    };
    const cardVariant = {
        hidden: { y: -70, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1, // Adjust the animation duration
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="wf text-white sm:py-16 py-10 sm:pt-16 pt-0 sm:px-12 px-6 sm:mb-12 mb-4">
            <div className="text-center mb-10">
                <motion.p
                    className="sm:text-4xl sm:pl-16 font-semibold text-3xl font-ubuntu relative z-20 animated-heading"
                    variants={paragraphVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }} // Trigger when 80% is in view
                >
                    Trusted by Industry Leaders <span className='text-blue-500 font-ubuntu font-semibold'>Across the Globe</span>.
                </motion.p>
                <p className="sm:text-gray-400 text-gray-400/80 mt-5">
                    Join thousands of satisfied customers who rely on us for their AI-powered transformations.
                </p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    // Adjust for different screen sizes
                    0: {
                        slidesPerView: 1, // 1 slide per view for screens <= 640px
                    },
                    768: {
                        slidesPerView: 2, // 2 slides per view for screens <= 768px
                    },
                    1024: {
                        slidesPerView: 3, // 3 slides per view for screens > 1024px
                    },
                }}
                
                className="w-full px-6 h-fit"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full border border-blue-400/20 p-8 sm:px-10 rounded-xl shadow-md max-w-md mx-auto min-h-64"
                         style={{ background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)" }}
                        >
                            {/* Uncomment the below line if you want to include images */}
                            {/* <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-lg w-full mb-6"
                        /> */}
                            <div className='sm:mb-2 mb-4 text-gray-400 !text-2xl'>
                                <BiSolidQuoteLeft />
                            </div>
                            {/* <p>{testimonial.projectName}</p> */}
                            <p className="text-gray-300 mb-4 sm:text-lg text-base">
                                "{testimonial.text}"
                            </p>
                            <h4 className="italic">{testimonial.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="flex justify-center mt-8 space-x-4">
                <button className="p-2 bg-black/20 px-3.5 border border-blue-400/20 rounded-full hover:bg-gray-600 transition">
                    &larr;
                </button>
                <button className="p-2 bg-black/20 px-3.5 border border-blue-400/20 rounded-full hover:bg-gray-600 transition">
                    &rarr;
                </button>
            </div> */}
        </section>
    );
}
