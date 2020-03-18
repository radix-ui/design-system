import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Input } from './Input';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

storiesOf('Components|Input', module).add('default', () => (
  <Box sx={{ maxWidth: '300px' }}>
    <Box mb="4">
      <Input placeholder="Your email" />
    </Box>

    <Box mb="4" sx={{ position: 'relative' }}>
      <Input placeholder="e.g. joe@example.com" type="email" paddingRight={5} />

      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          top: 0,
          right: 1,
          color: 'gray700',
          pointerEvents: 'none',
        }}
      >
        <Flex sx={{ alignItems: 'center', height: '100%' }}>
          <MagnifyingGlassIcon />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input size={1} placeholder="Your email" />
    </Box>

    <Box mb="4" sx={{ position: 'relative' }}>
      <Input size={1} placeholder="LG Monitor" type="text" paddingLeft={6} />

      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 1,
          color: 'gray700',
          pointerEvents: 'none',
        }}
      >
        <Flex sx={{ alignItems: 'center', height: '100%' }}>
          <MagnifyingGlassIcon />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input variant="ghost" placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input variant="ghost" size={1} placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input disabled placeholder="Disabled" />
    </Box>
    <Box mb="4">
      <Input readOnly placeholder="Read only" />
    </Box>

    <Box mb="4">
      <Input cursor="default" placeholder="Your email" />
    </Box>
    <Box mb="4">
      <Input cursor="text" placeholder="Your email" />
    </Box>
  </Box>
));
