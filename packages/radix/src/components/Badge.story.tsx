import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Badge } from './Badge';

storiesOf('Components|Badge', module).add('default', () => (
  <>
    <Box mb="4">
      <Badge mr="4">Badge</Badge>
      <Badge size="large">Badge</Badge>
    </Box>

    <Box mb="4">
      <Badge variant="blue" mr="4">
        Blue
      </Badge>
      <Badge variant="blue" size="large" mr="4">
        Blue
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="green" mr="4">
        Green
      </Badge>
      <Badge variant="green" size="large">
        Green
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="red" mr="4">
        Red
      </Badge>
      <Badge variant="red" size="large">
        Red
      </Badge>
    </Box>

    <Box mb="4">
      <Badge variant="yellow" mr="4">
        Yellow
      </Badge>
      <Badge variant="yellow" size="large">
        Yellow
      </Badge>
    </Box>
  </>
));
