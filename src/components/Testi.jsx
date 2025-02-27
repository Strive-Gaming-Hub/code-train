import { img } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "tailwindcss/tailwind.css";

const testimonials = [
    {
        img: "/testi1.jpg",
        name: "Amit Sharma",
        handle: "@amit_sharma",
        text: "Thanks to @cartmint, we launched our Shopify store in record time! Their seamless process and expert team made the entire journey a breeze. Highly recommended for Indian e-commerce businesses!",
    },
    {
        img: "/testi2.jpg",
        name: "Priya Nair",
        handle: "@priya_nair",
        text: "Building our WooCommerce site with @cartmint was the best decision we made. Our traffic doubled, and customer engagement has never been better!",
    },
    {
        img: "/testi3.jpeg",
        name: "Rahul Verma",
        handle: "@rahul_verma",
        text: "@cartmint transformed how we think about e-commerce. Their innovative solutions helped us scale our online marketplace effortlessly.",
    },
    {
        img: "/testi5.webp",
        name: "Sneha Kapoor",
        handle: "@sneha_kapoor",
        text: "Migrating to Shopify was smoother than we imagined, thanks to @cartmint. Our sales have skyrocketed since the switch!",
    },
    {
        img: "/testi4.jpg",
        name: "Arjun Mehta",
        handle: "@arjun_mehta",
        text: "@cartmint made it incredibly easy to integrate a subscription model into our store. Customer retention has never been better!",
    }
];

const testimonials2 = [
    {
        img: "/testi6.webp",
        name: "Neha Gupta",
        handle: "@neha_codes",
        text: "We needed a high-performance e-commerce platform, and @cartmint delivered beyond expectations. Our website speed has doubled, and customer engagement is at an all-time high!",
    },
    {
        img: "/testi7.webp",
        name: "Vikram Singh",
        handle: "@vikram_singh",
        text: "@cartmint helped us scale our online store with advanced analytics and reports. Now, we make data-driven decisions effortlessly!",
    },
    {
        img: "/testi5.webp",
        name: "Ananya Iyer",
        handle: "@ananya_writes",
        text: "Launching our digital marketplace felt overwhelming until we found @cartmint. Their multi-vendor solutions made everything hassle-free!",
    },
    {
        img: "/testi8.webp",
        name: "Rohan Desai",
        handle: "@rohan_d",
        text: "With @cartmint’s help, we integrated multiple payment gateways, giving our customers flexibility and boosting our conversion rates!",
    },
    {
        img: "/testi9.avif",
        name: "Pooja Joshi",
        handle: "@pooja_biz",
        text: "@cartmint’s security compliance solutions ensured our store met all regulations without any headaches. Highly recommended for peace of mind!",
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
                                        className="rounded-full w-12 h-12 object-cover object-center"
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

                                    <img className="rounded-full w-12 h-12 object-cover object-center"
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
