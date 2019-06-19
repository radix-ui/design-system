import styled from 'styled-components';
import { transparentize } from 'polished';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { ResponsiveValue, compose } from 'styled-system';
import {
  maxWidth,
  MaxWidthProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
  variant,
} from '@modulz/radix-system';

type Variants = 'normal' | 'shadow';
type MenuProps = MarginProps &
  PaddingProps &
  WidthProps &
  MaxWidthProps & { variant?: ResponsiveValue<Variants> };

const styleProps = compose(
  margin,
  padding,
  width,
  maxWidth
);

export const Menu = styled('nav')<MenuProps>(
  css({
    borderRadius: 1,
    paddingY: 1,
    paddingX: 0,
  }),
  props =>
    variant({
      variant: {
        shadow: {
          boxShadow: `0 10px 38px -10px ${transparentize(
            0.65,
            themeGet('colors.grays.8')(props)
          )}, 0 10px 20px -15px ${transparentize(0.8, themeGet('colors.grays.8')(props))}`,
        },
      },
    }),
  styleProps
);

type MenuItemProps = {
  variant?: 'normal' | 'active' | 'selected';
};

export const MenuItem = styled('button')<MenuItemProps>(
  css({
    alignItems: 'center',
    appearance: 'none',
    border: 0,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    minHeight: '31px',
    outline: '1px solid transparent',
    outlineOffset: '-1px',
    paddingY: 1,
    paddingX: 3,
    position: 'relative',
    textAlign: 'left',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    width: '100%',
    '&:hover:disabled': {
      backgroundColor: 'white',
    },
    '&:disabled': {
      color: 'grays.4',
      cursor: 'not-allowed',
    },
    '&::-moz-focus-inner': {
      border: 0,
    },
  }),
  props =>
    variant({
      variant: {
        normal: {
          backgroundColor: 'white',
          color: 'grays.7',
          '&:hover': {
            backgroundColor: 'grays.1',
          },
          '&:active': {
            backgroundColor: 'grays.2',
          },
          '&:focus': {
            outlineColor: themeGet('colors.blues.2')(props),
          },
        },
        active: {
          backgroundColor: 'blues.4',
          color: 'white',
          '&:hover': {
            backgroundColor: 'blues.4',
          },
          '&:active': {
            backgroundColor: 'blues.4',
          },
        },
        selected: {
          backgroundColor: 'blues.1',
          color: 'grays.7',
          '&:hover': {
            backgroundColor: 'blues.1',
          },
          '&:active': {
            backgroundColor: 'blues.1',
          },
          '&:focus': {
            outlineColor: themeGet('colors.blues.2')(props),
          },
        },
      },
    }),
  {
    lineHeight: '1',
  }
);

MenuItem.defaultProps = { variant: 'normal' };

export const MenuGroup = styled('div')(
  css({
    paddingY: 1,
    paddingX: 0,
    marginY: 1,
    marginX: 0,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'grays.2',
  })
);
