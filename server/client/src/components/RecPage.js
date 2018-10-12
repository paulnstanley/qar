import React from 'react';

const RecPage = (props) => (
  <div>
    <h1>RecPage stateless component</h1>
    <h2>{console.log(props)}</h2>
    <h2>{console.log(props.results[0].data[0])}</h2>
  </div>
)

// class RecPage extends Component {
//   constructor() {
//     super()
//
//   }
//
//
//
// render() {
//     return (
//       <div>
//         Results:
//         <h1>{JSON.stringify(this.props.state)}</h1>
//       </div>
//     )
//   }
// }

export default RecPage;
