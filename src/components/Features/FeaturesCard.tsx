import { Stack, Typography } from '@mui/material'
import React from 'react'

const styles={
    root:{
        borderRadius:2,
        backgroundColor:"#1a1a1a",
        padding:4,
        height:100
    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }

}
type Data={
    title:string,
    description:string
}
type FeaturesCardProps={
    data:Data
}
const FeaturesCard:React.FC<FeaturesCardProps> = ({data}) => {
  return (
    <Stack sx={styles.root}>
      <Typography sx={styles.title}>{data.title}</Typography>
      <Typography >{data.description}</Typography>
    </Stack>
  )
}

export default FeaturesCard
