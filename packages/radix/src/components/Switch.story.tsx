import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';
import { Switch } from './Switch';

function SwitchStory() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <Switch value="row" defaultChecked mr={1} />
      </Box>

      <Box mb="4">
        <Text as="p">Uncontrolled and without children</Text>
        <Switch value="true" defaultChecked />
      </Box>

      <Box mb="4">
        <Text as="p">Controlled</Text>
        <Box>
          <Switch value="accept" checked={checked} onChange={e => setChecked(e.target.checked)} />
        </Box>
        <Button mt="3" onClick={() => setChecked(!checked)}>
          {checked ? 'uncheck' : 'check'}
        </Button>
      </Box>

      <Box>
        <Text as="p">States</Text>
        <Switch value="true" disabled mr={4} />
        <Switch value="true" checked disabled />
      </Box>
    </>
  );
}

storiesOf('Components|Switch', module).add('default', () => <SwitchStory />);
