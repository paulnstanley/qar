import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom'
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
  }

//Take the answers from questions.js, add them to state.answers
  getAnswers(submission) {
    this.setState({answers: this.state.answers.concat([submission])}, () => {
        this.matchUserToCar(this.state.answers[0]);
    })
  }

//take the answers from state and turn them into a search
//this sends them to the db, and the db does the query
  matchUserToCar(answers) {
    console.log('Beginning match with: ', answers);
    let rootUrl = 'https://qar-project.herokuapp.com'
    let apiUrl = '/api/cars/'

    //now turn the answers array into a querystring
    let queryString = Object.keys(answers).map(key => key + '=' + answers[key]).join('&');
    console.log(queryString);

    let queryUrl = rootUrl + apiUrl + queryString
    console.log(queryUrl);
    this.getCar(queryUrl, answers);
  }

//TODO: add weighting logic within getCar to reorder the array of results?
//let weightedScore;
//weightedScore = (totalScore + (factor*2) + ('prius'*10));
//return weightedScore

//do the db lookup
//redirect to /results with state
//RecPage.js will render the results of the first (and ideally only) object in the response array
  getCar(queryUrl, answers) {
    axios.get(queryUrl)
      .then((response) => {
        this.setState({results: this.state.results.concat([response])}, () => {
           this.props.history.push("/results");
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
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path='/' render={() => (
                <Questions getAnswers={this.getAnswers} props={this.props}/>
                  )}/>
              <Route path='/results' render={() => (
                <RecPage props={this.props} answers={this.state.answers} results={this.state.results}/>
                  )}/>
            </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(App);
