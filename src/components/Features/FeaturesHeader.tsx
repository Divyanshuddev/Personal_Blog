import { Stack, Typography } from '@mui/material'

const styles={
    root:{
        paddingTop:5,
        paddingLeft:5,
        paddingBottom:5,
    },
    textStyles:{
        backgroundColor:"gray",
        color:"white",
        padding:1,
        width:"fit-content"
      },
    titleStyles:{
        color:"white",
        fontSize:40
    }
}
const FeaturesHeader = () => {
  return (
    <Stack direction={'column'} spacing={4} sx={styles.root}>
      <Typography sx={styles.textStyles}>Unlock the Power of</Typography>
      <Typography sx={styles.titleStyles}>FutureTech Features</Typography>
    </Stack>
  )
}

export default FeaturesHeader
