import React from 'react'

const ProjectCard = ({ clientName, description, services, img, reverse }) => {
    return (
        <div className={`rounded-xl border border-[#211f37] sm:my-8 my-4 lg:gap-10 gap-4  flex ${reverse %2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col justify-between overflow-hidden`}
            style={{ background: "radial-gradient(57.89% 132% at 65.79% -35%, rgba(120, 123, 255, .06) 0%, rgba(120, 123, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 54.17%, rgba(255, 255, 255, .04) 100%), rgba(255, 255, 255, .01)" }}
        >
            <div className='text-white sm:p-10 p-6 pt20 lg:w-1/2 '>
                <h1 className='md:font-bold md:text-4xl text-2xl '>Client</h1>
                <h1 className='font-semibold md:text-6xl text-4xl py-3'>{clientName}</h1>
                <p className='py-4 sm:text-lg text-base text-gray-300'>{description}</p>

                <h1 className='text-xl font-bold'>{services}</h1>
            </div>
            <div className='lg:w-1/2 lg:pt-20 pt-6 sm:px-10 overflow-hidden'>
                <img src={img} alt="" className='hover:scale-105 transition-transform duration-500 overflow-hidden' />
            </div>
        </div>
    )
}

export default ProjectCard