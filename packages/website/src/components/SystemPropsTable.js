import React from 'react';
import * as RadixSystem from '@modulz/radix-system';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Text } from '@modulz/radix';

export function SystemPropsTable({ props }) {
  return (
    <Box my={4}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Props</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.sort().map(prop => (
            <Tr key={prop}>
              <Td>
                <Text textColor="grays.5">{prop}</Text>
              </Td>
              <Td style={{ width: '60%' }}>
                {RadixSystem[prop].propNames.map(p => (
                  <Box>
                    <Code key={p} my={1}>
                      {p}
                    </Code>
                  </Box>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
