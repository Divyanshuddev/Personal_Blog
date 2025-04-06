import { Box, Stack, Typography } from '@mui/material'
import logo from '../../assets/ContactLogo2.svg'
import CommonButton from '../Explore/CommonButton'
const styles={
    root:{
         boxSizing:"border-box",
        width:{
            lg:"32,4%",
            md:"32.4%",
            sm:"100%",
            xs:"90%"
        },
        backgroundColor:"black",
        padding:{
            xs:5
        }
    },
    image:{
        width:50,
        height:50
    },
    title:{
        fontSize:30,
        fontWeight:"bold"
    },
    box:{
        width:"70%"
    }
}
const AskQuestionTitle = () => {
  return (
    <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'} >
        <Stack sx={styles.box} spacing={2}>
        <Box component={'img'} src={logo} sx={styles.image} />
        <Typography sx={styles.title}>Asked question</Typography>
        <Typography>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </Typography>
        <CommonButton name='Ask Question' />
        </Stack>
    </Stack>
  )
}

export default AskQuestionTitle
