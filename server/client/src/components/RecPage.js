import React, { Component } from 'react';

class RecPage extends Component {
  constructor() {
    super()

    // console.log(this.props);
    console.log(this.showResults);

    this.buildResults = this.buildResults.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state !== nextState;
  // }

  buildResults = () => {
    console.log('invoked buildResults')
  }

  render() {
    return (
      <div>
        Results:
        <h1>{this.results}</h1>
      </div>
    )
  }
}

export default RecPage;
