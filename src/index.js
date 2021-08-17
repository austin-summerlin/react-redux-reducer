import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ReduxProvider } from './state/ReduxProvider';
import { initialState, reducer } from './state/reducer';

render(
  <ReduxProvider reducer={reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
