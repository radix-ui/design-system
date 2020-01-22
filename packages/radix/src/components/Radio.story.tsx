import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';
import { Radio } from './Radio';

function RadioStory() {
  const [value, setValue] = useState('wrap');
  return (
    <>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <Radio name="direction" value="row" defaultChecked mr={1} />
        <Radio name="direction" value="column" />
      </Box>

      <Box mb="4">
        <Text as="p">Controlled</Text>
        <>
          Wrap{' '}
          <Radio
            name="wrap"
            value="wrap"
            mr={3}
            checked={value === 'wrap'}
            onChange={event => setValue(event.target.value)}
          />
          Nowrap{' '}
          <Radio
            name="wrap"
            value="nowrap"
            checked={value === 'nowrap'}
            onChange={event => setValue(event.target.value)}
          />
          <Button my="3" onClick={() => setValue('nowrap')}>
            select nowrap
          </Button>
        </>

        <Box mb="4">
          <Text as="p">Disabled</Text>
          <Radio disabled name="direction" value="row" defaultChecked mr={1} />
          <Radio disabled name="direction" value="column" />
        </Box>
      </Box>
    </>
  );
}

storiesOf('Components|Radio', module).add('default', () => <RadioStory />);
