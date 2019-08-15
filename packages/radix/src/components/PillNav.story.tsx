import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { PillNav, PillButton } from './PillNav';

storiesOf('Components|PillNav', module).add('default', () => (
  <>
    <Box width="500px" mb="4">
      <PillNav>
        <PillButton>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillNav>
    </Box>

    <Box width="500px" mb="4">
      <PillNav>
        <PillButton>Settings</PillButton>
        <PillButton active>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillNav>
    </Box>

    <Box width="500px" mb="4">
      <PillNav>
        <PillButton disabled>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillNav>
    </Box>

    <Box mb="4">
      <PillNav pillWidth={130}>
        <PillButton disabled>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillNav>
      <PillNav pillWidth={['auto', 130]}>
        <PillButton disabled>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillNav>
    </Box>
  </>
));
