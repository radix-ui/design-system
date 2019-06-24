import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import css from '@styled-system/css';
import { get } from '../utils/get';

type Variants = 'blue' | 'green' | 'red' | 'yellow';
type Sizes = 'medium';

type BadgeProps = SpaceProps & {
  variant?: Variants;
  size?: Sizes;
};

export const Badge = styled('span')<BadgeProps>(
  ({ size, variant = undefined }) =>
    css({
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: get(
        {
          blue: 'blues.3',
          green: 'greens.3',
          red: 'reds.3',
          yellow: 'yellows.3',
        },
        variant,
        'grays.3'
      ),
      borderRadius: 9999,
      color: get(
        {
          blue: 'blues.5',
          green: 'greens.5',
          red: 'reds.5',
          yellow: 'yellows.5',
        },
        variant,
        'grays.5'
      ),
      display: 'inline-flex',
      fontFamily: 'medium',
      fontSize: size === 'medium' ? 1 : 0,
      fontWeight: 500,
      height: size === 'medium' ? 5 : 3,
      letterSpacing: '.134em',
      lineHeight: '1em',
      minWidth: size === 'medium' ? 6 : 5,
      outline: 'none',
      paddingX: size === 'medium' ? 3 : 2,
      paddingY: 0,
      textIndent: '.134em',
      textTransform: 'uppercase',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
    }),
  space
);
