import React from 'react';
import {
  Tooltip as TooltipPrimitive,
  TooltipProps as TooltipPrimitiveProps,
} from '@modulz/primitives';
import { theme } from '../theme';

export type TooltipProps = TooltipPrimitiveProps;

export const Tooltip = (props: TooltipProps) => (
  <TooltipPrimitive
    arrowOffset={6}
    sideOffset={-3}
    {...props}
    styleConfig={{
      base: {
        content: {
          normal: {
            backgroundColor: theme.colors.gray800,
            paddingTop: 0,
            paddingRight: theme.space[2],
            paddingBottom: 0,
            paddingLeft: theme.space[2],
            lineHeight: theme.lineHeights[2],
            borderRadius: theme.radii[1],
            color: theme.colors.white,
            fontSize: theme.fontSizes[1],
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '-0.001em',
          },
        },
        arrow: {
          normal: {
            width: 12,
            height: 6,
            fill: theme.colors.gray800,
          },
        },
      },
    }}
  />
);
