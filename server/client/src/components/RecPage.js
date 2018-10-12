import React from 'react';

//create vars and text for each property of the car
const RecPage = (props) => {
  const make = props.results[0].data[0].make;
  return (
    <div className='results'>
      <h1>Your results:</h1>
      <h2>{make}</h2>
    </div>
  )
}

export default RecPage;
