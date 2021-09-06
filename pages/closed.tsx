import React from 'react';
import { Box } from '../components/Box';
import { Avatar } from '../components/Avatar';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Flex } from '../components/Flex';
import { Checkbox } from '../components/Checkbox';
import { IconButton } from '../components/IconButton';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '../components/Dialog';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/AlertDialog';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';
import { Tooltip } from '../components/Tooltip';
import { ProgressBar } from '../components/ProgressBar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '../components/Accordion';
import { Label } from '../components/Label';
import { Switch } from '../components/Switch';
import { SimpleToggle } from '../components/SimpleToggle';
import { Slider } from '../components/Slider';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Radio, RadioGroup } from '../components/Radio';
import { RadioCard, RadioCardGroup } from '../components/RadioCard';
import { Heading } from '../components/Heading';
import { Menus } from '../custom/Menus';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../components/DropdownMenu';

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '../components/ContextMenu';

export default function Closed() {
  return (
    <Box
      css={{
        bc: '$loContrast',
        height: '100vh',
        py: '130px',
        px: '260px',
        overflowY: 'auto',
      }}
    >
      <Heading
        size="4"
        css={{
          '@bp1': {
            pr: 100,
          },
          '@bp2': {
            ta: 'center',
            px: 180,
          },
          '@bp3': {
            px: 200,
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic nulla quas fugit
        perferendis impedit, in eum possimus accusamus itaque exercitationem atque porro veritatis
        pariatur, ullam odit, dicta deserunt ipsa.
      </Heading>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ContextMenu>
        <ContextMenuTrigger>
          <Box css={{ width: '$9', height: '$9', bc: '$blue7' }}>Right Click</Box>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <Heading>Heading</Heading>
      <Text size="5" css={{ mt: '$7', mb: '$4' }}>
        Avatar
      </Text>

      <Badge size="2">sss</Badge>
      <Checkbox defaultChecked />

      <RadioGroup>
        <Radio value="a" css={{ mr: '$3' }} />
        <Radio value="b" css={{ mr: '$3' }} />
      </RadioGroup>

      <RadioGroup>
        <Radio value="a" size="2" css={{ mr: '$3' }} />
        <Radio value="b" size="2" css={{ mr: '$3' }} />
      </RadioGroup>

      <Box css={{ my: '$2' }}>
        <Text size="2">Radio group with Tooltip</Text>
        <RadioGroup>
          <Tooltip content="Tooltip A">
            <Radio value="a" css={{ mr: '$3' }} />
          </Tooltip>
          <Tooltip content="Tooltip B">
            <Radio value="b" css={{ mr: '$3' }} />
          </Tooltip>
        </RadioGroup>
      </Box>

      <RadioCardGroup defaultValue="1">
        <RadioCard value="1" css={{ mb: '$2' }}>
          <Flex css={{ alignItems: 'center' }}>
            <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
              2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
            </Text>
            <Text size="4" color="gray">
              -$1600
            </Text>
          </Flex>
        </RadioCard>
        <RadioCard value="2" css={{ mb: '$2' }}>
          <Flex css={{ alignItems: 'center' }}>
            <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
              2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
            </Text>
            <Text size="4" color="gray">
              -$800
            </Text>
          </Flex>
        </RadioCard>
        <RadioCard value="3" css={{ mb: '$2' }}>
          <Flex css={{ alignItems: 'center' }}>
            <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
              2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
            </Text>
            <Text size="4" color="gray"></Text>
          </Flex>
        </RadioCard>
      </RadioCardGroup>

      <Flex css={{ gap: '$4', mb: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            key={`one${size}`}
            size={size}
            shape="circle"
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
            size={size}
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
          <Avatar size={size} shape="circle" fallback="C" status="green" key={`three${size}`} />
        ))}
      </Flex>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Dialog
      </Text>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <Text css={{ mb: '$4' }}>Hello, from Dialog</Text>
          <Tooltip content="You get the idea." side="left">
            <Button css={{ ml: '$4' }}>Left</Button>
          </Tooltip>
          <DialogClose asChild>
            <Button>Bye.</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        AlertDialog
      </Text>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Open AlertDialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle asChild>
            <Text css={{ mb: '$4' }}>Hello, from AlertDialog</Text>
          </AlertDialogTitle>
          <Flex css={{ justifyContent: 'space-between' }}>
            <AlertDialogAction asChild>
              <Button>Ok</Button>
            </AlertDialogAction>
            <AlertDialogCancel asChild>
              <Button variant="red">Cancel</Button>
            </AlertDialogCancel>
          </Flex>
        </AlertDialogContent>
      </AlertDialog>
      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Popover
      </Text>

      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent css={{ padding: '$4' }}>
          <Text>Hello, from Popover</Text>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button css={{ ml: '$4' }}>Open Popover (top)</Button>
        </PopoverTrigger>
        <PopoverContent side="left" css={{ height: '300px', padding: '$4' }}>
          <Text>Hello, from Popover</Text>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button css={{ ml: '$4' }}>With close button</Button>
        </PopoverTrigger>
        <PopoverContent side="top" css={{ padding: '$4' }}>
          <Text>Hello, from Popover</Text>
          <PopoverClose asChild>
            <IconButton variant="ghost" css={{ position: 'absolute', top: '$1', right: '$1' }}>
              <Cross2Icon />
            </IconButton>
          </PopoverClose>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button css={{ ml: '$4' }}>Without arrow</Button>
        </PopoverTrigger>
        <PopoverContent side="top" hideArrow css={{ padding: '$4' }}>
          <Text>Hello, from Popover</Text>
        </PopoverContent>
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

      <Tabs defaultValue="tab-one">
        <TabsList>
          <TabsTrigger value="tab-one">
            <Text size="4">One</Text>
          </TabsTrigger>
          <TabsTrigger value="tab-two">
            <Text size="4">Two</Text>
          </TabsTrigger>
          <TabsTrigger value="tab-three">
            <Text size="4">Three</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab-one">
          <Box>
            <Text>Panel 1</Text>
            <Button css={{ mt: '$2' }}>Test focus</Button>
          </Box>
        </TabsContent>
        <TabsContent value="tab-two">
          <Text>Panel 2</Text>
        </TabsContent>
        <TabsContent value="tab-three">
          <Text>Panel 3</Text>
        </TabsContent>
      </Tabs>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Accordion
      </Text>

      <Accordion type="single">
        <AccordionItem value="accordion-one">
          <AccordionTrigger>
            <Text size="4">Accordion one</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="accordion-two">
          <AccordionTrigger>
            <Text size="4">Accordion two</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionContent>
        </AccordionItem>
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
        <Slider defaultValue={[25]} />
        <Slider defaultValue={[25, 75]} />
      </Flex>
    </Box>
  );
}
