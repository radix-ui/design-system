import React from 'react';
import { styled, keyframes } from '../stitches.config';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';
import { IconButton } from './IconButton';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

const fadeIn = keyframes({
  'from': { opacity: '0' },
  'to': { opacity: '1' },
});

const fadeOut = keyframes({
  'from': { opacity: '1' },
  'to': { opacity: '0' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  ...overlayStyles,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

export function Sheet({ children, ...props }: SheetProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const slideIn = keyframes({
  'from': { transform: 'translateX(100%)' },
  'to': { transform: 'translateX(0)' },
});

const slideOut = keyframes({
  'from': { transform: 'translateX(0)' },
  'to': { transform: 'translateX(100%)' },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$panel',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  // transform: 'translate(-50%, -50%)',
  width: 250,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',
  transformOrigin: 'right',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

const StyledCloseButton = styled(IconButton, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

type SheetContentOwnProps = Polymorphic.OwnProps<typeof DialogPrimitive.Content> & {
  css?: any;
};

type DialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DialogPrimitive.Content>,
  SheetContentOwnProps
>;

export const SheetContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <DialogPrimitive.Close as={StyledCloseButton} variant="ghost">
      <Cross1Icon />
    </DialogPrimitive.Close>
  </StyledContent>
)) as DialogContentComponent;

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
