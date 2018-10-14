import React from 'react';
import Select from 'react-select';
import '../App.css';

const budget = [
  { value: 10000, label: '$5,000 - $10,000' },
  { value: 15000, label: '$10,001 - $15,000' },
  { value: 20000, label: '$15,001 - $20,000' },
  { value: 25000, label: '$20,001 - $25,000' },
  { value: 30000, label: '$25,001 - $30,000' }
]

const passengers = [
  { value: 2, label: '1-2'},
  { value: 4, label: '3-4'},
  { value: 7, label: '5-7'},
  { value: 8, label: '8'}
]

const commute = [
  { value: 10, label: '1-10 miles'},
  { value: 20, label: '11-20 miles'},
  { value: 30, label: '21-30 miles'},
  { value: 40, label: '31-40 miles'},
  { value: 50, label: '41-50 miles'},
  { value: 51, label: '51+ miles'}
]

const factors = [
  { value: 'style', label: 'Style'},
  { value: 'performance', label: 'Performance'},
  { value: 'reliability', label: 'Reliability'},
  { value: 'utility', label: 'Utility'},
  { value: 'resale', label: 'Resale Value'},
  { value: 'comfort', label: 'Comfort'},
  { value: 'totalCostOwnership', label: 'Total Cost of Ownership'},
  { value: 'swagger', label: 'Perception of Others'},
  { value: 'technology', label: 'Overall Technology Level'}
]

const prius = [
  { value: 0, label: `No, I'm open to other hybrids, plug-ins, or gas-powered cars.`},
  { value: 1, label: 'Yep, how did you know?'}
]


class Questions extends React.Component {

  state = {}

  //each drop down uses this function to setState the user's selection
  handleChange = (property, val) => {
    let updatedObject = {};
    updatedObject[property] = val.value;
    this.setState(updatedObject);
  }

  //sends state (all dropdown selections) to app.js via props
  handleSubmission = () => {
    if (!this.state.budget || !this.state.passengers) {
      alert('You must at least select budget and passengers.')
    } else {
      const currentState = this.state;
      this.props.getAnswers(currentState);
      }
    }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

            <div className="col-md-8">
            <p/>
            <p className="App-intro">
              New cars are expensive.  In 2018, the average new car and truck sale price was $36,270, with loans averaging six years.  Yikes!
              How about a nice used car, instead?<br/><br/>

              Answer these questions to get a recommendation from a thoughtfully curated selection.
            </p>

            <div ref="questions" className="Question-form">
              <b>What is your budget?</b><br/>
              (Remember tax, registration, and budgeting for maintenance and repairs.)
              <Select value={this.selectedOption} onChange={val => this.handleChange('budget', val)} options={budget} isSearchable={false}/>
              <p/>
              <b>Including yourself, how many passengers need to be able ride in your car?</b>
              <Select value={this.selectedOption} onChange={val => this.handleChange('passengers', val)} options={passengers} isSearchable={false}/>
              <p/>
              <b>Of these choices, which one is the most important to you?</b>
              <Select value={this.selectedOption} onChange={val => this.handleChange('factors', val)} options={factors} isSearchable={false}/>
              <p/>
              <b>Are you actually just going to buy a Prius, no matter what anyone tells you?</b>
              <Select value={this.selectedOption} onChange={val => this.handleChange('prius', val)} options={prius} isSearchable={false}/>
              <p/>
              <b>How long is your round trip daily commute?</b>
              <Select value={this.selectedOption} onChange={val => this.handleChange('commute', val)} options={commute} isSearchable={false}/>
              <p/>
              <button onClick={this.handleSubmission} type="button" className="btn btn-primary">Show me!</button>
              <p/>
              </div>
              <div className="col-md-2"></div>
              </div>

          </div>
      </div>
    );
  }
}

export default Questions;
