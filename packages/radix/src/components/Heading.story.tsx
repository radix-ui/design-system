import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Heading } from './Heading';

storiesOf('Components|Heading', module).add('default', () => (
  <>
    <Box mb={6}>
      <Heading as="p" size={0}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={1}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={2}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={3}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={4}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={5}>
        The visual code editor
      </Heading>
    </Box>
  </>
));
