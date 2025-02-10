import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, features, price, comparison, cta, icon, highlight }) => {

    const cardRef = useRef(null);
    
    useEffect(() => {
        const card = cardRef.current;

        if (card) {
            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate rotation based on mouse position
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

                const innerGlow = card.querySelector(".inner-glow");
                if (innerGlow) {
                    innerGlow.style.background = `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(103, 132, 255, 0.2) 0%,
            transparent 70%
          )`;
                }
            };

            const handleMouseLeave = () => {
                card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";

                const innerGlow = card.querySelector(".inner-glow");
                if (innerGlow) {
                    innerGlow.style.background = `radial-gradient(
            circle at 50% 50%,
            rgba(103, 132, 255, 0.15) 0%,
            transparent 70%
          )`;
                }
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup event listeners on component unmount
            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);
    
  return (
      <div className="pricing-card " ref={cardRef}>
          <div className="inner-glow" />
          <div className="card-blur" />
          <div className={`highlight ${highlight ? 'block' : 'hidden'}`}>{highlight}</div>
          <div className="plan-icon">{icon}</div>
          <h2 className="plan-name">{plan}</h2>
          <div className="price">
              {price}<span>/month</span>
          </div>
          <ul className="features">
              {
                features.map((feat, i) => (
                    <li>{feat}</li>
                ))
              }
          </ul>
          <button className="cta-button  w-full">
            <Link to='/contact' className='w-full'>{cta}</Link></button>
          <p className="comparison">{comparison}</p>
      </div>
  )
}

export default PricingCard