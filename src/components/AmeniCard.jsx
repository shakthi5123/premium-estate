import React from "react";

const AmeniCard = ({ number, title, text, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 py-12`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full object-cover shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 px-2">
        <h3 className="text-3xl text-orange-600 font-bold mb-4">{number}</h3>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default AmeniCard;
