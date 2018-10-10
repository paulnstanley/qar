import React, { Component } from 'react';

class RecPage extends Component {
  constructor() {
    super()

    this.buildResults = this.buildResults.bind(this)
  }

  buildResults = () => {
    console.log('invoked buildResults')
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default RecPage;
