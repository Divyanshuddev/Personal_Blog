import { Divider, Stack } from '@mui/material'
import BlogsStatus from './BlogsStatus'
import BlogType from './BlogType'

const BlogsCategorySection = () => {
  return (
    <Stack direction={'column'} >
      <BlogsStatus />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}}/>
      
      <BlogType />
    </Stack>
  )
}

export default BlogsCategorySection
