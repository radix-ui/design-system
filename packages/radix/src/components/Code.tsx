import styled from 'styled-components';
import css from '@styled-system/css';
import { space, SpaceProps } from 'styled-system';
import { themeGet } from 'styled-system';

export const Code = styled('code')<SpaceProps>(
  props =>
    css({
      display: 'inline-block',
      backgroundColor: 'blues.1',
      color: 'blues.5',
      borderRadius: 1,
      fontFamily: 'mono',
      fontSize: '0.75em',
      letterSpacing: 0,
      lineHeight: 'inherit',
      paddingY: `calc(${themeGet('space.1')(props)} / 2)`,
      paddingX: 1,
      whiteSpace: 'nowrap',
    }),
  space
);
