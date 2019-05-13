import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  justifySelf,
  JustifySelfProps,
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  variant,
} from 'styled-system';
import { get } from '../utils/get';

const containerStyle = variant({ key: 'containerSizes', prop: 'size' });

type Sizes = 0 | 1 | 2 | null;

type ContainerProps = AlignSelfProps &
  FlexProps &
  JustifySelfProps &
  MaxWidthProps &
  SpaceProps & { size?: Sizes | Sizes[] };

export const Container = styled('div')<ContainerProps>(
  ({ size }) =>
    css({
      marginX: 'auto',
      paddingX: 5,
      flex: 1,
      maxWidth: get(['25rem', '45rem', '65rem'], size),
    }),
  alignSelf,
  flex,
  justifySelf,
  maxWidth,
  space,
  containerStyle
);
