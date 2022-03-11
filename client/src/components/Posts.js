import React from 'react'
import ImageOne from '../images/imageFour.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Posts = () => {
      return (
            <div className='p-10 grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 lg:grid-cols-3'>
                  <div className=' rounded-md space-y-5 '>
                        <img src={ImageOne} alt="" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                        <div className='flex items-center justify-start space-x-3 cursor-pointer'>
                              <p className='text-xs text-gray-700 font-bold tracking-wider hover:text-gray-300 transition-all duration-200'>Read more</p>
                              <AiOutlineArrowRight />
                        </div>
                  </div>

                  <div className=' rounded-md space-y-5'>
                        <img src={ImageOne} alt="" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                        <div className='flex items-center justify-start space-x-3 cursor-pointer'>
                              <p className='text-xs text-gray-700 font-bold tracking-wider hover:text-gray-300 transition-all duration-200'>Read more</p>
                              <AiOutlineArrowRight />
                        </div>
                  </div>

                  <div className=' rounded-md space-y-5'>
                        <img src={ImageOne} alt="e" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka text-zinc-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                        <div className='flex items-center justify-start space-x-3 cursor-pointer'>
                              <p className='text-xs text-gray-700 font-bold tracking-wider hover:text-gray-300 transition-all duration-200'>Read more</p>
                              <AiOutlineArrowRight />
                        </div>
                  </div>
            </div>
      )
}

export default Posts