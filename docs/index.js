import React from 'react';
import { render } from 'react-dom';
import { Router, Redirect } from '@reach/router';

import Docs from './components/Docs';

const App = () => (
  <div className="app">
    <Router>
      <Docs path="/docs/:name" />
      <Redirect from="/docs/" to="/docs/introduction" />
      <Redirect from="/" to="/docs/introduction" />
    </Router>
  </div>
);

render(<App />, document.querySelector('#root'));
