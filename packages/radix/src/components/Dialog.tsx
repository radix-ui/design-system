import React from 'react';
import css from '@styled-system/css';
import { Dialog as DialogPrimitive, DialogProps as DialogPrimitiveProps } from 'mdlz-prmtz';

type DialogProps = DialogPrimitiveProps;

export const Dialog = (props: DialogProps) => (
  <DialogPrimitive
    {...props}
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    contentCss={css({
      borderRadius: 2,
      boxShadow:
        '0 10px 38px -10px hsla(208, 24%, 7%, 0.35), 0 10px 20px -15px hsla(208, 24%, 7%, 0.2)',
      width: 'auto',
      maxWidth: 'fit-content',
      minWidth: 400,
      maxHeight: '90vh',
      marginY: '5vh',
      marginX: 'auto',
      overflow: 'auto',
      padding: 0,
      boxSizing: 'border-box',
    })}
    overlayCss={{ backgroundColor: 'hsla(0, 0%, 100%, .5)' }}
  />
);
