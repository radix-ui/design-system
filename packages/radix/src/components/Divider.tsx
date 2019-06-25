import styled from 'styled-components';
import css from '@styled-system/css';
import {
  maxWidth,
  MaxWidthProps,
  margin,
  MarginProps,
  variant,
  compose,
  Prop,
} from '@modulz/radix-system';

type Sizes = 0 | 1 | 2;
type DividerProps = MaxWidthProps & MarginProps & { size?: Prop<Sizes> };

const styleProps = compose(
  maxWidth,
  margin
);

export const Divider = styled.div<DividerProps>(
  css({
    backgroundColor: 'grays.2',
    height: '1px',
    width: '100%',
  }),
  variant({
    size: {
      0: {
        maxWidth: 3,
      },
      1: {
        maxWidth: 6,
      },
      2: {
        maxWidth: 9,
      },
    },
  }),
  styleProps
);
