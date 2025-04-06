import { Box, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../Explore/CommonButton'

const styles={
    root:{
        backgroundColor:"black",
        padding:5,
        width:"60%"
    },
    images:{
        width:"100%",
        height:300,
        objectFit:"cover",
        borderRadius:3
    },
    topic:{
        fontSize:30
    },
    desc:{
        color:"gray",
        fontSize:10
    },
    cards:{
        backgroundColor:"#1a1a1a",
        borderRadius:2,
        padding:2
    }
}
type CardsData={
    title:string;
    value:string;
}
type ResourcesCardContentProps={
    image:string;
    topic:string;
    desc:string;
    cards:CardsData[]
}
const ResourcesCardContent:React.FC<ResourcesCardContentProps> = ({image,topic,desc,cards}) => {
  return (
    <Stack sx={styles.root} direction={'column'} spacing={5}>
      <Box component={'img'} src={image} sx={styles.images} />
      <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'} spacing={{lg:2,md:2,sm:3,xs:3}}>
        <Stack spacing={{lg:1,md:1,sm:3,xs:3}}>
            <Typography sx={styles.topic}>{topic}</Typography>
            <Typography sx={styles.desc}>{desc}</Typography>
        </Stack>
        <CommonButton name='Download PDF Now' />
      </Stack>
      <Grid2 container spacing={3}>
      {
        cards.map((data,index)=>{
            return(
                <Grid2 size={{lg:4,md:4,sm:12,xs:12}} key={index} sx={styles.cards}>
                    <Typography>{data.title}</Typography>
                    <Typography>{data.value}</Typography>
                </Grid2>
            )
        })
      }
      </Grid2>
    </Stack>
  )
}

export default ResourcesCardContent
