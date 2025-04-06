import { Divider, Stack, Typography } from '@mui/material'

const styles={
    root:{
        backgroundColor:"#1a1a1a",
        padding:10,
    },
    title:{
        color:'white',
        fontSize:30,
    },
    details:{
        color:"gray",
        fontSize:"20"
    }
}
const HeroSection = () => {
  return (
    <Stack sx={styles.root}>
      <Typography sx={styles.title}>Today's Headlines: Stay Informed</Typography>
      <Typography sx={styles.details}>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</Typography>
      <Divider/>
    </Stack>
  )
}

export default HeroSection
