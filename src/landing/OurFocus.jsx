import Badge from '@/components/Badge'
import { HeartCheckIcon } from '@hugeicons/core-free-icons/index'
import { HugeiconsIcon } from '@hugeicons/react'
import React from 'react'

const OurFocus = () => {
  return (
    <section className='px-6 sm:px-10 lg:px-16 mt-32 flex justify-center lg:mt-32'>
        <div >
            <Badge text='OUR FOCUS' className='sm:mx-auto '/>
            <h1 className='mt-4 text-2xl text-left max-w-2xl sm:text-center sm:text-3xl font-bruno leading-snug'>
               We are dedicated to providing you with a seamless, comfortable, and dependable experience throughout your entire <br/> medical journey.
            </h1>
            <p className='text-left sm:text-center text-lg max-w-2xl mt-4 leading-loose font-description'>
                With thousands of patients seeking medical tourism worldwide and top-quality treatment across global destinations, we do our part by helping people access the right medical services in India, the US, and Turkey.

            </p>

            <div className='flex flex-col sm:flex-row gap-16 max-w-2xl justify-center mt-8'>
                <img src='/hands.jpg'
                    className='w-full sm:w-62'
                />

                <div className='flex flex-col gap-4 '>
                    <div className='flex gap-2'>
                        <HugeiconsIcon icon={HeartCheckIcon} className='text-primary'/>
                        <p>Personalized Treatment</p>
                    </div>
                    <div className='flex gap-2'>
                        <HugeiconsIcon icon={HeartCheckIcon} className='text-primary'/>
                        <p>Smooth entry into the country</p>
                    </div>
                    <div className='flex gap-2'>
                        <HugeiconsIcon icon={HeartCheckIcon} className='text-primary'/>
                        <p> Appointments scheduled appropriately</p>
                    </div>
                    <div className='flex gap-2'>
                        <HugeiconsIcon size={32} icon={HeartCheckIcon} className='text-primary'/>
                        <p>Accommodation, local transportation, and other logistics</p>
                    </div>

                </div>
            </div>
        </div>


    </section>
  )
}

export default OurFocus