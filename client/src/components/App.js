import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import asyncComponent from './AsyncComponent';

const AsyncHeader = asyncComponent(() => import('./Header'));
const AsyncLanding = asyncComponent(() => import('./Landing'));
const AsyncSurvey = asyncComponent(() => import('./Dashboard'));
const AsyncSurveyNew = asyncComponent(() => import('./surveys/SurveyNew'));

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <AsyncHeader />
          <Route exact path='/' component={AsyncLanding} />
          <Route exact path='/survey' component={AsyncSurvey} />
          <Route exact path='/survey/new' component={AsyncSurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
