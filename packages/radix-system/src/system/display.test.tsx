import * as React from 'react';
import { display, DisplayProps } from './display';
import { styled } from '../utils/test';

const Component: React.ComponentType<DisplayProps> = styled`
  ${display};
`;

export const test = () => (
  <>
    <Component display="block" />
    <Component display={['block', 'flex']} />
  </>
);
