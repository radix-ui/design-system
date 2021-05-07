import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Text } from '../components/Text';
import { Separator } from '../components/Separator';
import { Section } from '../components/Section';
import { ScrollArea } from '../components/Scrollbar';
import { Subtitle } from '../components/Subtitle';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Toolbar } from '../custom/Toolbar';

import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';

function Palette({ color }: { color: string }) {
  const alpha = /A$/.test(color);
  color = alpha ? color.replace(/A$/, '') : color;

  if (alpha) {
    return (
      <Grid
        css={{
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          bc: `$${color}000`,
          gap: 2,
          marginTop: -2,
          ai: 'center',
        }}
      >
        <Box css={{ bc: 'white' }}>
          <Text css={{ fontSize: '$2', lineHeight: '35px', textTransform: 'capitalize' }}>
            {color} A
          </Text>
        </Box>
        <Box css={{ height: 35 }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A100` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A200` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A300` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A400` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A500` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A600` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A700` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A800` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A900` }} />
        <Box css={{ height: 35, backgroundColor: `$${color}A1000` }} />
      </Grid>
    );
  }

  return (
    <Grid
      css={{
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: 2,
        ai: 'center',
      }}
    >
      <Box>
        <Text css={{ fontSize: '$2', textTransform: 'capitalize' }}>{color}</Text>
      </Box>
      <Box css={{ height: 35, backgroundColor: `$${color}000` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}100` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}200` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}300` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}400` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}500` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}600` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}700` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}800` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}900` }} />
      <Box css={{ height: 35, backgroundColor: `$${color}1000` }} />
    </Grid>
  );
}

function Test() {
  return (
    <Box css={{ height: '100%' }}>
      <Box
        css={{
          height: '100%',
          px: 250,
          pt: '36px',
          'body.theme-default &': { bc: 'white' },
          'body.dark-theme &': { bc: 'black' },
        }}
      >
        <Container size="3" css={{ py: '$7' }}>
        <Grid css={{ gap: 2 }}>
          <Grid
            css={{
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: 2,
              ai: 'center',
            }}
          >
            <Box></Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>000</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>100</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>200</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>300</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>400</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>500</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>600</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>700</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>800</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>900</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>1000</Text>
            </Box>
          </Grid>

          <Palette color="gray" />
          <Palette color="quartz" />
          <Palette color="slate" />
          <Palette color="sand" />
          <Palette color="sage" />
          <Palette color="olive" />
          <Palette color="red" />
          <Palette color="crimson" />
          <Palette color="pink" />
          <Palette color="plum" />
          <Palette color="purple" />
          <Palette color="violet" />
          <Palette color="indigo" />
          <Palette color="blue" />
          <Palette color="cyan" />
          <Palette color="teal" />
          <Palette color="green" />
          <Palette color="lime" />
          <Palette color="yellow" />
          <Palette color="orange" />
          <Palette color="brown" />
          <Palette color="bronze" />
          <Palette color="gold" />
        </Grid>
      </Container>

      <Container size="3" css={{ py: '$7' }}>
        <Grid css={{ gap: 2 }}>
          <Grid
            css={{
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
              gap: 2,
              ai: 'center',
            }}
          >
            <Box></Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>000</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>100</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>200</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>300</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>400</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>500</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>600</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>700</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>800</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>900</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text css={{ fontSize: '$2', color: '$slate900' }}>1000</Text>
            </Box>
          </Grid>
          
          <Box css={{ filter: 'grayscale(1)' }}>
          <Palette color="gray" />
          <Palette color="quartz" />
          <Palette color="slate" />
          <Palette color="sand" />
          <Palette color="sage" />
          <Palette color="olive" />
          <Palette color="red" />
          <Palette color="crimson" />
          <Palette color="pink" />
          <Palette color="plum" />
          <Palette color="purple" />
          <Palette color="violet" />
          <Palette color="indigo" />
          <Palette color="blue" />
          <Palette color="cyan" />
          <Palette color="teal" />
          <Palette color="green" />
          <Palette color="brown" />
          <Palette color="bronze" />
          <Palette color="gold" />
          <Palette color="lime" />
          <Palette color="orange" />
          <Palette color="yellow" />
          </Box>
        </Grid>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '$3',
            ai: 'center',
          }}
        >
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$red800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$crimson800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$pink800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$plum800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$purple800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$violet800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$indigo800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$blue800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$cyan800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$teal800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$green800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$lime800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$yellow800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$orange800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$brown800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$bronze800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
          <Box
            css={{
              height: '$8',
              px: '$4',
              borderRadius: '$2',
              backgroundColor: '$gold800',
              color: 'white',
              display: 'inline-flex',
              ai: 'center',
              fontSize: '$3',
            }}
          >
              This should be legible
          </Box>
        </Grid>
      </Container>

      <Container size="3" css={{ py: '$7' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '$3',
            ai: 'center',
          }}
        >
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$red200',
              border: '1px solid $red500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$red900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$crimson200',
              border: '1px solid $red500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$crimson900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$pink200',
              border: '1px solid $pink500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$pink900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$plum200',
              border: '1px solid $plum500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$plum900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$purple200',
              border: '1px solid $purple500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$purple900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$violet200',
              border: '1px solid $violet500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$violet900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$indigo200',
              border: '1px solid $indigo500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$indigo900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$blue200',
              border: '1px solid $blue500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$blue900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$cyan200',
              border: '1px solid $cyan500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$cyan900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$teal200',
              border: '1px solid $teal500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$teal900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$green200',
              border: '1px solid $green500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$green900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$lime200',
              border: '1px solid $lime500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$lime900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$yellow200',
              border: '1px solid $yellow500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$yellow900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$orange200',
              border: '1px solid $orange500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$orange900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$brown200',
              border: '1px solid $brown500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$brown900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$bronze200',
              border: '1px solid $bronze500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$bronze900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$gold200',
              border: '1px solid $gold500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$gold900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
        </Grid>
      </Container>

      </Box>
    </Box>
  );
}

export default Test;
