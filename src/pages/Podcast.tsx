import { Divider } from '@mui/material'
import NavBar from '../components/NavBar'
import PodcastHeader from '../components/Podcast/PodcastHeader'
import PodcastCard from '../components/Podcast/PodcastCard'
import podLogo1 from '.././assets/podcast.svg';
import podLogo2 from '.././assets/podcast2.svg'
import CommonHeader from '../components/CommonHeader';
import PodcastCollection from '../components/Podcast/PodcastCollection';
import Revolution from '../components/Revolution/Revolution';
import Footer from '../components/Footer/Footer';
const podCastData=[
    {
        image:podLogo1,
        title:"AI Revolution",
        host:"Dr. Sarah Mitchell",
        poster:"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/ai-cloud-concept-with-brain.jpg",
        topic:"Delves into the transformative impact of AI",
        details:"Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
        cards:[
            {
                title:"Total Episodes",
                description:"50"
            },
            {
                title:"Average Episode Length",
                description:"30 min"
            },
            {
                title:"Release Frequency",
                description:"Weekly"
            },
            
        ]
    },
    {
        image:podLogo2,
        title:"AI Conversations",
        host:"Mark Anderson",
        poster:"https://tse1.mm.bing.net/th?id=OIP.agorsrDD5-l1b19hniNiQgHaEU&w=600&h=350&rs=1&pid=ImgDetMain",
        topic:"Engage in thought-provoking conversations with leading experts.",
        details:"Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
        cards:[
            {
                title:"Total Episodes",
                description:"40"
            },
            {
                title:"Average Episode Length",
                description:"40 min"
            },
            {
                title:"Release Frequency",
                description:"Monthly"
            },
            
        ]
    },

]
const Podcast = () => {
  return (
    <>
    <NavBar />
    <PodcastHeader />
    <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
    {
        podCastData.map((value,index)=>{
            return(
                <div key={index}>
                 <PodcastCard data={value} />
                 <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
                </div>
            )
        })
    }
   <CommonHeader subTitle='Stay Informed with Fresh Content' title='Latest Podcast Episodes' button='none' />
   <PodcastCollection />
   <Revolution />
   <Footer />
    </>
  )
}

export default Podcast
