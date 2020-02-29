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
      <Avatar
        alt="Modulz"
        src="https://pbs.twimg.com/profile_images/1048700009372442625/OmNS4hKD_400x400.jpg"
      />
    </Box>
  </Flex>
));
