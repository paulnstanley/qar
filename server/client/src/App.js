import React, { Component } from 'react';
import logo from './QarLogo.png';
import Questions from './components/Questions.js';
import CarData from './components/CarData.js';
import Match from './components/Match.js'
import RecPage from './components/RecPage.js'
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
    this.getResults = this.getResults.bind(this)
    // this.getCarData = this.getCarData.bind(this)
  }

  getAnswers(submission) {
    this.setState({answers: this.state.answers.concat([submission])}, () => {
      // console.log('Answers submitted.');
      console.log('Answers submitted: ', this.state.answers);
    })
    //within callback, invoke matchLogic inside Match.js? or here?
    //then have match logic populate this.state.results
    //then render a new page with the results
  }

  //disabling this -- do querying server-side instead
  // getCarData(response) {
  //   this.setState({database: this.state.database.concat([response])}, () => console.log('Database request: ', this.state.database[0].statusText));
  // }

  getResults(matchResults){
    this.setState({results: this.state.results.concat([matchResults])}, () => console.log('Results in state: ', this.state.results));
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
