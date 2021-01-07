import React from 'react';
import { styled, css } from '../stitches.config';
import {
  Dialog as DialogPrimitive,
  DialogContentProps,
  DialogProps as DialogPrimitiveProps,
} from '@interop-ui/react-dialog';
import { Cross1Icon } from '@modulz/radix-icons';
import { Overlay } from './Overlay';
import { Panel } from './Panel';
import { IconButton } from './IconButton';

export type { DialogContentProps, DialogCloseProps } from '@interop-ui/react-dialog';
export type DialogProps = DialogPrimitiveProps & {
  children: React.ReactNode;
};

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const moveDown = css.keyframes({
  '0%': { transform: 'translate(-50%, calc(-50% + 2px))' },
  '100%': { transform: 'translate(-50%, -50%)' },
});

const StyledOverlay = styled(Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  // animation: `${fadeIn} 125ms linear`,
});

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive {...props}>
      <DialogPrimitive.Overlay as={StyledOverlay} />
      {children}
    </DialogPrimitive>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef} as={Panel}>
      {children}
      <StyledCloseButton as={IconButton} variant="ghost">
        <Cross1Icon />
      </StyledCloseButton>
    </StyledContent>
  )
);

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
