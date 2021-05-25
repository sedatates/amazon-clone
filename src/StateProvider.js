import React, { createContext, useReducer, useContext } from 'react'

//preapare datalayer
export const StateContext = createContext();

//wrap our app ? and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value = {useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
)

//pull information from data layer
export const useStateValue = () => useContext(StateContext);