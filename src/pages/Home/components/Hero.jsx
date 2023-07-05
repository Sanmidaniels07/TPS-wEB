import React from "react";
import { AiOutlineSound, } from "react-icons/ai";
import { FaUsers, FaBasketballBall, FaCloudflare, FaCreativeCommonsZero } from "react-icons/fa";
import Navbar from "./Navbar";
import heroLogo from "../../../images/hero-log.png"

export default function Hero() {
  return (
    <section id="hero">
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
            <img src="data:image/jpeg;base64,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" alt="" />
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
