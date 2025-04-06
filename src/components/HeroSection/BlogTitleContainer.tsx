import { Stack, Typography } from '@mui/material'
import React from 'react'

const styles={
    root:{
        padding:7,
        boxSizing:"border-box",
        backgroundColor:"black !important"
    },
    textStyle:{
        color:"gray",
        fontSize:{
            lg:20,
            md:18,
            sm:10,
            xs:10
        }
    },
    titleStyle:{
        color:"white",
        fontSize:{
            lg:60,
            md:55,
            sm:40,
            xs:25
        }
    },
    subTextStyle:{
        color:"gray",
        fontSize:{
            lg:15,
            md:12,
            sm:10,
            xs:8
        }
        
    }
}
const BlogTitleContainer = () => {
  return (
    <Stack sx={styles.root}>
        <Typography sx={styles.textStyle}>Your Journey to Tomorrow Begins Here</Typography>
        <Typography sx={styles.titleStyle}>Explore the Frontiers of Artificial Intelligence</Typography>
        <Typography sx={styles.subTextStyle}>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</Typography>
    </Stack>
  )
}

export default BlogTitleContainer
