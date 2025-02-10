import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 sm:px-16 px-7 bg-[#030014]">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1851239398081273856/xg5oz4Ac_400x400.jpg"
            alt=""
            className="rounded-md"
          />
        </div> */}
        <h1 className="sm:text-xl text-lg font-bold">
          <Link to='/'>CodeTrains</Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium bg-white/5 border border-white/10 px-2 py-1.5 rounded-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-purple-400 px-3 py-1 ${isActive && "bg-white text-black rounded-lg"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `hover:text-purple-400 px-3 py-1 ${isActive && "bg-white text-black rounded-lg"
            }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/all-projects"
          className={({ isActive }) =>
            `hover:text-purple-400 px-3 py-1 ${isActive && "bg-white text-black rounded-lg"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `hover:text-purple-400 px-3 py-1 ${isActive && "bg-white text-black rounded-lg"
            }`
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-purple-400 px-3 py-1 ${isActive && "bg-white text-black rounded-lg"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-blue-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 z-50 right-0 h-full w-72 bg-black/60 backdrop-blur-md shadow-blue-700/20 pt-3 shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-blue-700 focus:outline-none pr-3"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start space-y-4 px-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-purple-400 px-3 py-1 ${isActive && "bg-gray-200 text-black rounded-lg "
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `hover:text-purple-400 px-3 py-1 ${isActive && "bg-gray-200 text-black rounded-lg"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/all-projects"
            className={({ isActive }) =>
              `hover:text-purple-400 px-3 py-1 ${isActive && "bg-gray-200 text-black rounded-lg"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `hover:text-purple-400 px-3 py-1 ${isActive && "bg-gray-200 text-black rounded-lg"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-purple-400 px-3 py-1 ${isActive && "bg-gray-200 text-black rounded-lg"
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex px-6 mt-20 items-center space-x-4">
          <Link to='/contact' className="start-btn mt-0 mb-0 px-4 text-sm !py-2 text-white bg-blue-700 hover:border-white !rounded-lg">
            Start Project
          </Link >
        </div>

      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to='/contact' className="start-btn mt-0 mb-0 px-4 text-sm !py-2 text-white  hover:border-white !rounded-lg"
          style={{ background: "linear-gradient(180deg, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, .42) 100%), rgba(113, 47, 255, .24)" }}>
          Start Project
        </Link >
      </div>
    </header>
  );
};

export default Header;
