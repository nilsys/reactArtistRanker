import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

//initial state
const initialState = {
  artists: [
    { id: 1, name: 'Atrist One' },
    { id: 2, name: 'Atrist Two' },
    { id: 3, name: 'Atrist Three' },
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

  const editArtist = (user) => {
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
