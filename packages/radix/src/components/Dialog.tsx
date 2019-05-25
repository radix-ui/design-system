import React, { FC } from 'react';
import styled, { css as _css, keyframes } from 'styled-components';
import css from '@styled-system/css';
import { transparentize } from 'polished';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

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

const Overlay = styled(DialogOverlay)<DialogProps>(
  {
    '&[data-reach-dialog-overlay]': {
      display: 'flex',
      alignItems: 'center',
      zIndex: 9999,
    },
  },
  _css`
    &[data-reach-dialog-overlay] {
      animation: ${overlayEnterKeyframes} 300ms ease-out forwards;
    }
  `
);

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

const Content = styled(DialogContent)(
  css({
    '&[data-reach-dialog-content]': {
      borderRadius: 2,
      boxShadow:
        '0 10px 38px -10px hsla(208, 24%, 7%, 0.35), 0 10px 20px -15px hsla(208, 24%, 7%, 0.2)',
      width: 'auto',
      maxWidth: 'fit-content',
      minWidth: 400,
      maxHeight: '90vh',
      marginTop: '5vh',
      marginBottom: '5vh',
      overflow: 'auto',
      padding: 0,
      boxSizing: 'border-box',
    },
  }),
  _css`
    &[data-reach-dialog-content] {
      animation: ${wrapperEnterKeyframes} 250ms ease-out;
    }
  `
);
