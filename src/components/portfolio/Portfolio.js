import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import menu from "./Menu";

const Portfolio = () => {
  const [items] = useState(menu);
  return (
    <section className="w-full md:w-[80%] mt-5 md:mt-[56px] mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#30A8FF] text-2xl mb-3 font-bold">Portfolio</h1>
        <p className="w-full md:w-[500px] text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
          porro, velit alias consectetur voluptate?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-9 mx-auto">
        {items.map((elem) => {
          const { id, image, name, description } = elem;
          return (
            <div
              key={id}
              className="mt-10 border rounded-b-lg shadow-md hover:scale-110 transform transition-all duration-300 ease-in  border-gray-300"
            >
              <img src={image} alt="" />
              <div className="p-2">
                <p className="text-gray-400">{name}</p>
                <h3 className="font-bold text-blue-900">{description}</h3>
                <button className="border-[2px] mt-3 flex p-1 items-center gap-1 border-blue-400 text-blue-600 rounded-md min-w-[100px]">
                  <span className="flex items-center gap-3">
                    Case Study
                    <HiArrowRight />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-white mt-8 whitespace-nowrap md:mb-8 mb-8 md:w-[15%] hover:scale-110 transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-300">
        Get into touch
      </button>
    </section>
  );
};

export default Portfolio;
