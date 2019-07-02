import styled from 'styled-components';
import css from '@styled-system/css';
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

type VariantProps = 'normal' | 'ghost' | 'fade';
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
  color: 'grays.4',
  opacity: 1,
};

export const Textarea = styled('textarea')<TextareaProps>(
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
    minHeight: 9,
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
      0: { fontSize: 2, height: 5, lineHeight: 1 },
      1: { fontSize: 3, height: 6, lineHeight: 3 },
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

Textarea.defaultProps = { variant: 'normal', size: 0 };
