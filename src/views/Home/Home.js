import React from 'react';
import { Paper, Tab, Tabs } from '@mui/material';
import QuestionList from '../../components/Question/QuestionList';
import TabPanel, { a11yProps } from '../../components/TabPanel/TabPanel';
import { useSelector } from 'react-redux';
import { getAllQuestions } from '../../features/shared';
import './Home.css';

const Home = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const questionList = useSelector(getAllQuestions);

  const handleTabChange = (e, tabValue) => {
    setTabValue(tabValue);
  };

  return (
    <div className='home-main-div'>
      <Paper elevation={3} className='home-paper'>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label='Unanswered Questions' {...a11yProps(0)} />
          <Tab label='Answered Questions' {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <QuestionList list={questionList.unanswered} />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <QuestionList list={questionList.answered} />
        </TabPanel>
      </Paper>
    </div>
  );
};

export default Home;
