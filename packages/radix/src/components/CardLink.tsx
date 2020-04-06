import React from 'react';
import merge from 'lodash.merge';
import {
  CardLink as CardLinkPrimitive,
  CardLinkProps as CardLinkPrimitiveProps,
  StyleConfig,
  CardLinkParts,
} from '@modulz/primitives';
import { cardStyleConfig, Variant } from './Card';
import { theme } from '../theme';

export type CardLinkProps = CardLinkPrimitiveProps & {
  to?: string;
  variant?: Variant;
};

const cardLinkStyleConfigOverrides: StyleConfig<CardLinkParts> = {
  base: {
    card: {
      normal: {},
      focus: {
        borderColor: theme.colors.blue500,
        boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}`,
      },
    },
  },
  variants: {
    variant: {
      border: {
        card: {
          normal: {},
          hover: {
            borderColor: theme.colors.gray500,
          },
        },
      },
      shadow: {
        card: {
          normal: {
            willChange: 'transform',
          },
          hover: {
            transform: 'translateY(-2px)',
          },
        },
      },
      ghost: {
        card: {
          normal: {
            willChange: 'transform',
          },
          hover: {
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: 1,
            },
          },
        },
      },
    },
  },
};

const cardLinkStyleConfig: StyleConfig<CardLinkParts> = merge(
  {},
  cardStyleConfig,
  cardLinkStyleConfigOverrides
);

export const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  (props, forwardedRef) => (
    <CardLinkPrimitive {...props} ref={forwardedRef} styleConfig={cardLinkStyleConfig} />
  )
);

CardLink.defaultProps = {
  variant: 'border',
};
