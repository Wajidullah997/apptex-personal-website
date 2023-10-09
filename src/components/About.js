import React from "react";
import Aboutt from "./images/About.png";

const About = () => {
  return (
    <div className="w-full md:w-[80%] shadow-md p-8 shadow-gray-300  mt-[30px] rounded-lg bg-white mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[50%] md:order-1 mb-6 md:mb-0">
          <img src={Aboutt} alt="" className="w-full md:w-[400px]" />
        </div>
        <div className="w-full md:w-[50%] md:order-2">
          <h3 className="text-sm font-bold">WHAT WE DO</h3>
          <h1 className="text-4xl font-bold mt-3">
            Creative, Bespoke Design Projects
          </h1>
          <p className="text-gray-400 mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            officia qui modi fugit, optio magni mollitia eos excepturi soluta
            dolor rerum. Cum exercitationem porro culpa dolorum aut, adipisci
            libero laboriosam? optio magni mollitia eos excepturi soluta dolor
            rerum. Cum exercitationem porro culpa dolorum aut, adipisci libero
            laboriosam?
          </p>
          <button className="text-white mt-9 whitespace-nowrap hover:scale-110 transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-300">
            Get into touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
