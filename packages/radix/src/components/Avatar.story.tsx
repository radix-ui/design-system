import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Avatar } from './Avatar';

storiesOf('Components|Avatar', module).add('default', () => (
  <>
    <Box>
      <Flex>
        <Box m={2}>
          <Avatar>A</Avatar>
        </Box>
        <Box m={2}>
          <Avatar variant="black">A</Avatar>
        </Box>
        <Box m={2}>
          <Avatar alt="Modulz" src="https://avatars0.githubusercontent.com/u/28682402" />
        </Box>
      </Flex>
      <Flex>
        <Box m={2}>
          <Avatar size={1}>A</Avatar>
        </Box>
        <Box m={2}>
          <Avatar size={1} variant="black">
            A
          </Avatar>
        </Box>
        <Box m={2}>
          <Avatar size={1} alt="Modulz" src="https://avatars0.githubusercontent.com/u/28682402" />
        </Box>
      </Flex>
    </Box>
  </>
));
