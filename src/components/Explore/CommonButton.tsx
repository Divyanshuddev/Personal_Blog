import { Button, Stack } from '@mui/material'
import React from 'react'
import NorthEastIcon from '@mui/icons-material/NorthEast';

const styles={
    root:{
        color:"gray",
        borderColor:"gray",  
    }
}
type CommonButtonProps={
    name:string
}
const CommonButton:React.FC<CommonButtonProps> = ({name}) => {
  return (
    <Stack>
    <Button variant='outlined' endIcon={<NorthEastIcon style={{ color: "yellow" }} />} sx={styles.root}>
        {name}
    </Button>
    </Stack>
  )
}

export default CommonButton
