import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Navbar from './components/NavBar/NavBar';
import NewQuestion from './views/Question/NewQuestion';
import PollFilter from './components/Poll/PollFilter';
import Leaderboard from './views/Leaderboard/Leaderboard';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import NotFound from './views/NotFound/NotFound';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading } from './features/shared';
import { Fragment, useEffect } from 'react';
import { getInitialData as initialData } from './features/loading';

function App() {
  let loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialData = async () => {
      dispatch(initialData());
    };

    getInitialData();
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Box sx={{ width: '100%', alignItems: 'top' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Login} />
            <ProtectedRoute path='/home' component={Home} />
            <ProtectedRoute path='/questions/:id' component={PollFilter} />
            <ProtectedRoute path='/new' component={NewQuestion} />
            <ProtectedRoute path='/leaderboard' component={Leaderboard} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      )}
    </Router>
  );
}

export default App;
