import React, { useContext } from 'react';
import { GlobalContext } from '../store/GlobalState';

export const Counter = ({index}) => {
  const { artists, changeRating } = useContext(GlobalContext);

  return (
    <div>
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeRating(index, -1)}> - </button>
        <div className="counter-score">
        <p>rating</p>
        <strong>{artists[index].rating}</strong>
        </div>
        <button className="counter-action increment" onClick={() => changeRating(index, 1)}> + </button>
      </div>
    </div>
  )
}