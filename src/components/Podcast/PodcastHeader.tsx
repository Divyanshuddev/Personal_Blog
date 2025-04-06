import { Stack, Typography } from '@mui/material'

const styles={
    root:{
        backgroundColor:"black",
        padding:7
    },
    title:{
        fontSize:{
          lg:50,
          md:50,
          sm:30,
          xs:30
        },
        fontWeight:"bold",
        color:"white"
    },
    subTitle:{
        color:"gray",
        fontSize:15
    }
};

const PodcastHeader = () => {
  return (
    <Stack sx={styles.root} spacing={2}>
      <Typography sx={styles.title}>Unlock the World of Artificial Intelligence through Podcasts</Typography>
      <Typography sx={styles.subTitle}>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</Typography>
    </Stack>
  )
}

export default PodcastHeader
