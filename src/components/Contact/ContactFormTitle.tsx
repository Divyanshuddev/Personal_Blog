import { Box, Stack, Typography } from '@mui/material'
import logo from '../../assets/ContactLogo.svg'
const styles={
    root:{
         boxSizing:"border-box",
        width:{
            lg:"30%",
            md:"30%",
            sm:"100%",
            xs:"100%"
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
const ContactFormTitle = () => {
  return (
    <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'} >
        <Stack sx={styles.box} spacing={2}>
        <Box component={'img'} src={logo} sx={styles.image} />
        <Typography sx={styles.title}>Get in Touch with AI Podcasts</Typography>
        </Stack>
    </Stack>
  )
}

export default ContactFormTitle
