import { Button, Card, CardActions, CardContent, Collapse, Typography } from '@mui/material'
import React, { useState } from 'react'

const styles = {
    root: {
        backgroundColor: "black",
        padding: 5,
    },
    title: {
        color: "white",
        fontSize: 25
    },
    details: {
        color: "gray",
        fontSize: 15
    },
    readMoreButton: {
        display: 'flex',
        justifyContent: "flex-end"
    }
}
const BlogsDesc = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const handleExpand = () => {
        setExpanded(!expanded)
    }
    return (
        <Card sx={styles.root}>
            <CardContent>
                <Typography sx={styles.title}>Artificial Intelligence (AI)</Typography>
                <Typography sx={styles.details}>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</Typography>
                <Typography sx={styles.details}>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</Typography>
                <Typography sx={styles.title}>Predictive Analytics and Disease Prevention</Typography>
                <Typography sx={styles.details}>One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.</Typography>
            </CardContent>
            {
                expanded === false && (
                    <CardActions sx={styles.readMoreButton}>
                        <Button onClick={handleExpand} variant='text' size='small'>Read more</Button>
                    </CardActions>
                )
            }

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={styles.title}>Artificial Intelligence (AI)</Typography>
                    <Typography sx={styles.details}>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</Typography>
                    <Typography sx={styles.details}>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</Typography>
                    <Typography sx={styles.title}>Predictive Analytics and Disease Prevention</Typography>
                    <Typography sx={styles.details}>One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.</Typography>
                    {
                        expanded === true && (
                            <CardActions sx={styles.readMoreButton}>
                                <Button onClick={handleExpand} variant='text' size='small'>Read less</Button>
                            </CardActions>
                        )
                    }
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default BlogsDesc
