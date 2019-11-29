import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import { Tooltip } from './Tooltip';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@modulz/radix-icons';

function ToggleButtonGroupStory() {
  const [value, setValue] = useState('center');

  return (
    <>
      <Box width="500px" my={6}>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <ToggleButton value="left">
            <TextAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <TextAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <TextAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="500px" my={6}>
        <Text as="p">With Tooltip</Text>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <Tooltip label="Left" align="center">
            <ToggleButton value="left">Left</ToggleButton>
          </Tooltip>
          <Tooltip label="Center" align="center">
            <ToggleButton value="center">Center</ToggleButton>
          </Tooltip>
          <Tooltip label="Right" align="center">
            <ToggleButton value="right">Right</ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

storiesOf('Components|ToggleButton', module).add('default', () => <ToggleButtonGroupStory />);
