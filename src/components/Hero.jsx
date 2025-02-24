import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Marquee from "react-fast-marquee";

const Hero = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine); // Load slim version of tsparticles
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <div id="particles-js" className="relative min-h-screen bg-black">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    src="/hero.webm"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
            </div>

            {/* Sparkle Effect */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.2,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                size: 4,
                                duration: 2,
                                opacity: 0.8,
                            },
                            push: {
                                particles_nb: 4,
                            },
                        },
                    },
                    retina_detect: true,
                }}
                className="absolute inset-0 pointer-events-none"
            />

            {/* Hero Content */}
            <div className="relative w-full flex flex-col items-center pt-10 justify- z-10 h-screen">
                <div className="w-full text-center sm:py-20 py-16 sm:pt-16 pt-12 md:px-20 px-6 text-white">
                    <h2 className="sm:text-5xl text-3xl font-bold font-Gabarito">
                        Unlock Total Ecommerce Freedom with Cartmint
                    </h2>
                    <p className="sm:px-0 px-4 sm:mt-3 mt-4 sm:text-gray-400 text-gray-400/80 sm:text-base text-sm">
                        Say goodbye to cookie-cutter designs and hello to a platform that adapts to your
                        brand, your way.
                    </p>
                </div>

                <main className="relativeflex flex-col backdrop-blur-md mt-[5.5rem] h-1/2 pt-20 justify-center  w-full overflow-hidden antialiased absolute bottom-0 sm:rounded-none rounded-xl sm:border-0 border-t border-purple-800">
                    <div className='flex justify-center items-center sm:gap-5 gap-3'>
                        <div className='sm:w-20 w-9 bg-blue-500 h-[2px]'></div>
                        <h4 className='uppercase text-white sm:text-base text-xs'>Trusted by amazing brands</h4>
                        <div className='sm:w-20 w-9 bg-blue-500 h-[2px]'></div>
                    </div>
                    <div className="w-full mx-auto px-4 md:px-20 py-10">
                        <div className="text-center">

                            <div
                                x-data="{}"
                                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                            >
                                <Marquee speed={50}>
                                    <ul x-ref="loos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ">
                                        <li>
                                            <img src="./venueicon.svg" alt="venue original logo" className="w-28" />
                                        </li>
                                        <li>
                                            <img src="./Reduxpayicon.svg" alt="reduxpay logo" className="w-28" />
                                        </li>
                                        <li>
                                            <img src="./topfiticon.svg" alt="top fit logo" className="w-14" />
                                        </li>
                                    </ul>
                                </Marquee>
                            </div>

                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hero;
