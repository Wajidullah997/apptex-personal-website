import { CiFacebook, CiTwitter } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import Vector from "./images/Vector.png";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 mx-auto">
      <div className="bg-[#0070C0] flex h-[600px] md:max-h-[502px] md:px-20 px-10 pb-20 pt-[200px] rounded-tl-[6px] rounded-tr-[6px]  items-center justify-center">
        <div className="md:w-[80%] w-full flex-col md:flex-row flex justify-between text-white font-bodyFont md:mt-8 -mt-[80px]">
          <div>
            <img className="w-[96px] h-[80px] mt-4" src={Vector} alt="vector" />
          </div>
          <div className="flex flex-col gap-2 md:py-0 py-4">
            <span className="font-600 text-[20px] tracking-wide">Site Map</span>
            <div className="flex gap-10 font-400 justify-between text-[16px]">
              <ul className="grid grid-cols-2">
                <li className="cursor-pointer">hom</li>
                <li className="cursor-pointer">services</li>
                <li className="cursor-pointer py-1">portfolio</li>
                <li className="cursor-pointer">testimonials</li>
                <li className="cursor-pointer mt-1">contact us</li>
              </ul>
              {/* <ul className="flex flex-col px-4">
                <li className="cursor-pointer">testimonials</li>
                <li className="cursor-pointer mt-1">contact us</li>
              </ul> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:py-0 py-4">
            <span className="font-600 text-[20px] tracking-wide">
              Head Office
            </span>
            <ul className="flex flex-col">
              <li className="cursor-pointer">Office # 09,2nd Floor Ali</li>
              <li className="cursor-pointer mt-1">
                Tower,Main University Road
              </li>
              <li className="cursor-pointer mt-1">Peshawar</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:py-0 py-4">
            <span className="font-600 text-[20px] cursor-pointer tracking-wide">
              Social Links
            </span>
            <ul>
              <li className="flex items-center gap-2 cursor-pointer">
                <span className="text-2xl">
                  <CiFacebook />
                </span>
                Face Book
              </li>
              <li className="flex items-center mt-1 gap-2 cursor-pointer">
                <span className="text-2xl bg-[#0070C0]">
                  <CiTwitter />
                </span>{" "}
                Twitter
              </li>
              <li className="flex items-center mt-1 gap-3 cursor-pointer">
                <span className="text-2xl">
                  <BiLogoInstagram />
                </span>
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#0070C0] md:py-1 py-16 -mt-2 flex flex-col text-white text-center">
        <p className="bg-white mt-[-50px] px-2 ml-[20px] mr-[20px] md:ml-[100px] md:mr-[100px]  h-[0.5px]"></p>
        <p className="mt-4">Copyright © 2023 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
