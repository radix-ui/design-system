import styled from 'styled-components';
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
import { get } from '../utils/get';

type Variants = 'shadow';
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
        variant === 'shadow'
          ? `0 10px 38px -10px ${transparentize(
              0.65,
              themeGet('colors.grays.8')(props)
            )}, 0 10px 20px -15px ${transparentize(
              0.8,
              themeGet('colors.grays.8')(props)
            )}`
          : 'none',
    }),
  space,
  width,
  maxWidth
);

type MenuItemProps = {
  variant?: 'active' | 'selected';
};

export const MenuItem = styled('button')<MenuItemProps>(
  ({ variant, ...props }: MenuItemProps) =>
    css({
      alignItems: 'center',
      appearance: 'none',
      backgroundColor: get(
        { active: 'blues.4', selected: 'blues.1' },
        variant,
        'white'
      ),
      border: 0,
      boxSizing: 'border-box',
      color: get({ active: 'white' }, variant, 'grays.7'),
      cursor: 'pointer',
      display: 'flex',
      minHeight: 6,
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
      '&:active': {
        backgroundColor: get(
          { active: 'blues.4', selected: 'blues.1' },
          variant,
          'grays.2'
        ),
      },
      '&:focus': {
        outlineColor: variant !== 'active' && themeGet('colors.blues.2')(props),
      },
      [`&:hover`]: {
        backgroundColor: get(
          { active: 'blues.4', selected: 'blues.1' },
          variant,
          'grays.1'
        ),
      },
      [`&:hover:disabled`]: {
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
  {
    lineHeight: '1',
  }
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
