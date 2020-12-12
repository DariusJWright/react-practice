import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from './components/Autocomplete/Container';
import Autocomplete from './components/Autocomplete';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home Page</div>}/>
      <Route path="/search" render={() => <div>Search Page</div>}/>
      <Route render={() => <div>Page not found!</div>}/>
    </Switch>
  </Router>

)
  

export default App;
