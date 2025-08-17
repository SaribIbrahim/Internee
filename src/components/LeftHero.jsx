import React from "react";

const LeftHero = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-15 text-center lg:px-10 lg:text-left">
      <h1 className="text-5xl font-bold lg:text-6xl">
        Looking for <br />
        dream internship?
      </h1>
      <p className="mt-6 text-[18px]">
        Internee.pk kickstart student's tech careers with first <br />{" "}
        internships, providing industry exposure, practical skills, and <br />{" "}
        networking opportunities
      </p>
      <div className="flex flex-row justify-center gap-5 lg:justify-start">
        <button className="font-md cursor-pointer rounded-lg bg-green-500 px-4 py-1 hover:bg-green-800 sm:px-8 sm:py-3">
          Our Job Portal
        </button>
        <button className="font-md cursor-pointer rounded-lg bg-[#1E2536] px-8 py-3 hover:bg-gray-700">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default LeftHero;
