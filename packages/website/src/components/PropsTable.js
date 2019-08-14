import React from 'react';
import githubSlugger from 'github-slugger';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Link } from '@modulz/radix';

const slugger = githubSlugger();
const slug = string => {
  slugger.reset();
  return slugger.slug(string);
};

export function PropsTable({ data }) {
  return (
    <Box mt={4} mb={7}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(data).map(([value, key]) => (
            <Tr key={value}>
              <Td>
                <Code>
                  <Link href={`#${slug(value)}`}>{value}</Link>
                </Code>
              </Td>
              <Td>
                <Box>{key}</Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
