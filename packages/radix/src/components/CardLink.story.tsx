import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { Text } from './Text';
import { CardLink } from './CardLink';

storiesOf('Components|CardLink', module).add('default', () => (
  <Flex>
    <CardLink href="https://modulz.app" m={4} sx={{ maxWidth: '300px' }}>
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
    </CardLink>

    <CardLink variant="shadow" href="https://modulz.app" m={4} sx={{ maxWidth: '300px' }}>
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
    </CardLink>

    <CardLink variant="ghost" href="https://modulz.app" m={4} sx={{ maxWidth: '300px' }}>
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
    </CardLink>
  </Flex>
));
