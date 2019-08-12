import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import { Tooltip } from './Tooltip';
import {
  AlignStretchIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignBaselineIcon,
  AlignEndIcon,
} from '@modulz/radix-icons';

function ToggleButtonGroupStory() {
  const [value, setValue] = useState('center');

  return (
    <>
      <Box width="500px" my={6}>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <ToggleButton value="stretch">
            <AlignStretchIcon size="25" />
          </ToggleButton>
          <ToggleButton value="start">
            <AlignStartIcon size="25" />
          </ToggleButton>
          <ToggleButton value="center">
            <AlignCenterIcon size="25" />
          </ToggleButton>
          <ToggleButton value="baseline">
            <AlignBaselineIcon size="25" />
          </ToggleButton>
          <ToggleButton value="end">
            <AlignEndIcon size="25" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width={500} my={6}>
        <Text as="p">Fade variant</Text>
        <>
          <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
            <ToggleButton value="stretch">
              <AlignStretchIcon size="25" />
            </ToggleButton>
            <ToggleButton value="start" variant="fade">
              <AlignStartIcon size="25" />
            </ToggleButton>
            <ToggleButton value="center" variant="fade">
              <AlignCenterIcon size="25" />
            </ToggleButton>
            <ToggleButton value="baseline" variant="fade">
              <AlignBaselineIcon size="25" />
            </ToggleButton>
            <ToggleButton value="end" variant="fade">
              <AlignEndIcon size="25" />
            </ToggleButton>
          </ToggleButtonGroup>
        </>
      </Box>

      <Box width="500px" my={6}>
        <Text as="p">With Tooltip</Text>
        <ToggleButtonGroup value={value} onChange={value => setValue(value)}>
          <Tooltip label="stretch" align="center">
            <ToggleButton value="stretch">Stretch</ToggleButton>
          </Tooltip>
          <Tooltip label="start" align="center">
            <ToggleButton value="start">Start</ToggleButton>
          </Tooltip>
          <Tooltip label="center" align="center">
            <ToggleButton value="center">Center</ToggleButton>
          </Tooltip>
          <Tooltip label="baseline" align="center">
            <ToggleButton value="baseline">Baseline</ToggleButton>
          </Tooltip>
          <Tooltip label="end" align="center">
            <ToggleButton value="end">End</ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

storiesOf('Components|ToggleButton', module).add('default', () => <ToggleButtonGroupStory />);
