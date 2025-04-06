import { Grid2, Stack, Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
const styles = {
    root: {
        backgroundColor: "black",
        padding: 7
    },
    title: {
        fontSize:{
            lg:50,
            md:50,
            sm:30,
            xs:30
          },
        fontWeight: "bold",
        color: "white"
    },
    subTitle: {
        color: "gray",
        fontSize: 15
    },
    count: {
        fontSize: 40,
        color: 'white'
    },
    countTitle: {
        fontSize: 12,
        color: "gray"
    }
};
const cardsData = [
    {
        count: "300",
        title: "Resources available"
    },
    {
        count: "12k",
        title: "Total Downloads"
    },
    {
        count: "10k",
        title: "Active Users"
    },
    {
        count: "100",
        title: "Countries Accesses Our Content "
    },
]
const ResourceHeader = () => {
    return (
        <Stack>
            <Stack sx={styles.root} spacing={2}>
                <Typography sx={styles.title}>Unlock the World of Artificial Intelligence through Podcasts</Typography>
                <Typography sx={styles.subTitle}>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</Typography>
            </Stack>
            <Grid2 container>
                {
                    cardsData.map((data, index) => {
                        return (
                            <Grid2 size={{lg:3,md:3,sm:6,xs:6}} key={index} sx={{ placeItems: "center", border: "0.8px solid rgba(61, 59, 60, 0.8)", padding: 4 }}>
                                <Stack direction={'column'} justifyContent={'center'}>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Typography sx={styles.count}>{data.count}</Typography>
                                        <AddIcon style={{ color: "yellow" }} fontSize='large' />
                                    </Stack>
                                    <Typography sx={styles.countTitle}>{data.title}</Typography>
                                </Stack>
                            </Grid2>
                        )
                    })
                }
            </Grid2>
        </Stack>
    )
}

export default ResourceHeader
