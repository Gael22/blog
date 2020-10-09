import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import pageRenderer from './page-renderer'

function App() {
  const user = {
    firstName: 'Gael',
    lastName: 'Coder'
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Switch>
          <Route path="/:page" component={pageRenderer}/>
          <Route path="/" render={() => <Redirect to="/home"/>} />
          <Route component={() => 404} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
