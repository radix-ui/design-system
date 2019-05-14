import styled from '@emotion/styled';
import css from '@styled-system/css';
import { space, SpaceProps, themeGet, variant, Theme } from 'styled-system';
import { get } from '../utils/get';

type Variants = 'active';
type Sizes = 'medium';

type GhostButtonProps = SpaceProps & {
  variant?: Variants;
  size?: Sizes;
};

export const GhostButton = styled.button<GhostButtonProps>(
  ({ variant, size, ...props }) =>
    css({
      appearance: 'none',
      backgroundColor: get({ active: 'grays.2' }, variant, 'transparent'),
      border: 'none',
      borderRadius: 9999,
      boxShadow: get(
        { active: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}` },
        variant
      ),
      color: 'grays.5',
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      fontFamily: 'medium',
      fontSize: get({ medium: 3 }, size, 1),
      fontWeight: 500,
      height: get({ medium: 6 }, size, 5),
      justifyContent: 'center',
      lineHeight: get({ medium: 2 }, size, 1),
      minWidth: get({ medium: 6 }, size, 5),
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
      '&:hover': {
        backgroundColor: get({ active: 'grays.2' }, variant, 'grays.1'),
      },
      '&:focus': {
        boxShadow: get(
          { active: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}` },
          variant,
          `inset 0 0 0 1px ${themeGet('colors.blues.4')(props)}`
        ),
      },
      '&:active': {
        backgroundColor: 'grays.2',
        boxShadow: get(
          { active: `inset 0 1px 0 0 ${themeGet('colors.grays.4')(props)}` },
          variant,
          'none'
        ),
      },
      '&:disabled': {
        color: 'grays.4',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    }),
  space
);
