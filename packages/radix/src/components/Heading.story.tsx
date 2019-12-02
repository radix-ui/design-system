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
      <Heading as="p" size={0} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={1}>
        The visual code editor
      </Heading>
      <Heading as="p" size={1} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={2}>
        The visual code editor
      </Heading>
      <Heading as="p" size={2} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={3}>
        The visual code editor
      </Heading>
      <Heading as="p" size={3} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={4}>
        The visual code editor
      </Heading>
      <Heading as="p" size={4} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box mb={6}>
      <Heading as="p" size={5}>
        The visual code editor
      </Heading>
      <Heading as="p" size={5} fontWeight={500}>
        The visual code editor
      </Heading>
    </Box>

    <Box my={8}>
      <Heading size={[1, 3, 5]} fontWeight={[400, 500]} mb="3" truncate={[false, false, true]}>
        Responsive example. Font size changes. Should be weight 400 on breakpoint 2. Should truncate
        on breakpoint 3
      </Heading>
      <Heading fontWeight={500} mb="3" as="h2">
        Bold
      </Heading>
    </Box>
  </>
));
