import styled from 'styled-components';
import css from '@styled-system/css';
import {
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

type DividerProps = MaxWidthProps & SpaceProps & WidthProps;

export const Divider = styled.div<DividerProps>(
  () =>
    css({
      backgroundColor: 'grays.2',
      height: '1px',
    }),
  maxWidth,
  space,
  width
);
