import { Divider, Grid2, Stack, } from '@mui/material'
import React from 'react'
import BlogTitleContainer from './BlogTitleContainer'
import BlogStatus from './BlogStatus'
import ExploreSection from './ExploreSection'
import FeaturesSection from './FeaturesSection'

const styles = {
  root: {
    padding: 0,
    backgroundColor: "#1a1a1a"
  },
  textStyles: {
    color: "white",
    fontSize: {
      lg: 100,
      md: 80,
      sm: 50,
      xs: 20,
    }
  },
  boxStyle: {
    // border:"0.1px solid gray"
    // height:290
  },
}
const blogStatusData = [
  {
    number: "100",
    title: "Resources available"
  },
  {
    number: "12k",
    title: "Total Downloads"
  },
  {
    number: "10k",
    title: "Active Users"
  }
];
const featuresData = [
  {
    title: "Latest News Updates",
    subTitle: "Stay Current",
    statement: "Over 1,000 articles published monthly"
  },
  {
    title: "Expert Contributors",
    subTitle: "Trusted Insights",
    statement: "50+ renowned AI experts on our team"
  },
  {
    title: "Global Readership",
    subTitle: "Worldwide Impact",
    statement: "2 million monthly readers"
  }
]
const HeroSection = () => {
  return (
    <Stack sx={styles.root} >
      <Stack  direction={'row'} flexWrap={'wrap'} spacing={0.1} width={'100%'} >
        <Stack width={{ lg: "60%", md: "40%", sm: "100%", xs: "100%" }} sx={styles.boxStyle} spacing={0.1}>
          <BlogTitleContainer />
          <Stack direction={'row'} spacing={0.1}>
            {
              blogStatusData.map((data, index) => {
                return (
                  <BlogStatus number={data.number} title={data.title} key={index} />
                )
              })
            }
          </Stack>
          <Divider sx={{display:{lg:"block",md:"block",sm:"flex",xs:"flex"}}} />
        </Stack>
        <Stack width={{ lg: "39.8%", md: "29%", sm: "100%", xs: "100%" }} spacing={0.1}>
          <ExploreSection />
        </Stack>
      </Stack>
      <Divider style={{backgroundColor:"gray"}} />
      <Grid2 container width={'100%'} spacing={0.1}>
        {
          featuresData.map((data, index) => {
            return (
              <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }} key={index}>
                <FeaturesSection title={data.title} subTitle={data.subTitle} statement={data.statement} />
              </Grid2>
            )
          })
        }
      </Grid2>

    </Stack>
  )
}

export default HeroSection
