import { Divider, Stack } from "@mui/material"
import ContactFormTitle from "./ContactFormTitle"
import Form from "./Form"

const ContactForm = () => {
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'}>
      <ContactFormTitle />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} orientation="vertical" flexItem/>
      <Form />
    </Stack>
  )
}

export default ContactForm
