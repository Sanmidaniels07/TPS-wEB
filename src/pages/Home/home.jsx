import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import Cookies from './components/Cookies'
import NewsBlog from './components/NewsBlog'

import Partners from './components/Partners'
import Footer from './components/Footer'
import './home.css'
import { useState } from 'react'

const Home = () => {
const [showCookies, setShowCookies] = useState(true)

  return (
    <div className='relative'>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport />
      <SuccessStories />
      <NewsBlog/>
      <Partners/>
      <Footer/>
      <Cookies/>
    </div>
  )
}

export default Home