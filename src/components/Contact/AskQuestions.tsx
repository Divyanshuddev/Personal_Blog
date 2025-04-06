import {  Divider, Stack } from '@mui/material';
import AskQuestionTitle from './AskQuestionTitle';
import AskQuestionDetails from './AskQuestionDetails';


const AskQuestions = () => {
    return (
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'}>
            <AskQuestionTitle />
            <Divider style={{ backgroundColor: "rgba(61, 59, 60, 0.8)" }} orientation='vertical' flexItem />
           <AskQuestionDetails />
        </Stack>
    )
}

export default AskQuestions
