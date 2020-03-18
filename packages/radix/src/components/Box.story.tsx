import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';

storiesOf('Components|Box', module).add('default', () => (
  <>
    <Box mb={4}>
      <Box sx={{ width: 120, height: 120, bg: 'blue600' }} />
    </Box>
    <Box mb={4}>
      <Box p="4" sx={{ bg: 'black' }}>
        <Box mb="4" sx={{ height: 50, bg: 'blue600' }} />
        <Box mb="4" sx={{ height: 50, bg: 'blue600' }} />
        <Box sx={{ height: 50, bg: 'blue600' }} />
      </Box>
    </Box>

    <Box
      p={1}
      m={4}
      sx={{ border: theme => `4px solid ${theme.colors.red700}`, bg: 'red500', height: 50 }}
    />

    <Box my={4} sx={{ position: 'relative', width: '100%', height: '200px', bg: 'black' }}>
      <Box
        p={5}
        sx={{ bg: 'blue600', position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
      />
      <Box p={5} sx={{ bg: 'blue800', position: 'absolute', top: '15px', left: '15px' }} />
      Hello
    </Box>

    <Box my={4} p={4} sx={{ bg: 'black', color: 'blue600' }}>
      Radix.
    </Box>

    <Box sx={{ flexShrink: 0, flexGrow: 1, flexBasis: '100%' }}>Testing flex</Box>
  </>
));
