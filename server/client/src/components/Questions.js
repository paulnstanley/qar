import React from 'react';
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
  { value: 'cheaper', label: 'I want to save money.' },
  { value: 'nicer', label: 'I want to upgrade to something nicer but still reasonably priced.' },
  { value: 'nicest', label: 'I want to upgrade to something fancy and nearly new.' },
  { value: 'different', label: `I'm ready for something completely different.` },
  { value: 'child', label: 'I need a larger car due to children or pets.' },
  { value: 'clowncar', label: `I can't concentrate on this because of screaming children, just give me the minivan.` }
]

const budget = [
  { value: 10000, label: '$10,000' },
  { value: 15000, label: '$15,000' },
  { value: 20000, label: '$20,000' },
  { value: 25000, label: '$25,000' },
  { value: 30000, label: '$30,000' }
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

  state = {}

  handleChange = (property, val) => {
    let updatedObject = {};
    updatedObject[property] = val.value;
    this.setState(updatedObject);
  }

  //send the submission to app.js via props
  //todo: enforce all questions being answered!
  //todo: have this event also fire off the match logic, but be wary about state
  handleSubmission = () => {
    const currentState = this.state;
    this.props.getAnswers(currentState);
  }

  render() {

    return (
      <div className="Question-form">
        <b>What style of car do you drive now?</b>
        <Select value={this.selectedOption}  onChange={val => this.handleChange('bodyStyle', val)} options={bodyStyle} isSearchable={false}/>
        <p/>
        <b>Why are you shopping for a new car?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('reason', val)} options={reason} isSearchable={false}/>
        <p/>
        <b>What is your budget?</b><br/>
        (Remember tax, registration, and budgeting for maintenance and repairs.)
        <Select value={this.selectedOption} onChange={val => this.handleChange('budget', val)} options={budget} isSearchable={false}/>
        <p/>
        <b>Including yourself, how many passengers need to be able ride in your car?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('passengers', val)} options={passengers} isSearchable={false}/>
        <p/>
        <b>How long is your round trip daily commute?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('commute', val)} options={commute} isSearchable={false}/>
        <p/>
        <b>Will this be your only car?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('onlyCar', val)} options={onlyCar} isSearchable={false}/>
        <p/>
        <b>Do you like to do your own basic repairs and maintenance?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('diy', val)} options={diy} isSearchable={false}/>
        <p/>
        <b>Do you prefer a manual transmission?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('manual', val)} options={manual} isSearchable={false}/>
        <p/>
        <b>Be honest: do you really just want a Prius?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('prius', val)} options={prius} isSearchable={false}/>
        <p/>
        <b>Finally, do you care what people think about your car?</b>
        <Select value={this.selectedOption} onChange={val => this.handleChange('swagger', val)} options={swagger} isSearchable={false}/>
        <p/>
        <button onClick={this.handleSubmission} type="button" className="btn btn-primary">Submit</button>
        <p/>
      </div>
    );
  }
}

export default Questions;
