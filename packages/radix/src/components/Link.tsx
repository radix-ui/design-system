import styled from '@emotion/styled';
import css from '@styled-system/css';
import { color, ColorProps, fontSize, FontSizeProps } from 'styled-system';

type LinkProps = ColorProps & FontSizeProps;

// TODO: Fix color typings
// @ts-ignore
export const Link = styled('a')<LinkProps>(
  css({
    color: 'blue',
    textDecoration: 'none',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  color,
  fontSize
);
