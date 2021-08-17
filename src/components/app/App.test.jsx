import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders the App component ', () => {
    render(<App />);

    const colorDisplay = screen.getByTestId('color-display');
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('changes the color selection', () => {
    render(<App />);
    const colorDisplay = screen.getByTestId('color-display');
    const colorInput = screen.getByTestId('color-input');

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });

    expect(colorDisplay).toHaveStyle({ backgroundColor: '#00FF00' });
  });

  it('undoes a color selection', () => {
    render(<App />);
    const colorDisplay = screen.getByTestId('color-display');
    const colorInput = screen.getByTestId('color-input');
    const undo = screen.getByRole('button', { name: 'undo' });

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    fireEvent.click(undo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('redoes a color selection', () => {
    render(<App />);
    const colorDisplay = screen.getByTestId('color-display');
    const colorInput = screen.getByTestId('color-input');
    const undo = screen.getByRole('button', { name: 'undo' });
    const redo = screen.getByRole('button', { name: 'redo' });

    fireEvent.change(colorInput, { target: { value: '#00FF00' } });
    fireEvent.click(undo);
    fireEvent.click(redo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#00FF00' });
  });
});
