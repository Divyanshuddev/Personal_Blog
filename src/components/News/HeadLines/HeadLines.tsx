
import ExploreCard from '../../Explore/ExploreCard'
import { Divider } from '@mui/material'

const ExploreData =[
    {
      name:"John Techson",
      desc:"Quantum Computing",
      imageUrl:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png",
      date:"October 15, 2023",
      topic:"The Quantum Leap in Computing",
      details:"Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      likes:"24.5k",
      comments:"50",
      share:"20"
    },
    {
      name:"Sarah Ethicist",
      desc:"AI Ethics",
      imageUrl:"https://img.freepik.com/premium-vector/person-beard-vector-white-background_889056-49726.jpg",
      date:"November 5, 2023",
      topic:"The Ethical Dilemmas of AI",
      details:"A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      likes:"32k",
      comments:"72",
      share:"18"
    },
    {
      name:"Astronomer X",
      desc:"Space Exploration",
      imageUrl:"https://img.freepik.com/premium-vector/hand-drawn-profile-icon-avatar-character_884500-34447.jpg",
      date:"December 10, 2023",
      topic:"The Mars Colonization Challenge",
      details:"Exploring the technical and logistical challenges of human colonization on Mars.",
      likes:"20k",
      comments:"31",
      share:"12"
    }
  
  ]
const HeadLines = () => {
  return (
    <>
      {
        ExploreData.map((data,index)=>{
          return(
            <>
            <ExploreCard exploreData={data} key={index} />
            <Divider style={{backgroundColor:"gray"}}/>
            </>
          )
        })
      }
    </>
  )
}

export default HeadLines
