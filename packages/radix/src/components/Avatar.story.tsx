import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Avatar } from './Avatar';

storiesOf('Components|Avatar', module).add('default', () => (
  <Flex>
    <Box m={2}>
      <Avatar>AV</Avatar>
    </Box>
    <Box m={2}>
      <Avatar alt="Modulz" src="https://avatars0.githubusercontent.com/u/28682402" />
    </Box>
  </Flex>
));
