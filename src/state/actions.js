export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const RECORD = 'RECORD';

export const setUndo = () => ({
  type: UNDO,
});

export const setRedo = () => ({
  type: REDO,
});

export const setRecord = (current) => ({
  type: RECORD,
  payload: current,
});
