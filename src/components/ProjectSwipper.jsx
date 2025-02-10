import React, { useState, useEffect } from "react";

const ProjectSwipper = ({images}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full  rounded-lg"
          />
        ))}
      </div>

      {/* Previous Button */}
      {/* <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        ❮
      </button> */}

      {/* Next Button */}
      {/* <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        ❯
      </button> */}

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-300" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSwipper;
