import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Calc from './Calc';
import Calc2 from './Calc2';

const App = (props) => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Calc2 />
    </MuiThemeProvider>
  </div>
);

export default reduxify(actions, ['bird'], App);
