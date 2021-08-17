import React from 'react';
import { setRecord, setRedo, setUndo } from '../../state/actions.js';
import { useDispatch, useSelector } from '../../state/ReduxProvider.jsx';
import { selectCurrent } from '../../state/selectors.js';

function App() {
  const current = useSelector(selectCurrent);
  const dispatch = useDispatch();

  const undo = () => {
    dispatch(setUndo());
  };

  const redo = () => {
    dispatch(setRedo());
  };

  const record = (current) => {
    dispatch(setRecord(current));
  };

  return (
    <>
      <button data-testid="undoButton" onClick={undo}>undo</button>
      <button data-testid="redoButton" onClick={redo}>redo</button>
      <input
        data-testid="color-input"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        data-testid="color-display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
