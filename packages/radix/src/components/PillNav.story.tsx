import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { PillNav, Pill } from './PillNav';

storiesOf('Components|PillNav', module).add('default', () => (
  <>
    <Box width="500px" mb="4">
      <PillNav>
        <Pill>Settings</Pill>
        <Pill>Assets</Pill>
        <Pill>Components</Pill>
        <Pill>Screen</Pill>
      </PillNav>
    </Box>

    <Box width="500px" mb="4">
      <PillNav>
        <Pill>Settings</Pill>
        <Pill active>Assets</Pill>
        <Pill>Components</Pill>
        <Pill>Screen</Pill>
      </PillNav>
    </Box>

    <Box width="500px" mb="4">
      <PillNav>
        <Pill disabled>Settings</Pill>
        <Pill>Assets</Pill>
        <Pill>Components</Pill>
        <Pill>Screen</Pill>
      </PillNav>
    </Box>

    <Box mb="4">
      <PillNav pillWidth={130}>
        <Pill disabled>Settings</Pill>
        <Pill>Assets</Pill>
        <Pill>Components</Pill>
        <Pill>Screen</Pill>
      </PillNav>
      <PillNav pillWidth={['auto', 130]}>
        <Pill disabled>Settings</Pill>
        <Pill>Assets</Pill>
        <Pill>Components</Pill>
        <Pill>Screen</Pill>
      </PillNav>
    </Box>
  </>
));
