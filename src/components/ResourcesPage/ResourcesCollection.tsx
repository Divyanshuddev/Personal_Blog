import { Box, Button, Grid2, Stack, Typography } from "@mui/material"

const styles={
  root:{
    backgroundColor:"#1a1a1a"
  },
  cards:{
    backgroundColor:"black",
    padding:4,
    placeItems:"center"
  },
  box:{
    width:"80%"
  },
  image:{
    borderRadius:3
  },
  title:{
    fontSize:25,
    fontWeight:"bold"
  },
  details:{
    color:"gray",
    fontSize:12
  },
  button:{
    borderColor:"gray",
    color:"gray",
    textTransform:"capitalize"
  }
};
const CardsData=[
  {
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2048,h_1270/https://ibyteinfomatics.com/blog/wp-content/uploads/2022/10/metaverse-cost-3.png",
    title:"FutureTech Trends 2024",
    details:"An ebook that predicts upcoming technology trends for the next year, including AI developments",
  },
  {
    image:"https://img.freepik.com/free-photo/still-life-space-composition-with-white-astronaut_23-2149101805.jpg",
    title:"Space Exploration Ebook",
    details:"An ebook that predicts upcoming technology trends for the next year, including AI developments",
  },
  {
    image:"https://th.bing.com/th/id/OIP.-FoXvwc5lWUoQ2YzmmyU4QHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
    title:"Quantum Computing Whitepaper",
    details:"An in-depth whitepaper exploring the principles, applications.",
  },
]
const ResourcesCollection = () => {
  return (
    <Grid2 container spacing={0.1} sx={styles.root}>
      {
        CardsData.map((data,index)=>{
          return(
        <Grid2 size={{lg:4,md:4,sm:12,xs:12}} sx={styles.cards} key={index}>
          <Stack sx={styles.box} spacing={4}>
            <Box  component={'img'} src={data.image} sx={styles.image} />
            <Stack spacing={2}>
              <Typography sx={styles.title}>{data.title}</Typography>
              <Typography sx={styles.details}>{data.details}</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Button variant="outlined" sx={styles.button} size="small">Views Details</Button>
              <Button variant="outlined" sx={styles.button} size="small">Download PDF Now</Button>
            </Stack>
          </Stack>
        </Grid2>
          )
        })
      }
    </Grid2>
  )
}

export default ResourcesCollection
