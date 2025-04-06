import { Avatar, AvatarGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../Explore/CommonButton'

const styles = {
    root: {
        backgroundColor: "black",
        padding: 5
    },
    avatarBox: {
        backgroundColor: "rgba(46, 46, 46, 0.8)",
        borderRadius: 2,
        padding: 2,
        width:"60%"
    },
    downloadStyle: {
        color: "gray",
        fontSize: {
            lg:15,
            md:12,
            sm:10,
            xs:9
        }
    },
    userStyles: {
        color: "white",
        fontSize: {
            lg:20,
            md:18,
            sm:15,
            xs:10
        }
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    avatar:{
        width:{
            lg:50,
            md:30,
            sm:20,
            xs:20
        },
        height:{
            lg:50,
            md:30,
            sm:20,
            xs:20 
        }
    }
}
type ResoucresFirstContainerProps={
    title:string,
    description:string
}
const ResoucresFirstContainer:React.FC<ResoucresFirstContainerProps> = ({title,description}) => {
    return (
        <Stack sx={styles.root} direction={'column'} spacing={{lg:5,xs:3}} my={10} flexWrap={'wrap'}>
            <Typography sx={styles.title}>{title}</Typography>
            <Typography sx={styles.downloadStyle}>{description}</Typography>
            <CommonButton name={`Download ${title} Now`} />
            <Stack direction={'row'} sx={styles.avatarBox} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'column'}>
                    <Typography sx={styles.downloadStyle}>Downloaded By</Typography>
                    <Typography sx={styles.userStyles}>10k + Users</Typography>
                </Stack>
                <AvatarGroup>
                    <Avatar sx={styles.avatar} />
                    <Avatar sx={styles.avatar}/>
                    <Avatar sx={styles.avatar}/>
                    <Avatar sx={styles.avatar}/>
                </AvatarGroup>
            </Stack>
        </Stack>
    )
}

export default ResoucresFirstContainer
