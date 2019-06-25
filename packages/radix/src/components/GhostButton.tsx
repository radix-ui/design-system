import styled from 'styled-components';
import css from '@styled-system/css';
import { margin, MarginProps, padding, PaddingProps, variant, compose } from '@modulz/radix-system';
import themeGet from '@styled-system/theme-get';

type Variants = 'normal' | 'active';
type Sizes = 'normal' | 'large';
type GhostButtonProps = MarginProps &
  PaddingProps & {
    variant?: Variants;
    size?: Sizes;
  };

const styleProps = compose(
  margin,
  padding
);

export const GhostButton = styled.button<GhostButtonProps>(
  css({
    appearance: 'none',
    border: 'none',
    borderRadius: 9999,
    color: 'grays.5',
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    fontFamily: 'normal',
    fontWeight: 500,
    justifyContent: 'center',
    outline: 'none',
    paddingY: 0,
    paddingX: 1,
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:disabled': {
      color: 'grays.4',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    '&::-moz-focus-inner': {
      border: 0,
    },
  }),
  props =>
    variant({
      variant: {
        normal: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'grays.1',
          },
          '&:focus': {
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')(props)}`,
          },
          '&:active': {
            backgroundColor: 'grays.2',
          },
        },
        active: {
          backgroundColor: 'grays.2',
          boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}`,
          '&:hover': {
            backgroundColor: 'grays.2',
          },
          '&:focus': {
            boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}`,
          },
          '&:active': {
            backgroundColor: 'grays.2',
            boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}`,
          },
        },
      },
    }),
  variant({
    size: {
      normal: {
        fontSize: 1,
        height: 5,
        lineHeight: 1,
        minWidth: 5,
      },
      large: {
        fontSize: 3,
        height: 6,
        lineHeight: 2,
        minWidth: 6,
      },
    },
  }),
  styleProps
);

GhostButton.defaultProps = {
  variant: 'normal',
  size: 'normal',
};
