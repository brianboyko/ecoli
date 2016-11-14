import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import { css, StyleSheet } from 'aphrodite';
const people = {
  red: '../../img/personRed.svg',
  blue: '../../img/personBlue.svg',
  white: '../../img/personWhite.svg',
  green: '../../img/personGreen.svg',
  purple: '../../img/personPurple.svg',
};
import {
  stateData,
  stateNames,
  votesPerCitizen,
  votingPower,
}  from '../data';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'top',
  },
  flexItem: {
    padding: '5px',
    textAlign: 'center',
  },
  peep: {
    width: '5px',
    margin: '1px',
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  paper: {
    padding: '5px',
    width: "790px",
    margin: 'auto',
    marginTop: '5px',
  }
});

let colorCount = 0;

const Peep = (props) => {
  let color = colorCount++;
  return (
     <img className={css(styles.peep)} src={people[props.color]}/>
  );
};

let uniqueKeyCount = 0;

class Calc extends Component {
  constructor(props){
    super(props);
    this.state = {
      A: "CA",
      B: "WY",
    };
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  }
  handleChangeA (event, index, value) {
    this.setState({A: value});
  }
  handleChangeB (event, index, value) {
    this.setState({B: value});
  }

  render() {
    return (
      <div style={{margin: "auto"}}>
        <Paper zDepth={5} className={css(styles.paper)}>
          <div className={css(styles.center)}>
            <h1>In the United States</h1>
          </div>
          <div className={css(styles.container)}>
            <div className={css(styles.flexItem)}>
              <h3>the vote of a citizen from</h3>
              <SelectField
                maxHeight={150}
                value={this.state.A}
                onChange={this.handleChangeA}
                >
                {Object.keys(stateData).map((abbr, i) => (
                  <MenuItem key={'menuA' + i} value={abbr} primaryText={stateNames[abbr]} />
                ))}
              </SelectField>
            </div>
            <div className={css(styles.flexItem)}>
              <h3>is worth the same as</h3>
              <h1>{votingPower(stateData[this.state.A], stateData[this.state.B]).toFixed(2)} votes</h1>
            </div>
            <div className={css(styles.flexItem)}>
            <h3>of a citizen from</h3>
            <SelectField
              maxHeight={150}
              value={this.state.B}
              onChange={this.handleChangeB}
              >
              {Object.keys(stateData).map((abbr, i) => (
                <MenuItem key={'menuB' + i} value={abbr} primaryText={stateNames[abbr]} />
              ))}
            </SelectField>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default reduxify(actions, ['bird'], Calc);
