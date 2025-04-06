import { Button, Checkbox, Grid2, Stack, Typography } from '@mui/material'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';

const styles = {
    root: {
        width: {
            lg:"70%",
            md:"70%",
            sm:"100%",
            xs:"100%"
        },
        padding: {
            lg:5,
            md:5,
            sm:2,
            xs:2
        },
        backgroundColor: "black"
    },
    label: {
        color: "white"
    },
    input: {
        backgroundColor: "#1a1a1a",
        color: "white",
        border: "none",
        height: 50
    },
    textArea:{
        backgroundColor: "#1a1a1a",
        color: "white",
        border: "none",
    },
    button:{
        backgroundColor:"yellow",
        color:"black"
    },
    checkBox:{
        color:"gray"
    }
}
const Form = () => {
    return (
        <Grid2 container sx={styles.root} spacing={5}>
            <Grid2 size={{lg:6,md:6,sm:12,xs:12}}>
                <FormControl>
                    <FormLabel sx={styles.label}>First Name</FormLabel>
                    <Input placeholder='Enter First Name' sx={styles.input} />
                </FormControl>
            </Grid2>
            <Grid2 size={{lg:6,md:6,sm:12,xs:12}}>
            <FormControl>
                    <FormLabel sx={styles.label}>Last Name</FormLabel>
                    <Input placeholder='Enter Last Name' sx={styles.input} />
                </FormControl>
            </Grid2>
            <Grid2 size={{lg:6,md:6,sm:12,xs:12}}>
            <FormControl>
                    <FormLabel sx={styles.label}>Email</FormLabel>
                    <Input placeholder='Enter your Email' sx={styles.input} />
                </FormControl>
            </Grid2>
            <Grid2 size={{lg:6,md:6,sm:12,xs:12}}>
            <FormControl>
                    <FormLabel sx={styles.label}>Phone Number</FormLabel>
                    <Input placeholder='Enter Phone Number' sx={styles.input} />
                </FormControl>
            </Grid2>
            <Grid2 size={12}>
            <FormControl>
                    <FormLabel sx={styles.label}>Message</FormLabel>
                    <Textarea minRows={7}  placeholder='Enter your Message' sx={styles.textArea} />
                </FormControl>
            </Grid2>
            <Grid2 size={12}>
                <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'space-between'} spacing={{sm:2,xs:2}}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Checkbox sx={styles.checkBox} />
                        <Typography>I agree with Terms of Use and Privacy Policy</Typography>
                    </Stack>
                    <Button sx={styles.button}>Send</Button>
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default Form
