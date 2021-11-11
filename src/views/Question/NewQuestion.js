import React from 'react';
import { Paper, TextField, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getAuthUser } from '../../features/authUser';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveNewQuestion } from '../../features/questions';
import './NewQuestion.css';
import { getUsers } from '../../data/service';
import { fetchUsers } from '../../features/users';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const NewQuestion = () => {
  const [optOne, setOptOne] = React.useState('');
  const [optTwo, setOptTwo] = React.useState('');
  const author = useSelector(getAuthUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOptOne = (event) => {
    setOptOne(event.target.value);
  };

  const handleOptTwo = (event) => {
    setOptTwo(event.target.value);
  };

  const saveQuestion = async () => {
    const question = {
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: author.id,
    };

    dispatch(saveNewQuestion(question)).then(async () => {
      const users = await getUsers();
      dispatch(fetchUsers(users));
    });

    history.push('/home');
  };

  return (
    <div className='new-question-main-div'>
      <Paper elevation={3} className='new-question-paper'>
        <div className='new-question-header-div'>Create New Question</div>
        <Divider orientation='horizontal' flexItem />
        <span className='new-question-title'>Complete the question:</span>
        <span className='new-question-wur'>Would you rather...</span>

        <div className='new-question-form'>
          <TextField
            id='outlined-name'
            label='Option One'
            value={optOne}
            onChange={handleOptOne}
          />
          <Root>
            <Divider className='new-question-divider-text'>OR</Divider>
          </Root>
          <TextField
            id='outlined-name'
            label='Option Two'
            value={optTwo}
            onChange={handleOptTwo}
          />
        </div>

        <Button
          fullWidth
          variant='contained'
          onClick={saveQuestion}
          disabled={
            optOne.replace(/\s/g, '') === '' || optTwo.replace(/\s/g, '') === ''
          }
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default NewQuestion;
