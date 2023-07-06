import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import Cookies from './components/Cookies'

const Home = () => {
  return (
    <div>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport/>
      <SuccessStories />
      <NewsBlog/>
      <Cookies/>
    </div>
  )
}

export default Home