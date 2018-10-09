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

const reason = [
  { value: 'cheaper', label: 'I want to save money' },
  { value: 'nicer', label: 'I want to upgrade to something nicer but still reasonably priced' },
  { value: 'nicest', label: 'I want to upgrade to something fancy and nearly new' },
  { value: 'child', label: 'I need a larger car due to children or pets' },
  { value: 'different', label: `I'm ready for something completely different.` },
  { value: 'clowncar', label: `My life is no longer my own because I have too many children.` }
]

const budget = [
  { value: '10000', label: '$10,000' },
  { value: '15000', label: '$15,000' },
  { value: '20000', label: '$20,000' },
  { value: '25000', label: '$25,000' },
  { value: '30000', label: '$30,000' }
]

const passengers = [
  { value: 2, label: '1-2'},
  { value: 5, label: '3-5'},
  { value: 7, label: '6-7'},
  { value: 8, label: '8'}
]

const commute = [
  { value: 10, label: '1-10 miles'},
  { value: 20, label: '11-20 miles'},
  { value: 30, label: '21-30 miles'},
  { value: 40, label: '31-40 miles'},
  { value: 50, label: '41-50 miles'},
  { value: 51, label: '51+ miles'},
]

const manual = [
  { value: false, label: 'No'},
  { value: true, label: 'Yes'},
]

const prius = [
  { value: false, label: 'No'},
  { value: true, label: 'Yes'},
]

const diy = [
  { value: false, label: 'No'},
  { value: true, label: 'Yes'},
]

const onlyCar = [
  { value: false, label: 'No'},
  { value: true, label: 'Yes'},
]

const swagger = [
  { value: false, label: 'No'},
  { value: true, label: 'Yes'},
]

class Questions extends React.Component {

  state = [
    {bodyStyle: null},
    {reason: null},
    {budget: null},
    {passengers: null},
    {commute: null},
    {onlyCar: null},
    {diy: null},
    {manual: null},
    {prius: null},
    {swagger: null}
  ]

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log('Option selected:', selectedOption)
  }

  handleSubmission = () => {
    console.log(this.state);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="Question-form">
        <b>What style of car do you drive now?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={bodyStyle}/>
        <p/>
        <b>Why are you shopping for a new car?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={reason}/>
        <p/>
        <b>What is your budget?</b><br/>
        (Remember tax, registration, and budgeting for maintenance and repairs.)
        <Select value={this.selectedOption}  onChange={this.handleChange} options={budget}/>
        <p/>
        <b>Including yourself, how many passengers need to be able ride in your car?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={passengers}/>
        <p/>
        <b>How long is your round trip daily commute?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={commute}/>
        <p/>
        <b>Will this be your only car?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={onlyCar}/>
        <p/>
        <b>Do you like to do your own basic repairs and maintenance?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={diy}/>
        <p/>
        <b>Do you prefer a manual transmission?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={manual}/>
        <p/>
        <b>Be honest: do you really just want a Prius?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={prius}/>
        <p/>
        <b>Finally, do you care what people think about your car?</b>
        <Select value={this.selectedOption}  onChange={this.handleChange} options={swagger}/>
        <p/>
        <button onClick={this.handleSubmission} type="button" className="btn btn-primary">Submit</button>
      </div>
    );
  }
}

export default Questions;
