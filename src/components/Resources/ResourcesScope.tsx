import {  Divider, Stack } from '@mui/material'
import React from 'react'
import ResoucresFirstContainer from './ResoucresFirstContainer'
import ResourcesSecondContainer from './ResourcesSecondContainer'

type ResourceData={
    title:string,
    description:string,
    topic:string,
    details:string,
    image:string,
    total:string,
    downloads:string,
    author:string
}
type ResourcesScopeProps={
    data:ResourceData
}
const ResourcesScope:React.FC<ResourcesScopeProps> = ({data}) => {
  return (
    <Stack direction={'row'} flexWrap={'wrap'} width={'100%'}>
      <Stack width={{lg:"40%",md:"40%",sm:"100%",xs:"100%"}} borderRight={'0.1px solid gray'}>
        <ResoucresFirstContainer title={data.title} description={data.description} />
      </Stack>
      <Divider sx={{display:{lg:"block",sm:"flex",xs:"flex"}}} style={{backgroundColor:"red"}} />
      <Stack width={{lg:"59.9%",md:"60%",sm:"100%",xs:'100%'}}>
        <ResourcesSecondContainer title={data.title} topic={data.topic} details={data.details} image={data.image} total={data.total} downloads={data.downloads} author={data.author} />
      </Stack>
    </Stack>
  )
}

export default ResourcesScope
