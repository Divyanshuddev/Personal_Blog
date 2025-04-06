import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const styles={
    title:{
        color:"white",
        fontWeight:"bold"
    },
    text:{
        color:"gray",
        fontSize:10
    }
}
type CardProfileProps={
    name:string,
    desc:string,
    image:string,
}
const CardProfile:React.FC<CardProfileProps> = ({name,desc,image}) => {
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Avatar src={image} />
            <Stack direction={'column'}>
                <Typography sx={styles.title}>
                    {name}
                </Typography>
                <Typography sx={styles.text}>{desc}</Typography>
            </Stack>
        </Stack>
    )
}

export default CardProfile
