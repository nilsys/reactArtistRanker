import React from 'react';


export const Counter = () => {
  return (
    <div>
      <div className="counter">
      
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">
        <p>rating</p>
        <strong>5 </strong>
        </div>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  )
}


// class Counter extends Component {
//   state = { 
//     score: 0 
//   };
  
//   incrementScore = () => {
//     this.setState( prevState => ({
//       score: prevState.score + 1
//     }));
//   }

//   decrementScore = () => {
//     this.setState( prevState => ({
//       score: prevState.score - 1
//     }));
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <span className="counter-score">{ this.state.score }</span>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// }

export default Counter;