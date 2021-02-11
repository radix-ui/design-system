import React from 'react';
import { Box } from '../components/Box';
import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Toolbar } from '../custom/Toolbar';

function Home() {
  return (
    <Box css={{ height: '100%' }}>
      <Toolbar />
      <Box css={{ bc: '$canvas', height: '100%', px: 250, pt: '36px' }}>
        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Home;
