import React from 'react';
import { transparentize } from 'polished';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

export type PopoverProps = PopoverPrimitiveProps;

export const Popover = (props: PopoverProps) => {
  return (
    <PopoverPrimitive
      side="bottom"
      align="center"
      {...props}
      styleConfig={{
        base: {
          content: {
            normal: {
              backgroundColor: theme.colors.white,
              borderRadius: theme.radii[1],
              boxShadow: `0 10px 38px -10px ${transparentize(0.65, theme.colors.gray900)},
                          0 10px 20px -15px ${transparentize(0.8, theme.colors.gray900)}`,
            },
          },
          arrow: {
            normal: {
              fill: theme.colors.white,
            },
          },
        },
      }}
    />
  );
};
