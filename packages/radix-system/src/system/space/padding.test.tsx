import * as React from 'react';
import { padding, PaddingProps } from './padding';
import { styled } from '../../utils/test';

const Component: React.ComponentType<PaddingProps> = styled`
  ${padding};
`;

export const test = () => (
  <>
    <Component
      p={1}
      pt={1}
      pr={1}
      pb={1}
      pl={1}
      py={1}
      px={1}
      padding={1}
      paddingTop={1}
      paddingRight={1}
      paddingBottom={1}
      paddingLeft={1}
      paddingY={1}
      paddingX={1}
    />
    <Component
      p={[1, 2]}
      pt={[1, 2]}
      pr={[1, 2]}
      pb={[1, 2]}
      pl={[1, 2]}
      py={[1, 2]}
      px={[1, 2]}
      padding={[1, 2]}
      paddingTop={[1, 2]}
      paddingRight={[1, 2]}
      paddingBottom={[1, 2]}
      paddingLeft={[1, 2]}
      paddingY={[1, 2]}
      paddingX={[1, 2]}
    />
  </>
);
