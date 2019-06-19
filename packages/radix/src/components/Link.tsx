import styled from 'styled-components';
import css from '@styled-system/css';
import { textColor, TextColorProps, fontSize, FontSizeProps, compose } from '@modulz/radix-system';

type LinkProps = TextColorProps & FontSizeProps & { to?: string };

const styleProps = compose(
  textColor,
  fontSize
);

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
  styleProps
);
