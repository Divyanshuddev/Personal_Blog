import { Stack, Typography } from '@mui/material'
import React from 'react'
import CommonButton from './Explore/CommonButton'

const styles = {
    root: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight:5,
        backgroundColor:"rgba(46, 46, 46, 0.8)"
    },
    textStyles: {
        backgroundColor: "gray",
        color: "white",
        padding: 1,
        width: "fit-content;"
    },
    titleStyles: {
        color: "white",
        fontSize: 40
    }
}
type CommonHeaderProps={
    subTitle:string,
    title:string,
    button:string
}
const CommonHeader:React.FC<CommonHeaderProps> = ({subTitle,title,button}) => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={styles.root} flexWrap={'wrap'}>
            <Stack direction={'column'} spacing={4} >
                <Typography sx={styles.textStyles}>{subTitle}</Typography>
                <Typography sx={styles.titleStyles}>{title}</Typography>
            </Stack>
            {
                button!=='none'&&(
                    <CommonButton name={`View all ${button}`} />
                )
            }
        </Stack>
  )
}

export default CommonHeader
