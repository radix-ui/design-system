import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Heading } from './Heading';

storiesOf('Components|Heading', module).add('default', () => (
  <>
    <Box mb={4}>
      <Heading size={0} mb="3">
        Heading 0
      </Heading>
      <Heading size={1} mb="3">
        Heading 1
      </Heading>
      <Heading size={2} mb="3">
        Heading 2
      </Heading>
      <Heading size={3} mb="3">
        Heading 3
      </Heading>
      <Heading size={4} mb="3">
        Heading 4
      </Heading>
      <Heading size={5} mb="3">
        Heading 5
      </Heading>

      <Box width={200}>
        <Heading
          color={[1, 2]}
          size={1}
          mb="3"
          truncate
          title="Close the gap Close the gap Close the gap Close the gap"
        >
          Close the gap Close the gap Close the gap Close the gap
        </Heading>
      </Box>
    </Box>

    <Box mb={4}>
      <Heading as="p" size={[1, 3, 5]} mb="3">
        Responsive
      </Heading>
      <Heading as="p" bold mb="3">
        Bold
      </Heading>
    </Box>
  </>
));
