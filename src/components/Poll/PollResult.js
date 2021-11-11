import React, { useEffect } from 'react';
import { Paper, Avatar, Stack, Divider } from '@mui/material';
import { emptyQuestion } from '../../helpers/dataHelper';
import Result from '../Result/Result';
import './Poll.css';

const PollResult = (props) => {
  const [question, setQuestion] = React.useState(emptyQuestion());

  useEffect(() => {
    setQuestion(props.question);
  }, [props.question]);

  return (
    <div className='poll-main-div'>
      <Paper elevation={3} className='poll-paper'>
        <div className='poll-header-div'>Asked by {question.askedBy.name}</div>
        <Divider orientation='horizontal' flexItem />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <div className='poll-avatar-div'>
            <Avatar className='poll-avatar' src={question.askedBy.avatarURL} />
          </div>
          <Divider orientation='vertical' flexItem />
          <Stack
            className='poll-stack-card'
            direction='column'
            justifyContent='space-evenly'
            alignItems='stretch'
            spacing={3}
          >
            <div className='poll-title-div'>Results:</div>
            <Result question={question} />
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default PollResult;
