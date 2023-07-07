import React from 'react'
import cookie from '../../../images/cookie.png'

const Cookies = ({ onclick, showCookie }) => {


  return (

    showCookie ? (
      <section id="cookies" className='sticky bottom-0 left-0 hodden right-0 z-50' >
        <div className='max-w-7xl mx-auto p-6 space-y-6'>
          <div className='flex flex-col h-70 p-10 mt-20 space-y-4 justify-center items-center bg-white rounded-sm shadow-lg'>
            <div className='flex flex-row mr-auto'>
              <div className='flex flex-row mr-auto'>
                <img src={cookie} alt="cookie" className='w-11 mr-4' />
                <h1 className='font-bold text-3xl'>Cookies</h1>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-y-0 md:space-x-3'>
              <div className='flex flex-col md:flex-row'>
                <p>This site uses cookies to help improve user experience. For these reasons, we may share data with our analytics partners.
                  By using CIS, you accept our use of cookies. <a href="#" className='underline text-blue-500 text-lg font-semi-bold'>Find out more</a> </p>
                <a
                  onClick={onclick}
                  href="'#"
                  className="mx-auto py-2 px-10  text-black text-lg bg-white rounded-full outline outline-blue-400 h-12 ml-2 mt-5 md:mt-0 hover:bg-blue-400"
                >Agree</a
                >
              </div>

            </div>
          </div>
        </div>

      </section>)
      :
      (

        <div></div>
      )


  )
}

export default Cookies