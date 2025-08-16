import React from 'react'

const LeftHero = () => {
    return (
        <div className='flex flex-col gap-5 py-15 px-5 lg:px-10 text-center lg:text-left '>
            <h1 className='lg:text-6xl text-5xl font-bold '>Looking for <br />dream internship?</h1>
            <p className='mt-6 text-[18px] '>Internee.pk kickstart student's tech careers with first <br /> internships, providing industry exposure, practical skills, and <br /> networking opportunities
            </p>
            <div className='flex flex-row gap-5 justify-center lg:justify-start '>
                <button className='py-1 sm:py-3 px-4 sm:px-8 font-md bg-green-500 rounded-lg cursor-pointer hover:bg-green-800'>
                    Our Job Portal
                </button>
                <button className='py-3 px-8 font-md bg-[#1E2536] hover:bg-gray-700 rounded-lg cursor-pointer'>
                    Dashboard
                </button>
            </div>
        </div>
    )
}

export default LeftHero