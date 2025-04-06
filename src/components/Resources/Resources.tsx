import { Divider, Stack } from '@mui/material'
import CommonHeader from '../CommonHeader'
import ResourcesScope from './ResourcesScope'

const ResourceData=[
    {
        title:"Ebooks",
        description:"Explore our collection of ebooks covering a wide spectrum of future technology topics.",
        topic:"Variety of Topics",
        details:"Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
        image:"https://blog.pressreader.com/hubfs/woman-virtual-realiy.jpg",
        total:"Over 100 ebooks",
        downloads:"PDF format for access.",
        author:"Ebooks are authored by renowned experts with an average of 15 years of experience"
    },
    {
        title:"Whitepapers",
        description:"Dive into comprehensive reports and analyses with our collection of whitepapers. ",
        topic:"Topics Coverage",
        details:"Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
        image:"https://www.marktechpost.com/wp-content/uploads/2023/09/4854.jpg",
        total:"Over 50 whitepapers",
        downloads:"PDF format for access.",
        author:"Whitepapers are authored by subject matter experts with an average of 20 years of experience."
    }
]
const Resources = () => {
  return (
    <Stack>
      <CommonHeader subTitle='Your Gateway to In-Depth Information' title="Unlock Valuable Knowledge with FutureTech's Resources" button='Resources' />
      {
        ResourceData.map((data,index)=>{
            return(
              <>
                <ResourcesScope data={data} key={index} />
                <Divider style={{backgroundColor:"gray"}} />
              </>
            )
        })
      }
      
    </Stack>
  )
}

export default Resources
