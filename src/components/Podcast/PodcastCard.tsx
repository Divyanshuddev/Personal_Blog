import { Divider, Stack } from "@mui/material"
import PodcastNameBox from "./PodcastNameBox"
import PodcastVideoBox from "./PodcastVideoBox"

const styles={
    root:{
        backgroundColor:"black",
    }
};
type Card={
    title:string;
    description:string;
}
type PodCastData={
    image: string;
    title: string;
    host: string;
    poster: string;
    topic: string;
    details: string;
    cards:Card[];
}
type PodcastCardProps={
    data:PodCastData
}
const PodcastCard:React.FC<PodcastCardProps> = ({data}) => {
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} sx={styles.root}>
        <PodcastNameBox image={data.image} title={data.title} host={data.host} />
        <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} orientation="vertical" flexItem/>
        <PodcastVideoBox poster={data.poster} topic={data.topic} details={data.details} cards={data.cards} />
    </Stack>
  )
}

export default PodcastCard
