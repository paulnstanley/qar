import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import logo from './QarLogo.png';
import Questions from './components/Questions.js';
import RecPage from './components/RecPage.js'
// import CarData from './components/CarData.js';
// import Match from './components/Match.js'
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
    this.getCar = this.getCar.bind(this)
    // this.getResults = this.getResults.bind(this)
    // this.showResults = this.showResults.bind(this)
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

    let rootUrl = 'https://qar-project.herokuapp.com'
    let apiUrl = '/api/cars/'
    let fullUrl = rootUrl + apiUrl + query

    this.getCar(fullUrl);
  }


  getCar(fullUrl) {
    axios.get(fullUrl)
      .then((response) => {
        this.setState({results: this.state.results.concat([response])}, () => {
          const results = this.state.results[0].data[0];
          console.log(results);
          return results;
      })
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
            <Switch>
              <Route exact path='/' render={() => (
                <Questions getAnswers={this.getAnswers} props={this.props}/>
                  )}/>
              <Route path='/results' render={() => (
                <RecPage props={this.props}/>
                  )}/>
            </Switch>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
