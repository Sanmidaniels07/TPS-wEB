
import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import './home.css'

const Home = () => {
  return (
    <>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport/>
      <SuccessStories />
    </>
  )
}

export default Home