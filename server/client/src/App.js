import React, { Component } from 'react';
import logo from './QarLogo.png';
import Questions from './components/Questions.js';
import CarData from './components/CarData.js';
import Match from './components/Match.js'
import RecPage from './components/RecPage.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      answers: [],
      results: []
    }

    this.getAnswers = this.getAnswers.bind(this)
    this.matchUserToCar = this.matchUserToCar.bind(this)
    this.getResults = this.getResults.bind(this)
  }

//replace hardcoded query with 'submission'
  getAnswers(submission) {
    this.setState({answers: this.state.answers.concat(['Acura'])}, () => {
      console.log('Answers submitted.');
      // console.log('Answers submitted: ', this.state.answers);
      this.matchUserToCar(this.state.answers[0]);
    })
  }

  matchUserToCar(query) {
    console.log('Beginning match with: ', query);

    let self = this
    let rootUrl = 'https://qar-project.herokuapp.com'
    let apiUrl = '/api/cars/'
    let fullUrl = rootUrl + apiUrl + query

    axios.get(fullUrl)
      .then(function (response) {
        self.setState({results: self.state.results.concat([response])}, () => {
          console.log(self.state.results[0].data[0]);
        })
      })
  }

  getResults(matchResults){
    this.setState({results: this.state.results.concat([matchResults])}, () => {
      console.log('Results in state: ', this.state.results);
    //render a new page with the results conditionally when this.state.results updates
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <img src={logo} className="App-logo" alt="logo" />
              </div>
            <div className="col-md-10">
              <h1 className="App-title">Qar</h1>
              </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        </header>
        <p/>
        <CarData getCarData={this.getCarData}/>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <p/>
              <p className="App-intro">
                New cars are expensive.  In 2018, the average new car and truck sale price was $36,270, with loans averaging six years.  Yikes!

                How about a nice used car, instead?  Answer these questions to get a recommendation from a thoughtfully curated selection.
                </p>
              </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Questions getAnswers={this.getAnswers}/>
              <Match getResults={this.getResults}/>
              <RecPage />
              </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
