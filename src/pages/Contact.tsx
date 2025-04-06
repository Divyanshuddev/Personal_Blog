import { Divider } from '@mui/material'
import ContactHeader from '../components/Contact/ContactHeader'
import NavBar from '../components/NavBar'
import ContactForm from '../components/Contact/ContactForm'
import AskQuestions from '../components/Contact/AskQuestions'
import Revolution from '../components/Revolution/Revolution'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
      <ContactForm />
      <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
      <AskQuestions />
      <Revolution />
      <Footer />
    </div>
  )
}

export default Contact
