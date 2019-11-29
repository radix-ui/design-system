import styled from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import {
  textColor,
  TextColorProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  textAlign,
  TextAlignProps,
  variant,
  compose,
  Prop,
} from '@modulz/radix-system';

type VariantProps = 'normal' | 'ghost';
type SizeProps = 0 | 1;

// TODO: Fix `size` typing
export type TextareaProps = TextColorProps &
  MarginProps &
  PaddingProps &
  WidthProps &
  MaxWidthProps &
  TextAlignProps & {
    variant?: Prop<VariantProps>;
    size?: Prop<SizeProps> & any;
  };

const styleProps = compose(
  textColor,
  margin,
  padding,
  textAlign,
  width,
  maxWidth
);

const placeholderStyle = {
  color: 'gray500',
  opacity: 1,
};

export const Textarea = styled('textarea')<TextareaProps>(
  props =>
    css({
      appearance: 'none',
      backgroundColor: 'transparent',
      cursor: 'default',
      color: 'gray800',
      fontFamily: 'normal',
      outline: 'none',
      padding: 0,
      verticalAlign: 'middle',
      width: '100%',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      border: '1px solid',
      borderColor: 'gray300',
      borderRadius: 1,
      minHeight: 9,
      '&:read-only': {
        borderColor: 'gray300',
        color: 'gray700',
      },
      '&:disabled': {
        borderColor: 'gray300',
        color: 'gray500',
        cursor: 'not-allowed',
      },
      '&::-webkit-input-placeholder': placeholderStyle,
      '&::-moz-placeholder': placeholderStyle,
      '&:-ms-input-placeholder': placeholderStyle,
      '&:focus': {
        borderColor: 'blue500',
        boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
        cursor: 'text',
      },
    }),
  variant({
    size: {
      0: {
        fontSize: 1,
        letterSpacing: '-0.01em',
        height: 5,
        lineHeight: 2,
        paddingX: 1,
      },
      1: {
        fontSize: 2,
        letterSpacing: '-0.01em',
        height: 6,
        lineHeight: 4,
        paddingX: 2,
      },
    },
  }),
  variant({
    variant: {
      normal: {
        borderColor: 'gray300',
      },
      ghost: {
        borderColor: 'transparent',
        cursor: 'text',
      },
    },
  }),
  styleProps
);

Textarea.defaultProps = { variant: 'normal', size: 0 };
