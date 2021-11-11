import React from 'react';
import { Paper, Avatar, Stack, Divider, Badge } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import './Score.css';

const Score = (props) => {
  const answered = Object.keys(props.user.answers).length;
  const created = props.user.questions.length;
  const totalScore = answered + created;

  return (
    <div className='score-main-div'>
      <Paper elevation={3} className='score-paper'>
        <div className='score-header-div'>
          {props.user.name}
          <MilitaryTechIcon className={`score-medal-${props.idx}`} />
        </div>
        <Divider orientation='horizontal' flexItem />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
          className='score-main-stack'
        >
          <div className='score-avatar-div'>
            <Avatar className='score-avatar' src={props.user.avatarURL} />
            <Divider orientation='vertical' flexItem />
          </div>
          <Stack
            className='score-stack-card'
            direction='column'
            justifyContent='space-evenly'
            alignItems='stretch'
            spacing={3}
          >
            <div className='score-number-div'>
              <span className='score-title-div'>Answered questions:</span>
              <span className='score-title-div'> {answered}</span>
            </div>
            <div className='score-number-div'>
              <span className='score-title-div'>Created questions:</span>
              <span className='score-title-div'> {created}</span>
            </div>
          </Stack>
          <Divider orientation='vertical' flexItem />
          <div className='score-stack'>
            <span className='score-span'>Score</span>
            <Divider orientation='horizontal' flexItem />
            <Badge
              badgeContent={totalScore}
              color='primary'
              className='score-badge'
            />
          </div>
        </Stack>
      </Paper>
    </div>
  );
};

export default Score;
