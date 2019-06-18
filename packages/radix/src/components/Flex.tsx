import styled from 'styled-components';
import { Box } from './Box';
import { flexParent, FlexParentSetProps } from '../system';

export const Flex = styled(Box)<FlexParentSetProps>(
  { display: 'flex' },
  flexParent
);
