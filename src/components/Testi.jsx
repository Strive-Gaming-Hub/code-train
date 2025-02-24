import { img } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "tailwindcss/tailwind.css";

const testimonials = [
    {
        img: "https://reflect.app/home/build/q-f9bd42b4.png",
        name: "Ryan Delk",
        handle: "@delk",
        text: "Thanks to @cartmint, we launched our Shopify store in record time! Their seamless process and expert team made the entire journey a breeze. Highly recommend it for anyone diving into e-commerce!",
    },
    {
        img: "https://reflect.app/home/build/q-5b9ee7a6.png",
        name: "Demetria Giles",
        handle: "@drosewritings",
        text: "Building our WordPress site with @cartmint was the best decision we made. Everything from design to deployment was effortless, and the results speak for themselves—our traffic doubled!",
    },
    {
        img: "https://reflect.app/home/build/q-6a31352e.png",
        name: "Jeremy McPeak",
        handle: "@jwmcpeak",
        text: "@cartmint has transformed how we think about app development. Their innovative solutions and commitment to quality helped us launch an app that our customers absolutely love.",
    },
];
const testimonials2 = [
    {
        img: "https://reflect.app/home/build/q-f9bd42b4.png",
        name: "Ryan Delk",
        handle: "@delk",
        text: "Thanks to @cartmint, we launched our Shopify store in record time! Their seamless process and expert team made the entire journey a breeze. Highly recommend it for anyone diving into e-commerce!",
    },
    {
        img: "https://reflect.app/home/build/q-5b9ee7a6.png",
        name: "Demetria Giles",
        handle: "@drosewritings",
        text: "Building our WordPress site with @cartmint was the best decision we made. Everything from design to deployment was effortless, and the results speak for themselves—our traffic doubled!",
    },
    {
        img: "https://reflect.app/home/build/q-6a31352e.png",
        name: "Jeremy McPeak",
        handle: "@jwmcpeak",
        text: "@cartmint has transformed how we think about app development. Their innovative solutions and commitment to quality helped us launch an app that our customers absolutely love.",
    },
];

const Testi = () => {
    const [upperIndex, setUpperIndex] = useState(0);
    const [lowerIndex, setLowerIndex] = useState(0);

    useEffect(() => {
        const upperInterval = setInterval(() => {
            setUpperIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        const lowerInterval = setInterval(() => {
            setLowerIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }, 3000);

        return () => {
            clearInterval(upperInterval);
            clearInterval(lowerInterval);
        };
    }, []);

    return (
        <div className=" text-white  relative">
            <div className="slider">
                <Marquee className="" speed={40}>
                    {testimonials?.map((data, index) => {
                        // Replace "@Atyabiz" with styled <span> using regex
                        const formattedText = data?.text.replace(
                            /@Atyabiz/g,
                            '<span class="text-purple-500">@Atyabiz</span>'
                        );

                        return (
                            <div
                                key={index}
                                className="slide p-7 mx-2 rounded-xl border border-[#211f37] space-y-5"
                                style={{
                                    background:
                                        "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)",
                                }}
                            >
                                <div className="flex gap-3">
                                    <img
                                        className="rounded-full w-12 h-12"
                                        src={data?.img}
                                        alt=""
                                    />
                                    <div>
                                        <h1 className="font-medium">{data?.handle}</h1>
                                        <h1 className="text-gray-400 text-sm">{data?.name}</h1>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="text-gray-400"
                                        dangerouslySetInnerHTML={{ __html: formattedText }}
                                    ></p>
                                </div>
                            </div>
                        );
                    })}
                </Marquee>

                <Marquee className="my-4" direction="right" speed={40}>
                    {testimonials2?.map(data => {
                        const formattedText = data?.text.replace(
                            /@Atyabiz/g,
                            '<span class="text-purple-500 ">@Atyabiz</span>'
                        )
                        return (
                            <div className="slide p-7 mx-2 rounded-xl border border-[#211f37] space-y-5"
                                style={{ background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)" }}>
                                <div className="flex gap-3 "
                                >

                                    <img className="rounded-full w-12 h-12"
                                        src={data?.img} alt="" />
                                    <div>
                                        <h1 className="font-medium">{data?.handle}</h1>
                                        <h1 className="text-gray-400 text-sm">{data?.name}</h1>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="text-gray-400"
                                        dangerouslySetInnerHTML={{ __html: formattedText }}
                                    ></p>
                                </div>
                            </div>
                        )
                    })}

                </Marquee>
            </div>

        </div>
    );
};
export default Testi;
