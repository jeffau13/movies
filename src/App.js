// eslint react/anchor-is-valid:0
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import logo from './logo.svg';
import './App.css';

import Toggle from './toggle/Toggle';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';

const middleware = [logger, thunk];
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Toggle />
          <Link to="/">
            {' '}
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>

        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
