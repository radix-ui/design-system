import styled from 'styled-components';
import css from '@styled-system/css';
import { ResponsiveValue, compose } from 'styled-system';
import {
  maxWidth,
  MaxWidthProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from '../system';
import { variant } from '../utils/variant';

type Sizes = 0 | 1 | 2;
type DividerProps = MaxWidthProps &
  MarginProps &
  PaddingProps & { size?: ResponsiveValue<Sizes> };

const styleProps = compose(
  maxWidth,
  margin,
  padding
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
