import React from "react";
import Logo from "./images/logo.png";
import Subtract from "./images/Subtract.png";

const Home = () => {
  return (
    <>
      <div className="w-full md:w-[80%]  mx-auto bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For small screens (mobile-first approach) */}
          <div className="relative flex justify-center md:order-2">
            <img
              src={Subtract}
              className="relative lg:mt-8 -top-16 md:top-0 w-[250px] md:w-[450px]"
              alt=""
            />
            <img
              className="w-[250px] absolute md:w-[350px] h-[250px] md:h-[300px] mx-auto"
              src={Logo}
              alt="/"
            />
          </div>
          {/* For small screens (mobile-first approach) */}
          <div className="">
            <div className="flex relative z-10 flex-col justify-center md:order-1">
              <h1 className="text-4xl font-bold text-[#30A8FF]">
                APPTEX SOFTWARE SOLUTION
              </h1>
              <h3 className="font-bold mt-5 text-2xl">
                Your idea is our Passion
              </h3>
              <p className="mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at
                suscipit atque sunt dolore accusamus?
              </p>
              <button className="text-white w-[150px] min:w-[200px] px-4 mt-8 whitespace-nowrap hover:scale-110 transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-300">
                Get into touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Subtract}
        className="absolute top-0 -z-1 ml-[-100px] lg:mt-8 left-0  w-[250px] md:w-[450px]"
        alt=""
      />
    </>
  );
};

export default Home;
