import React from 'react';
import './App.sass';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <NewsFeed prop1 prop2="property" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
