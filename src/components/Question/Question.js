import React from 'react';
import { Paper, Avatar, Stack, Divider, Button } from '@mui/material';
import { getQuestionPreview } from '../../helpers/dataHelper';
import { useHistory } from 'react-router-dom';
import './Question.css';

const Question = (props) => {
  const history = useHistory();

  const viewPoll = () => {
    history.push(`/questions/${props.question.id}`);
  };

  return (
    <div className='question-main-div'>
      <Paper elevation={3} className='question-paper'>
        <div className='question-header-div'>
          {props.question.askedBy.name} asks:
        </div>
        <Divider orientation='horizontal' flexItem />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <div className='question-avatar-div'>
            <Avatar
              className='question-avatar'
              src={props.question.askedBy.avatarURL}
            />
            <Divider orientation='vertical' flexItem />
          </div>
          <Stack
            className='question-stack-card'
            direction='column'
            justifyContent='space-evenly'
            alignItems='stretch'
            spacing={3}
          >
            <div className='question-title-div'>Would you rather</div>
            <span>{getQuestionPreview(props.question)}</span>
            <Button
              className='question-button'
              fullWidth
              variant='outlined'
              onClick={viewPoll}
            >
              View Poll
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default Question;
