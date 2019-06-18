import styled from 'styled-components';
import css from '@styled-system/css';
import { compose } from 'styled-system';
import { textColor, TextColorProps, fontSize, FontSizeProps } from '../system';

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
