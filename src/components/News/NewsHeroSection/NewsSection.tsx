import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const styles={
    root:{
        backgroundColor:"#1a1a1a",
        padding:10,
    },
    image:{
        width:{
            lg:400,
            md:400,
            sm:300,
            xs:250
        },
        height:{
            lg:300,
            md:300,
            sm:300,
            xs:150
        },
        borderRadius:2
    },
    title:{
        fontSize:25,
        color:'white'
    },
    details:{
        fontSize:15,
        color:"gray"
    },
    heading:{
        fontSize:12,
        color:"gray"
    },
    content:{
        fontSize:15,
        color:"white"
    },
    chips:{
        color:"white"
    },
    readMore:{
        borderColor:"gray",
        color:"gray"
    }
}
const NewsSection = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} justifyContent={'space-between'} spacing={{lg:5,md:3,sm:3,xs:3}} >
      <Box component={'img'} src='https://i.ytimg.com/vi/kbID5lRTSec/maxresdefault.jpg' sx={styles.image}  />
      <Stack spacing={{lg:3,md:3,sm:2,xs:5}} >
        <Typography sx={styles.title}>Global Climate Summit Addresses Urgent Climate Action</Typography>
        <Typography sx={styles.details}>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</Typography>
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}}  spacing={{lg:4,md:4,sm:3,xs:1}} >
            <Stack>
                <Typography sx={styles.heading}>Category</Typography>
                <Typography sx={styles.content}>Environment</Typography>
            </Stack>
            <Stack>
                <Typography sx={styles.heading}>Publication Date</Typography>
                <Typography sx={styles.content}>October 10, 2023</Typography>
            </Stack>
            <Stack>
                <Typography sx={styles.heading}>Author</Typography>
                <Typography sx={styles.content}>Jane Smith</Typography>
            </Stack>
        </Stack>
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} alignItems={'center'} spacing={3} >
            <Stack direction={'row'} alignItems={'center'} spacing={3}>
                <Chip icon={<FavoriteBorderOutlinedIcon />} label={'14k'} variant='outlined' sx={styles.chips} />
                <Chip icon={<SendOutlinedIcon />} label={'204'} variant='outlined' sx={styles.chips} />
            </Stack>
            <Button variant='outlined' sx={styles.readMore}>Read more</Button>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  )
}

export default NewsSection
