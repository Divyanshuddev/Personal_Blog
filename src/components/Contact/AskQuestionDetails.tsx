import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
    root: {
        padding: 5,
        boxSizing:"border-box",
        width:{
            lg:"70%",
            md:"70%",
            sm:"100%",
            xs:"100%"
        },
    },
    accordion: {
        backgroundColor: "#1a1a1a",
        color: "white",
    },
    accordionDetails: {
        color: "gray"
    }
};

const Data = [
    {
        title: "What is AI?",
        details: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    },
    {
        title: "How can I listen to your podcasts?",
        details: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    },
    {
        title: "Are your podcasts free to listen to?",
        details: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    },
    {
        title: "Can I download episodes to listen offline?",
        details: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    },
    {
        title: "How often do you release new episodes?",
        details: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    }
]
const AskQuestionDetails = () => {
    return (
        <Stack sx={styles.root} direction={'column'} spacing={2}>
            {
                Data.map((data, index) => {
                    return (
                        <Accordion sx={styles.accordion} key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">{data.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={styles.accordionDetails}>
                                {data.details}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </Stack>
    )
}

export default AskQuestionDetails
