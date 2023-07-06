import React from 'react'

function GetinTouch() {
  return (
 <section id="get-in-touch" className='min-h-screen bg-slate-950'>
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
 </section>
  )
}

export default GetinTouch



