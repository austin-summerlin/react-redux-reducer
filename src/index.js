import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ReduxProvider } from './state/ReduxProvider';
import { intialState, reducer } from './state/reducer';

render(
  <ReduxProvider reducer={reducer} intialState={intialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
