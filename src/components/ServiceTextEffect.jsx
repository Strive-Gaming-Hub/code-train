import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceHero from "./ServiceHero";

gsap.registerPlugin(ScrollTrigger);

const ServiceTextEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // GSAP timeline for animations
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".imageBoard",
                pin: true,
                start: "top top",
                end: "+=200%", // Extend the scrollable area for slower animation
                scrub: 3, // Higher scrub value for smoother and slower animation
            },
            defaults: {
                ease: "none",
            },
        });

        timeline
            .to(
                document.body,
                {
                    delay: 0.3,
                    backgroundColor: "#f0f0f0",
                },
                "start"
            )
            .to(
                ".upper-container h1",
                {
                    scale: 5,
                },
                "start"
            )
            .to(
                ".upper-container h1",
                {
                    opacity: 0,
                },
                "start"
            )
            .to(
                "#scaleableImg1",
                {
                    scale: 10,
                    x: -1500,
                },
                "start"
            )
            .to(
                "#scaleableImg2",
                {
                    scale: 10,
                    x: -2500,
                },
                "start"
            )
            .to(
                "#scaleableImg3",
                {
                    scale: 10,
                    x: -2000,
                },
                "start"
            )
            .to(
                "#scaleableImg4",
                {
                    scale: 10,
                    x: 3000,
                },
                "start"
            )
            .to(
                "#scaleableImg5",
                {
                    scale: 10,
                    x: 2000,
                },
                "start"
            )
            .to(
                ".cardImage",
                {
                    delay: 0.1,
                    scale: 1,
                },
                "start"
            )
            .to(
                ".cardImage",
                {
                    delay: 0.3,
                    opacity: 1,
                },
                "start"
            )
            .to(".scaleableImg", {
                opacity: 0,
            });

        // Cleanup GSAP animation when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            timeline.kill();
        };
    }, []);

    return (
        <div>
            <div className="upper-container container mx-auto ">
                <h1 className="font-normal text-center uppercase font-ubuntu lg:!text-7xl sm:!text-5xl !text-3xl bg-gradient-to-b from-white mx-auto via-gray-200 to-gray-500 bg-clip-text text-transparent px-12">
                    Website Development • React.JS Website • Custom Logo • UI/UX • Wordpress • Shopify • Cross Platform App • Digital Marketing • E-Commerce • SEO • WEB DESIGN • ANDROID APP • IOS
                </h1>
            </div>
            <div className="imageBoard" ref={containerRef}>
                <div className="cardImage !h-fit text-white">
                    <ServiceHero />
                </div>
            </div>
        </div>
    );
};

export default ServiceTextEffect;
