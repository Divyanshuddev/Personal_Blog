import { Grid2 } from '@mui/material'
import React from 'react'
import Cards from './Cards'
const styles = {
    root: {
        backgroundColor: "#1a1a1a",
        padding:"5rem 8rem"
    }
}

const VideoData = [
    {
        poster: "https://www.6pr.com.au/wp-content/uploads/sites/13/2018/11/46619027_s-1.jpg",
        title: "Mars Exploration: Unveiling Alien Landscapes",
        details: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
    },
    {
        poster: "https://www.explainingspace.com/wp-content/uploads/2023/01/how-far-is-mars.jpg",
        title: "Blockchain Explained: A Revolution in Finance",
        details: "Delve into the world of blockchain technology and its transformative impact on the financial industry."
    },
    {
        poster: "https://img.freepik.com/premium-photo/rocky-terrain-with-mountain-distance-generative-ai_900370-37948.jpg",
        title: "Breaking the Silence: Mental Health Awareness in the Workplace",
        details: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
    },
    {
        poster: "https://img.freepik.com/premium-photo/rocky-terrain-with-mountain-distance-generative-ai_900370-37948.jpg",
        title: "Revolutionizing Investment Strategies",
        details: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction."
    },
]
const VideoSection = () => {
    return (
        <Grid2 container sx={styles.root} spacing={5}  >
            {
                VideoData.map((data,index) => {
                    return (
                        <Grid2 size={{lg:6,md:6,sm:12,xs:12}} key={index} >
                            <Cards data={data} />
                        </Grid2>

                    )
                })
            }
        </Grid2>
    )
}

export default VideoSection
