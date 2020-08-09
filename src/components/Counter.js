import React, { useState } from 'react';


export const Counter = () => {

  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="counter">
        <button className="counter-action decrement" onClick={() => setRating(prevRating => prevRating - 1)}> - </button>
        <div className="counter-score">
        <p>rating</p>
        <strong>{rating}</strong>
        </div>
        <button className="counter-action increment" onClick={() => setRating(prevRating => prevRating + 1)}> + </button>
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