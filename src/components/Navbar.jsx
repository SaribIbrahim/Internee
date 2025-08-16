import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center py-4 px-[100px] border-b-1 border-gray-800 ' >
      <div className='w-[200px]'>
        <img src="./white-internee.png" alt="Logo" />
      </div>
      <div>
        <ul className='flex flex-row gap-4'>
          <li>Home</li>
          <li>Internship</li>
          <li>Graduate Program</li>
          <li>Student Ambassador</li>
        </ul>
      </div>
      <div className='flex flex-row gap-4'>
        <button className='bg-green-500 text-white px-6 py-2 rounded-2xl'>
          <p>Job Portal</p>
        </button>
        <button className='bg-black px-6 py-2 rounded-2xl text-white border-green-500 border'>
          <p>Dashboard</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar