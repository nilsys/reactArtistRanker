import React, { useState } from 'react';
import { GlobalContext } from '../store/GlobalState';

export const Counter = () => {
  const [ rating, setRating ] = useState(0)

  return (
    <div>
      <div className="counter">
        <button className="counter-action decrement" onClick={() => setRating(prevRating => prevRating -1)}> - </button>
        <div className="counter-score">
        <p>rating</p>
        <strong>{rating}</strong>
        </div>
        <button className="counter-action increment" onClick={() => setRating(prevRating =>  prevRating + 1)}> + </button>
      </div>
    </div>
  )
}