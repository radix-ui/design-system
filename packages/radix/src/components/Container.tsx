import styled from 'styled-components';
import css from '@styled-system/css';
import { ResponsiveValue, compose } from 'styled-system';
import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  justifySelf,
  JustifySelfProps,
  maxWidth,
  MaxWidthProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  variant,
} from '@modulz/radix-system';

type Sizes = 0 | 1 | 2;
type ContainerProps = AlignSelfProps &
  FlexProps &
  JustifySelfProps &
  MaxWidthProps &
  MarginProps &
  PaddingProps & { size?: ResponsiveValue<Sizes> };

const styleProps = compose(
  alignSelf,
  flex,
  justifySelf,
  maxWidth,
  margin,
  padding
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
