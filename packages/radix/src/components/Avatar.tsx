import React from 'react';
import { Avatar as AvatarPrimitive, AvatarProps as AvatarPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';
import {
  SimplifiedTypeWithDefaultState,
  stylesFor,
  withDefaultBase,
  withDefaultSizes,
  withSizes,
} from '../utilities/styles-creator';
import { CSSObject } from 'styled-components';

type Size = 0 | 1;

export type AvatarProps = AvatarPrimitiveProps & {
  size?: Size;
};

const baseStyles: CSSObject = {
  borderRadius: '100%',
  backgroundColor: theme.colors.gray200,
  color: theme.colors.gray800,
  fontFamily: theme.fonts.normal,
  textTransform: 'uppercase',
};

const sizes: SimplifiedTypeWithDefaultState = {
  0: {
    fontSize: theme.fontSizes[2],
    lineHeight: theme.lineHeights[2],
    width: theme.sizes[5],
    height: theme.sizes[5],
  },
  1: {
    fontSize: theme.fontSizes[4],
    lineHeight: theme.lineHeights[4],
    width: theme.sizes[6],
    height: theme.sizes[6],
  },
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, forwardedRef) => (
  <AvatarPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={stylesFor('avatar')(withDefaultBase(baseStyles), withDefaultSizes(sizes))}
  />
));

Avatar.defaultProps = {
  size: 0,
};
