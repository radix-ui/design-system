import styled from 'styled-components';
import css from '@styled-system/css';
import { margin, MarginProps, padding, PaddingProps, variant, compose } from '@modulz/radix-system';
import themeGet from '@styled-system/theme-get';

type Sizes = 0 | 1;
type GhostButtonProps = MarginProps &
  PaddingProps & {
    isActive?: Boolean;
    size?: Sizes;
  };

const styleProps = compose(
  margin,
  padding
);

export const GhostButton = styled.button<GhostButtonProps>(
  props =>
    css({
      appearance: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 9999,
      color: 'gray600',
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      fontFamily: 'medium',
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
        color: 'gray500',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      '&:hover': {
        backgroundColor: 'gray200',
      },
      '&:focus': {
        boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue500')(props)}`,
      },
      '&:active': {
        backgroundColor: 'gray300',
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
    }),
  props =>
    variant({
      isActive: {
        true: {
          backgroundColor: 'gray300',
          '&:hover': {
            backgroundColor: 'gray300',
          },
          '&:focus': {
            boxShadow: `inset 0 1px 0 0 ${themeGet('colors.gray500')(props)}`,
          },
          '&:active': {
            backgroundColor: 'gray300',
            boxShadow: `inset 0 1px 0 0 ${themeGet('colors.gray500')(props)}`,
          },
        },
      },
    }),
  variant({
    size: {
      0: {
        fontSize: 1,
        height: 5,
        lineHeight: 1,
        minWidth: 5,
      },
      1: {
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
  size: 0,
};
