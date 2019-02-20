import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from './Box';
import GhostButton from './GhostButton';
import Overlay from './Overlay';

import * as theme from './../theme/';

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
  transition-duration: 80ms;
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

const Dialog = ({
  children,
  content: Content,
  dismissable,
  root,
  active: initiallyActive,
  ...panelProps,
}) => {
  const [active, setActive] = useState(initiallyActive);
  const close = () => setActive(false);

  const handleOverlayClick = (event) => {
    if (dismissable) {
      close();
    }
  };

  const handleKeyDown = (event) => {
    if (!active) {
      return;
    }

    // Close dialog if escape key is pressed
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });
  

  // Get reference to root element to mount dialog into, or create it if it doesn't already exist
  let rootNode = root || document.getElementById('dialog-root');
  if (!rootNode) {
    rootNode = document.body.appendChild(document.createElement('div'));
    rootNode.id = 'dialog-root';
  };

  return (
    <React.Fragment>
      <span onClick={() => setActive(true)}>{children}</span>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Overlay active={active} onClick={handleOverlayClick} />
          <Container>
            <Box
              position_fixed
              pt_1
              pr_1
              top_0
              right_0
              style={{
                transition: 'opacity 80ms linear',
                opacity: active ? '1' : '0',
                pointerEvents: active ? 'auto' : 'none',
              }}
            >
              {dismissable && (
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
              onKeyDown={handleKeyDown}
              {...panelProps}
            >
              <Content close={close} />
            </Panel>
          </Container>
        </React.Fragment>,
        rootNode,
      )}
    </React.Fragment>
  );
};

Dialog.propTypes = {
  // Whether or not the dialog can be dismissed without manually calling the provided close() function
  dismissable: PropTypes.bool,
  // Whether or not the dialog is initially rendered as active
  active: PropTypes.bool,
  // The content to render inside the panel of the dialog
  content: PropTypes.func,
  // A DOM node to mount the dialog in via React.createPortal().
  // Defaults to a div in the body element of the document.
  root: PropTypes.instanceOf(Element),
};

Dialog.defaultProps = {
  dismissable: true,
  active: false,
};

export default Dialog;
