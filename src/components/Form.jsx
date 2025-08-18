import React from "react";


const Form = () => {
  return (
    <section className="mx-auto mt-15 mb-5 max-w-2xl px-4"> 
      {/* wrapper section → centers & adds side padding */}

      <div className="mx-2 sm:mx-auto min-h-[600px] w-full max-w-md rounded-md bg-white p-4 shadow-md sm:max-w-lg sm:p-6 md:p-8">
        {/* inner div → the form card */}

        <form>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="name" className="text-black">
              Name
            </label>
            <input
              id="name"
              placeholder="Enter your name"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400"
            />
          </div>

          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400"
            />
          </div>

          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="internship" className="text-black">
              Internship
            </label>
            <input
              id="internship"
              placeholder="Enter your internship"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400"
            />
          </div>

          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="cnic" className="text-black">
              CNIC
            </label>
            <input
              id="cnic"
              placeholder="Enter your CNIC"
              className="h-9 w-full rounded-xl border border-gray-300 px-2 text-gray-400"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;

 

