import { Grid2, } from '@mui/material'
import React from 'react'
import FooterMenu from './FooterMenu'

const styles = {
    root: {
        backgroundColor: "black",
        padding: 10
    }
}
const FooterData = [
    {
        title: "Home",
        links: [
            "Features",
            "Blogs",
            "Resources",
            "Testimonials",
            "Contact Us",
            "Newsletter"
        ]
    },
    {
        title: "News",
        links: [
            "Trending Stories",
            "Featured Videos",
            "Technology",
            "Health",
            "Politics",
            "Environment"
        ]
    },
    {
        title: "Blogs",
        links: [
            "Quantum Computing",
            "AI Ethics",
            "Space Exploration",
            "Biotechnology",
            "Renewable Energy",
            "Bio-hacking"
        ]
    },
    {
        title: "Podcasts",
        links: [
            "AI Revolution",
            "TechTalk AI",
            "AI Conversations"
        ]
    },
    {
        title: "Resources",
        links: [
            "Whitepapers",
            "Ebooks",
            "Reports",
            "Research Papers"
        ]
    },
]
const Footer = () => {
    return (
        <Grid2 container sx={styles.root} spacing={2}>
            {
                FooterData.map((data,index) => {
                    return (
                        <Grid2 size={{lg:2.4,md:2.4,sm:6,xs:6}}>
                            <FooterMenu data={data} key={index} />
                        </Grid2>
                    )
                })
            }

        </Grid2>
    )
}

export default Footer
