import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import OutboundIcon from '@mui/icons-material/Outbound';
const styles={
    root:{
        backgroundColor:"#1a1a1a",
        padding:2,
        borderRadius:2
    },
    icon: {
        width:{
            lg:50,
            md:40,
            sm:30,
            xs:20
        },
        height: {
            lg:50,
            md:40,
            sm:30,
            xs:20
        }
    },
    text:{
        fontSize:20,
        color:"white"
    },
    details:{
        color:"gray",
        fontSize:15
    }
}
type RevolutionData={
    title:string,
    details:string
}
type RevolutionCardProps={
    data:RevolutionData
}
const RevolutionCard:React.FC<RevolutionCardProps> = ({data}) => {
    return (
        <Stack direction={'column'} sx={styles.root}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography sx={styles.text}>
                    {data.title}
                </Typography>
                <IconButton>
                    <OutboundIcon sx={styles.icon} style={{ color: "yellow" }} />
                </IconButton>
            </Stack>
            <Typography sx={styles.details}>{data.details}</Typography>
        </Stack>
    )
}

export default RevolutionCard
