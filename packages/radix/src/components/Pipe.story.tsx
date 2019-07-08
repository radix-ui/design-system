import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from './Box';
import { Pipe } from './Pipe';
import { Text } from './Text';

storiesOf('Components|Pipe', module).add('default', () => (
  <>
    <Box mt={8}>
      <Flex alignItems="center" justifyContent="center">
        <Text fontWeight={500}>Modulz 2.0</Text>
        <Pipe mx={2} />
        <Text>The next step in visual coding.</Text>
      </Flex>

      <Flex my={4} alignItems="center" justifyContent="center">
        <Text size={6} fontWeight={500}>
          Modulz 2.0
        </Text>
        <Pipe variant="large" mx={2} />
        <Text size={6}>The next step in visual coding.</Text>
      </Flex>

      <Flex my={4} justifyContent="center" height="200px">
        <Box height="200px" bg="blue" width="50px" />
        <Pipe variant="fluid" mx={2} />
        <Box height="200px" bg="blue" width="50px" />
      </Flex>
    </Box>
  </>
));
