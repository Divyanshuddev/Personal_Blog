import { Stack, Typography } from '@mui/material'
import CommonButton from './CommonButton'

const styles = {
    root: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight:5
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
const ExploreHeader = () => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={styles.root} flexWrap={'wrap'}>
            <Stack direction={'column'} spacing={4} >
                <Typography sx={styles.textStyles}>A Knowledge Treasure Trove</Typography>
                <Typography sx={styles.titleStyles}>Explore FutureTech's In-Depth Blog Posts</Typography>
            </Stack>
            <CommonButton name='View all blogs' />
        </Stack>
    )
}

export default ExploreHeader
