import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import NorthEastIcon from '@mui/icons-material/NorthEast';

const styles={
    root:{
         boxSizing:"border-box",
        width:{
            lg:"40%",
            md:"40%",
            sm:"100%",
            xs:"100%"
        },

        padding:{
            xs:3
        }
    },
    box:{
        width:"80%",
    },
    logo:{
        width:50,
        height:50
    },
    ratingBox:{
        backgroundColor:"#1a1a1a",
        padding:1,
        borderRadius:5
    },
    title:{
        fontSize:25,
        color:"white",
        fontWeight:"bold"
    },
    hostBox:{
        backgroundColor:"#1a1a1a",
        padding:2,
        borderRadius:2,
        title:{
            color:"gray",
            fonSize:13
        }
    },
    button:{
        width:160,
        height:40,
        color:"gray",
        borderColor:'gray',
        fontSize:10
    }
}
type PodcastNameBoxProps={
    image:string;
    title:string;
    host:string;
}
const PodcastNameBox:React.FC<PodcastNameBoxProps> = ({image,title,host}) => {
  return (
    <Stack sx={styles.root}  justifyContent={'center'} alignItems={'center'}>
        <Stack sx={styles.box} spacing={5} direction={'column'} alignItems={{sm:"center",xs:"center"}}>
            <Box component={'img'} src={image} sx={styles.logo} />
            <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={styles.title}>{title}</Typography>
                <Stack sx={styles.ratingBox}>
                <Rating name="read-only" value={5} readOnly />
                </Stack>
            </Stack>
            <Stack  sx={styles.hostBox} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'} spacing={{lg:3,md:3,sm:2,xs:2}}>
                <Stack>
                    <Typography sx={styles.hostBox.title}>Host</Typography>
                    <Typography>{host}</Typography>
                </Stack>
                <Button variant='outlined' endIcon={<NorthEastIcon style={{ color: "yellow" }} />} size='small' sx={styles.button}>
                Listen Podcast
                </Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default PodcastNameBox
