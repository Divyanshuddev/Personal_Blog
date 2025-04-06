import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import CardProfile from '../Explore/CardProfile'

const styles = {
    root: {
        backgroundColor: "black",
        padding: 6
    },
    box: {
        padding: 3,
        backgroundColor: "#1a1a1a",
        borderRadius: 5,
        boxShadow:"1px 1px 10px #1a1a1a"
    },
    detailsTextStyle: {
        fontSize: 15,
        textAlign: "center"
    },
    ratingBox:{
        backgroundColor:"#0d0d0d",
        borderRadius:5,
        padding:1,
        zIndex:1
    }
}
type TestimonialsData = {
    name: string,
    desc: string,
    image: string,
    details: string
}
type TestimonialsCardsProps = {
    data: TestimonialsData
}
const TestimonialsCards: React.FC<TestimonialsCardsProps> = ({ data }) => {
    return (
        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} sx={styles.root} spacing={5}>
            <CardProfile name={data.name} desc={data.desc} image={data.image} />
            <Stack alignItems={'center'}>
                <Stack sx={styles.ratingBox}>
                    <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
                </Stack>
                <Stack sx={styles.box} justifyContent={'center'} alignItems={'center'} my={-1}>
                    <Typography sx={styles.detailsTextStyle}>{data.details}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TestimonialsCards
