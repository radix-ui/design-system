import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';

storiesOf('Components|Box', module).add('default', () => (
  <>
    <Box mb={4} bg="red">
      <Box width={120} height={120} bg="black" />
    </Box>
    <Box mb={4}>
      <Box p="4" bg="black">
        <Box height={50} bg="blue" mb="4" />
        <Box height={50} bg="blue" mb="4" />
        <Box height={50} bg="blue" />
        <Box borderRadius={2} paddingRight={1} marginRight={1} />
      </Box>
    </Box>
  </>
));
