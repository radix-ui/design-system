import * as React from 'react';
import { margin, MarginProps } from './margin';
import { styled } from '../../utils/test';

const Component: React.ComponentType<MarginProps> = styled`
  ${margin};
`;

export const test = () => (
  <>
    <Component
      m={1}
      mt={1}
      mr={1}
      mb={1}
      ml={1}
      my={1}
      mx={1}
      margin={1}
      marginTop={1}
      marginRight={1}
      marginBottom={1}
      marginLeft={1}
      marginY={1}
      marginX={1}
    />
    <Component
      m={[1, 2]}
      mt={[1, 2]}
      mr={[1, 2]}
      mb={[1, 2]}
      ml={[1, 2]}
      my={[1, 2]}
      mx={[1, 2]}
      margin={[1, 2]}
      marginTop={[1, 2]}
      marginRight={[1, 2]}
      marginBottom={[1, 2]}
      marginLeft={[1, 2]}
      marginY={[1, 2]}
      marginX={[1, 2]}
    />
  </>
);
