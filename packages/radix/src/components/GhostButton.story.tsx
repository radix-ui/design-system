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
      <GhostButton mr="4">
        <Box as="span" mx={1}>
          <ArrowLeftIcon />
        </Box>
        <Box as="span" mr={1}>
          Back
        </Box>
      </GhostButton>
      <GhostButton mr="4">
        <Box as="span" px={1}>
          Back
        </Box>
      </GhostButton>
    </Box>
  </>
));
