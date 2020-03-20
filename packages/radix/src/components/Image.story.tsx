import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Image } from './Image';

storiesOf('Components|Image', module).add('default', () => (
  <>
    <Box mb="4">
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        sx={{ borderRadius: 3, width: 400 }}
      />
    </Box>
  </>
));
