import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import Cookies from './components/Cookies'
import './home.css'


const Home = () => {
  return (
    <>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport/>
      <SuccessStories />
      <Cookies/>
    </>
  )
}

export default Home