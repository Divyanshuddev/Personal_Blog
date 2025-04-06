import { Stack, Typography } from '@mui/material'

const styles={
    root:{
        padding:5,
        backgroundColor:"black"
    },
    title:{
        color:"white",
        fontSize:25
    },
    details:{
        color:"gray",
        fontSize:15
    }
}
const BlogIntroduction = () => {
  return (
    <Stack sx={styles.root}>
      <Typography sx={styles.title}>Introduction</Typography>
      <Typography sx={styles.details}>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</Typography>
    </Stack>
  )
}

export default BlogIntroduction
