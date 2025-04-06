import { Grid2 } from '@mui/material'
import TestimonialsCards from './TestimonialsCards'

const styles={
    root:{
        backgroundColor:"#1a1a1a",

    }
}
const testimonialsData = [
    {
        name: "Sarah Thompson",
        desc: "San Francisco, USA",
        image: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
        details: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
    },
    {
        name: "Raj Patel",
        desc: "Mumbai, India",
        image: "https://cdn.now.gg/apps-content/8798/icon/anima-ai-friend-companion.png",
        details: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
    },
    {
        name: "Emily Adams",
        desc: "London, UK",
        image: "https://img.freepik.com/premium-photo/close-up-woman-with-pink-hair-jacket-generative-ai_902338-34507.jpg",
        details: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
    },
    {
        name: "Alan Jackson",
        desc: "Houston, USA",
        image: "https://img.freepik.com/premium-photo/close-up-woman-with-pink-hair-jacket-generative-ai_902338-34507.jpg",
        details: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth."
    },
    {
        name: "Jessica Miller",
        desc: "Boston, USA",
        image: "https://th.bing.com/th/id/OIP.raDBDnUMRpsYdUvu8oHllAHaHa?w=475&h=475&rs=1&pid=ImgDetMain",
        details: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
    },
    {
        name: "Diego Lopez",
        desc: "Barcelona, Spain",
        image: "https://th.bing.com/th/id/OIP.raDBDnUMRpsYdUvu8oHllAHaHa?w=475&h=475&rs=1&pid=ImgDetMain",
        details: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
    },
]
const TestimonialsSection = () => {
    return (
        <Grid2 container spacing={0.1} sx={styles.root}>
            {
                testimonialsData.map((data, index) => {
                    return (
                        <Grid2 size={{lg:4,md:4,sm:12,xs:12}} key={index}>
                            <TestimonialsCards data={data} />
                        </Grid2>
                    )
                })

            }
        </Grid2>
    )
}

export default TestimonialsSection
