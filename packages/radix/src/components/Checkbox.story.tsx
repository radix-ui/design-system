import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';
import { Checkbox } from './Checkbox';

function CheckboxStory() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <Checkbox value="row" defaultChecked mr={1} />
      </Box>

      <Box mb="4">
        <Text as="p">Controlled</Text>
        <Box>
          <Checkbox value="accept" checked={checked} onChange={e => setChecked(e.target.checked)} />
        </Box>
        <Button my="3" onClick={() => setChecked(!checked)}>
          {checked ? 'uncheck' : 'check'}
        </Button>
      </Box>

      <Box mb="4">
        <Text as="p">Disabled</Text>
        <Checkbox disabled value="row" mr={1} />
        <Checkbox disabled value="row" defaultChecked mr={1} />
      </Box>
    </>
  );
}

storiesOf('Components|Checkbox', module).add('default', () => <CheckboxStory />);
