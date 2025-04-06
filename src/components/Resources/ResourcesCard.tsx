import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const styles={
    root:{
        borderRadius:2,
        backgroundColor:"rgba(46, 46, 46, 0.8)",
        padding:2,
    },
    title:{
        color:"gray",
        fontSize:15
    },
    details:{
        color:"white",
        fontSize:20
    },
    button:{
        color:"gray",
        borderColor:"gray",
        backgroundColor:"#1a1a1a",
        width:100,
        height:40,
        fontSize:10

    }
}
type ResourcesCardProps={
    title:string,
    details:string
}
const ResourcesCard:React.FC<ResourcesCardProps> = ({title,details}) => {
  return (
    <Stack sx={styles.root} direction={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} >
        <Stack>
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.details}>{details}</Typography>
        </Stack>
        {
            title==="Download Formats"&&(
                <Button size='small' sx={styles.button} variant='outlined' endIcon={<VisibilityOutlinedIcon style={{color:"yellow"}} />}>
            Preview
        </Button>
            )
        }
        
    </Stack>
  )
}

export default ResourcesCard
