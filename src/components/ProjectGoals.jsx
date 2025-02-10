import React from 'react'

const ProjectGoals = ({goals}) => {
    return (
        <div className='md:py-16 py-12 px-4'>
            <h1 className='text-4xl font-semibold text-center'>Project Goals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-5 mt-16 align-middle items-center place-items-center">
                {goals?.map((data, index) => {
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
    )
}

export default ProjectGoals