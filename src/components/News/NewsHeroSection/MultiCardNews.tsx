import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CommonButton from '../../Explore/CommonButton';
const styles = {
  image: {
    width: {
      lg:300,
      md:300,
      sm:200,
      xs:200
    },
    height: {
      lg:200,
      md:200,
      sm:100,
      xs:100
    },
    borderRadius:2
  },
  chips: {
    color: "white"
  },
  readMore: {
    borderColor: "gray",
    color: "gray"
  }
}
type CardsData = {
  image: string;
  title: string;
  tags: string;
  likes: string;
  share: string;
}

type MultiCardNewsProps = {
  data: CardsData
}
const MultiCardNews: React.FC<MultiCardNewsProps> = ({ data }) => {
  return (
    <Stack direction={'column'} spacing={2}>
      <Box component={'img'} src={data.image} sx={styles.image} />
      <Typography>{data.title}</Typography>
      <Typography>{data.tags}</Typography>
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}}  alignItems={'center'} spacing={3}>
          <Stack direction={'row'} alignItems={'center'} spacing={3}>
            <Chip icon={<FavoriteBorderOutlinedIcon />} label={data.likes} variant='outlined' sx={styles.chips} />
            <Chip icon={<SendOutlinedIcon />} label={data.share} variant='outlined' sx={styles.chips} />
          </Stack>
          <CommonButton name='Read more' />
        </Stack>
    </Stack>
  )
}

export default MultiCardNews
