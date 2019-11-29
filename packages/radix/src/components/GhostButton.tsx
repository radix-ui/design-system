import styled from 'styled-components';
import css from '@styled-system/css';
import { margin, MarginProps, padding, PaddingProps, variant, compose } from '@modulz/radix-system';
import themeGet from '@styled-system/theme-get';

type GhostButtonProps = MarginProps &
  PaddingProps & {
    isActive?: Boolean;
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
      color: 'gray800',
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      fontFamily: 'normal',
      fontWeight: 500,
      fontSize: 1,
      height: 5,
      lineHeight: 2,
      minWidth: 5,
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
        color: 'gray600',
        cursor: 'not-allowed',
        pointerEvents: 'none', // TODO: Review in Primitives
      },
      '&:hover': {
        backgroundColor: 'gray200',
        boxShadow: `0 0 0 1px ${themeGet('colors.gray200')(props)}`,
      },
      '&:active': {
        backgroundColor: 'gray300',
        boxShadow: `0 0 0 1px ${themeGet('colors.gray300')(props)}`,
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${themeGet('colors.blue500')(props)}`,
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
    }),
  props =>
    variant({
      isActive: {
        true: {
          backgroundColor: 'blue200',
          color: 'blue600',
          boxShadow: `0 0 0 1px ${themeGet('colors.blue200')(props)}`,
          '&:hover': {
            backgroundColor: 'blue200',
            boxShadow: `0 0 0 1px ${themeGet('colors.blue200')(props)}`,
          },
          '&:active': {
            backgroundColor: 'blue300',
            boxShadow: `0 0 0 1px ${themeGet('colors.blue300')(props)}`,
          },
          '&:focus': {
            boxShadow: `0 0 0 2px ${themeGet('colors.blue500')(props)}`,
          },
        },
      },
    }),
  styleProps
);
