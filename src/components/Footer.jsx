import React from "react";
import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" text-white py-10 bg-[#030014]">
            <div className="container mx-auto px-6 lg:px-20"
            >
                {/* Top Section */}
                <div className="flex justify-between items-start flex-wrap gap-8">
                    {/* Logo and Description */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            <img src="https://pbs.twimg.com/profile_images/1851239398081273856/xg5oz4Ac_400x400.jpg" alt="" className="rounded-md w-10" />
                            <h1 className="text-2xl font-bold">CodeTrains</h1>
                        </div>
                        <p className="text-gray-400 mt-2 sm:w-full max-w-80">
                            We growing up your business with personal AI manager.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto">
                        {/* Company Links */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4 underline underline-offset-8">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="/service" className="hover:text-white">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/all-projects" className="hover:text-white">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="/pricing" className="hover:text-white">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        {/* <div>
                            <h3 className="font-semibold text-lg mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Cookies Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Data Processing
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400">
                    <div>
                        <p className="text-sm">&copy; 2025 CodeTrains. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            {/* <a href="#" className="hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-white">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-white">
                            <i className="fab fa-youtube"></i>
                        </a> */}
                        </div>
                    </div>
                    {/* <div className="flex space-x-4 text-2xl"> 
                        <a href="" target="_blank" className="hover:text-white"><FaInstagram /></a>
                        <a href="" target="_blank" className="hover:text-white"><FaLinkedin /></a>
                        <a href="" target="_blank" className="hover:text-white"><FaSquareXTwitter /></a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
