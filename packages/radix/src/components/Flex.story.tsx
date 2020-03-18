import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';

storiesOf('Components|Flex', module).add('default', () => (
  <>
    <Box mb={4}>
      <Flex p="4" sx={{ bg: 'black' }}>
        <Box m="4" sx={{ flex: '1', height: 50, bg: 'blue600' }} />
        <Box m="4" sx={{ flex: '1', height: 50, bg: 'blue600' }} />
        <Box m="4" sx={{ flex: '1', height: 50, bg: 'blue600' }} />
      </Flex>
    </Box>

    <Box mb={4}>
      <Flex p="4" sx={{ bg: 'black', flexWrap: 'wrap' }}>
        <Box m="4" sx={{ flex: '1 1 100%', height: 50, bg: 'blue600' }} />
        <Box m="4" sx={{ flex: '1', height: 50, bg: 'blue600' }} />
        <Box m="4" sx={{ flex: '1', height: 50, bg: 'blue600' }} />
      </Flex>
    </Box>
  </>
));
