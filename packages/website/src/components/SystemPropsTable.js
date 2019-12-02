import React from 'react';
import * as RadixSystem from '@modulz/radix-system';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Text, Heading } from '@modulz/radix';

export function SystemPropsTable({ props }) {
  return (
    <Box mt={8} mb={7}>
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        System props
      </Heading>
      <Box my={4}>
        <Table>
          {/* <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Props</Th>
          </Tr>
        </Thead> */}
          <Tbody>
            {props.sort().map(prop => (
              <Tr key={prop}>
                <Td>
                  <Text textColor="gray700">
                    <Code>{prop}</Code>
                  </Text>
                </Td>
                {/* <Td style={{ width: '60%' }}>
                {RadixSystem[prop].propNames.map(p => (
                  <Box>
                    <Code key={p} my={1}>
                      {p}
                    </Code>
                  </Box>
                ))}
              </Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
