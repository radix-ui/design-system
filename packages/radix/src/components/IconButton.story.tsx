import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { IconButton } from './IconButton';
import { Text } from './Text';
import { EyeOpenIcon } from '@modulz/radix-icons';

storiesOf('Components|IconButton', module).add('default', () => (
  <>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'white' }}>
      <Text as="p" size={1} mb={2}>
        On white background
      </Text>
      <IconButton mr={4}>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} isActive>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} disabled>
        <EyeOpenIcon />
      </IconButton>
    </Box>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'gray200' }}>
      <Text as="p" size={1} mb={2}>
        On gray background
      </Text>
      <IconButton mr={4}>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} isActive>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} disabled>
        <EyeOpenIcon />
      </IconButton>
    </Box>
    <Box sx={{ margin: 2, padding: 4, backgroundColor: 'blue200' }}>
      <Text as="p" size={1} mb={2}>
        On blue background
      </Text>
      <IconButton mr={4}>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} isActive>
        <EyeOpenIcon />
      </IconButton>
      <IconButton mr={4} disabled>
        <EyeOpenIcon />
      </IconButton>
    </Box>
  </>
));
