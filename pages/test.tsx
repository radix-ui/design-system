import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { VerifiedBadge } from '../components/VerifiedBadge';
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
import { Skeleton } from '../components/Skeleton';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '../components/Accordion';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Toolbar } from '../custom/Toolbar';
import {
  ActivityLogIcon,
  BarChartIcon,
  CodeIcon,
  CommitIcon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HamburgerMenuIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  PlayIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
} from '@radix-ui/react-icons';

function Test() {
  return (
    <Box css={{ height: '100%' }}>
      <Toolbar />
      <Box css={{ bc: '$loContrast', height: '100%', px: 250, pt: '36px' }}>
        <ScrollArea>
          <Section size="3">
            <Container size="2">
              <Text
                size="6"
                as="h4"
                css={{
                  fontWeight: 500,
                  lineHeight: '27px',
                  mb: '$1',
                }}
              >
                Tracking test
              </Text>
              <Paragraph css={{ mb: '$7' }}>Tracking should be tight and sexi.</Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    100
                  </Text>
                  <Text size="1" as="p" css={{ lineHeight: '20px' }}>
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
                Corrective indent test
              </Text>
              <Paragraph css={{ mb: '$7' }}>
                Text should be aligned with the yellow box along the left edge. There's some optical
                shit going on here too, so this is not gospel.
              </Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4', position: 'relative' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate900', width: '65px' }}>
                    100
                  </Text>
                  <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Box
                  css={{
                    position: 'absolute',
                    top: '0',
                    left: '65px',
                    right: '0',
                    bottom: '0',
                    background: '$yellow500',
                    zIndex: '-1',
                  }}
                ></Box>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Color />
        </ScrollArea>

        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Test;
