import styled from 'styled-components';
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
  themeGet,
  Theme,
  variant,
} from 'styled-system';

export const makeDividers = (theme: Theme) => ({
  ...theme,
  dividers: {
    horizontal: {
      height: 1,
    },
    vertical: {
      width: 1,
    },
  },
});

type DividerProps = HeightProps &
  MaxHeightProps &
  MaxWidthProps &
  SpaceProps &
  WidthProps & { variant?: 'horizontal' | 'vertical' };

const dividerStyle = variant({ key: 'dividers', prop: 'variant' });

export const Divider = styled.div<DividerProps>`
  background-color: ${themeGet('colors.grays.2')};

  ${height}
  ${maxHeight}
  ${maxWidth}
  ${space}
  ${width}
  ${dividerStyle}
`;

Divider.defaultProps = { variant: 'horizontal' };
