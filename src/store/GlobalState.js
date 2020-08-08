import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

//initial state
const initialState = {
  artists: [],
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

  return (
    <GlobalContext.Provider
      value={{
        artists: state.artists,
        removeArtist,
        addArtist,
        editArtist
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
