import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from './Box';
import { Pipe } from './Pipe';
import { Text } from './Text';

storiesOf('Components|Pipe', module).add('default', () => (
  <>
    <Box mt={8}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text weight="medium">Modulz 2.0</Text>
        <Pipe mx={2} />
        <Text>The next step in visual coding.</Text>
      </Flex>

      <Flex my={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text size={6} weight="medium">
          Modulz 2.0
        </Text>
        <Pipe variant="large" mx={2} />
        <Text size={6}>The next step in visual coding.</Text>
      </Flex>

      <Flex my={4} sx={{ justifyContent: 'center', height: '200px' }}>
        <Box sx={{ height: '200px', bg: 'blue600', width: '50px' }} />
        <Pipe variant="fluid" mx={2} />
        <Box sx={{ height: '200px', bg: 'blue600', width: '50px' }} />
      </Flex>
    </Box>
  </>
));
