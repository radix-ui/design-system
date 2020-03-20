import React from 'react';
import {
  Heading as RadixHeading,
  Text,
  Code,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@modulz/radix';

export function APISection() {
  return (
    <>
      <Heading>Props</Heading>
      <Text size={3} sx={{ color: 'gray700' }}>
        All components include the following props.
      </Text>

      <Table mb={4}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Code>sx</Code>
            </Td>
            <Td>Object</Td>
            <Td>Theme-aware styles</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>variant</Code>
            </Td>
            <Td>String</Td>
            <Td>Applies a variant, if available</Td>
          </Tr>
        </Tbody>
      </Table>

      <Heading>Style Props</Heading>
      <Text size={3} sx={{ color: 'gray700' }}>
        All components include the following style props.
      </Text>

      <Table mb={4}>
        <Thead>
          <Tr>
            <Th>Name</Th>

            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Code>margin</Code>,<Code>m</Code>
            </Td>
            <Td>Margin</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginTop</Code>,<Code>mt</Code>
            </Td>
            <Td>Margin top</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginRight</Code>,<Code>mr</Code>
            </Td>
            <Td>Margin right</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginBottom</Code>,<Code>mb</Code>
            </Td>
            <Td>Margin bottom</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginLeft</Code>,<Code>ml</Code>
            </Td>
            <Td>Margin left</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginX</Code>,<Code>mx</Code>
            </Td>
            <Td>Margin horizontal</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>marginY</Code>,<Code>my</Code>
            </Td>
            <Td>Margin vertical</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>padding</Code>,<Code>p</Code>
            </Td>
            <Td>Padding</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingTop</Code>,<Code>pt</Code>
            </Td>
            <Td>Padding top</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingRight</Code>,<Code>pr</Code>
            </Td>
            <Td>Padding right</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingBottom</Code>,<Code>pb</Code>
            </Td>
            <Td>Padding bottom</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingLeft</Code>,<Code>pl</Code>
            </Td>
            <Td>Padding left</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingX</Code>,<Code>px</Code>
            </Td>
            <Td>Padding horizontal</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>paddingY</Code>,<Code>py</Code>
            </Td>
            <Td>Padding vertical</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}

const Heading = props => <RadixHeading as="h2" weight="medium" size={2} mt={8} mb={4} {...props} />;
