import {  Box, Grid2, Typography  } from '@mui/material'
import React from 'react'
import ResourcesCard from './ResourcesCard'

const styles={
    root:{
        backgroundColor:"black",
        padding:5
    },
    imagesStyle:{
        height:{
          lg:300,
          md:300,
          sm:200,
          xs:100
        },
        width:{
          lg:860,
          md:860,
          sm:560,
          xs:300
        },
        objectFit: "cover",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        borderRadius:2
    },
    title:{
        color:"gray",   
    },
    topic:{
        color:"white",
        fontSize:20
    }
}
type ResourcesSecondContainerProps={
    title:string,
    topic:string,
    details:string,
    image:string,
    total:string,
    downloads:string,
    author:string
}
const ResourcesSecondContainer:React.FC<ResourcesSecondContainerProps> = ({title,topic,details,image,total,downloads,author}) => {
  return (
    <Grid2 sx={styles.root} container spacing={3}>
      <Grid2 size={{lg:4,md:4,sm:12,xs:12}}>
        <Typography sx={styles.topic}>{topic}</Typography>
      </Grid2>
      <Grid2 size={{lg:8,md:8,sm:12,xs:12}}>
        <Typography sx={styles.title} >{details}</Typography>
      </Grid2>
      <Grid2 size={12} >
        <Box component={'img'} src={image} sx={styles.imagesStyle}  />
      </Grid2>
      <Grid2 size={{lg:4,md:4,sm:12,xs:12}}>
        <ResourcesCard title={`Total ${title}`} details={total} />
      </Grid2>
      <Grid2 size={{lg:8,md:8,sm:12,xs:12}}>
      <ResourcesCard title='Download Formats' details={downloads} />
      </Grid2>
      <Grid2 size={12}>
      <ResourcesCard title='Average Author Expertise' details={author} />
      </Grid2>
    </Grid2>
  )
}

export default ResourcesSecondContainer
