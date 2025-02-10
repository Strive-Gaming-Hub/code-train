import React from 'react'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
// import './style.css'

const slidesData = [
    {
        step: '1',
        title: "Reach Out To Us",
        description: 'Get in touch with us to discuss your projects.',
        color: 'green',
        img: 'https://pbs.twimg.com/profile_images/1851239398081273856/xg5oz4Ac_400x400.jpg',
    },
    {
        step: '2',
        title: "Tell Us Your Requirements",
        description: 'Define project requirements clearly by outlining objectives, deliverables, and timelines.',
        color: 'green',
        img: 'https://pbs.twimg.com/profile_images/1851239398081273856/xg5oz4Ac_400x400.jpg',
    },
    {
        step: '3',
        title: "AI Solutions",
        description: 'Access powerful tools, set up your workflows, and start transforming your operations with ease.',
        color: 'green',
        img: 'https://pbs.twimg.com/profile_images/1851239398081273856/xg5oz4Ac_400x400.jpg',
    },
]

const SwiperSlider = () => {
    return (
        <div className='w-full my-14 relative'>
            <Swiper
                className='max-w-[1100px] mx-auto bg- rounded-2xl border border-gray-600 bg-gradient-to-b from-[#21212165] via-[#1d1d1dac] to-black/40 !z-50 relative'
                modules={[Mousewheel, Pagination]}
                direction="vertical"
                speed={800}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={{
                    thresholdDelta: 50,
                    sensitivity: 1,
                }}
            >
                {
                    slidesData.map((item, idx) => (

                        <SwiperSlide key={idx}>
                            {({ isActive }) =>
                                <div className='slide-container'>
                                    <div className='info'>
                                        <div className='absolute -top-2 -left-2 bg-blue-600/60 font-bold text-xl rounded-full p-4 px-6'>{item.step}</div>
                                        <h1 className='!text-4xl !text-start'>{item.title}</h1>
                                        <h4 className='text-gray-400'>{item.description}</h4>
                                    </div>

                                    <div className='item'>
                                        <div className={`circle ${isActive ? 'animated-circle' : ''}`}></div>
                                        <img src={item.img} alt="" />
                                    </div>

                                </div>
                            }
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div
                className='h-[40rem] w-[40rem] border-[6rem] border-blue-600 absolute rounded-full top-0 -left-80 blur-2xl z-20'
            >sahilrathore</div>
        </div>

    )
}

export default SwiperSlider