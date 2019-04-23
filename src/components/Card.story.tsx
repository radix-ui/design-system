import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { Text } from './Text';
import { Card, CardLink } from './Card';

storiesOf('Components|Card', module).add('default', () => (
  <>
    <Flex>
      <Card variant="border" m={4} maxWidth="300px">
        <Heading fontSize="5" mb="3">
          Card
        </Heading>
        <Text as="p" mb="3" fontSize="3">
          China’s leadership is seeking to maintain a recent thaw with the
          United States while lashing out at the arrest of a top Chinese tech
          executive.
        </Text>
        <Text fontSize="2" color="grays.5">
          Today
        </Text>
      </Card>
      <Card variant="shadow" m={4} maxWidth="300px">
        <Heading fontSize="5" mb="3">
          Card
        </Heading>
        <Text as="p" mb="3" fontSize="3">
          China’s leadership is seeking to maintain a recent thaw with the
          United States while lashing out at the arrest of a top Chinese tech
          executive.
        </Text>
        <Text fontSize="2" color="grays.5">
          Today
        </Text>
      </Card>
    </Flex>
    <Flex>
      <CardLink href="https://modulz.app" m={4} maxWidth="300px">
        <Heading fontSize="5" mb="3">
          Card
        </Heading>
        <Text as="p" mb="3" fontSize="3">
          China’s leadership is seeking to maintain a recent thaw with the
          United States while lashing out at the arrest of a top Chinese tech
          executive.
        </Text>
        <Text fontSize="2" color="grays.5">
          Today
        </Text>
      </CardLink>

      <CardLink
        variant="shadow"
        href="https://modulz.app"
        m={4}
        maxWidth="300px"
      >
        <Heading fontSize="5" mb="3">
          Card
        </Heading>
        <Text as="p" mb="3" fontSize="3">
          China’s leadership is seeking to maintain a recent thaw with the
          United States while lashing out at the arrest of a top Chinese tech
          executive.
        </Text>
        <Text fontSize="2" color="grays.5">
          Today
        </Text>
      </CardLink>

      <CardLink
        variant="ghost"
        href="https://modulz.app"
        m={4}
        maxWidth="300px"
      >
        <Heading fontSize="5" mb="3">
          Card
        </Heading>
        <Text as="p" mb="3" fontSize="3">
          China’s leadership is seeking to maintain a recent thaw with the
          United States while lashing out at the arrest of a top Chinese tech
          executive.
        </Text>
        <Text fontSize="2" color="grays.5">
          Today
        </Text>
      </CardLink>
    </Flex>
  </>
));
