import React from 'react'
import ImageOne from '../images/imageFour.png'

const Posts = () => {
      return (
            <div className='p-5 grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 lg:grid-cols-3'>
                  <div className=' rounded-md space-y-5 '>
                        <img src={ImageOne} alt="Image" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                  </div>

                  <div className=' rounded-md space-y-5'>
                        <img src={ImageOne} alt="Image" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                  </div>

                  <div className=' rounded-md space-y-5'>
                        <img src={ImageOne} alt="Image" className='w-[27rem] ' />
                        <p className='text-sm font-mono'>March 7, 2022</p>
                        <p className='text-2xl font-syne'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-sm tracking-wide font-fredoka'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima corporis velit reiciendis eligendi repellendus hic impedit quaerat quo culpa voluptates?</p>
                  </div>
            </div>
      )
}

export default Posts