import React from 'react';
import Component from 'react-component-component';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Dialog } from './Dialog';
import { Button } from './Button';

storiesOf('Components|Dialog', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p" mb="2">
        Basic Dialog
      </Text>
      <Component initialState={{ open: false }}>
        {({ state, setState }) => (
          <>
            {state.open && (
              <Dialog onDismiss={() => setState({ open: false })} bg="gray">
                <Box maxWidth="600px" padding="4">
                  <Text>Hello from Dialog</Text>
                  <Button ml="3" onClick={() => setState({ open: false })}>
                    Close
                  </Button>
                </Box>
              </Dialog>
            )}
            <Button onClick={() => setState({ open: true })}>Open</Button>
          </>
        )}
      </Component>
    </Box>
    <Box mb="4">
      <Text as="p" mb="2">
        Dialog with long content
      </Text>
      <Component initialState={{ open: false }}>
        {({ state, setState }) => (
          <>
            {state.open && (
              <Dialog onDismiss={() => setState({ open: false })}>
                <Box maxWidth="600px" padding="4">
                  <Text>Hello from Dialog</Text>
                  <Button ml="3" onClick={() => setState({ open: false })}>
                    Close
                  </Button>
                  <Box height="100px" bg="grays.1" mt="3" />
                  <Box height="100px" bg="grays.2" />
                  <Box height="100px" bg="grays.3" />
                  <Box height="100px" bg="grays.4" />
                  <Box height="100px" bg="grays.5" />
                  <Box height="100px" bg="grays.6" mb="3" />
                </Box>
              </Dialog>
            )}
            <Button onClick={() => setState({ open: true })}>Open</Button>
          </>
        )}
      </Component>
    </Box>
  </>
));
