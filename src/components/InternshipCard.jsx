import React from "react";

const InternshipCard = ({ title, img, icon, text }) => {
  return (
    <div>
      <img src={img} alt={title} className="h-[250px] w-full rounded-t-2xl" />
      <div className="flex flex-col gap-3 rounded-b-2xl bg-[rgb(18,18,18,1)] px-5 pt-4 pb-6">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex flex-row gap-2">
          <img src={icon} alt={text} />
          <p className="text-green-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
