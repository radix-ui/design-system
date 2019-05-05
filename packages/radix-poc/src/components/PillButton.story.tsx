import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { PillButtonGroup, PillButton } from './PillButton';

storiesOf('Components|PillButton', module).add('default', () => (
  <>
    <Box width="500px" mb="4">
      <PillButtonGroup>
        <PillButton>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillButtonGroup>
    </Box>

    <Box width="500px" mb="4">
      <PillButtonGroup>
        <PillButton>Settings</PillButton>
        <PillButton>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton active>Screen</PillButton>
      </PillButtonGroup>
    </Box>

    <Box width="500px" mb="4">
      <PillButtonGroup>
        <PillButton>Settings</PillButton>
        <PillButton disabled>Assets</PillButton>
        <PillButton>Components</PillButton>
        <PillButton>Screen</PillButton>
      </PillButtonGroup>
    </Box>
  </>
));
