import React from 'react';
import { Badge as BadgePrimitive, BadgeProps as BadgePrimitiveProps } from '@modulz/primitives';
import { colors, theme } from '../theme';
import {
  SimplifiedTypeWithDefaultState,
  stylesFor,
  withDefaultBase,
  withDefaultVariants,
} from '../utilities/styles-creator';
import { CSSObject } from 'styled-components';

type Variant = 'gray' | 'blue' | 'green' | 'red' | 'yellow';

export type BadgeProps = BadgePrimitiveProps & {
  variant?: Variant;
};

const baseStyles: CSSObject = {
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights[0],
  wordSpacing: '-0.25em',
  minWidth: theme.sizes[5],
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: '1.25ch',
  paddingRight: '1.25ch',
  border: 0,
  borderRadius: 9999,
};

const variantsCSS: SimplifiedTypeWithDefaultState = {
  gray: {
    color: colors.gray800,
  },
  blue: {
    backgroundColor: colors.blue100,
    color: colors.blue700,
  },
  green: {
    backgroundColor: colors.green100,
    color: colors.green700,
  },
  red: {
    backgroundColor: colors.red100,
    color: colors.red700,
  },
  yellow: {
    backgroundColor: colors.yellow100,
    color: colors.yellow700,
  },
};

const sharedStyles = {
  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  return (
    <BadgePrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={stylesFor('badge')(
        withDefaultBase(baseStyles),
        withDefaultVariants(variantsCSS, sharedStyles)
      )}
    />
  );
});

Badge.defaultProps = {
  variant: 'gray',
};
