import React from 'react';
// import githubSlugger from 'github-slugger';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Text, Heading } from '@modulz/radix';

// Leaving it here to chill for a while in case we need it
// const slugger = githubSlugger();
// Slug function can be used like this:
// slug(string)
// const slug = string => {
//   slugger.reset();
//   return slugger.slug(string);
// };

export function PropsTable({ data }) {
  const hasProps = Object.keys(data).length > 0;

  return (
    <Box
      mt={8}
      mb={7}
      overflow={['scroll', 'visible']}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        Props
      </Heading>
      {hasProps ? (
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
                      <Text textColor="gray700">
                        <Code variant="fade">{key}</Code>
                      </Text>
                    </Td>
                    <Td>
                      <Code>{value.type}</Code>
                    </Td>
                    <Td>
                      <Text textColor="gray700">{value.description}</Text>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Text as="p">No props</Text>
      )}
    </Box>
  );
}
