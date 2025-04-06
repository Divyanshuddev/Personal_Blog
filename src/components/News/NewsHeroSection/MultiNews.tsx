import { Grid2 } from '@mui/material'
import React from 'react'
import MultiCardNews from './MultiCardNews'

const styles={
    root:{
        padding:"50px 100px",
        width:{
            xs:"100%"
        }
    }
}
const MultiCardNewsData=[
    {
        image:"https://th.bing.com/th/id/OIP.RTZ8SWLrbH8X0RGbWI_nlgHaCM?w=2024&h=600&rs=1&pid=ImgDetMain",
        title:"A Decisive Victory for Progressive Policies",
        tags:"Politics",
        likes:"2.2k",
        share:"60"
    },
    {
        image:"https://th.bing.com/th/id/OIP.LgLA4hi-U0Y_rLyKR4uTJgHaE8?w=626&h=418&rs=1&pid=ImgDetMain",
        title:"Tech Giants Unveil Cutting-Edge AI Innovations",
        tags:"Technology",
        likes:"6k",
        share:"92"
    },
    {
        image:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/covid-19-1703056957.jpg",
        title:"COVID-19 Variants",
        tags:"Health",
        likes:"10k",
        share:"124"
    },

]
const MultiNews = () => {
  return (
    <Grid2 container sx={styles.root} spacing={{lg:5,md:5,sm:3,xs:3}}>
      {
        MultiCardNewsData.map((data,index)=>{
            return (
                <Grid2 size={{lg:4,md:4,sm:12,xs:12}}>
                    <MultiCardNews data={data} key={index} />
                </Grid2>
            )
        })
      }
    </Grid2>
  )
}

export default MultiNews
