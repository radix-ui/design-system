import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { ChromelessButton } from './ChromelessButton';

storiesOf('Components|ChromelessButton', module).add('default', () => (
  <>
    <Box mb="4">
      <ChromelessButton mr="4">ChromelessButton</ChromelessButton>
    </Box>
  </>
));
