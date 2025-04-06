import { Chip, Stack } from '@mui/material'
import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
const styles={
    root:{
        backgroundColor:"black",
        padding:5
    },
    chips:{
        color:"white",
        padding:1
    }
}
const BlogsStatus = () => {
  return (
    <Stack sx={styles.root} direction={'row'} spacing={2}>
      <Chip sx={styles.chips} variant='outlined' icon={<FavoriteBorderOutlinedIcon />} label={"24.5k"} />
      <Chip sx={styles.chips} variant='outlined' icon={<ModeCommentOutlinedIcon />} label={"50k"}/>
      <Chip sx={styles.chips} variant='outlined' icon={<SendOutlinedIcon />} label={'206'} />
    </Stack>
  )
}

export default BlogsStatus
