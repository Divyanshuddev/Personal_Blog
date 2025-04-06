import { Stack, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const styles = {
    root: {
        padding: {
            lg:3,
            md:3,
            sm:2,
            xs:2
        },
        backgroundColor:"black !important",
        width: "34%"
    },
    numberStyle:{
        color:"white",
        fontSize:{
            lg:40,
            md:30,
            sm:30,
            xs:20
        }
    },
    textStyle:{
        color:"gray",
        fontSize:{
            lg:20,
            md:18,
            sm:15,
            xs:12
        }
    }
}
type BlogStatusProps={
    number:string,
    title:string
}
const BlogStatus:React.FC<BlogStatusProps> = ({number,title}) => {
    return (
        <Stack sx={styles.root}>
            <Stack direction={'row'} alignItems={'center'}>
                <Typography sx={styles.numberStyle}>{number}</Typography>
                <AddIcon  style={{color:"#ffff1a"}} />
            </Stack>
            <Typography sx={styles.textStyle}>{title}</Typography>
        </Stack>
    )
}

export default BlogStatus
