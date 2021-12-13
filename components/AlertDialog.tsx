import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root> & {
  children: React.ReactNode;
};

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>;
}

export const StyledContent = styled(AlertDialogPrimitive.Content, panelStyles, {
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

type AlertDialogContentPrimitiveProps = React.ComponentProps<typeof StyledContent>;
type AlertDialogContentProps = AlertDialogContentPrimitiveProps & { css?: CSS };

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props}>{children}</StyledContent>
  </AlertDialogPrimitive.Portal>
));
