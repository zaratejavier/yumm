import { createContext, useReducer } from 'react'; //allows us to create a new context object

import * as React from 'react';

export const ThemeContext = createContext(); // saving it to a variable

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  // this is where we add the data
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#145c8a',
    mode: 'dark',
  });

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider> // this provides the data to its children
  );
}
