import React from 'react';
import axios from 'axios';
import '../App.css';

class CarData extends React.Component {

  state = {}

  carDataButtonClick = () => {
    console.log('click');

    let rootUrl = 'https://qar-project.herokuapp.com'
    let apiCall = '/api/cars/all'
    let fullUrl = rootUrl + apiCall

    const request = axios.get(fullUrl)
      .then(function (response) {
        console.log(response)
      })
  }

  render() {

    return (
      <div>
        <button onClick={this.carDataButtonClick} type="button" className="btn btn-primary">Get Car Data</button>
      </div>
    )

  }
}


export default CarData;
