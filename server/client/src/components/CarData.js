//This component is potentially irrelevant if I'm doing server-side querying

import React from 'react';
import axios from 'axios';

class CarData extends React.Component {
  constructor() {
    super()

    this.databaseCall = this.databaseCall.bind(this)
  }

  databaseCall = () => {
    let rootUrl = 'https://qar-project.herokuapp.com'
    let apiCall = '/api/cars/all'
    let fullUrl = rootUrl + apiCall
    let props = this.props

    axios.get(fullUrl)
      .then(function (response) {
        props.getCarData(response);
      })
  }

  // disabling this component from auto-running
  //
  // componentDidMount() {
  //   window.addEventListener('load', this.databaseCall);
  // }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default CarData;
