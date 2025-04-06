import { Stack } from '@mui/material'
import FeaturesHeader from './FeaturesHeader'
import FeaturesScope from './FeaturesScope'

const styles={
  root:{
    backgroundColor:"rgba(46, 46, 46, 0.8)"
  },
  
}
const featuresData =[
  {
    title:"Future Technology Blog",
    description:"Stay informed with our blog section dedicated to future technology.",
    features:[
      {
        title:"Quantity",
        description:"Over 1,000 articles on emerging tech trends and breakthroughs."
      },
      {
        title:"Variety",
        description:"Articles cover fields like AI, robotics, biotechnology, and more."
      },
      {
        title:"Frequency",
        description:"Fresh content added daily to keep you up to date."
      },
      {
        title:"Authoritative",
        description:"Written by our team of tech experts and industry professionals."
      },
    ]

  },
  {
    title:"Research Insights Blogs",
    description:"Dive deep into future technology concepts with our research section.",
    features:[
      {
        title:"Depth",
        description:"500+ research articles for in-depth understanding."
      },
      {
        title:"Graphics",
        description:"Visual aids and infographics to enhance comprehension."
      },
      {
        title:"Trends",
        description:"Explore emerging trends in future technology research."
      },
      {
        title:"Contributors",
        description:"Contributions from tech researchers and academics."
      },
    ]

  }

]
const Features = () => {
  return (
    <Stack sx={styles.root} flex={'wrap'}>
      <FeaturesHeader />
      <Stack spacing={0.1}>
      {
        featuresData.map((data,index)=>{
          return(
            <FeaturesScope data={data} key={index} />
          )
        })
      }
      </Stack>
    </Stack>
  )
}

export default Features
