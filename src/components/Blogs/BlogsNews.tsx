import { Stack, Typography } from '@mui/material'
import CommonButton from '../Explore/CommonButton'
import MultiNews from '../News/NewsHeroSection/MultiNews'

const styles={
    root:{
        backgroundColor:"#1a1a1a",
        padding:{
          lg:8,
          md:8,
          sm:3,xs:2
        },
        boxSizing:"border-box",
        width:"100%"
    },
    title:{
        fontSize:25
    }
}
const BlogsNews = () => {
  return (
    <Stack sx={styles.root} direction={'column'}>
      <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'}>
        <Typography sx={styles.title}>Similar News</Typography>
        <CommonButton name='View all News' />
      </Stack>
      <MultiNews />
    </Stack>
  )
}

export default BlogsNews
