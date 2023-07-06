
import TopMostInfo from './components/TopMostInfo'
import Hero from './components/Hero'
import SuccessStories from './components/SuccessStories'
import SpecialiseSupport from './components/SpecialiseSupport'
import Cookies from './components/Cookies'
import NewsBlog from './components/NewsBlog'

const Home = () => {
  return (
    <>
      <TopMostInfo />
      <Hero />
      <SpecialiseSupport/>
      <SuccessStories />
      <NewsBlog/>
      <Cookies/>
    </>
  )
}

export default Home