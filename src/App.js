import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Navbar from './components/NavBar/NavBar';
import NewQuestion from './views/Question/NewQuestion';
import PollFilter from './components/Poll/PollFilter';
import Leaderboard from './views/Leaderboard/Leaderboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/questions/:id' component={PollFilter} />
        <Route path='/new' component={NewQuestion} />
        <Route path='/leaderboard' component={Leaderboard} />
      </Switch>
    </Router>
  );
}

export default App;
