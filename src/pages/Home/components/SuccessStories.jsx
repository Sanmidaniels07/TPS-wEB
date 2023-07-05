import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import stpauls from '../../../images/stpauls.webp'

const SuccessStories = () => {
  return (
    <section className='bg-gradient-to-b from-[#f2f5fa] to-white py-[10rem]'>
      <div className="w-[90%] lg:w-4/5 mx-auto">
        <h4 className='text-gray-900 font-normal text-base'>Success Stories</h4>
        <h2 className="text-4xl text-black font-bold capitalize my-6">
          see how we improve business operations for clients
        </h2>
        <div className="mb-10">
          {
            stories.map((item, index) => {
              const {image, name, title} = item;
              return (
                <div key={index} className="relative flex flex-col space-y-6 w-full cursor-pointer">
                  <img src={image} alt={name} className="w-full h-96" />
                    <div className='overlay absolute top-10 left-20 w-1/2 z-20'>
                      <h5 className='text-primary100 text-lg font-medium'>{name}</h5>
                      <h3 className='capitalize text-white text-3xl font-bold my-10'>{title}</h3>
                      <button className="p-3 rounded-full border-2 border-primary100 text-white">
                        <IoIosArrowForward size={24} />
                      </button>
                    </div>
                  <div className="overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full"></div>
                </div>
              )
            })
          }
        </div>
        <button className="px-8 py-3 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-lg hover:bg-primary100 hover:text-white transition">
          More success stories
        </button>
      </div>
    </section>
  )
}

export default SuccessStories

const stories = [
  {
    id: 1,
    name: "St Paul's Cathedral",
    title: "Improving St Paul's Cathedral remote working capacity",
    image: stpauls,

  }
]