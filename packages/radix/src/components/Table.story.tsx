import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Table, Thead, Tbody, Tr, Th, Td } from './Table';

storiesOf('Components|Table', module).add('default', () => (
  <Box sx={{ maxWidth: '300px' }}>
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>size</Td>
          <Td>boolean</Td>
          <Td>3</Td>
          <Td>font size</Td>
        </Tr>
        <Tr>
          <Td>size</Td>
          <Td>boolean</Td>
          <Td>3</Td>
          <Td>font size</Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
));
