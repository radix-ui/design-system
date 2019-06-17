import styled from 'styled-components';
import css from '@styled-system/css';
import {
  // maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  system,
  ResponsiveValue,
} from 'styled-system';
import { variant } from '../utils/variant';

// HACK: Styled System is exposing `size` prop as part of `maxWidth`
// Remove the object below once it's fixed
// https://github.com/styled-system/styled-system/issues/562
const maxWidth = system({
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
});

type Sizes = 0 | 1 | 2;
type DividerProps = MaxWidthProps &
  SpaceProps & { size?: ResponsiveValue<Sizes> };

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
  maxWidth,
  space
);
