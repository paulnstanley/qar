import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const craigslist = require('node-craigslist');

//create vars and text for each property of the car
const Craigslist = (props) => {

  if(!props.results || props.results.length<1 || props.results[0].data.length<1) {
    return (
      <div>
      </div>)
  } else {

  const make = props.results[0].data[0].make;
  const model = props.results[0].data[0].model;
  const minYear = props.results[0].data[0].minYear;
  const maxYear = props.results[0].data[0].maxYear;
  const maxBudget = props.answers[0].budget;
  const minBudget = (maxBudget - 10000);

  const client = new craigslist.Client({
    baseHost: 'craigslist.com',
    city: 'raleigh'
  });

  const options = {
    category: 'cta',
    maxAsk: maxBudget,
    minAsk: minBudget
  }

  const search = function () {
    client
    .search(make + '' + model)
    .then((listings) => {
      // play with listings here...
      listings.forEach((listing) => {
          return listing
        })
      })
    // .catch((err) => {
    //   console.error(err);
    // });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <h4>Local Craigslist Results</h4>
            {search()}
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    )
  }
}

export default Craigslist;
