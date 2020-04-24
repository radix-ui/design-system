import React from 'react';
import { Dialog as DialogPrimitive, DialogProps as DialogPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type DialogProps = DialogPrimitiveProps;

export const Dialog = (props: DialogProps) => (
  <DialogPrimitive
    {...props}
    styleConfig={{
      base: {
        overlay: {
          normal: {
            backgroundColor: 'hsla(0, 0%, 0%, 0.1)',
          },
        },
        wrapper: {
          normal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        content: {
          normal: {
            backgroundColor: theme.colors.white,
            borderRadius: theme.radii[2],
            boxShadow:
              '0 10px 38px -10px hsla(208, 24%, 7%, 0.35), 0 10px 20px -15px hsla(208, 24%, 7%, 0.2)',
            width: 'auto',
            maxWidth: 'fit-content',
            minWidth: 200,
            maxHeight: '85vh',
            margin: '5vh auto 10vh',
            overflow: 'auto',
          },
        },
      },
    }}
  />
);
