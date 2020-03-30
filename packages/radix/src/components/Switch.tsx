import React from 'react';
import { Switch as SwitchPrimitive, SwitchProps as SwitchPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type SwitchProps = SwitchPrimitiveProps;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, forwardedRef) => (
  <SwitchPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        switch: {
          normal: {
            width: theme.sizes[5],
            height: theme.sizes[3],
            borderRadius: 9999,
            backgroundColor: theme.colors.gray300,
            transition: 'background-color 100ms ease-out',
          },
          active: {
            filter: 'brightness(95%)',
          },
          checked: {
            backgroundColor: theme.colors.blue600,
            '[data-part-id="thumb"]': {
              transform: `translateX(${theme.space[2]})`,
            },
          },
          disabled: {
            cursor: 'not-allowed',
            backgroundColor: theme.colors.gray300,
            '[data-part-id="thumb"]': {
              backgroundColor: theme.colors.gray100,
              boxShadow: 'none',
            },
          },
        },
        thumb: {
          normal: {
            width: '13px',
            height: '13px',
            marginLeft: '1px',
            borderRadius: 9999,
            backgroundColor: 'white',
            boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 100ms ease-out, transform 100ms ease-out',
          },
        },
      },
    }}
  />
));
