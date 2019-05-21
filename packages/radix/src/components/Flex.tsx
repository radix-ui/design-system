import styled from 'styled-components';
import {
  flexBasis,
  FlexBasisProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  justifyItems,
  JustifyItemsProps,
  order,
  OrderProps,
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

export const Flex = styled(Box)<FlexProps>(
  { display: 'flex' },
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  order
);
