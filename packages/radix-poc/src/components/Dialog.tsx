import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { themeGet } from 'styled-system';

type DialogProps = {
  isOpen?: boolean;
  onDismiss?: () => void;
};

export const Dialog: FC<DialogProps> = ({
  isOpen,
  onDismiss,
  children,
  ...props
}) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content {...props}>{children}</Content>
    </Overlay>
  );
};

const overlayEnterKeyframes = keyframes`
  0% {
    background-color: ${transparentize(1, 'white')};
  }

  100% {
    background-color: ${transparentize(0.5, 'white')};
  }
`;

const Overlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    display: flex;
    align-items: center;
    animation: ${overlayEnterKeyframes} 300ms ease-out forwards;
    z-index: 1;
  }
`;

const wrapperEnterKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 5px, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
`;

const Content = styled(DialogContent)`
  &[data-reach-dialog-content] {
    border-radius: ${themeGet('radii.2')};
    box-shadow: 0 10px 38px -10px hsla(208, 24%, 7%, 0.35),
      0 10px 20px -15px hsla(208, 24%, 7%, 0.2);
    width: auto;
    max-width: fit-content;
    min-width: 400px;
    max-height: 90vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
    overflow: auto;
    padding: 0;
    box-sizing: border-box; /* should this be global? */
    animation: ${wrapperEnterKeyframes} 250ms ease-out;
  }
`;
