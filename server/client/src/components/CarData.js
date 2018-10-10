import React from 'react';
import axios from 'axios';
import '../App.css';

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

  componentDidMount() {
    window.addEventListener('load', this.databaseCall);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default CarData;
