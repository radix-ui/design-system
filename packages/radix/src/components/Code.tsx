import styled from 'styled-components';
import css from '@styled-system/css';
import { margin, MarginProps } from '@modulz/radix-system';
import { themeGet } from '@styled-system/theme-get';

export const Code = styled('code')<MarginProps>(
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
  margin
);
