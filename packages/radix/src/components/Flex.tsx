import styled from 'styled-components';
import { Box } from './Box';
import { flexParentSet, FlexParentSetProps } from '@modulz/radix-system';

export const Flex = styled(Box)<FlexParentSetProps>({ display: 'flex' }, flexParentSet);
