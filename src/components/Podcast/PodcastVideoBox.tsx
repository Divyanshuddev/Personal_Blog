import { Card, CardMedia, Grid2, Stack, Typography } from '@mui/material'
import v1 from '../../assets/Media1.mp4'
const styles = {
    root: {
        padding: 5,
        width: "60%",
         boxSizing:"border-box"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    subTitle: {
        color: "gray",
        fontSize: 13
    },
    card: {
        backgroundColor: "#1a1a1a",
        borderRadius: 2,
        padding: 3
    }
}
type Cards = {
    title: string;
    description: string
}
type PodcastVideoBoxProps = {
    poster: string;
    topic: string;
    details: string;
    cards: Cards[]
}
const PodcastVideoBox: React.FC<PodcastVideoBoxProps> = ({ poster, topic, details, cards }) => {
    return (
        <Stack sx={styles.root} spacing={4}>
            <Card elevation={0}>
                <CardMedia
                    component="video"
                    height="480"
                    image={v1}
                    alt="Sample video"
                    poster={poster}
                    controls
                    autoPlay
                />
            </Card>
            <Typography sx={styles.title}>{topic}</Typography>
            <Typography sx={styles.subTitle}>{details}</Typography>
            <Grid2 container spacing={3}>
                {
                    cards.map((data, index) => {
                        return (
                            <Grid2 size={{lg:4,md:4,sm:12,xs:12}} key={index} >
                                <Stack sx={styles.card}>
                                    <Typography>{data.title}</Typography>
                                    <Typography>{data.description}</Typography>
                                </Stack>
                            </Grid2>
                        )
                    })
                }
            </Grid2>
        </Stack>
    )
}

export default PodcastVideoBox
