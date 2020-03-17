import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Container } from './Container';

storiesOf('Components|Container', module).add('default', () => (
  <>
    <Box marginBottom={4}>
      <Container>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Default
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={0}>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Size 0
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={1}>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Size 1
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={2}>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Size 2
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={3}>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Size 3
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={4}>
        <Box backgroundColor="blue600" p={3}>
          <Text as="p" textAlign="center">
            Size 4
          </Text>
        </Box>
      </Container>
    </Box>
  </>
));
