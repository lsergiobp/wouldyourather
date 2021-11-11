import React from 'react';
import { Box, LinearProgress } from '@mui/material';

const ProgressBar = (props) => {
  console.log(props.value);
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='determinate' value={props.value} />
    </Box>
  );
};

export default ProgressBar;
