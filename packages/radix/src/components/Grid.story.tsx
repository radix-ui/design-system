import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';

storiesOf('Components|Grid', module).add('default', () => (
  <>
    <Box mb={4} sx={{ maxWidth: 450 }}>
      <Grid mb={2} sx={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
      </Grid>
      <Grid mb={2} sx={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: 4 }}>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
      </Grid>
      <Grid sx={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
        <div>
          <Box p={1} sx={{ bg: 'blue600' }} />
        </div>
      </Grid>
    </Box>
  </>
));
