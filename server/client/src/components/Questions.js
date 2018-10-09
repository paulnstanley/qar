import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import '../App.css';

// class Questions extends Component {
//   render() {
//     return (
//       <div className="Question-form">
//         <p className="test-question">
//         This is a test question?
//         </p>
//       </div>
//     )
//   }
// }

let App = React.createClass({
  onChange(value) {
    console.log(value);
  },
  render() {
    return (
      <div style={ { padding: 16 } }>
        <h4>Vertical Radio Buttons</h4>
        <RadioGroup onChange={ this.onChange }>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <ReversedRadioButton value="melon">
            Melon
          </ReversedRadioButton>
        </RadioGroup>
        <h4 style={ { marginTop: 32 } }>Horizontal Radio Buttons</h4>
        <RadioGroup onChange={ this.onChange } horizontal>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <ReversedRadioButton value="melon">
            Melon
          </ReversedRadioButton>
        </RadioGroup>
        <h4 style={ { marginTop: 32 } }>1st option disabled (prevents onChange callback and style overwrite to look disabled)</h4>
        <RadioGroup onChange={ this.onChange }>
          <RadioButton value="apple" disabled={true} disabledColor={'green'}>
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <RadioButton value="melon">
            Melon
          </RadioButton>
        </RadioGroup>
        <h4>Check console to see the value of the RadioGroup via the onChange callback</h4>
      </div>
    );
  }
});

export default Questions;
