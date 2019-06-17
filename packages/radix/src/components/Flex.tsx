import styled from 'styled-components';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
  justifyItems,
  JustifyItemsProps,
  order,
  OrderProps,
  compose,
} from 'styled-system';
import { Box } from './Box';

type FlexProps = FlexBasisProps &
  FlexDirectionProps &
  FlexWrapProps &
  AlignContentProps &
  AlignItemsProps &
  JustifyContentProps &
  JustifyItemsProps &
  OrderProps;

const styleProps = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  order
);

export const Flex = styled(Box)<FlexProps>({ display: 'flex' }, styleProps);
