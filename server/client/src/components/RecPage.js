import React from 'react';

//create vars and text for each property of the car
const RecPage = (props) => {

  const minYear = props.results[0].data[0].minYear;
  const make = props.results[0].data[0].make;
  const model = props.results[0].data[0].model;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className='results'>
              <p/>
              <h1>Your results:</h1>
              <h2>{minYear} {make} {model}</h2>
            </div>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default RecPage;
