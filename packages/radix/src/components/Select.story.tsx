import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './Text';
import { Box } from './Box';
import { Button } from './Button';
import { Select } from './Select';

function SelectStory() {
  const [value, setValue] = useState('option2');

  return (
    <Box>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <Select mt="4" width="100px">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box mb="4">
        <Text as="p">Controlled</Text>
        <Select
          my={4}
          width="100px"
          value={value}
          onChange={event => setValue(event.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Button mr="2" onClick={() => setValue('option1')}>
          Select option 1
        </Button>
        <Button mr="2" onClick={() => setValue('option2')}>
          Select option 2
        </Button>
        <Button onClick={() => setValue('option3')}>Select option 3</Button>
      </Box>

      <Box mb="4">
        <Text as="p">Highlight</Text>
        <Select mt="4" width="100px" variant="highlight">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box mb="4">
        <Text as="p">Disabled</Text>
        <Select mt="4" width="100px" disabled>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Box>
  );
}

storiesOf('Components|Select', module).add('default', () => <SelectStory />);
