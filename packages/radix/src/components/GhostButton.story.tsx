import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { GhostButton } from './GhostButton';
import { Text } from './Text';
import { ArrowLeftIcon } from '@modulz/radix-icons';

storiesOf('Components|GhostButton', module).add('default', () => (
  <>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'white' }}>
      <Text as="p" size={1} mb={2}>
        On white background
      </Text>
      <GhostButton mr={4}>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} disabled>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} isActive>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4}>
        <Box as="span" mx={1}>
          <ArrowLeftIcon />
        </Box>
        <Box as="span" pr={1}>
          Back
        </Box>
      </GhostButton>
    </Box>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'gray200' }}>
      <Text as="p" size={1} mb={2}>
        On gray background
      </Text>
      <GhostButton mr={4}>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} disabled>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} isActive>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4}>
        <Box as="span" mx={1}>
          <ArrowLeftIcon />
        </Box>
        <Box as="span" pr={1}>
          Back
        </Box>
      </GhostButton>
    </Box>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'blue200' }}>
      <Text as="p" size={1} mb={2}>
        On blue background
      </Text>
      <GhostButton mr={4}>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} disabled>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4} isActive>
        <ArrowLeftIcon />
      </GhostButton>
      <GhostButton mr={4}>
        <Box as="span" mx={1}>
          <ArrowLeftIcon />
        </Box>
        <Box as="span" pr={1}>
          Back
        </Box>
      </GhostButton>
    </Box>
  </>
));
