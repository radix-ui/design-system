import styled from 'styled-components';
import css from '@styled-system/css';
import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  justifySelf,
  JustifySelfProps,
  // maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  ResponsiveValue,
  system,
  compose,
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
type ContainerProps = AlignSelfProps &
  FlexProps &
  JustifySelfProps &
  MaxWidthProps &
  SpaceProps & { size?: ResponsiveValue<Sizes> };

const styleProps = compose(
  alignSelf,
  flex,
  justifySelf,
  maxWidth,
  space
);

export const Container = styled('div')<ContainerProps>(
  css({
    marginX: 'auto',
    paddingX: 5,
    flex: 1,
    maxWidth: '25rem',
  }),
  variant({
    size: {
      0: {
        maxWidth: '25rem',
      },
      1: {
        maxWidth: '45rem',
      },
      2: {
        maxWidth: '65rem',
      },
    },
  }),
  styleProps
);
