import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  textAlign,
  TextAlignProps,
  compose,
  ResponsiveValue,
} from 'styled-system';
import css from '@styled-system/css';
import { variant } from '../utils/variant';

type VariantProps = 'normal' | 'ghost' | 'fade';
type SizeProps = 'normal' | 'large';

// TODO: Fix `size` typing
export type InputProps = ColorProps &
  SpaceProps &
  WidthProps &
  MaxWidthProps &
  TextAlignProps & {
    variant?: ResponsiveValue<VariantProps>;
    size?: ResponsiveValue<SizeProps> & any;
  };

const styleProps = compose(
  color,
  space,
  textAlign,
  width,
  maxWidth
);

const placeholderStyle = {
  color: 'grays.4',
  opacity: 1,
};

// TODO: Fix color typings
// @ts-ignore
export const Input = styled('input')<InputProps>(
  css({
    appearance: 'none',
    backgroundColor: 'transparent',
    borderRadius: 0,
    color: 'grays.8',
    fontFamily: 'normal',
    outline: 'none',
    padding: 0,
    verticalAlign: 'middle',
    width: '100%',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    border: 0,
    borderBottom: '1px solid',
    '&:read-only': {
      borderColor: 'grays.2',
      color: 'grays.5',
    },
    '&:disabled': {
      borderColor: 'grays.2',
      color: 'grays.4',
      cursor: 'not-allowed',
    },
    '&::-webkit-input-placeholder': placeholderStyle,
    '&::-moz-placeholder': placeholderStyle,
    '&:-ms-input-placeholder': placeholderStyle,
  }),
  variant({
    size: {
      normal: { fontSize: 2, height: 5, lineHeight: 1 },
      large: { fontSize: 3, height: 6, lineHeight: 3 },
    },
  }),
  variant({
    variant: {
      normal: {
        borderColor: 'grays.3',
        '&:focus': {
          borderColor: 'blues.4',
        },
      },
      fade: {
        borderColor: 'grays.3',
        color: 'grays.5',
        '&:focus': {
          borderColor: 'blues.4',
        },
      },
      ghost: {
        borderColor: 'transparent',
      },
    },
  }),
  styleProps
);

Input.defaultProps = { type: 'text', variant: 'normal', size: 'normal' };
