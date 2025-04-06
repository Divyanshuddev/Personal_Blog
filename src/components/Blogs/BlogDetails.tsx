import {  Divider, Stack } from '@mui/material'
import React from 'react'
import BlogsDetailSection from './BlogsDetailSection'
import BlogsCategorySection from './BlogsCategorySection'

const styles={
    root:{
        backgroundColor:"black"
    }
}
const BlogDetails = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column",xs:"column"}}>
        <Stack width={{lg:'70%',md:"70%",sm:"100%",xs:"100%"}}>
            <BlogsDetailSection />
        </Stack>
        <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} orientation="vertical" flexItem/>
        <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} sx={{display:{lg:"block",md:"block",sm:"flex",xs:"flex"}}} />
        <Stack width={{lg:'30%',md:"30%",sm:"100%",xs:"100%"}} >
            <BlogsCategorySection />
        </Stack>
    </Stack>
  )
}

export default BlogDetails
