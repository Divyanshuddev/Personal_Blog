import { Box, Stack } from '@mui/material'
import React from 'react'

const styles={
    
    root:{
        backgroundRepeat:" no-repeat",
        backgroundPosition: "center",
        backgroundSize:" cover",
        objectFit:"cover",
        width:"100%",
        height:400,
    },
    
}
const BlogHeader = () => {
  return (
    <Stack>
    <Box component={'img'} src='https://neobayes.com/wp-content/uploads/2020/07/data-science-health-care-730x381.png' sx={styles.root}>
    </Box>
    </Stack>
  )
}

export default BlogHeader
