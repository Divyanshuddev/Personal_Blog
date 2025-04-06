import {  Divider, Grid2, Stack } from '@mui/material'
import React from 'react'
import CardProfile from './CardProfile'
import CardDescription from './CardDescription'
import CommonButton from './CommonButton'

const styles={
    root:{
        padding:5,
        width:"100%",
        backgroundColor:"black"

    }
}
type ExploreCardData={
    name:string,
    desc:string,
    imageUrl:string,
    date:string,
    topic:string,
    details:string,
    likes:string,
    comments:string,
    share:string
}
type ExploreCardProps={
    exploreData:ExploreCardData
}
const ExploreCard:React.FC<ExploreCardProps> = ({exploreData}) => {
  return (
    <Stack>
    <Grid2 container sx={styles.root} spacing={{lg:0.5,md:0.5,sm:3,xs:3}} >
        <Grid2 size={{lg:2,md:2,sm:12,xs:12}}>
            <CardProfile name={exploreData.name} desc={exploreData.desc} image={exploreData.imageUrl} />
        </Grid2>
        <Grid2 size={{lg:8,md:8,sm:12,xs:12}}>
            <CardDescription date={exploreData.date} topic={exploreData.topic} details={exploreData.details} likes={exploreData.likes} comments={exploreData.comments} share={exploreData.share}  />
        </Grid2>
        <Grid2 size={{lg:2,md:2,sm:12,xs:12}}>
            <CommonButton name='View blog' />
        </Grid2>
    </Grid2>
    <Divider />
    </Stack>
  )
}

export default ExploreCard
