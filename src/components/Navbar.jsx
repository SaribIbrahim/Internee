import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-between border-b border-gray-800 bg-black px-5 py-4 xl:px-[100px]">
        <div className="w-[180px] cursor-pointer md:w-[200px]">
          <img src="./white-internee.png" alt="Logo" />
        </div>
        <div>
          <ul className="hidden cursor-pointer flex-row gap-4 text-sm lg:flex">
            <li className="transition-all duration-300 hover:text-green-500">
              Home
            </li>
            <li className="transition-all duration-300 hover:text-green-500">
              Internship
            </li>
            <li className="transition-all duration-300 hover:text-green-500">
              Graduate Program
            </li>
            <li className="transition-all duration-300 hover:text-green-500">
              Student Ambassador
            </li>
          </ul>
        </div>
        <div className="hidden flex-row gap-4 lg:flex">
          <button className="cursor-pointer rounded-2xl border border-transparent bg-green-500 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:border-green-500 hover:bg-black">
            <p>Job Portal</p>
          </button>

          <button className="cursor-pointer rounded-2xl border border-green-500 bg-black px-6 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-green-500">
            <p>Dashboard</p>
          </button>
        </div>

        <button className="ms-3 cursor-pointer rounded-[25%] bg-green-500 p-1 text-4xl lg:hidden">
          {open ? (
            <MdClose onClick={() => setIsOpen(false)} />
          ) : (
            <MdOutlineMenu onClick={() => setIsOpen(true)} />
          )}
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-100 bg-white py-5 ps-8 lg:hidden dark:border-gray-800 dark:bg-[#121212]">
          <ul className="flex cursor-pointer flex-col gap-5">
            <li>Home</li>
            <li>Internship</li>
            <li>Graduate Program</li>
            <li>Student Ambassador</li>
            <li>Job Portal</li>
            <li>Dashboard</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
