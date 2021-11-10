import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Paper,
  Avatar,
  Stack,
  Divider,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { getAllQuestions } from '../../features/shared';
import { emptyQuestion } from '../../helpers/dataHelper';
import { useHistory, Redirect } from 'react-router-dom';
import './Poll.css';

const Poll = (props) => {
  const [opt, setOpt] = React.useState('optionOne');
  const [question, setQuestion] = React.useState(emptyQuestion());
  const [answered, setAnswered] = React.useState(false);
  const questionList = useSelector(getAllQuestions);
  const history = useHistory();

  useEffect(() => {
    let question = questionList.answered.find(
      (q) => q.id === props.match.params.id
    );
    if (question) {
      setQuestion(question);
      setAnswered(true);
    } else if (!question) {
      let question = questionList.unanswered.find(
        (q) => q.id === props.match.params.id
      );
      setQuestion(question);
      setAnswered(false);
    } else {
      console.log('404');
    }
  }, [questionList, props, history]);

  const handleChange = (event) => {
    setOpt(event.target.value);
  };

  return !question ? (
    <Redirect to='/' />
  ) : (
    <div className='poll-main-div'>
      <Paper elevation={3} className='poll-paper'>
        <div className='poll-header-div'>
          {!answered
            ? `${question.askedBy.name} asks`
            : `Asked by ${question.askedBy.name}`}
        </div>
        <Divider orientation='horizontal' flexItem />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <div className='poll-avatar-div'>
            <Avatar className='poll-avatar' src={question.askedBy.avatarURL} />
            <Divider orientation='vertical' flexItem />
          </div>
          <Stack
            className='poll-stack-card'
            direction='column'
            justifyContent='space-evenly'
            alignItems='stretch'
            spacing={3}
          >
            <div className='poll-title-div'>
              {answered ? 'Results:' : 'Would you rather...'}
            </div>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='gender'
                name='controlled-radio-buttons-group'
                value={opt}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='optionOne'
                  control={<Radio />}
                  label={question.optionOne.text}
                />
                <FormControlLabel
                  value='optionTwo'
                  control={<Radio />}
                  label={question.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
            <Button className='poll-button' fullWidth variant='outlined'>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default Poll;
