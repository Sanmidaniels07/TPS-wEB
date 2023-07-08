import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 min-h-screen w-full ">
      {/* get in touch */}

      <div className="flex flex-col py-20 px-6 md:px-14 md:flex-row md:space-x-10">
        {/*section text */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-bold text-3xl text-white text-left">Get in Touch</h3>
          <p className="text-white text-xl text-left">
            Looking to expand or protect your IT infrastructure? Discover how we can make IT work smarter for your business.
          </p>

          <div className="rounded-full w-40 md:w-72 py-2 border-2 border-sky-400 text-center hover:bg-sky-400 duration-500 text-white">
            Make an Enquiry
          </div>
        </div>

        <div className="w-3/4">

        </div>
      </div>

      <div className="container flex flex-col overflow-hidden space-y-6 p-6  max-w-7xl md:mx-auto border-b border-blue-400 border-opacity-40"></div>
      {/* footer global container */}
      <div className="max-w-7xl mx-auto  py-10 space-y-6 ">
        {/* footer flex box */}
        <div className="flex flex-col md:flex-row overflow-hidden py-5 space-x-28 ">
          {/* border box */}
          <div className="box-border h-60 w-72 mx-auto  p-4 flex border-2 border-blue-400 border-opacity-40 rounded-sm">
            <div className="mt-4 px-4">
              <h3 href="#" className="text-blue-400 font-sans">
                Support
              </h3>
              <p className="text-white mt-2">
                Talking with an engineer? Access remote support
              </p>
              {/* button */}
              <div className="mt-8">
                <button className="text-white inline-flex flex-row  items-center rounded-full p-1 border mr-6 border-blue-600 w-48 h-12 hover:bg-blue-400">
                  <div className="py-2 pl-4">Remote Support </div>
                  <div>
                    <svg
                      class="next-button cursor-pointer slick-arrow"
                      height="40"
                      viewBox="0 0 44 45"
                      width="44"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{}}
                    >
                      <g
                        fill="none"
                        fill-rule=""
                        transform="translate(1 1.082729)"
                      >
                        <circle
                          cx="21"
                          cy="21.527576"
                          r="21"
                          stroke="#fffff"
                          stroke-width="0"
                        ></circle>
                        <path
                          d="m23.28125 26.057896.46875-.390625 7.8125-7.8125-.9375-.9375-7.34375 7.3828125-7.34375-7.3828125-.9375.9375 7.8125 7.8125z"
                          fill="#191c21"
                          fill-rule="nonzero"
                          stroke="#ffff"
                          transform="matrix(0 -1 1 0 1.793666 44.768834)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* second flex-container */}
          <div className="flex flex-col py-10">
            <div>
              <h4 className="text-blue-400 font-semibold font-sans mb-2">
                Services
              </h4>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Cloud Solutions
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Cyber Security
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Communications
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  IT Support
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Backup & Recovery
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-blue-400 font-semibold font-sans mb-2">
                CIS
              </h4>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  About
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Knowledge
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Success Stories
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Blog
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Career
                </a>
              </div>
            </div>
          </div>

          {/* third flex-container */}
          <div className="flex flex-col">
            <div>
              <h4 className="text-blue-400 font-semibold font-sans mb-2">
                Get in touch
              </h4>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Cloud Solutions
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-blue-400 font-semibold font-sans mb-2">
                Oxford
              </h4>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  +44 13767 700 555
                </a>
              </div>
              <div className="my-3">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Faringdon Business Centre,
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Brunel House
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  volunteer Way
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Faringdon
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Birmingham
                </a>
              </div>
              <div className="my-2">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  +44 1217 591 000
                </a>
              </div>
              <div className="my-3">
                <a
                  href="#"
                  className="border-transparent border-b-2 hover:border-gray-400 text-white font-sans"
                >
                  Izabella House, Regent place.
                </a>
              </div>
            </div>
          </div>

          {/* 4th flex-container */}
          <div className="flex flex-col">
            <div>
              <h4 className="text-blue-400 font-semibold font-sans mb-2">
                Stay up to date
              </h4>
              <div className="my-2">
                <a href="#" className=" text-white font-sans">
                  Discover the latest industry news, offers & more!
                </a>
              </div>
            </div>

            <div className="flex flex-col mt-4 ">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Email address"
                  className="px-4 mr-6 rounded-full"
                />
                <div>
                  <svg
                    class="next-button cursor-pointer slick-arrow"
                    height="45"
                    viewBox="0 0 44 45"
                    width="44"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{}}
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      transform="translate(1 1.082729)"
                    >
                      <circle
                        cx="21"
                        cy="21.527576"
                        r="21"
                        stroke="#49a8ff"
                        stroke-width="2"
                      ></circle>
                      <path
                        d="m23.28125 26.057896.46875-.390625 7.8125-7.8125-.9375-.9375-7.34375 7.3828125-7.34375-7.3828125-.9375.9375 7.8125 7.8125z"
                        fill="#191c21"
                        fill-rule="nonzero"
                        stroke="#ffff"
                        transform="matrix(0 -1 1 0 1.793666 44.768834)"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-blue-700 mt-8 text-lg">Follow us</div>
              <div className="flex flex-row gap-1 mt-5 ">
                <a
                  class="c-social-icon mr-6"
                  target="_blank"
                  href="https://www.facebook.com/ComputingInformationSystemsLtd"
                >
                  {" "}
                  <svg
                    class="text-white"
                    height="20"
                    viewBox="0 0 9 20"
                    width="9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current"
                      d="m8.37383984 6.6847312-.20965073 2.81514358h-2.72012113v9.42967822h-3.58007736v-9.42967822h-1.81260525v-2.81514358h1.81260525v-2.11099043-.60964581s-.12811989-3.11629391 3.58007736-3.28474223c1.80192859-.08128611 3.30296957.32857216 3.30296957.32857216l-.38144786 2.76813474s-2.92152171-.91422387-2.92152171.86721504v2.04145653z"
                      fill="#fff"
                      fill-rule="evenodd"
                      transform="translate(0 .200882)"
                    ></path>
                  </svg>{" "}
                </a>
                <a
                  class="c-social-icon mr-6"
                  target="_blank"
                  href="https://twitter.com/cis_oxford?lang=en"
                >
                  {" "}
                  <svg
                    class="icon-twitter text-white"
                    height="14"
                    viewBox="0 0 18 14"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current"
                      d="m69.3002602 3.09921812c-.6904189.40181553-1.4533587.69461508-2.2662792.85283295-.6512184-.68207341-1.5797804-1.10945463-2.6038936-1.10945463-1.9712954 0-3.568226 1.57204898-3.568226 3.51214747 0 .2749518.0313604.54363277.0916312.79928971-2.9645383-.14519384-5.5934222-1.54358905-7.3540149-3.66891823-.307724.51903182-.4831462 1.12296103-.4831462 1.76644472 0 1.21750587.6296581 2.29319449 1.5881105 2.9226894-.5855576-.01784775-1.1353447-.17654799-1.6160409-.43992288-.00098.01495352-.00098.03038941-.00098.04534293 0 1.70084219 1.2289358 3.12142654 2.8631069 3.44316834-.3008639.0810384-.6149579.1244519-.9408121.1244519-.229323 0-.4527658-.0226715-.6703287-.0631907.4542359 1.3940539 1.7703929 2.4104108 3.332043 2.437906-1.2210957.9430364-2.7587356 1.5045169-4.4316171 1.5045169-.2876337 0-.5713474-.0164006-.851141-.0496843 1.5788003.9965797 3.4550346 1.5788022 5.4699405 1.5788022 6.5631447 0 10.151461-5.352395 10.151461-9.993292 0-.15242942-.0039201-.3038941-.0098001-.45535877.696789-.49491324 1.3014568-1.11283124 1.7797029-1.81709374-.6399482.27881077-1.3274271.46693569-2.0492064.55135071.7369695-.43316968 1.3029268-1.12296104 1.5694902-1.94202798"
                      fill="#fff"
                      fill-rule="evenodd"
                      transform="translate(-52 -2.799118)"
                    ></path>
                  </svg>{" "}
                </a>
                <a
                  class="c-social-icon mr-6"
                  target="_blank"
                  href="https://www.linkedin.com/company/computing-information-systems"
                >
                  {" "}
                  <svg
                    class="text-white"
                    height="19"
                    viewBox="0 0 20 19"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current"
                      d="m4.82185366 2.21648916c0 1.22880233-.93004445 2.21380945-2.42530433 2.21380945h-.0278564c-1.43954707.00089242-2.36869293-.98590015-2.36869293-2.21380945 0-1.25827215.95879945-2.21648854 2.42440574-2.21648854 1.46740347-.0008924 2.37049011.95821639 2.39744792 2.21648854zm-4.57024743 16.78261784h4.28808902v-12.81758708h-4.28808902zm14.81241817-13.11764346c-2.2743406 0-3.2924473 1.24130468-3.8648514 2.11646912v.04107915h-.0278564c.0107831-.01250235.0206676-.02679075.0278564-.04107915v-1.81551971h-4.28719045c.05571281 1.20111855 0 12.81758705 0 12.81758705h4.28719045v-7.158488c0-.3857867.0260592-.7635363.1410792-1.039481.3109134-.7626433 1.017208-1.56011459 2.1979601-1.56011459 1.5536685 0 2.1745967 1.17789989 2.1745967 2.89965199v6.8584316h4.2871907v-7.3487023c.0008983-3.94002604-2.1161884-5.76983416-4.9359753-5.76983416z"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;