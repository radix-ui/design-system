import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';
import { Dialog } from './Dialog';
import { Button } from './Button';

function DialogStory() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <Box mb="4">
        <Text as="p" mb="2">
          Basic Dialog
        </Text>

        <Dialog onClose={() => setOpen1(false)} isOpen={open1}>
          <Box padding="4" sx={{ maxWidth: '600px' }}>
            <Text>Hello from Dialog</Text>
            <Button ml="3" onClick={() => setOpen1(false)}>
              Close
            </Button>
          </Box>
        </Dialog>

        <Button onClick={() => setOpen1(true)}>Open</Button>
      </Box>
      <Box mb="4">
        <Text as="p" mb="2">
          Dialog with long content
        </Text>

        <Dialog onClose={() => setOpen2(false)} isOpen={open2}>
          <Box padding="4" sx={{ maxWidth: '600px' }}>
            <Text>Hello from Dialog</Text>
            <Button ml="3" onClick={() => setOpen2(false)}>
              Close
            </Button>
            <Box mt="3" sx={{ height: '100px', bg: 'gray200' }} />
            <Box sx={{ height: '100px', bg: 'gray300' }} />
            <Box sx={{ height: '100px', bg: 'gray400' }} />
            <Box sx={{ height: '100px', bg: 'gray500' }} />
            <Box sx={{ height: '100px', bg: 'gray700' }} />
            <Box mb="3" sx={{ height: '100px', bg: 'gray800' }} />
          </Box>
        </Dialog>

        <Button onClick={() => setOpen2(true)}>Open</Button>
      </Box>
    </>
  );
}

storiesOf('Components|Dialog', module).add('default', () => <DialogStory />);
