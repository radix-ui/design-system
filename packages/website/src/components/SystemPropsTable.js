import React from 'react';
import * as StyledSystem from 'styled-system';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code } from 'radix-poc';

export function SystemPropsTable({ props }) {
  return (
    <Box mb={4}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Props</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.map(prop => (
            <Tr>
              <Td>{prop}</Td>
              <Td>
                <Box>
                  {Object.keys(StyledSystem[prop].propTypes).map(p => (
                    <Code mr={1}>{p}</Code>
                  ))}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
