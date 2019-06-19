import styled from 'styled-components';
import { transparentize } from 'polished';
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
  variant,
  compose,
  ResponsiveValue,
} from '@modulz/radix-system';

type Variants = 'border' | 'shadow' | 'ghost';
type SystemProps = TextColorProps & MarginProps & PaddingProps & WidthProps & MaxWidthProps;
type CardProps = SystemProps & { variant?: ResponsiveValue<Variants> };

const styleProps = compose(
  textColor,
  margin,
  padding,
  width,
  maxWidth
);

const createShadow = (defaultOpacity: any, color: any) => ({
  position: 'relative',
  transition: 'opacity 80ms linear, transform 150ms ease',
  borderColor: 'transparent',
  '&::before': {
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
    boxShadow: `0 10px 38px -10px ${transparentize(0.65, color)},
      0 10px 20px -15px ${transparentize(0.8, color)}`,
    opacity: defaultOpacity,
  },
});

const baseCard = (props: CardProps) =>
  variant({
    variant: {
      border: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        border: '1px solid transparent',
        borderColor: 'grays.3',
      },
      ghost: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        border: '1px solid transparent',
        ...createShadow(0, themeGet('colors.grays.8')(props)),
      },
      shadow: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        border: '1px solid transparent',
        ...createShadow(1, themeGet('colors.grays.8')(props)),
      },
    },
  })(props);

export const Card = styled('div')<CardProps>(baseCard, styleProps);

Card.defaultProps = {
  variant: 'border',
};

type CardLinkProps = CardProps & { to?: string };

export const CardLink = styled('a')<CardLinkProps>(
  baseCard,
  ({ variant }: CardProps) =>
    css({
      display: 'block',
      textDecoration: 'none',
      cursor: 'pointer',
      outline: 0,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      '&:hover': {
        borderColor: 'grays.4',
        ...(variant === 'ghost'
          ? {
              '&::before': { opacity: 1 },
            }
          : {}),
        ...(variant === 'shadow' || variant === 'ghost'
          ? {
              transform: 'translateY(-2px)',
              borderColor: 'transparent',
            }
          : {}),
      },
      '&:focus': {
        borderColor: 'blues.4',
      },
    }),
  styleProps
);

CardLink.defaultProps = {
  variant: 'border',
};
