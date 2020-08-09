import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { v4 as uuid } from 'uuid';

//initial state
const initialState = {
  artists: [
    {
      id: uuid(),
      name: "Giolì & Assia",
      picture: "https://i.ibb.co/xLvHHCZ/TEy-FOecd-400x400.jpg",
      rating: 5
    }
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Actions
  const removeArtist = (id) => {
    dispatch({
      type: 'REMOVE_ARTIST',
      payload: id,
    });
  };

  const addArtist = (artist) => {
    dispatch({
      type: 'ADD_ARTIST',
      payload: artist
    });
  };

  const editArtist = (artist) => {
    dispatch({
      type: 'EDIT_ARTIST',
      payload: artist
    })
  }

  const changeRating = (index, delta) => {
    dispatch({
      type: 'CHANGE_RATING',
      payload: artist
    })
  };

  return (
    <GlobalContext.Provider
      value={{
        artists: state.artists,
        changeRating,
        removeArtist,
        addArtist,
        editArtist
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
