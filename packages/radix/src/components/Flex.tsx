import styled from 'styled-components';
import { compose } from 'styled-system';
import { Box } from './Box';
import { flexParent, FlexParentSetProps } from '../system';

const styleProps = compose(flexParent);

export const Flex = styled(Box)<FlexParentSetProps>(
  { display: 'flex' },
  styleProps
);
