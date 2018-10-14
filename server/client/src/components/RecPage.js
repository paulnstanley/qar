import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import manualYes from '../manualYes.jpg'
import manualNo from '../manualNo.jpg'

//create vars and text for each property of the car
const RecPage = (props) => {

  const getCommute = function () {
    let commute;
    if (props.answers[0].commute) {
      commute = props.answers[0].commute;
      console.log(commute);
      return commute;
    } else {
      return 0;
    }
  }

//calculate the cost of their commute based on fuel prices, roundtrip distance, mpgs
  const calculateCommute = function () {
    let octane87 = 2.49;
    let octane93 = 3.29;
    let octane0 = 0.11;
    let selectedOctane;

    if (props.results[0].data[0].fuelOctane === 87 ) {
      selectedOctane = octane87;
    } else if (props.results[0].data[0].fuelOctane === 93) {
        selectedOctane = octane93;
    } else {
      selectedOctane = octane0;
    }

    let totalCost = selectedOctane * (props.answers[0].commute / props.results[0].data[0].cityMpg);
    return totalCost.toFixed(2);
  }

  const refreshPage = function (){
    window.location.reload();
  }

  if(!props.results || props.results.length<1 || props.results[0].data.length<1) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8">
            <h4>No results for your search, or you refreshed the results page.</h4>
            <Link onClick={refreshPage} to='/'>Start Over</Link>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>)
  }

  const make = props.results[0].data[0].make;
  const model = props.results[0].data[0].model;
  const minYear = props.results[0].data[0].minYear;
  const maxYear = props.results[0].data[0].maxYear;
  const cityMpg = props.results[0].data[0].cityMpg;
  const hwyMpg = props.results[0].data[0].hwyMpg;
  const fuelOctane = props.results[0].data[0].fuelOctane;
  const avgCost = props.results[0].data[0].avgCost;
  const style = props.results[0].data[0].style;
  const performance = props.results[0].data[0].performance;
  const reliability = props.results[0].data[0].reliability;
  const utility = props.results[0].data[0].utility;
  const resale = props.results[0].data[0].resale;
  const comfort = props.results[0].data[0].comfort;
  const totalCostOwnership = props.results[0].data[0].totalCostOwnership;
  const swagger = props.results[0].data[0].swagger;
  const technology = props.results[0].data[0].technology;
  const availableManual = props.results[0].data[0].availableManual;
  const totalScore = props.results[0].data[0].totalScore;
  const prius = props.results[0].data[0].prius;
  const comments = props.results[0].data[0].comments;
  const image = props.results[0].data[0].image;


//show whether or not this car can be had with a manual
  const isManual = function () {
    if (availableManual === 1) {
      return manualYes;
    } else {
      return manualNo;
    }
  }

//force refresh when using the "start over" link

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className='results'>
              <p/>
              <Link onClick={refreshPage} to='/'>Start Over</Link>
              <p/>
              <h1>Consider a </h1>
              <h2>{minYear} - {maxYear} {make} {model}</h2>
              <p/>
              <img className="carImage" src={image}/>
              <p/>
              <div className="container">
                <div className="row">
                  <div className='cost col-md-1'></div>
                  <div className='cost col-md-2'>
                    <h4>Typical Price</h4>
                    <h6>${avgCost}</h6>
                  </div>
                  <div className='manual col-md-2'>
                    <h4>Manual?</h4>
                    <h6><img className="manualImage" src={isManual()}/></h6>
                  </div>
                  <div className='fuel col-md-2'>
                    <h4>Fuel Economy</h4>
                    <h6>City: {cityMpg}</h6>
                    <h6>Highway: {hwyMpg}</h6>
                    <h6>Octane: {fuelOctane}</h6>
                  </div>
                  <div className='commute col-md-4'>
                    <h4>Commute</h4>
                    <h6>If roundtrip is {getCommute()} miles, then your cost estimate is: </h6>
                    <h5>${calculateCommute()} per day</h5>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p/>
                    <p/>
                    <h4>Qar's notes:</h4>
                    <p className="comments">{comments}
                    </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    )
  }

export default RecPage;
