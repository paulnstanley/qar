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

class Questions extends Component {
  constructor() {
    super()
  }

  onChange(value) {
    console.log(value);
  };

  render() {
    return (
      <div>
        <h4>What style of car do you drive now?</h4>
        <RadioGroup onChange={ this.onChange } horizontal>
          <RadioButton value="sedan">Sedan</RadioButton>
          <RadioButton value="hatchback">Hatchback</RadioButton>
          <RadioButton value="coupe">Coupe</RadioButton>
          <RadioButton value="truck">Truck</RadioButton>
          <RadioButton value="minivan">Minivan</RadioButton>
          <RadioButton value="crossover">Crossover or SUV</RadioButton>
          <RadioButton value="wagon">Station Wagon</RadioButton>
          <RadioButton value="electric">Electric or Hybrid</RadioButton>
        </RadioGroup>
      </div>
    );
  }
};

export default Questions;
