import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

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

const budget = [
  { value: '10000', label: '$10,000' },
  { value: '15000', label: '$15,000' },
  { value: '20000', label: '$20,000' },
  { value: '25000', label: '$25,000' },
  { value: '30000', label: '$30,000' }
]

class Questions extends React.Component {

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption)
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="Question-form">
        <h4>What style of car do you drive now?</h4>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={bodyStyle}/>
        <p/>
        <h4>What is your budget?</h4>
        (Consider tax, registration, and budgeting for maintenance and repairs.)
        <Select value={this.selectedOption}  onChange={this.handleChange} options={budget}/>
      </div>
    );
  }
}

export default Questions;
