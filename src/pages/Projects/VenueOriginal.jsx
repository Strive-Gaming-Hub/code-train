import React, { useEffect } from 'react'
import ProjectSwipper from '../../components/ProjectSwipper'
import { image } from 'framer-motion/client';

function VenueOriginal() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const images = [
        "/venue1.png",
        "/venue2.png",
        "/venue3.png",
        "/venue4.png",
        "/venue5.png",
      ];
    

    const goals = [
        'Browse Products by Category and Price Range',
        'Design a Custom Wishlist or Personalized Shopping',
        'User Registers for Account Management and Order Tracking',
        'Simple, Fast, and Secure Checkout Process',
    ]

    return (
        <div className='sm:container mx-auto'>
            <div className='rounded-xl border border-[#211f37] sm:m-10 m-6 lg:gap-10 gap-4  flex lg:flex-row flex-col justify-between overflow-hidden'
                style={{ background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)" }}
            >
                <div className='text-white sm:p-10 p-6 pt20 lg:w-1/2'>
                    <h1 className='md:font-bold md:text-4xl text-2xl '>Client</h1>
                    <h1 className='font-semibold md:text-6xl text-4xl py-3'>Venue Original</h1>
                    <p className='py-4 text-lg text-gray-300'>Venue Original is a trusted Gold Standard in the Fashion and Lifestyle category. Now an app-based shopping platform, making it easy to browse and shop the latest fashion trends, from clothing to accessories, all with the convenience of a seamless, personalized experience right at your fingertips.</p>

                    <h1 className='text-xl font-bold'>UI/UX • Shopify • E-Commerce</h1>
                </div>
                <div className='lg:w-1/2 lg:pt-20 pt-6 sm:px-10'>
                    <img src="/project2.svg" alt="" />
                </div>
            </div>

            <div className='md:py-16 py-12'>
                <h1 className='md:text-4xl text-3xl font-semibold text-center'>Scope of work</h1>
                <div className='flex md:flex-row flex-col px-4 items-center justify-center gap-20 mt-16'>
                    <div className='max-w-sm flex items-center justify-center flex-col '>
                        <img src="https://leo9studio.com/img/case-study/travelxp/ux_app_design_company_leo9_studio.svg" alt="" />
                        <h1 className='text-3xl font-semibold my-4'>UX Design</h1>
                        <p className='text-center  text-lg'>Keeping the target audience in mind the UX design was made very simple using the KISS principle.</p>
                    </div>
                    <div className='max-w-sm flex items-center justify-center flex-col'>
                        <img src="https://leo9studio.com/img/case-study/travelxp/ui_app_design_company_leo9_studio.svg" alt="" />
                        <h1 className='text-3xl font-semibold my-4'>UI Design</h1>
                        <p className='text-center  text-lg'>The colors and illustrations were designed to suit the business following a component-based design system.</p>
                    </div>
                </div>
            </div>

            {/* project goal */}
            <div className='md:py-16 py-12 px-4'>
                <h1 className='text-4xl font-semibold text-center'>Project Goals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-5 mt-16 align-middle items-center place-items-center">
                    {goals.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="relative drop-shadow-xl h-full max-w-sm overflow-hidden rounded-xl bg-transparent flex justify-center items-center"
                            >
                                <div className="relative flex h-full justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 max-w-sm flex-col bg-[#2B2B2B] p-8">
                                    <h1 className="text-2xl font-semibold my-4">{data}</h1>
                                </div>
                                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* screens */}
            <div className='md:py-16 py-12 md:px-0 px-4'>
                <h1 className='text-4xl font-semibold text-center'>Screens</h1>
                {/* <div className='flex items-center justify-center md:py-8 py-2'>
                    <img src="/venue3.png" alt="" className='rounded-xl lg:h-[32rem] md:w-[71%]' />
                </div>

                <div className='flex justify-center md:gap-4 gap-1 mx-auto md:w-[71%] md:px-4'>
                    <img src="/venue2.png" alt="" className='w-1/2 rounded-xl' />
                    <img src="/venue1.png" alt="" className='w-1/2 rounded-xl' />
                </div> */}
            </div>
                    <ProjectSwipper images={images} />

        </div>
    )
}

export default VenueOriginal