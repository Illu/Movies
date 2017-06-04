import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import App from './App';
import './index.css';

ReactDOM.render((

  <BrowserRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
  </BrowserRouter>
),
  document.getElementById('root')
);
