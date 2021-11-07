import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
