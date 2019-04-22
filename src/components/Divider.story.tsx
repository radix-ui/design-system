import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from './Box';
import { Divider } from './Divider';
import { Text } from './Text';
import { Heading } from './Heading';

storiesOf('Components|Divider', module).add('default', () => (
  <>
    <Box my={8} mx={4} textAlign="center">
      <Heading mb={5}>Heading</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint
        numquam neque qui voluptas inventore culpa corporis expedita velit
        doloribus delectus impedit, ullam consequuntur. Iusto perspiciatis sit
        voluptate optio eius.
      </Text>
      <Divider my={6} maxWidth={300} mx="auto" />
    </Box>
    <Box mt={8}>
      <Flex justifyContent="center">
        <Text fontWeight="bold">Modulz 2.0</Text>
        <Divider variant="vertical" mx={2} />
        <Text>The next step in visual coding.</Text>
      </Flex>
    </Box>
  </>
));
