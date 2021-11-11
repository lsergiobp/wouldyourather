import React, { useEffect } from 'react';
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
import { emptyQuestion } from '../../helpers/dataHelper';
import { fetchQuestions, saveNewAnswer } from '../../features/questions';
import { fetchAuthedUSer, getAuthUser } from '../../features/authUser';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, getUsers } from '../../data/service';
import { fetchUsers } from '../../features/users';
import { useHistory } from 'react-router-dom';
import './Poll.css';

const Poll = (props) => {
  const [opt, setOpt] = React.useState('optionOne');
  const [question, setQuestion] = React.useState(emptyQuestion());
  const authUser = useSelector(getAuthUser);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setQuestion(props.question);
  }, [props.question]);

  const handleChange = (event) => {
    setOpt(event.target.value);
  };

  const handleSubmit = () => {
    const answer = {
      qid: question.id,
      answer: opt,
      authedUser: authUser.id,
    };

    dispatch(saveNewAnswer(answer)).then(async () => {
      const users = await getUsers();
      const questions = await getQuestions();
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
      dispatch(
        fetchAuthedUSer(users.find((user) => user.id === answer.authedUser))
      );
    });

    history.push('/home');
  };

  return (
    <div className='poll-main-div'>
      <Paper elevation={3} className='poll-paper'>
        <div className='poll-header-div'> {question.askedBy.name} asks:</div>
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
            <div className='poll-title-div'>Would you rather...</div>
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
            <Button
              className='poll-button'
              fullWidth
              variant='outlined'
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default Poll;
