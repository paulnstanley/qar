import React from 'react';

const RecPage = (props) => (
  <div>
    <h1>RecPage stateless component</h1>
    <h2>{JSON.stringify(props.results)}</h2>
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
