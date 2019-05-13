import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  themeGet,
  width,
  WidthProps,
} from 'styled-system';
import { transparentize } from 'polished';

type Variants = 'ghost';
type MenuProps = SpaceProps &
  WidthProps &
  MaxWidthProps & { variant?: Variants };

export const Menu = styled('nav')<MenuProps>(
  ({ variant, ...props }) =>
    css({
      borderRadius: 1,
      paddingY: 1,
      paddingX: 0,
      boxShadow:
        variant === 'ghost'
          ? 'none'
          : `0 10px 38px -10px ${transparentize(
              0.65,
              themeGet('colors.grays.8')(props)
            )}, 0 10px 20px -15px ${transparentize(
              0.8,
              themeGet('colors.grays.8')(props)
            )}`,
    }),
  space,
  width,
  maxWidth
);

type MenuItemProps = ComponentProps<'button'> &
  ComponentProps<'a'> & { active?: boolean };

export const MenuItem = styled('button')<MenuItemProps>(
  ({ active, ...props }) =>
    css({
      alignItems: 'center',
      backgroundColor: active ? 'blues.1' : 'transparent',
      boxSizing: 'border-box',
      color: 'inherit',
      display: 'flex',
      lineHeight: '1em',
      fontSize: 2,
      minHeight: 6,
      border: 0,
      outline: '1px solid transparent',
      paddingY: 1,
      paddingX: 3,
      textAlign: 'left',
      textDecoration: 'none',
      fontWeight: 400,
      width: '100%',
      cursor: 'pointer',
      '-webkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
      appearance: 'none',
      userSelect: 'none',
      '&:hover': {
        backgroundColor: 'grays.1',
      },
      '&:active': {
        backgroundColor: 'grays.2',
      },
      '&:focus': {
        outlineColor: themeGet('colors.blues.2')(props),
      },
    })
);

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
