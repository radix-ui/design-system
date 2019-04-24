import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';
import { RadioGroup, Radio } from './RadioGroup';

function RadioGroupStory() {
  const [value, setValue] = useState('wrap');
  return (
    <>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <RadioGroup name="flexDirection">
          <Radio value="row" defaultChecked>
            Row
          </Radio>
          <Radio value="column">Column</Radio>
        </RadioGroup>
      </Box>

      <Box mb="4">
        <Text as="p">Uncontrolled and without children</Text>
        <RadioGroup name="flexGrow">
          <Radio value="true" defaultChecked />
          <Radio value="false" />
        </RadioGroup>
      </Box>

      <Box mb="4">
        <Text as="p">Controlled</Text>
        <>
          <RadioGroup
            name="flexWrap"
            value={value}
            onChange={event => setValue(event.target.value)}
          >
            <Radio value="wrap">Wrap</Radio>
            <Radio value="nowrap">Nowrap</Radio>
          </RadioGroup>
          <Button my="3" onClick={() => setValue('nowrap')}>
            select nowrap
          </Button>
        </>
      </Box>
    </>
  );
}

storiesOf('Components|RadioGroup', module).add('default', () => (
  <RadioGroupStory />
));
