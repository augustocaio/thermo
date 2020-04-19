import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home'
import Results from './pages/Results'
import Ordered from './pages/Ordered'

function App2() {
    return (
      <Router>
        <Switch>
          <Route exact path="/new_device" component={Home} />
          <Route exact path="/" component={Results} />
          <Route exact path="/ordered" component={Ordered} />
        </Switch>
      </Router>
    );
  }

  ReactDOM.render(<App2 />, document.getElementById('root'));
