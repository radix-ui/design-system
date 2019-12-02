import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Badge } from './Badge';

storiesOf('Components|Badge', module).add('default', () => (
  <>
    <Box mb="4">
      <Badge mr="4">Badge</Badge>
    </Box>

    <Box mb="4">
      <Badge variant="blue" mr="4">
        Blue
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="green" mr="4">
        Green
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="red" mr="4">
        Red
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="yellow" mr="4">
        Yellow
      </Badge>
    </Box>
  </>
));
