import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function ServiceEffect() {
    const [shrink, setShrink] = useState(false);
    const firstSlideRef = useRef(null);
    const lastSlideRef = useRef(null);
    const controls = useAnimation();

    // Set up IntersectionObserver for the first slide
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShrink(false); // Expand slides when the first slide is in view
                }
            },
            { threshold: 0.5 } // Trigger when half of the first slide is visible
        );

        if (firstSlideRef.current) {
            observer.observe(firstSlideRef.current);
        }

        return () => {
            if (firstSlideRef.current) observer.unobserve(firstSlideRef.current);
        };
    }, []);

    // Set up IntersectionObserver for the last slide
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setShrink(true); // Shrink slides when the last slide is scrolled past
                }
            },
            { threshold: 0.5 } // Trigger when half of the last slide is no longer visible
        );

        if (lastSlideRef.current) {
            observer.observe(lastSlideRef.current);
        }

        return () => {
            if (lastSlideRef.current) observer.unobserve(lastSlideRef.current);
        };
    }, []);

    // Apply shrinking effect based on the `shrink` state
    useEffect(() => {
        if (shrink) {
            controls.start({ scale: 0.8, opacity: 0.6, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: 1, opacity: 1, transition: { duration: 0.5 } });
        }
    }, [shrink, controls]);
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }} className='card-container hidden md:flex flex-col items-center max-w-[1280px] mx-auto section '>

            {/* <h4 className='sticky top-24 mb-6 text-center text-4xl font-russo font-bold'>Our Services</h4> */}

            <div className="cardd bg-center w-full bg-cover rounded-2xl" >
                {/* dfksdfjlk */}
               <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/services/srv4.png" alt="" />
            </div>
            <div className="cardd rounded-2xl overflow-hidden max-w-[97%] bg-cover bg-right ">
                {/* <h2 className='sm:text-5xl text-3xl z-40 absolute -0 font-bold font-josefin text-white'>#SiteRedesign</h2> */}
                {/* <h2 className='text-3xl z-40 absolute -bottom-3 font-bold font-russo italic text-white'>#002</h2> */}
                <img src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/services/srv3.png" className='mt-2' alt="" />
            </div>
            <div className="cardd rounded-2xl overflow-hidden max-w-[95%]">
               <img src="/seo-service.png" className='mt-5' alt="" />
            </div>
            <div className="cardd rounded-2xl overflow-hidden max-w-[93%]">
                 <img src="/web-redesign-service.png" className='mt-8' alt="" />
            </div>
            <div className="cardd rounded-2xl overflow-hidden max-w-[91%]">
                  <img src="/web-development-service.png" className='mt-11 rounded-xl' alt="" />
            </div>
        </motion.div>

    )
}

export default ServiceEffect