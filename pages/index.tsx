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
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Card } from '../components/Card';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';
import { Image } from '../components/Image';
import { Code } from '../components/Code';
import { Sup } from '../components/Sup';
import { Sub } from '../components/Sub';
import { Input } from '../components/Input';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';
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
import { Tabs, TabsList, TabsTab, TabsPanel } from '../components/Tabs';
import { Label } from '../components/Label';
import { Skeleton } from '../components/Skeleton';
import { RadioCardGroup, RadioCard } from '../components/RadioCard';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '../components/Accordion';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { LargeHeading } from '../components/LargeHeading';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
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
} from '@radix-ui/react-icons';
import { Toolbar } from '../custom/Toolbar';

function Home() {
  return (
    <Box>
      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          width: 250,
          px: '$6',
          py: '$6',
        }}
      >
        <Subheading>Quick nav</Subheading>
        <Box as="ul" css={{ listStyle: 'none', p: 0 }}>
          <Box css={{ my: '$1' }}>
            <Link href="#accordion" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Accordion
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
            <Link href="#input" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text size="2" css={{ lineHeight: '20px' }}>
                Input
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
            <Title css={{ ta: 'center', mb: '$3' }}>Radix UI test suite</Title>
            <Subtitle css={{ ta: 'center' }}>An environment for testing Radix DS.</Subtitle>
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
          <Section size="1" css={{ bc: '$slate200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 1
            </Text>
          </Section>
          <Section size="2" css={{ bc: '$slate200', my: '$1' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 2
            </Text>
          </Section>
          <Section size="3" css={{ bc: '$slate200' }}>
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
                border: '1px solid $slate500',
                borderRadius: '$3',
              }}
            >
              <form>
                <Input
                  type="email"
                  size="3"
                  placeholder="Email"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <Input
                  type="password"
                  size="3"
                  placeholder="Password"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <Flex css={{ ai: 'center', jc: 'space-between' }}>
                  <Text size="2" css={{ color: '$slate900' }}>
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
            <Text as="p" size="3" css={{ ta: 'center', bc: '$slate200', py: '$2' }}>
              No max width
            </Text>
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
            <Heading id="typography" css={{ mb: '$2', scrollMarginTop: '$7' }}>
              Typography
            </Heading>
            <Paragraph css={{ mb: '$7' }}>
              A set of pre-formatted components for setting text.
            </Paragraph>

            <Flex css={{ fd: 'column', gap: '$6' }}>
              <Title>This is a title</Title>
              <Subtitle>
                This is a subtitle, used to support a title or heading. It defaults to h2 but can be
                rendered as any h level.
              </Subtitle>
              <LargeHeading>This is a large heading</LargeHeading>
              <Heading>This is a heading</Heading>
              <Subheading>This is a small heading</Subheading>
              <Paragraph>
                This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post. The reason we're using prose here
                is because the most common use case for this container size is longform text. So
                we're previewing some longform text here so we can make sure the container width
                provides an optimal line length for this font size.
              </Paragraph>
              <Paragraph>
                This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post.<Sup>1</Sup> This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post.<Sub>1</Sub>
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
            <Subheading css={{ mb: '$6' }}>Avatar variants</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Text variants</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Control variants</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Default Badge</Subheading>
            <Badge css={{ mb: '$6' }}>Coming soon</Badge>
            <Subheading css={{ mb: '$6' }}>Sizes</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Variants</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Interactive variant</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Default Status</Subheading>
            <Status></Status>
            <Subheading css={{ mt: '$7', mb: '$7' }}>Sizes</Subheading>
            <Flex css={{ gap: '$6', mt: '$6' }}>
              <Status size="1"></Status>
              <Status size="2"></Status>
            </Flex>
            <Subheading css={{ mt: '$7', mb: '$7' }}>Variants</Subheading>
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
            <Heading id="button" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Button
            </Heading>
            <Flex css={{ gap: '$6' }}>
              <Button>Button</Button>
              <Button size="2">Button</Button>
            </Flex>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button>Button</Button>
              <Button variant="blue">Important</Button>
              <Button variant="green">Secure</Button>
              <Button variant="red">Warning</Button>
              <Button variant="ghost">Ghost</Button>
            </Flex>
            <Box
              css={{
                position: 'relative',
                mt: '$6',
              }}
            >
              <img src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
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
              <img src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
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
            <Heading id="input" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Input
            </Heading>
            <Flex css={{ ai: 'flex-start', gap: '$6' }}>
              <Input size="1" placeholder="Size 1" />
              <Input size="2" placeholder="Size 2" />
              <Input size="3" placeholder="Size 3" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="1" placeholder="Ghost" variant="ghost" />
              <Input size="2" placeholder="Ghost" variant="ghost" />
              <Input size="3" placeholder="Ghost" variant="ghost" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Invalid" state="invalid" />
              <Input size="2" placeholder="Valid" state="valid" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Cursor default" cursor="default" />
              <Input size="2" placeholder="Cursor text" cursor="text" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Read only placeholder" readOnly />
              <Input size="2" placeholder="Read only value" defaultValue="100" readOnly />
              <Input size="2" placeholder="Disabled placeholder" disabled />
              <Input size="2" placeholder="Disabled value" defaultValue="100" disabled />
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
              <Input placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input placeholder="Hello world" />
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="1" placeholder="Hello world" />
              <Select>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
                <option>Button</option>
              </Select>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input placeholder="Hello world" />
              <Input placeholder="Hello world" />
              <Input placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="3" placeholder="Hello world" />
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
              <Textarea size="1" placeholder="Size 1"></Textarea>
              <Textarea size="2" placeholder="Size 1"></Textarea>
              <Textarea size="3" placeholder="Size 1"></Textarea>
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Textarea size="2" placeholder="Size 1" disabled></Textarea>
              <Textarea
                size="2"
                placeholder="Size 1"
                readOnly
                defaultValue="eihuweofjew"
              ></Textarea>
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
            <Subheading css={{ mb: '$6' }}>Kbd test</Subheading>
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
              <Text size="3" css={{ color: '$slate900' }}>
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
            <Subheading css={{ mb: '$6' }}>Link variants</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Inline link test</Subheading>
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
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$slate900', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" css={{ p: '$3' }} variant="interactive">
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$slate900', lineHeight: '23px' }}>
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
                      <Text size="2" css={{ color: '$slate900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$slate900' }}>
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
                    <Subheading css={{ mb: '$2' }}>
                      Modulz raises $4.2M to close the gap between design and code
                    </Subheading>
                    <Text size="3" css={{ color: '$slate900', lineHeight: '23px' }}>
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
                        <Text size="2" css={{ color: '$slate900' }}>
                          Colm Tuite
                        </Text>
                      </Flex>
                      <Box>
                        <Text size="2" css={{ color: '$slate900' }}>
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
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$slate900', lineHeight: '23px' }}>
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
                      <Text size="2" css={{ color: '$slate900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$slate900' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="button" href="#" variant="active" css={{ p: '$3' }}>
                <Text size="3" css={{ lineHeight: '23px', fontWeight: 500 }}>
                Default Variants
                  </Text>
                  <Text size="3" css={{ color: '$slate900', lineHeight: '23px' }}>
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
              <AlertDialogTrigger as={Button}>Alert Dialog</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle as={Subheading}>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription as={Text} css={{ mt: '$2' }}>
                  This will do a very dangerous thing. Thar be dragons!
                </AlertDialogDescription>
                <Flex css={{ jc: 'flex-end', gap: '$3', mt: '$5' }}>
                  <AlertDialogCancel as={Button} variant="ghost">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction as={Button} variant="red">
                    Delete
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
              <DialogTrigger as={Button}>Open dialog</DialogTrigger>
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
              <DialogTrigger as={Button}>Dialog</DialogTrigger>

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
                  <PopoverTrigger as={Button}>Open</PopoverTrigger>
                  <PopoverContent>
                    <PopoverClose as={Button} variant="ghost">
                      Close
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
            <Heading id="progressbar" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              ProgressBar
            </Heading>
            <Subheading css={{ mb: '$6' }}>Default</Subheading>
            <Box css={{ mb: '$6' }}>
              <ProgressBar value={50} />
            </Box>
            <Subheading css={{ mb: '$6' }}>Indeterminate state</Subheading>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Indeterminate</Text>
              <ProgressBar css={{ my: '$2' }} />
            </Box>
            <Subheading css={{ mb: '$6' }}>UI test</Subheading>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Download 50% complete</Text>
              <ProgressBar max={100} value={80} css={{ my: '$2' }} />
              <Text size="1" css={{ color: '$slate900' }}>
                46 hours remaining
              </Text>
            </Box>
            <Subheading css={{ mb: '$6' }}>Gradient variant</Subheading>
            <Box css={{ mb: '$6' }}>
              <ProgressBar max={100} variant="gradient" value={100} />
            </Box>
            <Subheading css={{ mb: '$6' }}>Blue variant</Subheading>
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
                <PopoverTrigger as={Button}>Popover</PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Button}>Hide arrow</PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }} hideArrow>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Button} variant="blue">
                  Blue
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Button} variant="green">
                  Green
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Button} variant="red">
                  Red
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Button} variant="ghost">
                  Ghost
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={IconButton}>
                  <VideoIcon />
                </PopoverTrigger>
                <PopoverContent css={{ padding: '$3' }}>
                  <Text size="2" css={{ lineHeight: '18px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in.
                  </Text>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger as={Badge} size="2" variant="violet" interactive>
                  Badge
                  <Box css={{ ml: '$1' }}>
                    <CaretDownIcon />
                  </Box>
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
                <AccordionButton>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </AccordionButton>
                <AccordionPanel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="accordion-two">
                <AccordionButton>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </AccordionButton>
                <AccordionPanel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="accordion-three">
                <AccordionButton>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </AccordionButton>
                <AccordionPanel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="accordion-four">
                <AccordionButton>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </AccordionButton>
                <AccordionPanel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </AccordionPanel>
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
            <Subheading css={{ mb: '$6' }}>Default</Subheading>
            <Tabs defaultValue="tab-one">
              <TabsList>
                <TabsTab value="tab-one">General</TabsTab>
                <TabsTab value="tab-two">Hosting</TabsTab>
                <TabsTab value="tab-three">Editor</TabsTab>
                <TabsTab value="tab-four">Billing</TabsTab>
                <TabsTab value="tab-five">SEO</TabsTab>
              </TabsList>
              <TabsPanel value="tab-one">
                <Text>Panel 1</Text>
              </TabsPanel>
              <TabsPanel value="tab-two">
                <Text>Panel 2</Text>
              </TabsPanel>
              <TabsPanel value="tab-three">
                <Text>Panel 3</Text>
              </TabsPanel>
              <TabsPanel value="tab-four">
                <Text>Panel 4</Text>
              </TabsPanel>
              <TabsPanel value="tab-five">
                <Text>Panel 5</Text>
              </TabsPanel>
            </Tabs>

            <Subheading css={{ mb: '$6', mt: '$7' }}>Vertical orientation</Subheading>
            <Tabs defaultValue="tab-one" orientation="vertical">
              <TabsList>
                <TabsTab value="tab-one">General</TabsTab>
                <TabsTab value="tab-two">Hosting</TabsTab>
                <TabsTab value="tab-three">Editor</TabsTab>
                <TabsTab value="tab-four">Billing</TabsTab>
                <TabsTab value="tab-five">SEO</TabsTab>
                <TabsTab value="tab-six">Forms</TabsTab>
                <TabsTab value="tab-seven">Fonts</TabsTab>
                <TabsTab value="tab-eight">Backups</TabsTab>
                <TabsTab value="tab-nine">Integrations</TabsTab>
                <TabsTab value="tab-ten">Custom code</TabsTab>
              </TabsList>
              <TabsPanel value="tab-one">
                <Text>Panel 1</Text>
              </TabsPanel>
              <TabsPanel value="tab-two">
                <Text>Panel 2</Text>
              </TabsPanel>
              <TabsPanel value="tab-three">
                <Text>Panel 3</Text>
              </TabsPanel>
              <TabsPanel value="tab-four">
                <Text>Panel 4</Text>
              </TabsPanel>
              <TabsPanel value="tab-five">
                <Text>Panel 5</Text>
              </TabsPanel>
              <TabsPanel value="tab-six">
                <Text>Panel 6</Text>
              </TabsPanel>
              <TabsPanel value="tab-seven">
                <Text>Panel 7</Text>
              </TabsPanel>
              <TabsPanel value="tab-eight">
                <Text>Panel 8</Text>
              </TabsPanel>
              <TabsPanel value="tab-nine">
                <Text>Panel 9</Text>
              </TabsPanel>
              <TabsPanel value="tab-ten">
                <Text>Panel 10</Text>
              </TabsPanel>
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
            <Flex css={{ borderBottom: '1px solid $slate500' }}>
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
            <Subheading css={{ mb: '$6' }}>Default</Subheading>
            <Box css={{ width: '150px', mb: '$7' }}>
              <Slider defaultValue={[50]} />
            </Box>
            <Subheading css={{ mb: '$6' }}>Range</Subheading>
            <Flex css={{ gap: '$4', width: '150px', mb: '$7' }}>
              <Slider defaultValue={[25, 75]} />
            </Flex>
            <Subheading css={{ mb: '$6' }}>Vertical orientaiton</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Sizes</Subheading>
            <Checkbox css={{ mr: '$5' }} />
            <Checkbox size="2" css={{ mr: '$5' }} />
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
            <Subheading css={{ mb: '$6' }}>Sizes</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Sizes</Subheading>
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
              <DropdownMenuTrigger as={Button}>Dropdown</DropdownMenuTrigger>
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
                    bc: '$slate100',
                    border: '2px dashed $colors$slate500',
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
