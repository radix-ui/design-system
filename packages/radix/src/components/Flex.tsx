import styled from 'styled-components';
import { Box } from './Box';
import { flexContainerSet, FlexContainerSetProps } from '@modulz/radix-system';

export const Flex = styled(Box)<FlexContainerSetProps>({ display: 'flex' }, flexContainerSet);
