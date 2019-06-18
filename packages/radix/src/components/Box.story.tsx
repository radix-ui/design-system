import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';

storiesOf('Components|Box', module).add('default', () => (
  <>
    <Box mb={4}>
      <Box width={120} height={120} bg="blue" />
    </Box>
    <Box mb={4}>
      <Box p="4" bg="black">
        <Box height={50} bg="blue" mb="4" />
        <Box height={50} bg="blue" mb="4" />
        <Box height={50} bg="blue" />
      </Box>
    </Box>

    <Box
      border="4px solid"
      borderColor="reds.6"
      bg="reds.4"
      height={50}
      padding={1}
      margin={4}
    />

    <Box my={4} position="relative" width="100%" height="200px" bg="black">
      <Box
        bg="blue"
        padding={5}
        position="absolute"
        top="10px"
        left="10px"
        zIndex={1}
      />
      <Box
        bg="blues.6"
        padding={5}
        position="absolute"
        top="15px"
        left="15px"
      />
      Hello
    </Box>

    <Box my={4} p={4} bg="black" textColor="blue">
      Radix.
    </Box>

    <Box flexShrink={0} flexGrow={1} flexBasis="100%">
      Testing flex
    </Box>
  </>
));
