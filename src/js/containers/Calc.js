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
    width: "100%",
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
      <div style={{width: "400px"}}>
        <Paper zDepth={5} className={css(styles.paper)}>
        <div className={css(styles.center)}>
          <h2>In the U.S. electoral college, </h2>
          <h4>It takes </h4>
          <h1 style={{color: "#008000"}}>{(votingPower(stateData[this.state.B], stateData[this.state.A]) * 100).toFixed(0)}</h1>
          <h4>voters from the state of</h4>
        </div>
       <div className={css(styles.left)}>
        <SelectField
          value={this.state.A}
          onChange={this.handleChangeA}
          >
          {Object.keys(stateData).map((abbr, i) => (
            <MenuItem key={'menuA' + i} value={abbr} primaryText={stateNames[abbr]} />
          ))}
        </SelectField>
        {_.chunk((Array(Math.floor((votingPower(stateData[this.state.B], stateData[this.state.A]) * 100))).fill(<Peep color="green"/>)), 50).map((ch, i) => <div key={"ch" + i}>{ch}</div>)}
       </div>

        <div className={css(styles.center)}>
          <h4>To match the voting power of</h4>
          <h1 style={{color: "#800080"}}>100</h1>
          <h4>voters from</h4>
        </div>
        <div className={css(styles.left)}>

        <SelectField
          value={this.state.B}
          onChange={this.handleChangeB}
          >
          {Object.keys(stateData).map((abbr, i) => (
            <MenuItem key={'menuB' + i} value={abbr} primaryText={stateNames[abbr]} />
          ))}
        </SelectField>
        {_.chunk(Array(100).fill(<Peep color="purple"/>), 50).map((ch, i) => <div key={"ch" + i}>{ch}</div>)}
        </div>
        <div className={css(styles.center)}>
          <h6>All animals are equal. But some animals are more equal than others</h6>
          <h5> -- George Orwell</h5>
        </div>
        </Paper>
      </div>
    );
  }
}

export default reduxify(actions, ['bird'], Calc);
