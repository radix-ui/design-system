import * as React from 'react';
import { styled } from './test';
import { sx, SxProp } from './sx';

const Component: React.ComponentType<SxProp> = styled`
  ${sx};
`;

export const test = () => (
  <>
    <Component sx={{ bg: 'red' }} />
    <Component sx={{ bg: ['red', 'blue'] }} />
  </>
);
