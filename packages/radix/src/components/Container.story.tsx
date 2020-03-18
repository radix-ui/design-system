import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Container } from './Container';

storiesOf('Components|Container', module).add('default', () => (
  <>
    <Box marginBottom={4}>
      <Container>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Default
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={0}>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Size 0
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={1}>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Size 1
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={2}>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Size 2
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={3}>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Size 3
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size={4}>
        <Box p={3} sx={{ backgroundColor: 'blue600' }}>
          <Text as="p" sx={{ textAlign: 'center' }}>
            Size 4
          </Text>
        </Box>
      </Container>
    </Box>
  </>
));
