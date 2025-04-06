import NavBar from '../components/NavBar'
import HeroSection from '../components/News/NewsHeroSection/HeroSection'
import NewsSection from '../components/News/NewsHeroSection/NewsSection'
import { Divider } from '@mui/material'
import MultiNews from '../components/News/NewsHeroSection/MultiNews'
import CommonHeader from '../components/CommonHeader'
import HeadLines from '../components/News/HeadLines/HeadLines'
import VideoSection from '../components/News/VideosSection/VideoSection'
import Revolution from '../components/Revolution/Revolution'
import Footer from '../components/Footer/Footer'

const News = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Divider style={{backgroundColor:"gray"}} />
      <NewsSection/>
      <Divider style={{backgroundColor:"gray"}} />
      <MultiNews />
      <CommonHeader subTitle='Welcome to Our News Hub' title='Discover the World of Headlines' button='News' />
      <HeadLines />
      <CommonHeader subTitle='Featured Videos' title='Visual Insights for the Modern Viewer' button=''  />
      <VideoSection />
      <Divider style={{backgroundColor:"gray"}} />
      <Revolution />
      <Footer />
    </>
  )
}

export default News
