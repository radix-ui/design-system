import React from 'react';
import { Box, Table, Tr, Tbody, Td, Code, Heading } from '@modulz/radix';

export function SystemPropsTable({ props }) {
  return (
    <Box mt={8} mb={7}>
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        System props
      </Heading>
      <Box my={4}>
        <Table>
          <Tbody>
            {props.sort().map(prop => (
              <Tr key={prop}>
                <Td>
                  <Code>{prop}</Code>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
