import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions } from './middlewares';

const store = configureStore({ 
  reducer: pokemonReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logActions)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
