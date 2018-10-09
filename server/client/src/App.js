import React, { Component } from 'react';
import logo from './QarLogo.png';
import Questions from './components/Questions.js';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qar</h1>
        </header>
        <p className="App-intro">
          Cars are expensive.  In 2018, the average new car and truck sale price was $36,270.  Loan lengths are on average nearly six years, with a $523 payment.  Yikes!
          Need a suggestion for a nice used car, instead?  Answer these questions to get a recommendation from a thoughfully curated selection.
        </p>
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
