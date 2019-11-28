import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { AspectRatio } from './AspectRatio';

storiesOf('Components|AspectRatio', module).add('default', () => (
  <Flex>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" mb={1}>
        <Label>1:1 (default)</Label>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" ratio="4:3" mb={1}>
        <Label>4:3</Label>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue600" ratio="16:9" mb={1}>
        <Label>16:9</Label>
      </AspectRatio>
    </Box>
  </Flex>
));

const Label: FC = ({ children }) => (
  <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
    <Heading>{children}</Heading>
  </Flex>
);
