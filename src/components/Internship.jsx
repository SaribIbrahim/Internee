import InternshipCard from "./InternshipCard"

const Internship = () => {
  
    const internships=[
      {
        title:"Graphic Design",
        img:"./graphics.webp",
        icon:"./arrow.png",
        text:"Apply Now"
      },
      {
        title:"Chatbot Development",
        img:"./chatbot.webp",
        icon:"./arrow.png",
        text:"Apply Now"
      },
      {
        title:"Other Internships",
        img:"./machine.jpg",
        icon:"./arrow.png",
        text:"Apply Now"
      },
      {
        title:"Frontend Internship",
        img:"./frontend.webp",
        icon:"./arrow.png",
        text:"Apply Now"
      },
      {
        title:"App Development",
        img:"./mobile-app.webp",
        icon:"./arrow.png",
        text:"Apply Now"
      },
       {
        title:"Backend Development",
        img:"./BackendDevelopment.webp",
        icon:"./arrow.png",
        text:"Apply Now"
      },

    ]

    return (
      <section className="mt-5 mb-5">
        <div className="mb-8 flex justify-center">
          <div className="flex max-w-7xl justify-center gap-3 rounded-xl bg-gray-800 px-2 py-1">
            <p className="rounded-xl bg-white px-3 font-semibold text-black">
              Trending
            </p>
            <p>Explore Internship Opportunities</p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-2xl md:text-5xl">
            Your Dream Internship is Just One
          </h1>
          <p className="text-2xl md:text-5xl">Click Away!</p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mx-10 lg:grid-cols-3 px-20">
          {internships.map((internship, index) => (
            <div className="mt-10">
              <InternshipCard
                key={index}
                title={internship.title}
                img={internship.img}
                icon={internship.icon}
                text={internship.text}
              />
            </div>
          ))}
        </div>
      </section>
    );
};

export default Internship;
