import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Heading } from './Heading';
import { Text } from './Text';
import { Code } from './Code';

storiesOf('Components|Code', module).add('default', () => (
  <>
    <Box mb={4}>
      <Code>console.log('Radix')</Code>
    </Box>
    <Box mb={4}>
      <Heading size={2}>
        Component API patterns with <Code>css({})</Code>
      </Heading>
    </Box>
    <Box mb={4}>
      <Text as="p">
        You can change the background color of an element by using the <Code>backgroundColor</Code>{' '}
        prop.
      </Text>
    </Box>

    <Box mb={4}>
      <Text as="p" size={1}>
        You can also use <Code>code</Code> in tiny font sizes.
      </Text>
    </Box>
  </>
));
