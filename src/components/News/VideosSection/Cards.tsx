import { Card, CardMedia, Typography, } from '@mui/material'
import React from 'react'
import v1 from '../../../assets/Media1.mp4'

const styles={
    root:{
        backgroundColor:"#1a1a1a",
        color:"white",
        maxWidth:500,
        display:"flex",
        flexDirection:"column",
        gap:3,
    },
    title:{
        fontSize:20
    },
    details:{
        color:'gray',
        fontSize:15
    }
}
type VideoData = {
    poster: string,
    title: string,
    details: string
}
type CardsProps = {
    data: VideoData
}
const Cards: React.FC<CardsProps> = ({ data }) => {
    return (
        <Card sx={styles.root} elevation={0}>
            <CardMedia
                component="video"
                height="240"
                image={v1}
                alt="Sample video"
                poster={data.poster}
                controls
                autoPlay
            />
            <Typography sx={styles.title}>{data.title}</Typography>
            <Typography sx={styles.details}>{data.details}</Typography>

        </Card>
    )
}

export default Cards
