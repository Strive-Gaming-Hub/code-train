import React from 'react'
import Pricing from '../components/Pricing'
import InfiniteSlider from '../components/InfiniteSlider'

const PricingPage = () => {
  return (
    <div className='px-'>
        <Pricing/>

        <InfiniteSlider/>

          {/* <div className="min-h-screen flex flex-col items-center py-10">
              <div className='bg-transparent w-full flex gap-4 max-w-[70%] mb-4'>
                
                  <div className='bg-white/40 w-[60%] h-64 rounded-md'></div>
                  <div className='bg-white/60 w-[40%] h-64 rounded-md'></div>
              </div>

              <div className='bg-transparent w-full flex gap-4 max-w-[70%]'>
                
                  <div className='bg-white/60 w-[40%] h-64 rounded-md'></div>
                  <div className='bg-white/40 w-[60%] h-64 rounded-md'></div>
              </div>
          </div> */}
    </div>
  )
}

export default PricingPage