import React from 'react'
import NavBar from '../components/NavBar'
import BlogHeader from '../components/Blogs/BlogHeader'
import BlogDetails from '../components/Blogs/BlogDetails'
import BlogsNews from '../components/Blogs/BlogsNews'
import Revolution from '../components/Revolution/Revolution'
import Footer from '../components/Footer/Footer'
import { Divider } from '@mui/material'

const Blogs = () => {
  return (
    <>
      <NavBar />
      <BlogHeader />
      <BlogDetails />
      <BlogsNews />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
      <Revolution />
      <Footer />
    </>
  )
}

export default Blogs
