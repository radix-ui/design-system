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
`;

const Panel = styled.div`
  background-color: white;
  border-radius: ${theme.BORDERRADIUS_200};
  box-shadow:
    0 10px 38px -10px hsla(208,24%,7%,.35),
    0 10px 20px -15px hsla(208,24%,7%,.2);
  max-height: 100%;
  opacity: 0;
  overflow: hidden;
  transition-duration: 80ms;
  transition-property: opacity, transform;
  transition-timing-function: linear;
  transform: translateY(5px);
  width: 100%;
  z-index: 8;
  pointer-events: auto;

  ${p => p.size1 && css`
    max-width: 800px;
  `}

  ${p => p.size2 && css`
    max-width: 400px;
  `}

  ${p => p.expanded && css`
    height: 100%;
  `}

  ${p => p.active && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Dialog = ({
  children,
  content: Content,
  dismissable,
  root,
  ...panelProps,
}) => {
  const [active, setActive] = useState(false);
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
  
  const handleWheel = (event) => {
    if (active) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel);
    return () => {
      document.removeEventListener('wheel', handleWheel);
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
      <div onClick={() => setActive(true)}>{children}</div>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Overlay active={active} onClick={handleOverlayClick} />
          <Container>
            <Box
              position_fixed
              pt_1
              pr_1
              style={{
                top: 0,
                right: 0,
                display: active ? 'block' : 'none'
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
  dismissable: PropTypes.bool,
  content: PropTypes.func,
  root: PropTypes.instanceOf(Element),
};

Dialog.defaultProps = {
  dismissable: true,
};

export default Dialog;
