import React, { Component } from 'react';
import logo from './QarLogo.png';
import Questions from './components/Questions.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      answers: [],
      database: []
    }
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
              <Questions />
              </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
