/* Libaries */
import React, { createContext, useReducer, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
/* Components */
import Box from './Box';
import GhostButton from './GhostButton';
import Overlay from './Overlay';
/* Theme */
import * as theme from './../theme/';

// The number of milliseconds it takes to close the dialog
const DIALOG_CLOSE_TRANSITION_LENGTH = 80;

/* Styles */
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.SPACING_700};
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  pointer-events: none;
  
  ${p => p.active && css`
    pointer-events: auto;
  `}
`;

const Panel = styled.div`
  background-color: white;
  border-radius: ${theme.BORDERRADIUS_200};
  box-shadow:
    0 10px 38px -10px hsla(208,24%,7%,.35),
    0 10px 20px -15px hsla(208,24%,7%,.2);
  max-height: 100%;
  min-height: 100px;
  opacity: 0;
  overflow: hidden;
  transition-duration: ${DIALOG_CLOSE_TRANSITION_LENGTH}ms;
  transition-property: opacity, transform;
  transition-timing-function: linear;
  transform: translateY(5px);
  width: 100%;
  z-index: 8;
  pointer-events: none;
  ${p => p.size1 && css`
    max-width: 800px;
  `}
  ${p => p.size2 && css`
    max-width: 400px;
  `}
  
  @media screen and (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_size1 && css`
      max-width: 800px;
    `}
    ${p => p.bp1_size2 && css`
      max-width: 400px;
    `}
  }
  @media screen and (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_size1 && css`
      max-width: 800px;
    `}
    ${p => p.bp2_size2 && css`
      max-width: 400px;
    `}
  }
  @media screen and (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_size1 && css`
      max-width: 800px;
    `}
    ${p => p.bp3_size2 && css`
      max-width: 400px;
    `}
  }
  @media screen and (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_size1 && css`
      max-width: 800px;
    `}
    ${p => p.bp4_size2 && css`
      max-width: 400px;
    `}
  }
  
  ${p => p.expanded && css`
    height: 100%;
  `}
  ${p => p.active && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `}
`;

/* Component */
const DialogContext = createContext();
const DialogContextConsumer = DialogContext.Consumer;

const initialState = {
  dialogs: [],
  closeTimer: null,
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
      clearTimeout(state.closeTimer);
      return {
        ...state,
        closing: false,
        closeTimer: null,
        dialogs: [action.dialog, ...state.dialogs],
      };
    case Actions.BEGIN_CLOSING:
      return {
        ...state,
        closing: true,
        closeTimer: action.closeTimer,
      };
    case Actions.CLOSE:
      return {
        ...state,
        closing: false,
        closeTimer: null,
        dialogs: state.dialogs.filter((dialog) => dialog !== action.dialog),
      };
    default:
      return state;
  }
}

const DialogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const active = !!state.dialogs[0] && !state.closing;
  const activeDialog = state.dialogs[0] || {};
  const panelRef = useRef(null);

  // Close handler needs to not remove children of dialog until the dialog hide transition has fully completed in order
  // to avoid disgusting content reflows onscreen during close transition
  const close = () => {
    const handler = () => dispatch({ type: Actions.CLOSE, dialog: activeDialog });

    if (panelRef.current) {
      panelRef.current.addEventListener('transitionend', handler);
    }

    dispatch({
      type: Actions.BEGIN_CLOSING,
      finishClosing: () => {
        if (panelRef.current) {
          panelRef.current.removeEventListener('transitionend', handler);
        }
      },
    });
  };

  const handleOverlayClick = () => {
    if (activeDialog.dismissable) {
      close();
    }
  };

  // Close dialog if escape key is pressed
  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && active && activeDialog.dismissable) {
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <DialogContext.Provider value={{ state, dispatch }}>
      {children}
      <Overlay active={active} onClick={handleOverlayClick} />
      <Container>
        <Box
          position_fixed
          pt_1
          pr_1
          top_0
          right_0
          style={{
            transition: `opacity ${DIALOG_CLOSE_TRANSITION_LENGTH}ms linear`,
            opacity: active ? '1' : '0',
            pointerEvents: active ? 'auto' : 'none',
          }}
        >
          {activeDialog.dismissable && (
            <GhostButton size2 onClick={close}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                stroke="currentColor"
              >
                <path d="M7.5 17.5L17.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </GhostButton>
          )}
        </Box>
        <Panel
          active={active}
          onClick={(event) => event.stopPropagation()}
          {...activeDialog.panelProps}
          ref={panelRef}
        >
          {activeDialog.children && <activeDialog.children close={close} />}
        </Panel>
      </Container>
    </DialogContext.Provider>
  );
};

export {
  DialogContext,
  DialogContextProvider,
  DialogContextConsumer,
  Actions,
};
