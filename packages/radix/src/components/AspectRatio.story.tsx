import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { AspectRatio } from './AspectRatio';

const Label: FC = ({ children }) => (
  <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
    <Heading fontSize={4}>{children}</Heading>
  </Flex>
);

storiesOf('Components|AspectRatio', module).add('default', () => (
  <Flex>
    <Box m={4} width={300}>
      <AspectRatio bg="blue">
        <Label>1:1 (default)</Label>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue" ratio="4:3">
        <Label>4:3</Label>
      </AspectRatio>
    </Box>
    <Box m={4} width={300}>
      <AspectRatio bg="blue" ratio="16:9">
        <Label>16:9</Label>
      </AspectRatio>
    </Box>
  </Flex>
));
