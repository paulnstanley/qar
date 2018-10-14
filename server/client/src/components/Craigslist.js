import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//create vars and text for each property of the car
const Craigslist = (props) => {

  if(!props.results || props.results.length<1 || props.results[0].data.length<1) {
    return (
      <div>
      </div>)
  }

  const make = props.results[0].data[0].make;
  const model = props.results[0].data[0].model;
  const minYear = props.results[0].data[0].minYear;
  const maxYear = props.results[0].data[0].maxYear;
  const maxBudget = props.answers[0].budget;
  const minBudget = (maxBudget - 10000);


  const urlBase = 'https://'
  const city = 'raleigh';
  const baseHost = '.craigslist.org/';
  const searchUrl = 'search/';
  const category = 'cta?';
  const maxYearUrl = 'max_auto_year='
  const maxPriceUrl = '&max_price='
  const minYearUrl = '&min_auto_year='
  const minPriceUrl = '&min_price='
  const queryUrl = '&query='
  const sortUrl = '&sort=rel'

  const fullUrl = urlBase + city + baseHost + searchUrl + category + maxYearUrl + maxYear + maxPriceUrl +
    maxBudget + minYearUrl + minYear + minPriceUrl + minBudget + queryUrl + make + '%20' + model +
    sortUrl;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <h4><a href={fullUrl}>See Craigslist Results</a></h4>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    )
  }

export default Craigslist;
