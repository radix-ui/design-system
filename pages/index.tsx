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
import { Textarea } from '../components/Textarea';
import { Image } from '../components/Image';
import { Code } from '../components/Code';
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
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';
// import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Kbds } from '../custom/Kbds';
import { Menus } from '../custom/Menus';
import { Status } from '../components/Status';
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
      <Box css={{ bc: '$loContrast', height: '100%' }}>
        <Section size="3">
          <Container size="2">
            <Title css={{ ta: 'center', mb: '$3' }}>Radix UI test suite</Title>
            <Subtitle css={{ ta: 'center' }}>
              An environment for testing tokens, theming, and components on Radix UI design system.
            </Subtitle>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Section size="1" css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 1
            </Text>
          </Section>
          <Section size="2" css={{ bc: '$gray200', my: '$1' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 2
            </Text>
          </Section>
          <Section size="3" css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 3
            </Text>
          </Section>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="1">
            <Box
              css={{
                p: '$5',
                border: '1px solid $gray500',
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
                  <Text size="2" css={{ color: '$gray900' }}>
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
            <Text as="p" size="3" css={{ ta: 'center', bc: '$gray200', py: '$2' }}>
              No max width
            </Text>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading as={'h4' as any} css={{ mb: '$6' }}>
              Text
            </Subheading>
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
                <Text size="6" as="h1" color="red" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h2" color="crimson" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h3" color="pink" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="purple" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="violet" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="indigo" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="blue" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="turquoise" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="teal" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="green" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="lime" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="yellow" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="orange" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="gold" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="bronze" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
            </Flex>
          </Container>

          <Container size="2">
            <Text
              size="6"
              as="h4"
              css={{
                fontWeight: 500,
                lineHeight: '27px',
                mt: '$8',
                mb: '$1',
              }}
            >
              Text components
            </Text>
            <Paragraph css={{ mb: '$7' }}>
              A set of pre-formatted components for setting text.
            </Paragraph>

            <Flex css={{ fd: 'column', gap: '$6' }}>
              <Title>This is a title</Title>
              <Subtitle>
                This is a subtitle, used to support a title or heading. It defaults to h2 but can be
                rendered as any h level.
              </Subtitle>
              <Heading>This is a large heading</Heading>
              <Subheading>This is a small heading</Subheading>
              <Paragraph>
                This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post. The reason we're using prose here
                is because the most common use case for this container size is longform text. So
                we're previewing some longform text here so we can make sure the container width
                provides an optimal line length for this font size.
              </Paragraph>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
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
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="button" />
            </Flex>
          </Container>
        </Section>

        <Section size="3">
          <Container size="3" css={{ position: 'relative' }}>
            <Toolbar />
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Badge</Subheading>
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
            <Flex css={{ gap: '$5', fw: 'wrap' }}>
              <Badge size="2" variant="red">
                <Box css={{ mr: 5 }}>
                  <Status size="1" color="red" />
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
              <Badge size="2" variant="turquoise">
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
              <Badge as="button" size="2" variant="turquoise" interactive>
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
            <Subheading css={{ mb: '$6' }}>Button</Subheading>
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
            <Subheading css={{ mb: '$6' }}>Input</Subheading>
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
            <Subheading css={{ mb: '$6' }}>ControlGroup</Subheading>
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
              <Input size="2" placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Input size="2" placeholder="Hello world" />
              <Input size="2" placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="3" placeholder="Hello world" />
              <Button size="2">Button</Button>
            </ControlGroup>

            <Flex
              css={{
                position: 'relative',
                width: '225px',
                mt: '$6',
                overflow: 'hidden',
                borderRadius: '$2',
              }}
            >
              <Flex
                css={{
                  backgroundColor: '$gray200',
                  userSelect: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '$5',
                  boxShadow: 'inset 0 0 0 1px $colors$gray600',
                  fontSize: '$2',
                  color: '$gray900',
                  flexShrink: 0,
                  px: '$1',
                }}
              >
                www.
              </Flex>
              <Input size="2" placeholder="Hello world" />
            </Flex>

            <Flex
              css={{
                position: 'relative',
                width: '225px',
                mt: '$6',
                overflow: 'hidden',
                borderRadius: '$2',
              }}
            >
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  backgroundColor: '$gray200',
                  userSelect: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '$5',
                  boxShadow: 'inset 0 0 0 1px $colors$gray600',
                  fontSize: '$2',
                  color: '$gray900',
                  flexShrink: 0,
                  px: '$1',
                }}
              >
                .com
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>InputWrapper</Subheading>
            <Box css={{ position: 'relative', width: '225px' }}>
              <Input size="2" placeholder="Hello world" css={{ pl: 22 }} />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'space-between',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center', cursor: 'default', p: '$1' }}>
                  <Flex
                    css={{ ai: 'center', jc: 'center', color: '$gray900', width: 15, height: 15 }}
                  >
                    <MagnifyingGlassIcon />
                  </Flex>
                </Flex>
                <Flex css={{ ai: 'center', cursor: 'default', p: '$1', pointerEvents: 'auto' }}>
                  <IconButton variant="ghost" css={{ width: 15, height: 15, borderRadius: '$1' }}>
                    <Cross1Icon />
                  </IconButton>
                  <Separator size="1" orientation="vertical" css={{ mx: '$1' }} />
                  <IconButton variant="ghost" css={{ width: 15, height: 15, borderRadius: '$1' }}>
                    <ArrowRightIcon />
                  </IconButton>
                </Flex>
              </Flex>
            </Box>

            <Box css={{ position: 'relative', width: '225px', mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'flex-end',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center', p: '$1' }}>
                  <Button
                    variant="blue"
                    css={{ pointerEvents: 'auto', height: 19, px: '$1', borderRadius: '$1' }}
                  >
                    Invite
                  </Button>
                </Flex>
              </Flex>
            </Box>

            <Box css={{ position: 'relative', width: '225px', mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'flex-end',
                  px: '$1',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center' }}>
                  <Button variant="blue" css={{ pointerEvents: 'auto' }}>
                    Invite
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Textarea</Subheading>
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
            <Flex css={{ ai: 'center', jc: 'space-between' }}>
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
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex css={{ ai: 'baseline' }}>
              <Text size="3" css={{ fontWeight: '500' }}>
                Colm Tuite
              </Text>
              <VerifiedBadge css={{ as: 'center', mx: '$1' }} />
              <Text size="3" css={{ color: '$gray900' }}>
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
            <Flex css={{ gap: '$3' }}>
              <Box css={{ width: 250 }}>
                <Card css={{ p: '$3' }}>
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
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
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
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
                      <Text size="2" css={{ color: '$gray900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$gray900' }}>
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
                    <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
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
                        <Text size="2" css={{ color: '$gray900' }}>
                          Colm Tuite
                        </Text>
                      </Flex>
                      <Box>
                        <Text size="2" css={{ color: '$gray900' }}>
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
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
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
                      <Text size="2" css={{ color: '$gray900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$gray900' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
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
            <Box css={{ mb: '$6' }}>
              <Text size="2">Indeterminate</Text>
              <ProgressBar css={{ my: '$2' }} />
            </Box>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Download 50% complete</Text>
              <ProgressBar max={100} value={80} css={{ my: '$2' }} />
              <Text size="1" css={{ color: '$gray900' }}>
                46 hours remaining
              </Text>
            </Box>
            <Box css={{ mb: '$6' }}>
              <ProgressBar max={100} color="gradient" value={100} />
            </Box>
            <Box css={{ mb: '$6' }}>
              <ProgressBar color="blue" max={100} value={50} />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Popover>
              <PopoverTrigger as={Button}>Popover</PopoverTrigger>
              <PopoverContent css={{ padding: '$4' }} hideArrow>
                <Text>Hello, from Popover</Text>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger as={Button}>Popover</PopoverTrigger>
              <PopoverContent css={{ padding: '$4' }}>
                <Text>Hello, from Popover</Text>
              </PopoverContent>
            </Popover>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Accordion>
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

            <Tabs defaultValue="tab-one" orientation="vertical" css={{ mt: '$9' }}>
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
          <Container size="3" css={{ py: '$7' }}>
            <Flex css={{ borderBottom: '1px solid $gray500' }}>
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
            <Box css={{ width: '100px' }}>
              <Slider defaultValue={[50]} />
            </Box>
            <Flex css={{ gap: '$4' }}>
              <Slider defaultValue={[25]} />
              <Slider defaultValue={[25, 75]} />
            </Flex>
            <Box css={{ mt: '$6' }}>
              <Slider defaultValue={[50]} orientation="vertical" />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size="3">
          <Container size="2">
            <Grid
              css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7',
              }}
            >
              <Box>
                <SimpleToggle shape="circle">
                  <ShadowNoneIcon />
                </SimpleToggle>
              </Box>
              <Flex css={{ gap: 2 }}>
                <SimpleToggle shape="circle">
                  <FontItalicIcon />
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <FontStyleIcon />
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <HeadingIcon />
                </SimpleToggle>
              </Flex>
              <Flex>
                <SimpleToggle shape="square">
                  <TextAlignLeftIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignCenterIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignRightIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignJustifyIcon />
                </SimpleToggle>
              </Flex>
            </Grid>
            <Flex css={{ alignItems: 'center', gap: '$1' }}>
              <Flex css={{ gap: 2 }}>
                <SimpleToggle shape="circle">
                  <FontItalicIcon />
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <FontStyleIcon />
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <HeadingIcon />
                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                  <TextAlignLeftIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignCenterIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignRightIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <TextAlignJustifyIcon />
                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                  <LetterCaseCapitalizeIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <LetterCaseUppercaseIcon />
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <LetterCaseLowercaseIcon />
                </SimpleToggle>
              </Flex>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <Checkbox css={{ mr: '$5' }} />
            <Checkbox size="2" css={{ mr: '$5' }} />
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
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
          <Container size="2" css={{ py: '$7' }}>
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
            <Switch />
            <Switch size="2" css={{ ml: '$6' }} />
          </Container>
        </Section>
        <Menus />
        <Kbds />
      </Box>
    </Box>
  );
}

export default Home;
