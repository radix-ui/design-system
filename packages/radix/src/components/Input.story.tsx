import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Text } from './Text';
import { Input } from './Input';
import { Slider } from './Slider';
import { EnvelopeIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import {
  AlignStretchIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignBaselineIcon,
  AlignEndIcon,
} from '@modulz/radix-icons';
import { Select } from './Select';

storiesOf('Components|Input', module).add('default', () => (
  <Box maxWidth="300px">
    <Box mb="4">
      <Input placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input placeholder="e.g. joe@example.com" type="email" paddingRight={5} />

      <Box
        position="absolute"
        height="100%"
        top={0}
        right={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          <MagnifyingGlassIcon size="15" />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input size="medium" placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input
        size="medium"
        placeholder="e.g. joe@example.com"
        type="email"
        paddingLeft={6}
      />

      <Box
        position="absolute"
        height="100%"
        top={0}
        left={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          <EnvelopeIcon size="25" />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input variant="ghost" placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input variant="ghost" size="medium" placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input disabled placeholder="Disabled" />
    </Box>
    <Box mb="4">
      <Input readOnly placeholder="Read only" />
    </Box>
  </Box>
));

storiesOf('Components|Input', module).add('states', () => (
  <Box>
    <Box my={5}>
      <Box my={4}>
        <Label>Default</Label>
        <Input value="Auto" width={60} />
      </Box>
      <Box my={4}>
        <Label>Disabled</Label>
        <Input value="Auto" width={60} disabled />
      </Box>
      <Box my={4}>
        <Label>Highlight</Label>
        <Input value="50%" width={60} variant="highlight" />
      </Box>
    </Box>

    <Box my={5}>
      <Flex my={4} alignItems="center">
        <Label>Default</Label>
        <Box width={350}>
          <Select width="100px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex my={4} alignItems="center">
        <Label>Highlight</Label>
        <Box width={350}>
          <Select width="100px" variant="highlight">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
    </Box>

    <Box my={5}>
      <Flex my={4} alignItems="center">
        <Label>Default</Label>
        <Box width={350}>
          <ToggleButtonGroup name="align">
            <ToggleButton defaultChecked>
              <AlignStretchIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignStartIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignCenterIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignBaselineIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignEndIcon size="25" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Flex>
      <Flex my={4} alignItems="center">
        <Label>Highlight</Label>
        <Box width={350}>
          <ToggleButtonGroup name="align2" variant="highlight">
            <ToggleButton defaultChecked>
              <AlignStretchIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignStartIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignCenterIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignBaselineIcon size="25" />
            </ToggleButton>
            <ToggleButton>
              <AlignEndIcon size="25" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Flex>
    </Box>

    <Box my={5}>
      <Flex my={4} alignItems="center">
        <Label>Default</Label>
        <Box width={350}>
          <Slider />
        </Box>
      </Flex>
      <Flex my={4} alignItems="center">
        <Label>Highlight</Label>
        <Box width={350}>
          <Slider variant="highlight" />
        </Box>
      </Flex>
    </Box>
  </Box>
));

const Label = (props: any) => (
  <Text
    mr={3}
    textAlign="right"
    color="grays.5"
    size={2}
    style={{ width: 60, display: 'inline-block' }}
    {...props}
  />
);
