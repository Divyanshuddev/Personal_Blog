import { Chip, Stack, Typography } from '@mui/material'
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const styles={
  chipStyles:{
    color:"white",
    padding:1
  }
}
type CardDescriptionProps={
  date:string,
    topic:string,
    details:string,
    likes:string,
    comments:string,
    share:string
}
const CardDescription:React.FC<CardDescriptionProps> = ({date,topic,details,likes,comments,share}) => {
  return (
    <Stack direction={'column'} spacing={3}>
      <Typography>{date}</Typography>
      <Stack>
        <Typography>{topic}</Typography>
        <Typography>{details}</Typography>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <Chip label={likes} icon={<FavoriteBorderIcon />} sx={styles.chipStyles} variant="outlined" />
        <Chip label={comments} icon={<ChatBubbleOutlineOutlinedIcon />} sx={styles.chipStyles} variant="outlined" />
        <Chip label={share} icon={<SendOutlinedIcon />} sx={styles.chipStyles} variant="outlined" />
      </Stack>
    </Stack>
  )
}

export default CardDescription
