import React from 'react'
import { FaDatabase, FaCloudUploadAlt, FaComments, FaAtlassian } from "react-icons/fa";

export default function SpecialiseSupport() {
    return (
        <section id="Specialise" class="min-h-screen mx-auto bg-sky-50 bg-gradient-to-t">
            <div className="py-24 px-6 md:px-14">
                {/*section decription */}
                <div className="text-left text-black">
                    <p className="mb-5 text-left text-lg">A wide Range Of IT Services</p>
                    <h3 className="text-3xl font-bold text-left mb-10 md:text-4xl">
                        We Specialise in IT Support & Cyber Security.
                    </h3>
                </div>
                {/* services */}
                <div className=" items-center mx-auto  space-y-10 grid md:grid-cols-3 md:space-y-0 md:space-x-10">
                    {/* item 1 */}
                    <div className="flex flex-col space-y-3 text-left my-5  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
        
                        <FaDatabase className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            Backup & Recovery
                        </p>

                        <p className="text-left tex-lg">
                            Leading secure back-up and recovery services for businesses.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>                </div>
                    </div>

                    {/* item 2 */}
                    <div className="flex flex-col my-5  space-y-3 text-left  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
                        <FaCloudUploadAlt className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            Cloud Solutions
                        </p>

                        <p className="text-left tex-lg">
                            A wide range of cloud solutions for businesses.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>                </div>
                    </div>

                    {/* item 3 */}
                    <div className="flex flex-col my-5  space-y-3 text-left  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
                        <FaComments className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            Communications
                        </p>

                        <p className="text-left tex-lg">
                            Bespoke business cummunication systems.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>                </div>
                    </div>

                    {/* item 4 */}
                    <div className="flex flex-col my-5  space-y-3 text-left  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
                        <FaAtlassian className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            Cyber Security Services
                        </p>

                        <p className="text-left tex-lg">
                            Trust your IT needs with experts in delivering IT Support excellence.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>                </div>
                    </div>

                    {/* item 5 */}
                    <div className="flex flex-col my-5  space-y-3 text-left  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
                        <FaDatabase className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            IT Support and consultancy services
                        </p>

                        <p className="text-left tex-lg">
                            Expert IT support when you need it most.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>
                        </div>
                    </div>

                    <div className="flex flex-col my-5  space-y-3 text-left  bg-slate-100 px-7 py-10 border-2 border-sky-100 duration-200 transition-colors hover:border-sky-400 rounded-lg">
                        <FaDatabase className="text-sky-700 h-14 w-14 md:h-20 md:w-20" />
                        <p className="text-xl md:text-2xl font-semibold">
                            IT Support and consultancy services
                        </p>

                        <p className="text-left tex-lg">
                            Expert IT support when you need it most.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Learn more</a>
                            <div className="border-b-2 w-24 border-sky-400 group-hover:border-b-0 duration-200"></div>
                        </div>
                    </div>
                </div>

                {/* why choose CIS */}
                <div className="flex flex-col space-y-10 my-20 mx-auto md:flex-row">
                    <img src="/src/images/engineering.jpg" alt="" className="w-4/5" />
                    <div className="flex flex-col space-y-6 text-left">
                        <div className="text-gray-500 text-lg">Why Choose CIS</div>
                        <h3 className="text-3xl font-bold text-left md:text-4xl">
                            A Forward-Thinking Managed IT Services Provider
                        </h3>
                        <p className="text-gray-500 text-left text-lg">
                            CIS’s diverse portfolio of IT solutions means that we can confidently provide a positive and measurable impact on your businesses operations.
                        </p>
                        <p className="text-gray-500 text-left text-lg">
                            Our approach is simple; we listen to your challenges and then design and implement a solution that’s exactly right for your business.
                        </p>

                        <div className="text-left group">
                            <a href="#" className="text-lg">Meet the team</a>
                            <div className="border-b-2 w-28 border-sky-400 group-hover:border-b-0 duration-200"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
