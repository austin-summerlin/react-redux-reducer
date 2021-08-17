import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ReduxProvider } from '../../state/ReduxProvider';
import { reducer, initialState } from '../../state/reducer';

describe('App component', () => {
  it('renders the App component ', () => {
    render(
      <ReduxProvider reducer={reducer} initialState={initialState} >
        <App />
      </ReduxProvider>);

    const colorDisplay = screen.getByTestId('color-display');

    const colorInput = screen.getByTestId('color-input');
    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#00FF00' });

    const undoButton = screen.getByTestId('undoButton');
    userEvent.click(undoButton);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FF1122' });

    const redoButton = screen.getByTestId('redoButton');
    userEvent.click(redoButton);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#00FF00' });
  });
});

