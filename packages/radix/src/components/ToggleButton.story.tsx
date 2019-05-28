import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import {
  AlignStretchIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignBaselineIcon,
  AlignEndIcon,
} from '@modulz/radix-icons';

function ToggleButtonGroupStory() {
  const [value, setValue] = useState(null);
  return (
    <>
      <Box width="500px" mb="4">
        <ToggleButtonGroup name="direction" my={3}>
          <ToggleButton defaultChecked>Row</ToggleButton>
          <ToggleButton>Column</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box width="500px">
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

      <Box my="4" width={500}>
        <Text as="p">Controlled</Text>
        <>
          <ToggleButtonGroup
            name="flexWrap"
            value={value}
            onChange={event => setValue(event.target.value)}
          >
            <ToggleButton value="wrap">Wrap</ToggleButton>
            <ToggleButton value="nowrap">Nowrap</ToggleButton>
          </ToggleButtonGroup>
          <Button my="3" onClick={() => setValue('nowrap')}>
            select nowrap
          </Button>
        </>
      </Box>

      <Box my="4" width={500}>
        <Text as="p">Highlight</Text>
        <>
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
        </>
      </Box>
    </>
  );
}

storiesOf('Components|ToggleButton', module).add('default', () => (
  <ToggleButtonGroupStory />
));
