import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  themeGet,
  variant,
} from 'styled-system';
import { transparentize } from 'polished';
import { theme } from '../theme';

// @ts-ignore
// Add buttonsSizes to Theme
theme.cards = {
  border: {
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.grays.3')}`,
  },
  shadow: {
    position: 'relative',
    transition: 'opacity 80ms linear, transform 150ms ease',
    '&::before, &::after': {
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      pointerEvents: 'none',
      transitionProperty: 'all',
      transitionDuration: '80ms',
      transitionTimingFunction: 'linear',
    },
    '&::before': {
      boxShadow: `0 10px 38px -10px ${transparentize(
        0.65,
        themeGet('colors.grays.8')
      )},
        0 10px 20px -15px ${transparentize(0.8, themeGet('colors.grays.8'))}`,
    },
    '&::after': {
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')}`,
      opacity: 0,
    },
  },
  ghost: {
    position: 'relative',
    transition: 'opacity 80ms linear, transform 150ms ease',
    '&::before, &::after': {
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      pointerEvents: 'none',
      transitionProperty: 'all',
      transitionDuration: '80ms',
      transitionTimingFunction: 'linear',
    },
    '&::before': {
      boxShadow: `0 10px 38px -10px ${transparentize(
        0.65,
        themeGet('colors.grays.8')
      )},
        0 10px 20px -15px ${transparentize(0.8, themeGet('colors.grays.8'))}`,
      opacity: 0,
    },
    '&::after': {
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')}`,
      opacity: 0,
    },
  },
};

type Variants = 'border' | 'shadow' | 'ghost';
const cardStyle = variant({ key: 'cards', prop: 'variant' });

type CardProps = ColorProps &
  SpaceProps &
  WidthProps &
  MaxWidthProps & { variant?: Variants };

const cardCSS = css`
  position: relative;
  padding: ${themeGet('space.4')};
  border-radius: ${themeGet('radii.2')};

  ${color}
  ${space}
  ${width}
  ${maxWidth}
  ${cardStyle}
`;

export const Card = styled.div<CardProps>`
  ${cardCSS}
`;

Card.defaultProps = { variant: 'border' };

export const CardLink = styled.a<CardProps>`
  ${cardCSS}

  display: block;
  text-decoration: none;
  outline: 0;

  ${props =>
    props.variant === 'border' &&
    css`
      &:hover {
        box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
      }

      &:focus {
        box-shadow: inset 0 0 0 1px ${themeGet('colors.blues.4')};
      }
    `}

  ${props =>
    props.variant === 'shadow' &&
    css`
      &:hover {
        transform: translateY(-2px);
      }

      &:focus {
        &::after {
          opacity: 1;
        }
      }

      &:active {
        background-color: ${themeGet('colors.grays.0')};
        transform: translateY(0);
      }
    `}

  ${props =>
    props.variant === 'ghost' &&
    css`
      &:hover,
      &:focus {
        transform: translateY(-2px);

        &::before {
          opacity: 1;
        }
      }

      &:focus {
        &::after {
          opacity: 1;
        }
      }
    `};
`;

CardLink.defaultProps = { variant: 'border' };
