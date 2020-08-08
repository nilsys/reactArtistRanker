import React, {createContext, useReducer } from 'react';
import Reducer from './Reducer';

//initial state
const initialState = {
  artists: [
    {id: 1, name: 'Atrist One'},
    {id: 2, name: 'Atrist Two'},
    {id: 3, name: 'Atrist Three'},
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{
      artists: state.artists
    }}>
      {children}
    </GlobalContext.Provider>
  )
}