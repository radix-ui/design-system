import React from 'react';
import { Box } from '../components/Box';
import { Avatar } from '../components/Avatar';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { IconButton } from '../components/IconButton';
import { Dialog } from '../components/Dialog';
import { AlertDialog } from '../components/AlertDialog';
import { Popover } from '../components/Popover';
import { Tooltip } from '../components/Tooltip';
import { ProgressBar } from '../components/ProgressBar';
import { Tabs } from '../components/Tabs';
import { Accordion } from '../components/Accordion';
import { Label } from '../components/Label';
import { Switch } from '../components/Switch';
import { SimpleToggle } from '../components/SimpleToggle';
import { Slider } from '../components/Slider';
import { Cross2Icon } from '@modulz/radix-icons';

export default function Closed() {
  return (
    <Box
      css={{
        height: '100vh',
        py: '130px',
        px: '260px',
        overflowY: 'auto',
      }}
    >
      <Text size="5" css={{ mt: '$7', mb: '$4' }}>
        Avatar
      </Text>

      <Flex css={{ gap: '$4', mb: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            key={`one${size}`}
            size={size as any}
            shape="square"
            alt="Colm Tuite"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="C"
          />
        ))}
      </Flex>

      <Flex css={{ gap: '$4', mb: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            key={`two${size}`}
            size={size as any}
            shape="square"
            alt="Colm Tuite"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="C"
            status="green"
          />
        ))}
      </Flex>

      <Flex css={{ gap: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            size={size as any}
            shape="square"
            fallback="C"
            status="green"
            key={`three${size}`}
          />
        ))}
      </Flex>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Dialog
      </Text>

      <Dialog>
        <Dialog.Trigger as={Button}>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Text css={{ mb: '$4' }}>Hello, from Dialog.</Text>
          <Dialog.Close as={Button}>Bye.</Dialog.Close>
        </Dialog.Content>
      </Dialog>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        AlertDialog
      </Text>

      <AlertDialog>
        <AlertDialog.Trigger as={Button}>Open AlertDialog</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title as={Text} css={{ mb: '$4' }}>
            Hello, from AlertDialog.
          </AlertDialog.Title>
          <Flex css={{ justifyContent: 'space-between' }}>
            <AlertDialog.Action as={Button}>Ok</AlertDialog.Action>
            <AlertDialog.Cancel as={Button} variant="red">
              Cancel
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog>
      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Popover
      </Text>

      <Popover>
        <Popover.Trigger as={Button}>Open Popover</Popover.Trigger>
        <Popover.Content css={{ padding: '$4' }}>
          <Text>Hello, from Popover.</Text>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger as={Button} css={{ ml: '$4' }}>
          Open Popover (top)
        </Popover.Trigger>
        <Popover.Content side="left" css={{ height: '300px', padding: '$4' }}>
          <Text>Hello, from Popover.</Text>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger as={Button} css={{ ml: '$4' }}>
          With close button
        </Popover.Trigger>
        <Popover.Content side="top" css={{ padding: '$4' }}>
          <Text>Hello, from Popover.</Text>
          <Popover.Close
            as={IconButton}
            variant="ghost"
            css={{ position: 'absolute', top: '$1', right: '$1' }}
          >
            <Cross2Icon />
          </Popover.Close>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger as={Button} css={{ ml: '$4' }}>
          Without arrow
        </Popover.Trigger>
        <Popover.Content side="top" hideArrow>
          <Text>Hello, from Popover.</Text>
        </Popover.Content>
      </Popover>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Tooltip
      </Text>

      <Tooltip content="Tooltip shows on top by default.">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="You get the idea." side="bottom">
        <Button css={{ ml: '$4' }}>Bottom</Button>
      </Tooltip>

      <Tooltip content="You get the idea." side="right">
        <Button css={{ ml: '$4' }}>Right</Button>
      </Tooltip>

      <Tooltip content="You get the idea." side="left">
        <Button css={{ ml: '$4' }}>Left</Button>
      </Tooltip>

      <Tooltip content="This is a really long paragraph of text, to demonstrate how it looks inside a Tooltip. The tooltip has a multiline prop which can be applied to increase the line height and set a max width. Give it a go and see how it works. Cheers.">
        <Button css={{ ml: '$4' }}>Long text</Button>
      </Tooltip>

      <Tooltip
        content="This is a really long paragraph of text, to demonstrate how it looks inside a Tooltip. The tooltip has a multiline prop which can be applied to increase the line height and set a max width. Give it a go and see how it works. Cheers."
        multiline
      >
        <Button css={{ ml: '$4' }}>Long text with multiline</Button>
      </Tooltip>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        ProgressBar
      </Text>

      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={0} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={30} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={60} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={100} />
      </Box>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Tabs
      </Text>

      <Tabs defaultSelectedId="tab-one">
        <Tabs.List>
          <Tabs.Tab id="tab-one">
            <Text size="4">One</Text>
          </Tabs.Tab>
          <Tabs.Tab id="tab-two">
            <Text size="4">Two</Text>
          </Tabs.Tab>
          <Tabs.Tab id="tab-three">
            <Text size="4">Three</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab-one">
          <Box>
            <Text>Panel 1</Text>
            <Button css={{ mt: '$2' }}>Test focus</Button>
          </Box>
        </Tabs.Panel>
        <Tabs.Panel id="tab-two">
          <Text>Panel 2</Text>
        </Tabs.Panel>
        <Tabs.Panel id="tab-three">
          <Text>Panel 3</Text>
        </Tabs.Panel>
      </Tabs>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Accordion
      </Text>

      <Accordion>
        <Accordion.Item value="accordion-one">
          <Accordion.Button>
            <Text size="4">Accordion one</Text>
          </Accordion.Button>
          <Accordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="accordion-two">
          <Accordion.Button>
            <Text size="4">Accordion two</Text>
          </Accordion.Button>
          <Accordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Label
      </Text>

      <Label size="3">Label</Label>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Switch
      </Text>

      <Switch />

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        SimpleToggle
      </Text>

      <SimpleToggle />

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Slider
      </Text>

      <Flex css={{ gap: '$4' }}>
        <Slider defaultValue={25} />
        <Slider defaultValue={[25, 75]} />
      </Flex>
    </Box>
  );
}
