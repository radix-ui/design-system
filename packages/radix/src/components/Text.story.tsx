import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';

storiesOf('Components|Text', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p">Default text</Text>
    </Box>

    <Box mb="4">
      <Text as="p" size={0}>
        Radix
      </Text>
      <Text as="p" size={1}>
        Radix
      </Text>
      <Text as="p" size={2}>
        Radix
      </Text>
      <Text as="p" size={3}>
        Radix
      </Text>
      <Text as="p" size={4}>
        Radix
      </Text>
      <Text as="p" size={5}>
        Radix
      </Text>
      <Text as="p" size={6}>
        Radix
      </Text>
      <Text as="p" size={7}>
        Radix
      </Text>
      <Text as="p" size={8}>
        Radix
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" fontStyle="italic">
        Closing the gap between designers and developers.
      </Text>
      <Text as="p" fontWeight={500}>
        Closing the gap between designers and developers.
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p">The Design System spot</Text>
      <Text as="p" color="blue">
        The Design System spot
      </Text>
      <Text as="p" color="red">
        The Design System spot
      </Text>
      <Text as="p" color="green">
        The Design System spot
      </Text>
      <Text as="p" color="gray">
        The Design System spot
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" textAlign="center" padding="4">
        Almost all design tools are optimised for illustration. Vector-based tools are great for
        wireframing and exploration, but when it comes to designing interactive components, complex
        layouts and stateful user interfaces—we need something more powerful.
      </Text>
    </Box>
    <Box mb="4" width={200}>
      <Text as="p" textAlign="center" padding="4" truncate>
        When it comes to designing interactive components, complex layouts and stateful user
        interfaces—we need something more powerful.
      </Text>
    </Box>

    <Box mb="4">
      <Text size={5}>
        Nested text should be able to <Text>inherit font size</Text>
      </Text>
    </Box>
  </>
));
