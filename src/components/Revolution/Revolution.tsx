import { Box, Grid2, Stack, Typography } from '@mui/material'
import logo from '../../assets/logo.png'
import RevolutionCard from './RevolutionCard'
const styles = {
    root: {
        backgroundColor: "#1a1a1a",
        padding: 8,
    },
    image: {
        width: 200,
        height: 200
    },
    textStyles: {
        backgroundColor: "gray",
        color: "white",
        padding: 1,
        width: "fit-content;"
    },
    titleStyles: {
        color: "white",
        fontSize: 40
    },
    cards:{
        backgroundColor:"black",
        padding:2,
        borderRadius:2
    }
}
const RevolutionData=[
    {
        title:"Resource Access",
        details:"Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
    },
    {
        title:"Community Forum",
        details:"Join our active community forum to discuss industry trends, share insights, and collaborate with peers."
    },
    {
        title:"Tech Events",
        details:"Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge."
    },
]
const Revolution = () => {
    return (
        <Stack sx={styles.root} alignItems={'center'} spacing={8} >
            <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} >
                <Box component={'img'} src={logo} sx={styles.image} />
                <Stack direction={'column'}>
                    <Stack direction={'column'} spacing={2} >
                        <Typography sx={styles.textStyles}>Learn, Connect, and Innovate</Typography>
                        <Typography sx={styles.titleStyles}>Be Part of the Future Tech Revolution</Typography>
                        <Typography>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Grid2 container sx={styles.cards} spacing={2}>
                {
                    RevolutionData.map((data,index)=>{
                        return(
                            <Grid2 size={{lg:4,md:4,sm:12,xs:12}} key={index}>
                                <RevolutionCard data={data} />
                            </Grid2>
                        )
                    })
                }
                
                
            </Grid2>
        </Stack>
    )
}

export default Revolution
