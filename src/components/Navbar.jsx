import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {

  const [open, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex flex-row justify-between items-center py-4 xl:px-[100px]  border-b border-gray-800 px-5 ' >
        <div className='w-[180px] md:w-[200px]'>
          <img src="./white-internee.png" alt="Logo" />
        </div>
        <div>
          <ul className=' hidden lg:flex flex-row gap-4 cursor-pointer text-sm '>
            <li>Home</li>
            <li>Internship</li>
            <li>Graduate Program</li>
            <li>Student Ambassador</li>
          </ul>
        </div>
        <div className='hidden lg:flex flex-row gap-4'>
          <button className='bg-green-500 text-white px-6 py-2 rounded-2xl'>
            <p>Job Portal</p>
          </button>
          <button className='bg-black px-6 py-2 rounded-2xl text-white border-green-500 border'>
            <p>Dashboard</p>
          </button>
        </div>

        <button className="lg:hidden ms-3 cursor-pointer bg-green-500 rounded-[25%] p-1 text-4xl  ">
          {
            open ? (
              <MdClose onClick={() => setIsOpen(false)} />
            ) : (
              <MdOutlineMenu onClick={() => setIsOpen(true)} />
            )
          }
        </button>
      </div>
      {
        open && (
          <div className="lg:hidden bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-gray-800 ps-8 py-5 ">
            <ul className="flex flex-col gap-5 cursor-pointer">
              <li>Home</li>
              <li>Internship</li>
              <li>Graduate Program</li>
              <li>Student Ambassador</li>
              <li>Job Portal</li>
              <li>Dashboard</li>
            </ul>
          </div>
        )
      }
    </>
  )
}

export default Navbar