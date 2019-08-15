import React from 'react';
import githubSlugger from 'github-slugger';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Text, Heading } from '@modulz/radix';

const slugger = githubSlugger();
// Slug function can be used like this:
// slug(string)
const slug = string => {
  slugger.reset();
  return slugger.slug(string);
};

export function PropsTable({ data }) {
  return (
    <Box mt={8} mb={7} overflow={['scroll', 'visible']}>
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        Props
      </Heading>
      <Box minWidth={['540px', '0']}>
        <Table>
          <Thead>
            <Tr>
              <Th>Prop</Th>
              <Th>Type</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(data).map(([key, value]) => {
              return (
                <Tr key={key}>
                  <Td>
                    <Text textColor="grays.5">
                      <Code variant="fade">{key}</Code>
                    </Text>
                  </Td>
                  <Td>
                    <Code>{value.type}</Code>
                  </Td>
                  <Td>
                    <Text textColor="grays.5">{value.description}</Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
