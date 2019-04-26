import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';

storiesOf('Components|Grid', module).add('default', () => (
  <>
    <Box mb={4} maxWidth={450}>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap={4} mb={2}>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
      </Grid>
      <Grid gridTemplateColumns="repeat(5, 1fr)" gridGap={4} mb={2}>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
      </Grid>
      <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap={4}>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
        <div>
          <Box bg="blue" p={1} />
        </div>
      </Grid>
    </Box>
  </>
));
