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
    {
        img: "https://reflect.app/home/build/q-f9bd42b4.png",
        name: "Sophia Carter",
        handle: "@sophiacodes",
        text: "Our migration to Shopify was smoother than we ever imagined, thanks to @cartmint. Their expert team handled everything, and our sales have skyrocketed since the switch!",
    },
    {
        img: "https://reflect.app/home/build/q-5b9ee7a6.png",
        name: "Michael Johnson",
        handle: "@mikeJ_dev",
        text: "@cartmint made it incredibly easy to integrate a subscription model into our WooCommerce store. Customer retention has never been better!",
    }
];

const testimonials2 = [
    {
        img: "https://reflect.app/home/build/q-6a31352e.png",
        name: "Jessica Huang",
        handle: "@jesscodes",
        text: "We needed a high-performance e-commerce platform, and @cartmint delivered beyond our expectations. Our website speed has doubled, and customer engagement has improved significantly!",
    },
    {
        img: "https://reflect.app/home/build/q-f9bd42b4.png",
        name: "Daniel Thompson",
        handle: "@danthom",
        text: "@cartmint helped us scale our online store with advanced analytics and reports. Now, we make data-driven decisions effortlessly!",
    },
    {
        img: "https://reflect.app/home/build/q-5b9ee7a6.png",
        name: "Emily Roberts",
        handle: "@emilywrites",
        text: "Launching our digital marketplace was daunting until we found @cartmint. Their seamless multi-vendor solutions made everything hassle-free!",
    },
    {
        img: "https://reflect.app/home/build/q-6a31352e.png",
        name: "Chris Martinez",
        handle: "@chrisM",
        text: "With @cartmint's help, we integrated multiple payment gateways, giving our customers flexibility and boosting our conversion rates!",
    },
    {
        img: "https://reflect.app/home/build/q-f9bd42b4.png",
        name: "Olivia Bennett",
        handle: "@liv_biz",
        text: "@cartmint's security compliance solutions ensured our store met all regulations without any headaches. Highly recommended for peace of mind!",
    }
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
                <Marquee className="" speed={80}>
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

                <Marquee className="my-4" direction="right" speed={80}>
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
