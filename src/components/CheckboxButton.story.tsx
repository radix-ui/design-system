import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';
import { CheckboxButton } from './CheckboxButton';

const icon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 0L0 4L5 8"
      transform="translate(2.5 3.5)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M0 0H10" transform="translate(2.5 7.5)" strokeLinecap="round" />
  </svg>
);

function CheckboxButtonStory() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <CheckboxButton value="row" defaultChecked mr={1}>
          {icon}
        </CheckboxButton>
      </Box>

      <Box mb="4">
        <Text as="p">Controlled</Text>
        <Box>
          <CheckboxButton
            value="accept"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          >
            {icon}
          </CheckboxButton>
        </Box>
        <Button my="3" onClick={() => setChecked(!checked)}>
          {checked ? 'uncheck' : 'check'}
        </Button>
      </Box>
    </>
  );
}

storiesOf('Components|CheckboxButton', module).add('default', () => (
  <CheckboxButtonStory />
));
