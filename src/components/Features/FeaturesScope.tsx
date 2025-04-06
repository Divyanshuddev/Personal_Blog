import { Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import FeaturesCard from './FeaturesCard'

const styles = {
    root: {
    },
    containerFirst: {
        backgroundColor: "black",
        padding: 5,
        width: {
            lg:"30%",
            md:"30%",
            sm:"100%",
            xs:"100%"
        },
        borderRight:"0.1px solid gray"

    },
    containerSecond: {
        backgroundColor: "black",
        padding: 5,

        width: {
            lg:"59.2%",
            md:"59.2%",
            sm:"100%",
            xs:"100%"
        }
    },
    title: {
        color: "white",
        fontSize: 40,
    },
    text: {
        color: "gray",
    }
}

type Data = {
    title: string,
    description: string,
    features: {
        title: string,
        description: string
    }[]
}
type FeaturesScopeProps = {
    data: Data
}
const FeaturesScope: React.FC<FeaturesScopeProps> = ({ data }) => {
    return (
        <Stack sx={styles.root} spacing={0.1} direction={'row'} flexWrap={'wrap'}>
            <Stack sx={styles.containerFirst} justifyContent={'center'}>
                <Typography sx={styles.title}>
                    {data.title}
                </Typography>
                <Typography sx={styles.text}>
                    {data.description}
                </Typography>
            </Stack>
            <Stack sx={styles.containerSecond}>
                <Grid2 container spacing={4}>
                    {
                        data.features.map((data, index) => {
                            return (
                                <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }} key={index}>
                                    <FeaturesCard data={data} />
                                </Grid2>
                            )

                        })
                    }
                </Grid2>
            </Stack>
        </Stack>
    )
}

export default FeaturesScope
