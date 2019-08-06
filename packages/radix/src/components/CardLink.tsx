import React from 'react';
import css from '@styled-system/css';
import { CardLink as CardLinkPrimitive, CardLinkProps as CardLinkPrimitiveProps } from 'mdlz-prmtz';
import { Prop } from '@modulz/radix-system';
import { baseCard, Variants } from './Card';

type CardLinkProps = CardLinkPrimitiveProps & {
  to?: string;
  variant?: Prop<Variants>;
  children?: React.ReactNode;
};

export const CardLink = (props: CardLinkProps) => (
  <CardLinkPrimitive
    {...props}
    css={[
      baseCard,
      ({ variant }: CardLinkProps) =>
        css({
          display: 'block',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 0,
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          ...(variant === 'shadow' || variant === 'ghost'
            ? {
                willChange: 'transform',
              }
            : {}),
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
    ]}
  />
);

CardLink.defaultProps = {
  variant: 'border',
};
