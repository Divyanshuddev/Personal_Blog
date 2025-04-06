import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
const styles={
    links:{
        color:"gray",
        fontSize:15,
        fontWeight:"none"
    },
    title:{
        color:"white",
        fontSize:20,
    }
}
type FooterData={
    title:string,
    links:string[]
}
type FooterMenuProps={
    data:FooterData
}
const FooterMenu:React.FC<FooterMenuProps> = ({data}) => {
  return (
    <Stack direction={'column'} spacing={2}>
        <Typography sx={styles.title}>{data.title}</Typography>
        {
                data.links.map((value,index)=>{
                    return(
                        <Link key={index} style={styles.links}>{value}</Link>
                    )
                })
        }
      
    </Stack>
  )
}

export default FooterMenu
