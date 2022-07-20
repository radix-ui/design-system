import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { ControlGroup } from '../components/ControlGroup';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { AppBar } from '../components/AppBar';
import { Banner } from '../components/Banner';
import { Alert } from '../components/Alert';
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { Table, Caption, Thead, Tbody, Tfoot, Tr, Th, Td } from '../components/Table';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { TextArea } from '../components/TextArea';
import { Image } from '../components/Image';
import { Code } from '../components/Code';
import { Sup } from '../components/Sup';
import { Sub } from '../components/Sub';
import { TextField } from '../components/TextField';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';
import { Sheet, SheetTrigger, SheetContent } from '../components/Sheet';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup, Radio } from '../components/Radio';
import { ProgressBar } from '../components/ProgressBar';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/AlertDialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';
import { Label } from '../components/Label';
import { Skeleton } from '../components/Skeleton';
import { RadioCardGroup, RadioCard } from '../components/RadioCard';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '../components/Accordion';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
// import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Kbds } from '../custom/Kbds';
import { Menus } from '../custom/Menus';
import { Status } from '../components/Status';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../components/DropdownMenu';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuGroup,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '../components/ContextMenu';
import {
  ActivityLogIcon,
  ArrowRightIcon,
  BarChartIcon,
  CaretDownIcon,
  CheckIcon,
  CodeIcon,
  CommitIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Toolbar } from '../custom/Toolbar';
import { DarkThemeButton } from '../custom/DarkThemeButton';

function Home() {
  return (
    <Box>
      <DarkThemeButton />

      <AppBar size="2" color="loContrast" border sticky glass>
        <Button>Button</Button>
      </AppBar>
      <Box
        css={{
          position: 'fixed',
          top: '$7',
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          width: 250,
          px: '$6',
          py: '$6',
        }}
      >
        <Heading>Quick nav</Heading>
        <Box as="ul" css={{ p: 0 }}>
          <Box css={{ my: '$1' }}>
            <Link href="#accordion" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Accordion
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#alert" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Alert
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#alertdialog" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Alert Dialog
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#avatar" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Avatar
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#badge" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Badge
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#banner" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Banner
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#button" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Button
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#card" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Card
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#checkbox" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Checkbox
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#container" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Container
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#contextmenu" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Context Menu
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#controlgroup" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Control Group
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#code" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Code
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#dialog" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Dialog
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#dropdownmenu" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Dropdown Menu
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#kbd" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Kbd
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#link" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Link
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#popover" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Popover
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#progressbar" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Progress Bar
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#radio" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Radio
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#radiocard" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Radio Card
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#section" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Section
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#sheet" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Sheet
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#slider" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Slider
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#status" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Status
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#switch" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Switch
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#table" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Table
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#tablink" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                TabLink
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#tabs" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Tabs
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#text" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Text
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#textarea" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Textarea
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#TextField" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                TextField
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#typography" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Typography
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#simpletoggle" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Simple Toggle
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#skeleton" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Skeleton
              </Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#verifiedbadge" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Verified Badge
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box css={{ bc: '$loContrast', height: '100%' }}>
        <Section size="3">
          <Container size="2">
            <Heading size="4" css={{ ta: 'center', mb: '$3' }}>
              Radix UI test suite
            </Heading>
            <Paragraph size="2" css={{ ta: 'center' }}>
              An environment for testing Radix DS.
            </Paragraph>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="section" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Section
            </Heading>
          </Container>
          <Section size="1" css={{ bc: '$slate3' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 1
            </Text>
          </Section>
          <Section size="2" css={{ bc: '$slate3', my: '$1' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 2
            </Text>
          </Section>
          <Section size="3" css={{ bc: '$slate3' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 3
            </Text>
          </Section>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="container" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Container
            </Heading>
          </Container>
          <Container size="1">
            <Box
              css={{
                p: '$5',
                border: '1px solid $slate6',
                borderRadius: '$3',
              }}
            >
              <form>
                <TextField
                  type="email"
                  size="2"
                  placeholder="Email"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <TextField
                  type="password"
                  size="2"
                  placeholder="Password"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <Flex css={{ ai: 'center', jc: 'space-between' }}>
                  <Text size="2" css={{ color: '$slate11' }}>
                    Forgot password
                  </Text>
                  <Button size="2" variant="blue">
                    Log in
                  </Button>
                </Flex>
              </form>
            </Box>
          </Container>
          <Container size="2" css={{ my: '$9' }}>
            <Paragraph>
              This is a really long paragraph of text, to demonstrate prose text, like for example,
              the kind you might read in a blog post. The reason we're using prose here is because
              the most common use case for this container size is longform text. So we're previewing
              some longform text here so we can make sure the container width provides an optimal
              line length for this font size.
            </Paragraph>
          </Container>
          <Container size="3" css={{ my: '$9' }}>
            <Grid
              css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7',
              }}
            >
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
            </Grid>
          </Container>
          <Container size="4">
            <Text as="p" size="3" css={{ ta: 'center', bc: '$slate3', py: '$2' }}>
              No max width
            </Text>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="flex" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Flex
            </Heading>
            <Flex direction="column" align="center" gap="6">
              <Box css={{ width: '$8', height: '$8', bc: '$blue9' }}></Box>
              <Box css={{ width: '$5', height: '$5', bc: '$blue9' }}></Box>
              <Box css={{ width: '$7', height: '$7', bc: '$blue9' }}></Box>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="flex" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Grid
            </Heading>
            <Grid columns="4" align="center" gapX="3" gapY="6">
              <Box css={{ height: '$9', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
              <Box css={{ height: '$7', bc: '$blue9' }}></Box>
            </Grid>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="text" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Text
            </Heading>
            <Flex css={{ fd: 'column', gap: '$4' }}>
              <Flex css={{ ai: 'center' }}>
                <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                  The quick brown fox
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                  The quick brown fox jumped
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                  The quick brown fox jumped
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
            </Flex>
            <Flex css={{ fd: 'column', gap: '$4' }}>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="red"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="crimson"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="pink"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="purple"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="violet"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="indigo"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="blue"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="cyan"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="teal"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="green"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="lime"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="yellow"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="orange"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="gold"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="bronze"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="gray"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text
                  size="9"
                  as="h2"
                  variant="contrast"
                  gradient
                  css={{ fontWeight: 500, lineHeight: '68px', WebkitBackgroundClip: 'text' }}
                >
                  The quick brown fox jumped over the lazy dog
                </Text>
              </Flex>
            </Flex>
            <Flex css={{ fd: 'column', gap: '$4', mt: '$6' }}>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h1" variant="red" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h2" variant="crimson" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h3" variant="pink" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="purple" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="violet" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="indigo" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="blue" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="cyan" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="teal" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="green" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="lime" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="yellow" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="orange" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="gold" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" variant="bronze" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="typography" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Typography
            </Heading>
            <Flex css={{ fd: 'column', gap: '$4' }}>
              <Heading size="4" as="h1">
                This is a heading size 4
              </Heading>
              <Heading size="3" as="h1">
                This is a heading size 3
              </Heading>
              <Heading size="2" as="h1">
                This is a heading size 2
              </Heading>
              <Heading size="1" as="h1">
                This is a heading size 1
              </Heading>
              <Paragraph size="2">
                This is a Paragraph size 2. Design in the target medium. Prototype with real
                components. Handoff production code.
              </Paragraph>
              <Paragraph size="1">
                This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
                text, like for example, the kind you might read in a blog post. The reason we're
                using prose here is because the most common use case for this container size is
                longform text. So we're previewing some longform text here so we can make sure the
                container width provides an optimal line length for this font size.
              </Paragraph>
              <Paragraph>
                This is a Sup and Sub demo. The kind you might read in a blog post.<Sup>1</Sup> This
                is a really long paragraph of text, to demonstrate prose text.<Sub>1</Sub>
              </Paragraph>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="skeleton" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Skeleton
            </Heading>
            <Heading css={{ mb: '$6' }}>Avatar variants</Heading>
            <Flex
              css={{
                ai: 'center',
                gap: '$5',
                fw: 'wrap',
                mb: '$7',
              }}
            >
              <Skeleton variant="avatar1" />
              <Skeleton variant="avatar2" />
              <Skeleton variant="avatar3" />
              <Skeleton variant="avatar4" />
              <Skeleton variant="avatar5" />
              <Skeleton variant="avatar6" />
            </Flex>
            <Heading css={{ mb: '$6' }}>Text variants</Heading>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="title" css={{ width: '50%' }} />
              <Skeleton variant="heading" css={{ width: '25%' }} />
            </Flex>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="text" />
              <Skeleton variant="text" css={{ width: '75%' }} />
              <Skeleton variant="text" />
              <Skeleton variant="text" css={{ width: '50%' }} />
            </Flex>
            <Heading css={{ mb: '$6' }}>Control variants</Heading>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
              }}
            >
              <Skeleton variant="button" />
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="badge" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Badge
            </Heading>
            <Heading css={{ mb: '$6' }}>Default Badge</Heading>
            <Badge css={{ mb: '$6' }}>Coming soon</Badge>
            <Heading css={{ mb: '$6' }}>Sizes</Heading>
            <Flex
              css={{
                ai: 'center',
                gap: '$5',
                fw: 'wrap',
                mb: '$7',
              }}
            >
              <Badge size="1">Coming soon</Badge>
              <Badge size="2">Coming soon</Badge>
            </Flex>
            <Heading css={{ mb: '$6' }}>Variants</Heading>
            <Flex css={{ gap: '$5', fw: 'wrap', mb: '$6' }}>
              <Badge size="2" variant="red">
                <Box css={{ mr: 5 }}>
                  <Status size="1" variant="red" />
                </Box>
                Live
              </Badge>
              <Badge size="2" variant="crimson">
                Approved
              </Badge>
              <Badge size="2" variant="pink">
                Pending
              </Badge>
              <Badge size="2" variant="purple">
                Failed
              </Badge>
              <Badge size="2" variant="violet">
                New
              </Badge>
              <Badge size="2" variant="indigo">
                Approved
              </Badge>
              <Badge size="2" variant="blue">
                Pending
              </Badge>
              <Badge size="2" variant="cyan">
                Failed
              </Badge>
              <Badge size="2" variant="teal">
                New
              </Badge>
              <Badge size="2" variant="green">
                Approved
              </Badge>
              <Badge size="2" variant="lime">
                Pending
              </Badge>
              <Badge size="2" variant="yellow">
                Failed
              </Badge>
              <Badge size="2" variant="orange">
                Failed
              </Badge>
              <Badge size="2" variant="gold">
                Winner
              </Badge>
              <Badge size="2" variant="bronze">
                Runner-up
              </Badge>
            </Flex>
            <Heading css={{ mb: '$6' }}>Interactive variant</Heading>
            <Flex css={{ gap: '$5', fw: 'wrap', mt: '$6' }}>
              <Badge as="a" href="#" size="2" variant="red" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="crimson" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="pink" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="purple" interactive>
                Failed
                <Box css={{ ml: 5 }}>
                  <CaretDownIcon />
                </Box>
              </Badge>
              <Badge as="button" size="2" variant="violet" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="indigo" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="blue" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="cyan" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="teal" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="green" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="lime" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="yellow" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="orange" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="gold" interactive>
                Winner
              </Badge>
              <Badge as="button" size="2" variant="bronze" interactive>
                Runner-up
              </Badge>
              <Badge as="button" size="2" variant="bronze" interactive disabled>
                Disabled
              </Badge>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="status" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Status
            </Heading>
            <Heading css={{ mb: '$6' }}>Default Status</Heading>
            <Status></Status>
            <Heading css={{ mt: '$7', mb: '$7' }}>Sizes</Heading>
            <Flex css={{ gap: '$6', mt: '$6' }}>
              <Status size="1"></Status>
              <Status size="2"></Status>
            </Flex>
            <Heading css={{ mt: '$7', mb: '$7' }}>Variants</Heading>
            <Flex css={{ gap: '$6', mt: '$6' }}>
              <Status variant="gray" />
              <Status variant="blue" />
              <Status variant="green" />
              <Status variant="yellow" />
              <Status variant="red" />
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="alert" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Alert
            </Heading>
            <Flex css={{ gap: '$2', mt: '$6' }}>
              <Alert variant="loContrast">
                <Text size="3" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                  Alert heading
                </Text>
                <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                  A modal dialog that interrupts the user with{' '}
                  <Link href="#">important content</Link> and expects a response.
                </Text>
              </Alert>
              <Alert variant="gray">
                <Text size="3" css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}>
                  Alert heading
                </Text>
                <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
                  A modal dialog that interrupts the user with{' '}
                  <Link href="#">important content</Link> and expects a response.
                </Text>
              </Alert>
              <Alert variant="blue">
                <Text
                  size="3"
                  variant="blue"
                  css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}
                >
                  Alert heading
                </Text>
                <Text size="2" variant="blue" css={{ lineHeight: '17px' }}>
                  A modal dialog that interrupts the user with{' '}
                  <Link href="#">important content</Link> and expects a response.
                </Text>
              </Alert>
              <Alert variant="green">
                <Text
                  size="3"
                  variant="green"
                  css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}
                >
                  Alert heading
                </Text>
                <Text size="2" variant="green" css={{ lineHeight: '17px' }}>
                  A modal dialog that interrupts the user with{' '}
                  <Link href="#">important content</Link> and expects a response.
                </Text>
              </Alert>
              <Alert variant="red">
                <Text
                  size="3"
                  variant="red"
                  css={{ fontWeight: 500, lineHeight: '20px', mb: '$1' }}
                >
                  Alert heading
                </Text>
                <Text size="2" variant="red" css={{ lineHeight: '17px' }}>
                  A modal dialog that interrupts the user with{' '}
                  <Link href="#">important content</Link> and expects a response.
                </Text>
              </Alert>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size="3">
          <Container size="2">
            <Heading id="button" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Button
            </Heading>
            <Flex css={{ gap: '$6' }}>
              <Button>Button</Button>
              <Button size="2">Button</Button>
              <Button size="3">Button</Button>
            </Flex>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button>Button</Button>
              <Button variant="blue">Important</Button>
              <Button variant="green">Secure</Button>
              <Button variant="red">Warning</Button>
            </Flex>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button ghost>Button</Button>
              <Button ghost variant="blue">
                Important
              </Button>
              <Button ghost variant="green">
                Secure
              </Button>
              <Button ghost variant="red">
                Warning
              </Button>
            </Flex>
            <Box
              css={{
                position: 'relative',
                mt: '$6',
              }}
            >
              <Image src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
              <Box
                css={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: '$4',
                }}
              >
                <Button variant="transparentWhite">Transparent</Button>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
                mt: '$6',
              }}
            >
              <Image src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
              <Box
                css={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: '$4',
                }}
              >
                <Button variant="transparentBlack">Transparent</Button>
              </Box>
            </Box>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button variant="red" disabled>
                Disabled
              </Button>
              <Button variant="red" state="active">
                Active
              </Button>
              <Button variant="red" state="waiting" disabled>
                Waiting
              </Button>
            </Flex>
            <Flex css={{ gap: '$6', mt: '$6' }}>
              <Button>
                <Box
                  css={{
                    mr: '$1',
                  }}
                >
                  <PlusIcon />
                </Box>
                Button
              </Button>
              <Button variant="blue">
                Button
                <Box
                  css={{
                    ml: '$1',
                  }}
                >
                  <ArrowRightIcon />
                </Box>
              </Button>
              <Button variant="green">
                <Box
                  css={{
                    mr: '$1',
                  }}
                >
                  <PlusIcon />
                </Box>
                Button
                <Box
                  css={{
                    ml: '$1',
                  }}
                >
                  <ArrowRightIcon />
                </Box>
              </Button>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="TextField" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              TextField
            </Heading>
            <Flex css={{ ai: 'flex-start', gap: '$6' }}>
              <TextField size="1" placeholder="Size 1" />
              <TextField size="2" placeholder="Size 2" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <TextField size="1" placeholder="Ghost" variant="ghost" />
              <TextField size="2" placeholder="Ghost" variant="ghost" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <TextField placeholder="Invalid" state="invalid" />
              <TextField placeholder="Valid" state="valid" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <TextField placeholder="Cursor default" cursor="default" />
              <TextField placeholder="Cursor text" cursor="text" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <TextField placeholder="Read only placeholder" readOnly />
              <TextField placeholder="Read only value" defaultValue="100" readOnly />
              <TextField placeholder="Disabled placeholder" disabled />
              <TextField placeholder="Disabled value" defaultValue="100" disabled />
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="controlgroup" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              ControlGroup
            </Heading>
            <ControlGroup>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Button>Button</Button>
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Button>Button</Button>
              <TextField placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <TextField placeholder="Hello world" />
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <TextField size="1" placeholder="Hello world" />
              <Select>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
              </Select>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <TextField placeholder="Hello world" />
              <TextField placeholder="Hello world" />
              <TextField placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <TextField size="2" placeholder="Hello world" />
              <Button size="2">Button</Button>
            </ControlGroup>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="textarea" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Textarea
            </Heading>
            <Flex css={{ ai: 'flex-start', gap: '$6' }}>
              <TextArea size="1" placeholder="Size 1"></TextArea>
              <TextArea size="2" placeholder="Size 1"></TextArea>
              <TextArea size="3" placeholder="Size 1"></TextArea>
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <TextArea size="2" placeholder="Size 1" disabled></TextArea>
              <TextArea
                size="2"
                placeholder="Size 1"
                readOnly
                defaultValue="eihuweofjew"
              ></TextArea>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="kbd" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Kbd
            </Heading>
            <Heading css={{ mb: '$6' }}>Kbd test</Heading>
            <Flex css={{ ai: 'center', jc: 'space-between', mb: '$7' }}>
              <Text>Resize selected object</Text>
              <Flex css={{ ai: 'center', gap: '$1' }}>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>
                  <TriangleUpIcon />
                </Kbd>
              </Flex>
            </Flex>
          </Container>
          <Kbds />
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="verifiedbadge" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              VerifiedBadge
            </Heading>
            <Flex css={{ ai: 'baseline' }}>
              <Text size="3" css={{ fontWeight: '500' }}>
                Colm Tuite
              </Text>
              <VerifiedBadge css={{ as: 'center', mx: '$1' }} />
              <Text size="3" css={{ color: '$slate11' }}>
                @colmtuite
              </Text>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="link" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Link
            </Heading>
            <Heading css={{ mb: '$6' }}>Link variants</Heading>
            <Flex css={{ gap: '$6', mb: '$6' }}>
              <Link variant="blue" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
              <Link variant="subtle" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
              <Link variant="contrast" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
            </Flex>
            <Heading css={{ mb: '$6' }}>Inline link test</Heading>
            <Paragraph>
              There are 5 variants to choose from. Use is for positive states.{' '}
              <Link variant="contrast" href="#">
                This is a link
              </Link>{' '}
              Traditional business literature won’t help you solve it- most of that stuff is focused
              on life after product/market fit, after the Trough of Sorrow. A lot of startup stuff
              is focused on the initial phases, when you don’t have a team, idea, or investors.
            </Paragraph>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="code" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Code
            </Heading>
            <Paragraph>
              There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code> is
              for positive states. Traditional business literature won’t help you solve it- most of
              that stuff is focused on life after product/market fit, after the Trough of Sorrow. A
              lot of startup stuff is focused on the initial phases, when you don’t have a team,
              idea, or investors.
            </Paragraph>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="3">
            <Container size="2">
              <Heading id="card" css={{ mb: '$6', scrollMarginTop: '$7' }}>
                Card
              </Heading>
            </Container>
            <Flex css={{ gap: '$3' }}>
              <Box css={{ width: 250 }}>
                <Card css={{ p: '$3' }}>
                  <Heading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Heading>
                  <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" css={{ p: '$3' }} variant="interactive">
                  <Heading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Heading>
                  <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                  <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                    <Flex css={{ ai: 'center' }}>
                      <Avatar
                        size="2"
                        alt="John Smith"
                        src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        fallback="J"
                        css={{
                          mr: '$1',
                        }}
                      />
                      <Text size="2" css={{ color: '$slate11' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$slate11' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" variant="interactive">
                  <Image
                    src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
                    css={{ btlr: '$3', btrr: '$3' }}
                  />
                  <Box css={{ p: '$3' }}>
                    <Heading css={{ mb: '$2' }}>
                      Modulz raises $4.2M to close the gap between design and code
                    </Heading>
                    <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                      Modulz is a visual code editor that empowers teams to design, develop,
                      document and deploy a design system, without writing code.
                    </Text>
                    <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                      <Flex css={{ ai: 'center' }}>
                        <Avatar
                          size="2"
                          alt="John Smith"
                          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          fallback="J"
                          css={{
                            mr: '$1',
                          }}
                        />
                        <Text size="2" css={{ color: '$slate11' }}>
                          Colm Tuite
                        </Text>
                      </Flex>
                      <Box>
                        <Text size="2" css={{ color: '$slate11' }}>
                          May 2020
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" variant="ghost" css={{ p: '$3' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
                    css={{ br: '$1', mb: '$3' }}
                  />
                  <Heading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Heading>
                  <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                  <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                    <Flex css={{ ai: 'center' }}>
                      <Avatar
                        size="2"
                        alt="John Smith"
                        src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        fallback="J"
                        css={{
                          mr: '$1',
                        }}
                      />
                      <Text size="2" css={{ color: '$slate11' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$slate11' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="button" variant="active" css={{ p: '$3' }}>
                  <Text size="3" css={{ lineHeight: '23px', fontWeight: 500 }}>
                    Default Variants
                  </Text>
                  <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                    Modulz is a visual code.
                  </Text>
                </Card>
              </Box>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="alertdialog" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Alert Dialog
            </Heading>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle asChild>
                  <Heading>Are you sure?</Heading>
                </AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <Text css={{ mt: '$2' }}>
                    This will do a very dangerous thing. Thar be dragons!
                  </Text>
                </AlertDialogDescription>
                <Flex css={{ jc: 'flex-end', gap: '$3', mt: '$5' }}>
                  <AlertDialogCancel asChild>
                    <Button ghost>Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button variant="red">Delete</Button>
                  </AlertDialogAction>
                </Flex>
              </AlertDialogContent>
            </AlertDialog>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="dialog" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Dialog
            </Heading>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                  Dialog Heading
                </Text>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  There are 5 variants to choose from. Use is for positive states. This is a link
                  Traditional business literature won’t help you solve it- most of that stuff is
                  focused on life after product/market fit, after the Trough of Sorrow.
                </Text>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Dialog</Button>
              </DialogTrigger>

              <DialogContent>
                <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                  Dialog Heading
                </Text>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  There are 5 variants to choose from. Use is for positive states. This is a link
                  Traditional business literature won’t help you solve it- most of that stuff is
                  focused on life after product/market fit, after the Trough of Sorrow.
                </Text>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button>Open</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverClose asChild>
                      <Button ghost>Close</Button>
                    </PopoverClose>
                  </PopoverContent>
                </Popover>
              </DialogContent>
            </Dialog>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="sheet" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Sheet
            </Heading>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Open Sheet</Button>
              </SheetTrigger>
              <SheetContent></SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Top</Button>
              </SheetTrigger>
              <SheetContent side="top"></SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Right</Button>
              </SheetTrigger>
              <SheetContent side="right"></SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom"></SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Left</Button>
              </SheetTrigger>
              <SheetContent side="left"></SheetContent>
            </Sheet>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="progressbar" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              ProgressBar
            </Heading>
            <Heading css={{ mb: '$6' }}>Default</Heading>
            <Box css={{ mb: '$6' }}>
              <ProgressBar value={50} />
            </Box>
            <Heading css={{ mb: '$6' }}>Indeterminate state</Heading>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Indeterminate</Text>
              <ProgressBar css={{ my: '$2' }} />
            </Box>
            <Heading css={{ mb: '$6' }}>UI test</Heading>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Download 50% complete</Text>
              <ProgressBar max={100} value={80} css={{ my: '$2' }} />
              <Text size="1" css={{ color: '$slate11' }}>
                46 hours remaining
              </Text>
            </Box>
            <Heading css={{ mb: '$6' }}>Gradient variant</Heading>
            <Box css={{ mb: '$6' }}>
              <ProgressBar max={100} variant="gradient" value={100} />
            </Box>
            <Heading css={{ mb: '$6' }}>Blue variant</Heading>
            <Box>
              <ProgressBar variant="blue" max={100} value={50} />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="popover" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Popover
            </Heading>
            <Flex css={{ gap: '$6', fw: 'wrap' }}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Popover</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Hide arrow</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }} hideArrow>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="blue">Blue</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="green">Green</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="red">Red</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button ghost>Ghost</Button>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <IconButton>
                    <VideoIcon />
                  </IconButton>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Badge size="2" variant="violet" interactive>
                    Badge
                    <Box css={{ ml: '$1' }}>
                      <CaretDownIcon />
                    </Box>
                  </Badge>
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="accordion" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Accordion
            </Heading>
            <Accordion type="single">
              <AccordionItem value="accordion-one">
                <AccordionTrigger>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accordion-two">
                <AccordionTrigger>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accordion-three">
                <AccordionTrigger>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accordion-four">
                <AccordionTrigger>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Avatars />
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <Heading id="tabs" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Tabs
            </Heading>
            <Heading css={{ mb: '$6' }}>Default</Heading>
            <Tabs defaultValue="tab-one">
              <TabsList>
                <TabsTrigger value="tab-one">General</TabsTrigger>
                <TabsTrigger value="tab-two">Hosting</TabsTrigger>
                <TabsTrigger value="tab-three">Editor</TabsTrigger>
                <TabsTrigger value="tab-four">Billing</TabsTrigger>
                <TabsTrigger value="tab-five">SEO</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-one">
                <Text>Tabs Content 1</Text>
              </TabsContent>
              <TabsContent value="tab-two">
                <Text>Tabs Content 2</Text>
              </TabsContent>
              <TabsContent value="tab-three">
                <Text>Tabs Content 3</Text>
              </TabsContent>
              <TabsContent value="tab-four">
                <Text>Tabs Content 4</Text>
              </TabsContent>
              <TabsContent value="tab-five">
                <Text>Tabs Content 5</Text>
              </TabsContent>
            </Tabs>

            <Heading css={{ mb: '$6', mt: '$7' }}>Vertical orientation</Heading>
            <Tabs defaultValue="tab-one" orientation="vertical">
              <TabsList>
                <TabsTrigger value="tab-one">General</TabsTrigger>
                <TabsTrigger value="tab-two">Hosting</TabsTrigger>
                <TabsTrigger value="tab-three">Editor</TabsTrigger>
                <TabsTrigger value="tab-four">Billing</TabsTrigger>
                <TabsTrigger value="tab-five">SEO</TabsTrigger>
                <TabsTrigger value="tab-six">Forms</TabsTrigger>
                <TabsTrigger value="tab-seven">Fonts</TabsTrigger>
                <TabsTrigger value="tab-eight">Backups</TabsTrigger>
                <TabsTrigger value="tab-nine">Integrations</TabsTrigger>
                <TabsTrigger value="tab-ten">Custom code</TabsTrigger>
              </TabsList>
              <TabsContent value="tab-one">
                <Text>Panel 1</Text>
              </TabsContent>
              <TabsContent value="tab-two">
                <Text>Panel 2</Text>
              </TabsContent>
              <TabsContent value="tab-three">
                <Text>Panel 3</Text>
              </TabsContent>
              <TabsContent value="tab-four">
                <Text>Panel 4</Text>
              </TabsContent>
              <TabsContent value="tab-five">
                <Text>Panel 5</Text>
              </TabsContent>
              <TabsContent value="tab-six">
                <Text>Panel 6</Text>
              </TabsContent>
              <TabsContent value="tab-seven">
                <Text>Panel 7</Text>
              </TabsContent>
              <TabsContent value="tab-eight">
                <Text>Panel 8</Text>
              </TabsContent>
              <TabsContent value="tab-nine">
                <Text>Panel 9</Text>
              </TabsContent>
              <TabsContent value="tab-ten">
                <Text>Panel 10</Text>
              </TabsContent>
            </Tabs>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="3">
            <Container size="2">
              <Heading id="tablink" css={{ mb: '$6', scrollMarginTop: '$7' }}>
                TabLink
              </Heading>
            </Container>
            <Flex css={{ borderBottom: '1px solid $slate6' }}>
              <TabLink href="#" active>
                <Box css={{ mr: '$1' }}>
                  <CodeIcon />
                </Box>
                Code
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <ExclamationTriangleIcon />
                </Box>
                Issues
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <CommitIcon />
                </Box>
                Pull requests
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <VideoIcon />
                </Box>
                Actions
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <ActivityLogIcon />
                </Box>
                Projects
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <ReaderIcon />
                </Box>
                Wiki
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <LockClosedIcon />
                </Box>
                Security
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <BarChartIcon />
                </Box>
                Insights
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <GearIcon />
                </Box>
                Settings
              </TabLink>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="slider" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Slider
            </Heading>
            <Heading css={{ mb: '$6' }}>Default</Heading>
            <Box css={{ width: '150px', mb: '$7' }}>
              <Slider defaultValue={[50]} />
            </Box>
            <Heading css={{ mb: '$6' }}>Range</Heading>
            <Flex css={{ gap: '$4', width: '150px', mb: '$7' }}>
              <Slider defaultValue={[25, 75]} />
            </Flex>
            <Heading css={{ mb: '$6' }}>Vertical orientation</Heading>
            <Box css={{ mt: '$6' }}>
              <Slider defaultValue={[50]} orientation="vertical" css={{ height: 75 }} />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size="3">
          <Container size="2">
            <Heading id="simpletoggle" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              SimpleToggle
            </Heading>
            <SimpleToggle shape="circle">
              <ShadowNoneIcon />
            </SimpleToggle>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="checkbox" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Checkbox
            </Heading>
            <Heading css={{ mb: '$6' }}>Sizes</Heading>
            <Flex>
              <Checkbox css={{ mr: '$5' }} />
              <Checkbox size="2" css={{ mr: '$5' }} />
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="radio" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Radio
            </Heading>
            <Heading css={{ mb: '$6' }}>Sizes</Heading>
            <RadioGroup defaultValue="1">
              <Radio value="1" css={{ mr: '$5' }} />
              <Radio value="2" size="2" css={{ mr: '$5' }} />
            </RadioGroup>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="table" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Table
            </Heading>
            <Table>
              <Caption>This is the table caption.</Caption>
              <Thead>
                <Tr>
                  <Th css={{ width: 190 }}>Club</Th>
                  <Td align="center">MP</Td>
                  <Td align="center">W</Td>
                  <Td align="center">D</Td>
                  <Td align="center">L</Td>
                  <Td align="center">GF</Td>
                  <Td align="center">GA</Td>
                  <Td align="center">GD</Td>
                  <Td align="center">Pts</Td>
                  <Td css={{ width: 100 }} align="center">
                    Last 5
                  </Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th css={{ width: 190 }}>Man City</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>Man United</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Leicester City</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>Chelsea</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>West Ham</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th css={{ width: 190 }}>Leicester City</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>

            <Table css={{ mt: '$7' }}>
              <Caption>This is the table caption.</Caption>
              <Thead>
                <Tr>
                  <Th css={{ width: 190 }}>Club</Th>
                  <Td align="center">MP</Td>
                  <Td align="center">W</Td>
                  <Td align="center">D</Td>
                  <Td align="center">L</Td>
                  <Td align="center">GF</Td>
                  <Td align="center">GA</Td>
                  <Td align="center">GD</Td>
                  <Td align="center">Pts</Td>
                  <Td css={{ width: 100 }} align="center">
                    Last 5
                  </Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th css={{ width: 190 }}>
                    <Flex>
                      <Box css={{ width: '$5' }}>1</Box>
                      Man City
                    </Flex>
                  </Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>
                    <Flex>
                      <Box css={{ width: '$5' }}>2</Box>
                      Man United
                    </Flex>
                  </Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr style={{ borderBottom: '2px solid yellow' }}>
                  <Td border="dashed">
                    <Flex>
                      <Box css={{ width: '$5' }}>3</Box>
                      Leicester City
                    </Flex>
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    32
                  </Td>
                  <Td align="center" border="dashed">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>
                    <Flex>
                      <Box css={{ width: '$5' }}>4</Box>
                      Chelsea
                    </Flex>
                  </Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>
                    <Flex>
                      <Box css={{ width: '$5' }}>5</Box>
                      West Ham
                    </Flex>
                  </Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th css={{ width: 190 }}>
                    <Flex>
                      <Box css={{ width: '$5' }}>6</Box>
                      Leicester City
                    </Flex>
                  </Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>

            <Table striped css={{ mt: '$7' }}>
              <Caption>Striped table caption.</Caption>
              <Thead>
                <Tr>
                  <Th css={{ width: 190 }}>Club</Th>
                  <Td align="center">MP</Td>
                  <Td align="center">W</Td>
                  <Td align="center">D</Td>
                  <Td align="center">L</Td>
                  <Td align="center">GF</Td>
                  <Td align="center">GA</Td>
                  <Td align="center">GD</Td>
                  <Td align="center">Pts</Td>
                  <Td css={{ width: 100 }} align="center">
                    Last 5
                  </Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th css={{ width: 190 }}>Man City</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>Man United</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Leicester City</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>Chelsea</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Th css={{ width: 190 }}>West Ham</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th css={{ width: 190 }}>Leicester City</Th>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">32</Td>
                  <Td align="center">
                    <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                      <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                        <CheckIcon />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="radiocard" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              RadioCard
            </Heading>
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
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="switch" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Switch
            </Heading>
            <Heading css={{ mb: '$6' }}>Sizes</Heading>
            <Switch />
            <Switch size="2" css={{ ml: '$6' }} />
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="dropdownmenu" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              DropdownMenu
            </Heading>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Dropdown</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Item</DropdownMenuItem>
                  <DropdownMenuItem>Item</DropdownMenuItem>
                  <DropdownMenuItem>Item</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Choose one</DropdownMenuLabel>
                  <DropdownMenuRadioGroup value="one">
                    <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Heading id="contextmenu" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              ContextMenu
            </Heading>
            <ContextMenu>
              <ContextMenuTrigger>
                <Flex
                  css={{
                    ai: 'center',
                    jc: 'center',
                    height: '$9',
                    bc: '$slate2',
                    border: '2px dashed $colors$slate6',
                    br: '$2',
                  }}
                >
                  <Text variant="gray">Right-click me</Text>
                </Flex>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuGroup>
                  <ContextMenuItem>Item</ContextMenuItem>
                  <ContextMenuItem>Item</ContextMenuItem>
                  <ContextMenuItem>Item</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
                  <ContextMenuCheckboxItem checked>Item</ContextMenuCheckboxItem>
                  <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
                  <ContextMenuSeparator />
                  <ContextMenuLabel>Choose one</ContextMenuLabel>
                  <ContextMenuRadioGroup value="one">
                    <ContextMenuRadioItem value="one">Item</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="two">Item</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="three">Item</ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          </Container>
        </Section>
      </Box>
    </Box>
  );
}

export default Home;
