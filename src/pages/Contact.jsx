import React, { useEffect, useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        details: "",
    });

    const [loading, setLoading] = useState(false);
    const accessKey = "2f86dcaf-5dda-4165-93a7-b1a6f281df88";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.dismiss();

        if (!formData.name || !formData.email || !formData.details) {
            toast.error("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: "New Contact Form Submission",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Message sent successfully! We will contact you soon.");
                setFormData({ name: "", email: "", details: "" });
            } else {
                toast.error("Failed to send the message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="md:flex md:flex-row flex-col my-5 md:px-20 px-2 bg-black/20 mx-auto">
            <ToastContainer autoClose={2000} position="top-left" />
            <div className="md:w-[45%] bg-cover bg-center relative rounded-lg overflow-hidden" style={{ backgroundImage: "url('/setup.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative text-white md:p-14 p-8 h-full flex flex-col justify-between">
                    <div>
                        <h1 className="md:text-4xl text-3xl font-bold mb-4">Ready to Transform Your Ecommerce Experience?</h1>
                        <p className="text-lg text-gray-200">Start your journey to a fully customized online store with Cartmint.</p>
                    </div>
                    <div>
                        <p className="uppercase font-bold text-sm">Email</p>
                        <p className="text-gray-200">support@cartmint.io</p>
                        <p className="uppercase font-bold text-sm mt-4">Phone</p>
                        <p className="text-gray-200">+91-9350051511</p>
                    </div>
                </div>
            </div>

            <div className="md:w-[60%] rounded-r-lg text-white md:p-14 p-8 pb-10 md:pl-16 flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="hidden" name="access_key" value={accessKey} />
                        <div>
                            <label className="block text-gray-200 text-sm mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your Full Name"
                                className="w-full p-2 bg-transparent text-white border-b border-gray-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-200 text-sm mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your Email"
                                className="w-full p-2 bg-transparent text-white border-b border-gray-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-200 text-sm mb-2" htmlFor="details">Project Details</label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Enter your Project Details"
                                className="w-full p-2 bg-transparent text-white border-b border-gray-400 focus:outline-none"
                                rows="2"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-40 bg-blue-600 text-white p-3 rounded transition duration-300 md:text-base text-sm ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                        >
                            {loading ? "Submitting... Wait" : "SEND MESSAGE"}
                        </button>
                    </form>
                </div>
                <div className="flex space-x-6 mt-10 text-xl text-white">
                    <a href="https://www.instagram.com/cartmint.io/?igsh=MWZjMGppdjh3Y2puOA%3D%3D&utm_source=qr#" className="text-gray-400 hover:text-white transition duration-300">
                        <BsInstagram  />
                    </a>
                    <a href="https://www.linkedin.com/company/cartmint/about/" className="text-gray-400 hover:text-white transition duration-300">
                        <BsLinkedin />
                    </a>
                    <a href="https://x.com/cartmint_io?s=11" className="text-gray-400 hover:text-white transition duration-300">
                        <BsTwitterX />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;