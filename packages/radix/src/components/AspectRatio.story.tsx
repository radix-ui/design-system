import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { AspectRatio } from './AspectRatio';

storiesOf('Components|AspectRatio', module).add('default', () => (
  <Flex>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" mb={1}>
        <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
          <Heading>1:1 (default)</Heading>
        </Flex>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" ratio="4:3" mb={1}>
        <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
          <Heading>4:3</Heading>
        </Flex>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" ratio="16:9" mb={1}>
        <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
          <Heading>16:9</Heading>
        </Flex>
      </AspectRatio>
    </Box>
  </Flex>
));
