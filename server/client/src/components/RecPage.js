import React from 'react';
import { Link } from 'react-router-dom'

const baseImageUrl = '../images/';

//create vars and text for each property of the car
const RecPage = (props) => {

  console.log(props.results);

  const numResults = props.results.length;

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
  const image = props.results[0].data[0].image;

  // this could be a way to show other cars that matched
  // const otherCars = function (props) {
  //   let moreResults = [];
  //   for (let i=0; i<numResults; i++) {
  //       moreResults.push(props.results[i].data[0].make);
  //       moreResults.push(props.results[i].data[0].model);
  //       moreResults.push(props.results[i].data[0].minYear);
  //     }
  //   return moreResults;
  //   }

// <img src={baseImageUrl + minYear + model +'.jpg'}/>

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className='results'>
              <p/>
              <h1>Your results:</h1>
              <h2>{minYear} {make} {model}</h2>
              <p/>
              <img src={image}/>
              <p/>
            </div>
            <Link to='/'>Start Over</Link>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>

  )
}

export default RecPage;
