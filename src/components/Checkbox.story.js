import React from 'react';
import Component from 'react-component-component';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Button } from './Button';
import { Text } from './Text';
import { Checkbox } from './Checkbox';

storiesOf('Components|Checkbox', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p">Uncontrolled</Text>
      <Checkbox value="row" defaultChecked>
        Row
      </Checkbox>
    </Box>

    <Box mb="4">
      <Text as="p">Uncontrolled and without children</Text>
      <Checkbox value="true" defaultChecked />
    </Box>

    <Box mb="4">
      <Text as="p">Controlled</Text>
      <Component initialState={{ checked: false }}>
        {({ state, setState }) => (
          <>
            <Box>
              <Checkbox
                value="accept"
                checked={state.checked}
                onChange={e => setState({ checked: e.target.checked })}
              >
                Accept
              </Checkbox>
            </Box>
            <Button
              my="3"
              onClick={() => setState({ checked: !state.checked })}
            >
              {state.checked ? 'uncheck' : 'check'}
            </Button>
          </>
        )}
      </Component>
    </Box>
  </>
));
