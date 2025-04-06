import { Button, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimationIcon from '@mui/icons-material/Animation';
const styles={
    root:{
        backgroundColor:"#1a1a1a"
    },
    box:{
        padding:4,
        backgroundColor:"black"
    },
    title:{
        fontSize:20
    },
    button:{
        color:"gray",
        borderColor:"gray",
        width:"fit-content",
        borderRadius:2
    },
    iconBox:{
        backgroundColor:"#1a1a1a",
        padding:1
    }
    


};
const CardsData=[
    {
        title:"General Inquiries",
        tags:[
            "contact@ai-podcasts.com",
            "+1 (123) 456-7890"
        ]
    },
    {
        title:"Technical Support",
        tags:[
            "contact@ai-podcasts.com",
            "+1 (123) 456-7890"
        ]
    },
    {
        title:"Our Office",
        tags:[
            "Address: 123 AI Tech Avenue, Techville, 54321",
            "Get Directions"
        ]
    },
]
const ContactHeader = () => {
  return (
    <Grid2 container spacing={0.1} sx={styles.root}>
      {
        CardsData.map((data,index)=>{
            return(
                <Grid2 size={{lg:3,md:3,sm:12,xs:12}} key={index} sx={styles.box} >
                    <Stack direction={'column'} spacing={3} >
                        <Typography sx={styles.title}>{data.title}</Typography>
                        {
                            data.tags.map((values,index)=>{
                                return(
                                    <Button key={index} variant='outlined' sx={styles.button} endIcon={<ArrowOutwardIcon style={{color:"yellow"}} />} >{values}</Button>
                                )
                            })
                        }
                    </Stack>
                </Grid2>
            )
        })
      }
      <Grid2 size={{lg:3,md:3,sm:12,xs:12}} sx={styles.box} >
        <Stack spacing={3}>
            <Typography sx={styles.title}>Connect with Us</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Stack sx={styles.iconBox}>
                    <TwitterIcon />
                </Stack>
                <Stack sx={styles.iconBox}>
                    <AnimationIcon />
                </Stack>
                <Stack sx={styles.iconBox}>
                    <LinkedInIcon />
                </Stack>
            </Stack>
        </Stack>
      </Grid2>
    </Grid2>
  )
}

export default ContactHeader
