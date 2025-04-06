import { Divider, Stack } from '@mui/material'
import React from 'react'
import ResourceCardTitle from './ResourceCardTitle'
import ResourcesCardContent from './ResourcesCardContent'

const styles={
    root:{
        
    }
}
type cardsData={
    title:string;
    value:string
}
type Cards={
    logo: string;
    title: string;
    details: string;
    image: string;
    topic: string;
    desc: string;
    cards: cardsData[];
}

type ResourceCardProps={
    data:Cards;
}
const ResourceCard:React.FC<ResourceCardProps> = ({data}) => {
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'}>
      <ResourceCardTitle logo={data.logo} title={data.title} details={data.details} />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} orientation='vertical' flexItem />
      <ResourcesCardContent image={data.image} topic={data.topic} desc={data.desc} cards={data.cards} />
    </Stack>
  )
}

export default ResourceCard
