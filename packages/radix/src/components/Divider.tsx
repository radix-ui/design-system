import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';

type DividerProps = HeightProps &
  MaxHeightProps &
  MaxWidthProps &
  SpaceProps &
  WidthProps & { variant?: 'horizontal' | 'vertical' };

export const Divider = styled.div<DividerProps>(
  ({ variant }) =>
    css({
      backgroundColor: 'grays.2',
      height: variant === 'horizontal' && '1px',
      width: variant === 'vertical' && '1px',
    }),
  height,
  maxHeight,
  maxWidth,
  space,
  width
);

Divider.defaultProps = { variant: 'horizontal' };
