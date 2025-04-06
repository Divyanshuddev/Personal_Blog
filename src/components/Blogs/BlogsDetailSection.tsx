import React from 'react'
import BlogIntroduction from './BlogIntroduction'
import BlogsDesc from './BlogsDesc'
import { Divider, Stack } from '@mui/material'

const BlogsDetailSection = () => {
  return (
    <Stack direction={'column'} >
      <BlogIntroduction />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
      <BlogsDesc />
    </Stack>
  )
}

export default BlogsDetailSection
