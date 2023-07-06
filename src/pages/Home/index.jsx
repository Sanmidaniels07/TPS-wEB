import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import Cookies from './components/Cookies'
import './home.css'
import Partners from './components/Partners'
import GetinTouch from './components/GetinTouch'


const Home = () => {
  return (
    <div>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport/>
      <SuccessStories />
      <Partners />
      <GetinTouch/>
      <Cookies/>
    </div>
  )
}

export default Home