import styled from 'styled-components';
import css from '@styled-system/css';
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
} from 'styled-system';
import { transparentize } from 'polished';

type SystemProps = ColorProps & SpaceProps & WidthProps & MaxWidthProps;
type CardProps = SystemProps & { variant?: 'shadow' | 'ghost' };

const systemProps = [color, space, width, maxWidth];

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

const baseCard = ({ variant, ...props }: CardProps) =>
  css({
    position: 'relative',
    padding: 4,
    borderRadius: 2,
    border: '1px solid transparent',
    borderColor: 'grays.3',
    ...(variant === 'ghost'
      ? createShadow(0, themeGet('colors.grays.8')(props))
      : {}),
    ...(variant === 'shadow'
      ? createShadow(1, themeGet('colors.grays.8')(props))
      : {}),
  });

// TODO: Fix color typings
// @ts-ignore
export const Card = styled('div')<CardProps>(baseCard, ...systemProps);

type CardLinkProps = CardProps & { to?: string };

// TODO: Fix color typings
// @ts-ignore
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
  ...systemProps
);
