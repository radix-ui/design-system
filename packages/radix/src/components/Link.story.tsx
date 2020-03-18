import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Link } from './Link';

storiesOf('Components|Link', module).add('default', () => (
  <>
    <Box mb={4}>
      <Link href="https://modulz.app">Modulz</Link>
    </Box>
    <Box mb={4}>
      <Link href="https://modulz.app" sx={{ color: 'red' }}>
        Modulz
      </Link>
    </Box>
    <Box mb={4}>
      <Link href="https://modulz.app" sx={{ fontSize: 7 }}>
        Modulz
      </Link>
    </Box>
  </>
));
