import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

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

type AlertDialogContentPrimitiveProps = React.ComponentProps<typeof AlertDialogPrimitive.Content>;
type AlertDialogContentProps = AlertDialogContentPrimitiveProps & { css?: CSS };

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </AlertDialogPrimitive.Portal>
));

const AlertDialogTitle = AlertDialogPrimitive.Title;
const AlertDialogDescription = AlertDialogPrimitive.Description;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
