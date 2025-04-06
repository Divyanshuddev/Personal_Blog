import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import OutboundIcon from '@mui/icons-material/Outbound';
const styles = {
    root: {
        padding: 4,
        backgroundColor:"black !important",
        // border: "0.1px solid gray"
    },
    titleStyle: {
        color: "white",
        fontSize: {
            lg:25,
            md:20,
            sm:20,
            xs:15
        }
    },
    textStyle: {
        color: "gray",
        fontSize: {
            lg:18,
            md:15,
            sm:15,
            xs:10
        }
    },
    icon: {
        width:{
            lg:50,
            md:40,
            sm:30,
            xs:20
        },
        height: {
            lg:50,
            md:40,
            sm:30,
            xs:20
        }
    }
}
type FeaturesSectionProps = {
    title: string,
    subTitle: string,
    statement: string
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, subTitle, statement }) => {
    return (
        <Stack sx={styles.root} spacing={{lg:4,md:4,sm:3,xs:2}}>
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                <Stack spacing={2}>
                    <Typography sx={styles.titleStyle}>{title}</Typography>
                    <Typography sx={styles.textStyle}>{subTitle}</Typography>
                </Stack>
                <IconButton>
                    <OutboundIcon sx={styles.icon} style={{ color: "yellow" }} />
                </IconButton>
            </Stack>
            <Typography sx={styles.textStyle}>{statement}</Typography>
        </Stack>
    )
}

export default FeaturesSection
