import React from "react";
import { AiOutlineSound, } from "react-icons/ai";
import { FaUsers, FaBasketballBall, FaCloudflare, FaCreativeCommonsZero } from "react-icons/fa";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <section id="Hero">
      <Navbar />
      <div className="bg-black bg-opacity-70  min-h-screen ">
        <div className="flex flex-col py-40 px-6 md:px-14 text-left md:flex-row space-x-10">
          <div className="md:pr-48">
            <p className="text-sky-400 mb-10 font-semibold">
              Making I.T Work Smarter For Your Business
            </p>
            <h1 className="text-white text-5xl font-semibold md:font-bold text-left mb-10">
              A leading IT support company in Oxfordshire, Wiltshire & the
              Midlands.
            </h1>
            <p className="text-white text-semibold text-left mb-10">
              With 30 years ofproviding cloud-based solutions, cyber security
              protection, communications infastructure and expert IT support
              services.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-row items-center space-x-10">
              <div className="border-2 font-bold border-sky-600 px-10 py-3 rounded-full text-center text-white hover:bg-sky-600 duration-500">
                Our Services
              </div>

              <div className=" text-white font-semibold text-center border-b-2 border-b-sky-600 hover:border-b-0 duration-200">
                <a href="#" className="text-center ">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          {/* image/logo */}
          <div className="w-3/4">
          <img src="../../Images/hero.jpg" alt="" className="max-w-1/2" />
          </div>
        </div>

        {/* hero features */}
        <div className="grid grid-cols-2 py-6 px-6 md:px-14 items-center md:flex flex-row border-t-2 border-sky-800 md:space-y-0 md:space-x-20 md:justify-evenly">
            {/* item 1 */}
            <div className="flex flex-row items-center my-3 md:my-0 space-x-2 md:space-x-5 text-white">
                <FaBasketballBall className="text-sky-700 h-5 w-5 md:h-8 md:w-8"/>
                <p>Worldwide Support</p>
            </div>

             {/* item 2 */}
             <div className="flex flex-row items-center my-3 md:my-0 space-x-2 md:space-x-5 text-white ">
               <AiOutlineSound className="text-sky-700 h-5 w-5 md:h-8 md:w-8"/> <p>Est. 1989</p>
            </div>

             {/* item 3 */}
             <div className="flex flex-row items-center my-3 md:my-0 space-x-2 md:space-x-5 text-white">
               <FaUsers className="text-sky-700 h-5 w-5 md:h-8 md:w-8"/> <p>Team of Expert</p>
            </div>

             {/* item 4 */}
             <div className="flex flex-row items-center my-3 md:my-0 space-x-2 md:space-x-5 text-white ">
                <FaCloudflare className="text-sky-700 h-5 w-5 md:h-8 md:w-8"/> <p>Cloud Services</p>
            </div>
             {/* item 5 */}
             <div className="flex flex-row items-center my-3 md:my-0 space-x-2  md:space-x-5 text-white">
               <FaCreativeCommonsZero className="text-sky-700 h-5 w-5 md:h-8 md:w-8"/> <p>Expert Solutions</p>
            </div>
        </div>
      </div>
    </section>
  );
}
