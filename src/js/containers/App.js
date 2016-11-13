import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';

const App = (props) => (
  <div onClick={() => props.actions.makeBirdTalk(Math.random().toString())}>
    {JSON.stringify(props)}
  </div>
);

export default reduxify(actions, ['bird'], App);
