import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Navbar from './components/NavBar/NavBar';
import NewQuestion from './views/Question/NewQuestion';
import Poll from './components/Poll/Poll';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/questions/:id' component={Poll} />
        <Route path='/new' component={NewQuestion} />
      </Switch>
    </Router>
  );
}

export default App;
