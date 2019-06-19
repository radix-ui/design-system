import styled from 'styled-components';
import { Box } from './Box';
import { flexParent, FlexParentSetProps } from '@modulz/radix-system';

export const Flex = styled(Box)<FlexParentSetProps>({ display: 'flex' }, flexParent);
