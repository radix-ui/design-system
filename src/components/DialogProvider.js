/* Libaries */
import React, { createContext, useReducer } from 'react';

/* Component */
const DialogContext = createContext();

const initialState = {
  dialogs: [],
  closing: false,
};

const Actions = {
  OPEN: 'OPEN',
  BEGIN_CLOSING: 'BEGIN_CLOSING',
  CLOSE: 'CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.OPEN:
      return {
        ...state,
        closing: false,
        dialogs: [action.dialog, ...state.dialogs],
      };
    case Actions.BEGIN_CLOSING:
      return {
        ...state,
        closing: true,
      };
    case Actions.CLOSE:
      return {
        ...state,
        closing: false,
        dialogs: state.dialogs.filter((dialog) => dialog !== action.dialog),
      };
    default:
      return state;
  }
}

const DialogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DialogContext.Provider value={{ state, dispatch }}>
      {children}
    </DialogContext.Provider>
  );
};

export {
  DialogProvider,
  DialogContext,
  Actions,
};
