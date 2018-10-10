import React, { Component } from 'react';

class Match extends Component {
  constructor() {
    super()

    this.matchUserToCar = this.matchUserToCar.bind(this)
  }

  matchUserToCar = () => {
    console.log('invoked matchUserToCar')
  }

  componentDidMount() {
    //todo: monitor app.js state for submitted Answers
    //todo: perform matching logic on state
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Match;
