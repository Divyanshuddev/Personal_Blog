import Explore from "../components/Explore/Explore"
import Features from "../components/Features/Features"
import Footer from "../components/Footer/Footer"
import HeroSection from "../components/HeroSection/HeroSection"
import NavBar from "../components/NavBar"
import Resources from "../components/Resources/Resources"
import Revolution from "../components/Revolution/Revolution"
import Testimonials from "../components/Testimonials/Testimonials"

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Explore /> 
      <Resources />
      <Testimonials />
      <Revolution />
      <Footer />
    </>
  )
}

export default Home
