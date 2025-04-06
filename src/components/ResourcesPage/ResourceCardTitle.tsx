import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const styles = {
    root: {
        backgroundColor: "black",
         boxSizing:"border-box",
        width: {
            lg:"40%",
            md:"40%",
            sm:"100%",
            xs:"100%"
        },
        padding:{
            xs:4
        }
    },
    box: {
        width: {
            lg:"70%",
            md:"70%",
            sm:"100%",
            xs:"100%"
        },
        padding:{
            xs:1
        }
    },
    logo:{
        width:50,
        height:50
    },
    title:{
        color:"white",
        fontSize:{
            lg:30,
            md:30,
            sm:20,xs:20
        }
    },
    details:{
        color:"gray",
        fontSize:15
    }
}
type ResourceCardTitleProps={
    logo:string;
    title:string;
    details:string;
}
const ResourceCardTitle:React.FC<ResourceCardTitleProps> = ({logo,title,details}) => {
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            <Stack sx={styles.box} spacing={2} alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}} >
                <Box component={'img'} src={logo} sx={styles.logo} />
                <Typography sx={styles.title}>{title}</Typography>
                <Typography sx={styles.details}>{details}</Typography>
            </Stack>
        </Stack>
    )
}

export default ResourceCardTitle
