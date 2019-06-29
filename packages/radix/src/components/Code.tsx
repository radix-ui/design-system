import styled from 'styled-components';
import css from '@styled-system/css';
import { margin, MarginProps } from '@modulz/radix-system';

export const Code = styled('code')<MarginProps>(
  css({
    display: 'inline-block',
    backgroundColor: 'blues.1',
    color: 'blues.5',
    borderRadius: 1,
    fontFamily: 'mono',
    fontSize: 2,
    letterSpacing: '-0.0175em',
    paddingY: '0.15em',
    paddingX: 1,
    whiteSpace: 'nowrap',
  }),
  { lineHeight: 1 },
  margin
);
