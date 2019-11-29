import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { GhostButton } from './GhostButton';
import { ArrowLeftIcon } from '@modulz/radix-icons';

storiesOf('Components|GhostButton', module).add('default', () => (
  <>
    <Box mb="4">
      <GhostButton mr="4">
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr="4" disabled>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr="4" isActive>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr="4" px={2}>
        <Box mr={1}>
          <ArrowLeftIcon />
        </Box>{' '}
        Back
      </GhostButton>
      <GhostButton mr="4" px={2}>
        Back
      </GhostButton>
    </Box>
  </>
));
