import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import '../App.css';
import 'react-dropdown/style.css'

const bodyStyle = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'hatchback', label: 'Hatchback' },
  { value: 'coupe', label: 'Coupe' },
  { value: 'truck', label: 'Pickup Truck' },
  { value: 'minivan', label: 'Minivan' },
  { value: 'crossover', label: 'Crossover or SUV' },
  { value: 'wagon', label: 'Station Wagon' },
  { value: 'electric', label: 'Electric or Hybrid' }
]

class Questions extends Component {
  render() {
    return (
      <div className="Question-form">
          <h4>What style of car do you drive now?</h4>
        <Dropdown options={bodyStyle} onChange={this._onSelect} placeholder="Make a selection" />
      </div>
    )
  }
}

// class Questions extends Component {
//   constructor() {
//     super()
//   }
//
//   onChange(value) {
//     console.log(value);
//   };
//
//   render() {
//     return (
//       <div>
//         <h4>What style of car do you drive now?</h4>
//         <RadioGroup onChange={ this.onChange } horizontal>
//           <RadioButton value="sedan">Sedan</RadioButton>
//           <RadioButton value="hatchback">Hatchback</RadioButton>
//           <RadioButton value="coupe">Coupe</RadioButton>
//           <RadioButton value="truck">Truck</RadioButton>
//           <RadioButton value="minivan">Minivan</RadioButton>
//           <RadioButton value="crossover">Crossover or SUV</RadioButton>
//           <RadioButton value="wagon">Station Wagon</RadioButton>
//           <RadioButton value="electric">Electric or Hybrid</RadioButton>
//         </RadioGroup>
//       </div>
//     );
//   }
// };

export default Questions;
