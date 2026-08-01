import React from 'react'

const Stats = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-32 mt-32 flex flex-wrap gap-16 md:flex-row  lg:mt-32 justify-between '>
        <div className='flex gap-4 items-center'>
            <h1 className='text-5xl font-semibold text-primary'>20+</h1>
            <p className='font-semibold'>Years of Medical <br/>Experience</p>
        </div>
        <div className='flex gap-4 items-center'>
            <h1 className='text-5xl font-semibold text-primary'>15+</h1>
            <p className='font-semibold'>Specialist <br/>Doctors</p>
        </div>
        <div className='flex gap-4 items-center'>
            <h1 className='text-5xl font-semibold text-primary'>98%</h1>
            <p className='font-semibold'>Satisfaction <br/>Rate</p>
        </div>
    </div>
  )
}

export default Stats