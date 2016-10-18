import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import BaseComponent from './components/quiz/base-component';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={BaseComponent}>
    <IndexRoute component={HomePage} />
    </Route>
  </Router>
);
