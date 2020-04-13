import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Subheading } from './Subheading';

storiesOf('Components|Subheading', module).add('default', () => (
  <>
    <Box mb={6}>
      <Subheading as="p" size={0}>
        The visual code editor
      </Subheading>
    </Box>

    <Box mb={6}>
      <Subheading as="p" size={1}>
        The visual code editor
      </Subheading>
    </Box>
  </>
));
