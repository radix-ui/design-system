import styled from 'styled-components';
import { transparentize } from 'polished';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { spaceSet, SpaceSetProps, sx, SxProp, Prop, variant } from '@modulz/radix-system';
import { theme } from '../theme';

type ListSystemProps = SpaceSetProps & SxProp;
export type ListProps = ListSystemProps & { variant?: Prop<Variants> };

type Variants = 'normal' | 'shadow';

const systemProps = (props: any) => [spaceSet(props), sx(props)];
export const boxSystemProps = systemProps;

export const List = styled('nav')<ListProps>(
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
            themeGet('colors.gray900')(props)
          )}, 0 10px 20px -15px ${transparentize(0.8, themeGet('colors.gray900')(props))}`,
        },
      },
    }),
  systemProps
);

export type ListItemProps = ListSystemProps & {
  variant?: 'normal' | 'active' | 'selected';
};

export const ListItem = styled('button')<ListItemProps>(
  css({
    alignItems: 'center',
    appearance: 'none',
    border: 0,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: theme.fonts.normal,
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
      color: 'gray500',
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
          color: 'gray800',
          '&:hover': {
            backgroundColor: 'gray200',
          },
          '&:active': {
            backgroundColor: 'gray300',
          },
          '&:focus': {
            outlineColor: themeGet('colors.gray400')(props),
          },
        },
        active: {
          backgroundColor: 'blue600',
          color: 'white',
          '&:hover': {
            backgroundColor: 'blue600',
          },
          '&:active': {
            backgroundColor: 'blue600',
          },
          '&:focus': {
            outlineColor: themeGet('colors.blue500')(props),
          },
        },
        selected: {
          backgroundColor: 'blue200',
          color: 'gray800',
          '&:hover': {
            backgroundColor: 'blue200',
          },
          '&:active': {
            backgroundColor: 'blue200',
          },
          '&:focus': {
            outlineColor: themeGet('colors.blue400')(props),
          },
        },
      },
    }),
  {
    lineHeight: '1',
  },
  systemProps
);

ListItem.defaultProps = { variant: 'normal' };

type ListGroupProps = ListSystemProps;

export const ListGroup = styled('div')<ListGroupProps>(
  css({
    paddingY: 1,
    paddingX: 0,
    marginY: 1,
    marginX: 0,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'gray300',
  }),
  systemProps
);
