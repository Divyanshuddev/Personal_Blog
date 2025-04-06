import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import NorthEastIcon from '@mui/icons-material/NorthEast';
const styles = {
    root: {
        // border: "0.1px solid gray",
        backgroundColor:"black !important",
        padding: 13.4
    },
    avatarBox: {
        padding: 2,
        backgroundColor: "rgba(46, 46, 46, 0.8)",
        width: {
            lg: "55%",
            md: "40%",
            sm: "50%",
            xs: "95%"
        },
        borderRadius: 10
    },
    avatar: {
        width: {
            lg: 45,
            md: 30,
            sm: 35,
            xs: 30
        },
        height: {
            lg: 45,
            md: 30,
            sm: 35,
            xs: 30
        },
        border: "3px solid gray"
    },
    titleStyle: {
        color: "white",
        fontSize: 30
    },
    textStyle: {
        color: "gray",
        fontSize: 12
    },
    buttonStyle: {
        width: {
            lg: "60%",
            md: "40%",
            sm: "40%",
            xs: "35%"
        },
        fontSize: {
            lg: 15,
            md: 12,
            sm: 10,
            xs: 10
        },
        padding: {
            lg: "1.5rem 2rem",
            md: "1rem 1.5rem",
            sm: "1rem 1rem",
            xs: "1rem 6rem"
        },
        color: "gray",
        textTransform: "capitalize",
        borderColor: "gray"
    }
}
const ExploreSection = () => {
    return (
        <Stack sx={styles.root} direction={'column'} spacing={2.98}>
            <Stack sx={styles.avatarBox} direction={'row'} justifyContent={'center'} >
                <Avatar sx={styles.avatar} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' />
                <Avatar sx={styles.avatar} src='https://images.squarespace-cdn.com/content/v1/5554d97de4b0ee3b50a3ad52/afc7f731-3bab-4009-908b-280726587f04/DSC_5707_brighter2_sm.jpg' />
                <Avatar sx={styles.avatar} src='https://www.writeups.org/wp-content/uploads/Rapunzel-Tangled-Disney-j-300x457.jpg' />
                <Avatar sx={styles.avatar} src='https://toggle.is/wp-content/uploads/2022/04/LukasStadelmann_bw2.jpg' />
            </Stack>
            <Typography sx={styles.titleStyle}>Explore 1000+ resources</Typography>
            <Typography sx={styles.textStyle}>Over 1,000 articles on emerging tech trends and breakthroughs.</Typography>
            <Button variant='outlined' endIcon={<NorthEastIcon style={{ color: "yellow" }} />} sx={styles.buttonStyle}>Explore Resources</Button>
        </Stack>
    )
}

export default ExploreSection
