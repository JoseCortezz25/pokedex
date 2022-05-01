import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';

const store = configureStore({ reducer: pokemonReducer })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
