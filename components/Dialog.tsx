import React from 'react';
import { styled } from '../stitches.config';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';
import { IconButton } from './IconButton';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  ...overlayStyles,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  ...panelStyles,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
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

const StyledCloseButton = styled(IconButton, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

type DialogContentOwnProps = Polymorphic.OwnProps<typeof DialogPrimitive.Content> & {
  css?: any;
};

type DialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DialogPrimitive.Content>,
  DialogContentOwnProps
>;

export const DialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <DialogPrimitive.Close as={StyledCloseButton} variant="ghost">
      <Cross1Icon />
    </DialogPrimitive.Close>
  </StyledContent>
)) as DialogContentComponent;

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
