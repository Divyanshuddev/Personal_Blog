import { Box, Grid2, Stack, Typography } from '@mui/material'
import CommonButton from '../Explore/CommonButton'

const styles = {
    root: {
        backgroundColor: "rgba(61, 59, 60, 0.8)",
    },
    box:{
        width:"60%",
        backgroundColor:"black"
    },
    image:{
        width:{
            lg:300,
            md:300,
            sm:200,
            xs:200
        },
        height:{
            lg:200,
            md:200,
            sm:100,
            xs:120
        },
        borderRadius:2
    },
    title:{
        color:"white",
        fontSize:25
    },
    details:{
        color:'gray',
        fontSize:"12"
    }
}
const PodCastData = [
    {
        image: "https://analyticsdrift.com/wp-content/uploads/2022/07/Artificial-intelligence-in-chronic-disease-management-696x392.jpg",
        title: "AI in Healthcare",
        details: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    },
    {
        image: "https://www.projectcademy.com/wp-content/uploads/2023/01/ai-projects.webp",
        title: "AI Ethics",
        details: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    },
    {
        image: "https://manavrachna.edu.in/uploads/blogs/Robotics-ML-Blog-6.jpg",
        title: "Machine Learning Explained",
        details: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    },
    {
        image: "https://www.bridge-global.com/blog/wp-content/uploads/2020/07/AR-VR.jpg",
        title: "AI and the Future of Work",
        details: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    },
    {
        image: "https://static.wixstatic.com/media/573532_b4da3146282c4c1f842174c8b5410853~mv2.png/v1/fill/w_498,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Picture16.png",
        title: "AI in Education",
        details: "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
    },
    {
        image: "https://s3.envato.com/files/b113dd22-d5c2-428d-9456-7d4059ab89ca/inline_image_preview.jpg",
        title: "AI in Entertainment",
        details: "David Smith as they explore the influence of AI in the entertainment industry.",
    },
]
const PodcastCollection = () => {
    return (
        <Grid2 container spacing={0.1} sx={styles.root}  >
            {
                PodCastData.map((data,index) => {
                    return (
                        <Grid2 size={{lg:4,md:4,sm:12,xs:12}} key={index} sx={{backgroundColor:'black',placeItems:"center",padding:4}}>
                            <Stack sx={styles.box}  spacing={2}>
                                <Box component={'img'} src={data.image} sx={styles.image} />
                                <Typography sx={styles.title}>{data.title}</Typography>
                                <Typography sx={styles.details}>{data.details}</Typography>
                                <CommonButton name='Listen Podcast' />
                            </Stack>
                        </Grid2>
                    )
                })

            }
        </Grid2>
    )
}

export default PodcastCollection
