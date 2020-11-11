import React, { useContext, useReducer } from 'react';
import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';
import bookmarkReducer from './reducer';
import AppContext from './context';
import Stories from './components/stories';

export default function App() {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Stories />
    </AppContext.Provider>
  );
}
