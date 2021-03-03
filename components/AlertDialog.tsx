import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root> & {
  children: React.ReactNode;
};

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  ...overlayStyles,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
  ...panelStyles,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
});

type AlertDialogContentOwnProps = Polymorphic.OwnProps<typeof AlertDialogPrimitive.Content> & {
  css?: CSS;
};
type AlertDialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentOwnProps
>;

export const AlertDialogContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
  </StyledContent>
)) as AlertDialogContentComponent;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
