import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Cards = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="relative bg-[#212121] py-20 px-5">
      {/* Custom Cursor */}
      <div
        className={`fixed w-8 h-8  pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 z-50 ${
          isHovering ? "opacity-100 bg-pink-500" : "opacity-0"
        }`}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      ></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          className="bg-[#2B2B2B] rounded-xl shadow-lg p-6 text-white cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex space-x-2 items-center mb-4">
            <div className="relative">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile 1"
                className="w-14 h-14 rounded-full border-2 border-blue-500"
              />
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile 2"
                className="w-14 h-14  rounded-full border-2 border-pink-500"
              />
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile 2"
                className="w-14 h-14 rounded-full border-2 border-pink-500"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Craft together.</h3>
          <p className="text-gray-400">
            Create, craft and share stories together with real-time
            collaboration.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#2B2B2B] rounded-xl shadow-lg p-6 px-10 text-white flex flex-col justify-center items-center relative cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h3 className="text-4xl font-bold mb-4 text-center text-gray-500">
            This year has been{" "}
            <span
              className="text-pink-500 cursor-pointer relative"
            >
              massive
            </span>{" "}
            for us!
          </h3>
          <h1 className="text-center font-semibold text-2xl mt-4">
            Never lose attention.
          </h1>
          <p className="text-gray-400 text-center">
            Engage your audience with fun reactions and interactive effects.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#2B2B2B] rounded-xl shadow-lg text-white cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src="https://chroniclehq.com/images/emoji-bg.png"
            alt=""
            className="rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-center">
              Express yourself.
            </h3>
            <p className="text-gray-400 text-center">
              Make presentations human and fun again with reactions and emotes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
