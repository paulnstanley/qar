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
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              </div>
            <div className="col-md-6">
              <h1 className="App-title">Qar</h1>
              </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        </header>
        <p className="App-intro">
          New cars are expensive.  In 2018, the average new car and truck sale price was $36,270, and loan lengths are on average nearly six years.  Yikes!
          How about a nice used car, instead?  Answer these questions to get a recommendation from a thoughfully curated selection.
          I'm a car enthusiast on a budget who has bought and sold 21 cars in 16 years.
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
