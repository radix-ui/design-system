import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { Text } from './Text';
import { Card } from './Card';

storiesOf('Components|Card', module).add('default', () => (
  <Flex>
    <Card m={4} sx={{ maxWidth: '300px' }}>
      <Heading size={1} mb="3">
        Card
      </Heading>
      <Text as="p" mb="3" size={3}>
        China’s leadership is seeking to maintain a recent thaw with the United States while lashing
        out at the arrest of a top Chinese tech executive.
      </Text>
      <Text size={2} color="gray700">
        Today
      </Text>
    </Card>

    <Card variant="shadow" m={4} sx={{ maxWidth: '300px' }}>
      <Heading size={1} mb="3">
        Card
      </Heading>
      <Text as="p" mb="3" size={3}>
        China’s leadership is seeking to maintain a recent thaw with the United States while lashing
        out at the arrest of a top Chinese tech executive.
      </Text>
      <Text size={2} color="gray700">
        Today
      </Text>
    </Card>

    <Card variant="ghost" m={4} sx={{ maxWidth: '300px' }}>
      <Heading size={1} mb="3">
        Card
      </Heading>
      <Text as="p" mb="3" size={3}>
        China’s leadership is seeking to maintain a recent thaw with the United States while lashing
        out at the arrest of a top Chinese tech executive.
      </Text>
      <Text size={2} color="gray700">
        Today
      </Text>
    </Card>
  </Flex>
));
