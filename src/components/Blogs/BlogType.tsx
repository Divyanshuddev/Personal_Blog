import { Grid2, List, ListItem, ListItemText, Stack, Typography,  } from '@mui/material'
import React from 'react'

const styles={
    root:{
        backgroundColor:"black",
        padding:5
    },
    list:{
        backgroundColor:"#1a1a1a",
        padding:"10px 60px",
        borderRadius:2,
        listStyleType: 'disc'
    },
    title:{
        color:"gray",
        fontSize:15,
    },
    details:{
        color:"white",
        fontSize:17
    }
}
const BlogType = () => {
  return (
    <Grid2 container sx={styles.root} spacing={3}>
      <Grid2 size={6}>
        <Typography sx={styles.title}>Publication Date</Typography>
        <Typography sx={styles.details}>October 15, 2023</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography sx={styles.title}>Category</Typography>
        <Typography sx={styles.details}>Healthcare</Typography>
      </Grid2>
      <Grid2 size={6}>
      <Typography sx={styles.title}>Reading Time</Typography>
      <Typography sx={styles.details}>10 Min</Typography>
      </Grid2>
      <Grid2 size={6}>
      <Typography sx={styles.title}>Author Name</Typography>
      <Typography sx={styles.details}>Dr. Emily Walker</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography sx={styles.title}>Table of Contents</Typography>
        <List sx={styles.list} >
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='AI in Diagnostic Imaging' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='Predictive Analytics and Disease Prevention' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='Personalized Treatment Plans' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='Drug Discovery and Research' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='AI in Telemedicine' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='Ethical Considerations' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='The Future of AI in Healthcare' />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText primary='Conclusion' />
            </ListItem>
        </List>
      </Grid2>
      <Stack></Stack>
    </Grid2>
  )
}

export default BlogType

