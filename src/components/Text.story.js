import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';

storiesOf('Components|Text', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p" fontSize={0}>
        Radix
      </Text>
      <Text as="p" fontSize={1}>
        Radix
      </Text>
      <Text as="p" fontSize={2}>
        Radix
      </Text>
      <Text as="p" fontSize={3}>
        Radix
      </Text>
      <Text as="p" fontSize={4}>
        Radix
      </Text>
      <Text as="p" fontSize={5}>
        Radix
      </Text>
      <Text as="p" fontSize={6}>
        Radix
      </Text>
      <Text as="p" fontSize={7}>
        Radix
      </Text>
      <Text as="p" fontSize={8}>
        Radix
      </Text>
      <Text as="p" fontSize={9}>
        Radix
      </Text>
      <Text as="p" fontSize={10}>
        Radix
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" fontStyle="italic">
        Closing the gap between designers and developers.
      </Text>
      <Text as="p" fontWeight="bold">
        Closing the gap between designers and developers.
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p">The visual code editor</Text>
      <Text as="p" color="blue">
        The visual code editor
      </Text>
      <Text as="p" color="red">
        The visual code editor
      </Text>
      <Text as="p" color="green">
        The visual code editor
      </Text>
      <Text as="p" color="gray">
        The visual code editor
      </Text>
    </Box>

    <Box mb="4">
      <Text as="p" textAlign="center" padding="4">
        Almost all design tools are optimised for illustration. Vector-based
        tools are great for wireframing and exploration, but when it comes to
        designing interactive components, complex layouts and stateful user
        interfaces—we need something more powerful.
      </Text>
    </Box>
  </>
));
