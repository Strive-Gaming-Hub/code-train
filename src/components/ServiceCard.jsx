import React, { useRef, useEffect, useState } from 'react';
import './card.css';

const ServiceCard = ({ img, title, desc, className }) => {
    const cardRef = useRef(null); // Reference to the card
    const [isVisible, setIsVisible] = useState(false); // Tracks visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Add animation class when card is visible
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the card is visible
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div className={className}>
            <div
                ref={cardRef}
                className={`card group border-[.1px] border-[#276bf30c] shadow-blue-500 shadow-[0px_0px_10px_-8px_rgba(0,_0,_0,_0.1)] p-5 text-center w-[20rem] min-h-[2rem] rounded-2xl relative z-50 overflow-hidden scale-150 ${isVisible ? 'animate' : ''
                }`}
                style={{
                    background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)"
                }}
            >
                <img
                    src={img}
                    className="relative z-50 rounded-xl h-[12rem] w-full"
                    alt={title}
                />
                <h2 className="leading-8 !text-2xl font-bold mt-5 text-gray-100 group-hover:text-blue-600 group-hover:-translate-y-1 transition-all duration-300">
                    {title}
                </h2>

                <p className="text-gray-400 text-sm mt-4">{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
