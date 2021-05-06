import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Code } from '../components/Code';
import { Flex } from '../components/Flex';
import { Paragraph } from '../components/Paragraph';
import { Subheading } from '../components/Subheading';
import { Heading } from '../components/Heading';
import { Title } from '../components/Title';

function TextTestCard({ color }: { color: string }) {
  const color000 = `$${color}000`;
  const color100 = `$${color}100`;
  const color200 = `$${color}200`;
  const color1000 = `$${color}1000`;

  const text = `The pigeon guillemot (Cepphus columba) is a species of bird in the auk family, Alcidae.
  One of three species in the genus Cepphus, it is most closely related to the spectacled
  guillemot. There are five subspecies of the pigeon guillemot; all subspecies, when in
  breeding plumage, are dark brown with a black iridescent sheen and a distinctive wing
  patch broken by a brown-black wedge. Its non-breeding plumage has mottled grey and black
  upperparts and white underparts. The long bill is black, as are the claws. The legs, feet,
  and inside of the mouth are red. It closely resembles the black guillemot, which is
  slightly smaller and lacks the dark wing wedge present in the pigeon guillemot. Combined,
  the two form a superspecies.`;

  return (
    <>
      <Box css={{ backgroundColor: color000, p: '$9', mb: '$5' }}>
        <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>{color}</Heading>
        <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
          {text}
        </Text>
      </Box>
      <Box css={{ backgroundColor: color100, p: '$9', mb: '$5' }}>
        <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>{color}</Heading>
        <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
          {text}
        </Text>
      </Box>
      <Box css={{ backgroundColor: color200, p: '$9', mb: '$5' }}>
        <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>{color}</Heading>
        <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
          {text}
        </Text>
      </Box>
      <Box css={{ backgroundColor: color1000, p: '$9', mb: '$5' }}>
        <Heading css={{ mb: '$2', color: color100, textTransform: 'capitalize' }}>{color}</Heading>
        <Text size="3" css={{ lineHeight: '25px', color: color100 }}>
          {text}
        </Text>
      </Box>
    </>
  );
}

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

export function Color() {
  return (
    <Section size="3">
      <Container size="3">
        <Box
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            ai: 'center',
          }}
        >
          <TextTestCard color="gray" />
          <TextTestCard color="quartz" />
          <TextTestCard color="slate" />
          <TextTestCard color="sage" />
          <TextTestCard color="olive" />
          <TextTestCard color="sand" />
          <TextTestCard color="red" />
          <TextTestCard color="crimson" />
          <TextTestCard color="pink" />
          <TextTestCard color="plum" />
          <TextTestCard color="purple" />
          <TextTestCard color="violet" />
          <TextTestCard color="indigo" />
          <TextTestCard color="blue" />
          <TextTestCard color="cyan" />
          <TextTestCard color="teal" />
          <TextTestCard color="green" />
          <TextTestCard color="lime" />
          <TextTestCard color="yellow" />
          <TextTestCard color="orange" />
          <TextTestCard color="brown" />
          <TextTestCard color="bronze" />
          <TextTestCard color="gold" />
        </Box>
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

          <Palette color="gray" />
          <Palette color="grayA" />
          <Palette color="quartz" />
          <Palette color="quartzA" />
          <Palette color="slate" />
          <Palette color="slateA" />
          <Palette color="sand" />
          <Palette color="sandA" />
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
          <Palette color="blueA" />
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

      <Container size="2">
        <Box as="ol" css={{ my: '$3' }}>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Step 1: Subtle backgrounds
            </Text>
          </li>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Steps 2–4: Interactive backgrounds
            </Text>
          </li>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Step 5: Separators
            </Text>
          </li>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Steps 6–7: Borders
            </Text>
          </li>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Step 8: Backgrounds
            </Text>
          </li>
          <li>
            <Text size="3" css={{ color: '$hiContrast', lineHeight: '25px' }}>
              Step 9: Text
            </Text>
          </li>
        </Box>
      </Container>

      <Container size="2">
        <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
          Warm & cool hues
        </Text>
        <Paragraph css={{ mb: '$7' }}>
          There are 8 warm hues and 8 cool hues. All <Code>800</Code> colors should be balanced
          optically, especially if they are adjacent on the spectrum.
        </Paragraph>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink800',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green800',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime800',
            }}
          ></Flex>
        </Grid>
      </Container>

      <Container size="2">
        <Paragraph css={{ my: '$7' }}>
          All <Code>200</Code> colors should be balanced optically, especially if they are adjacent
          on the spectrum.
        </Paragraph>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Warm
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$brown200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink200',
            }}
          ></Flex>
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$slate900' }}>
              Cool
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green200',
            }}
          ></Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime200',
            }}
          ></Flex>
        </Grid>
      </Container>

      <Container size="2">
        <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
          Text color test
        </Text>
        <Paragraph css={{ mb: '$7' }}>
          The <Code>900</Code> text color should look good and pass AA on all background colors.
          Text should also pass on the <Code>800</Code> backgrounds.
        </Paragraph>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$red900' }}>
              Red
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red100',
            }}
          >
            <Text size="3" css={{ color: '$red900' }}>
              Red
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red200',
            }}
          >
            <Text size="3" css={{ color: '$red900' }}>
              Red
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$red800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Red
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$crimson900' }}>
              Crimson
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson100',
            }}
          >
            <Text size="3" css={{ color: '$crimson900' }}>
              Crimson
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson200',
            }}
          >
            <Text size="3" css={{ color: '$crimson900' }}>
              Crimson
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$crimson800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Crimson
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$pink900' }}>
              Pink
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink100',
            }}
          >
            <Text size="3" css={{ color: '$pink900' }}>
              Pink
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink200',
            }}
          >
            <Text size="3" css={{ color: '$pink900' }}>
              Pink
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$pink800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Pink
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$plum900' }}>
              Plum
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$plum100',
            }}
          >
            <Text size="3" css={{ color: '$plum900' }}>
              Plum
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$plum200',
            }}
          >
            <Text size="3" css={{ color: '$plum900' }}>
              Plum
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$plum800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Plum
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$purple900' }}>
              Purple
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple100',
            }}
          >
            <Text size="3" css={{ color: '$purple900' }}>
              Purple
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple200',
            }}
          >
            <Text size="3" css={{ color: '$purple900' }}>
              Purple
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$purple800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Purple
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$violet900' }}>
              Violet
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet100',
            }}
          >
            <Text size="3" css={{ color: '$violet900' }}>
              Violet
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet200',
            }}
          >
            <Text size="3" css={{ color: '$violet900' }}>
              Violet
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$violet800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Violet
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$indigo900' }}>
              Indigo
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo100',
            }}
          >
            <Text size="3" css={{ color: '$indigo900' }}>
              Indigo
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo200',
            }}
          >
            <Text size="3" css={{ color: '$indigo900' }}>
              Indigo
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$indigo800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Indigo
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$blue900' }}>
              Blue
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue100',
            }}
          >
            <Text size="3" css={{ color: '$blue900' }}>
              Blue
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue200',
            }}
          >
            <Text size="3" css={{ color: '$blue900' }}>
              Blue
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$blue800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Blue
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$cyan900' }}>
              cyan
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan100',
            }}
          >
            <Text size="3" css={{ color: '$cyan900' }}>
              cyan
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan200',
            }}
          >
            <Text size="3" css={{ color: '$cyan900' }}>
              cyan
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$cyan800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              cyan
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$teal900' }}>
              Teal
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal100',
            }}
          >
            <Text size="3" css={{ color: '$teal900' }}>
              Teal
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal200',
            }}
          >
            <Text size="3" css={{ color: '$teal900' }}>
              Teal
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$teal800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Teal
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$green900' }}>
              Green
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green100',
            }}
          >
            <Text size="3" css={{ color: '$green900' }}>
              Green
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green200',
            }}
          >
            <Text size="3" css={{ color: '$green900' }}>
              Green
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$green800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Green
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$lime900' }}>
              Lime
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime100',
            }}
          >
            <Text size="3" css={{ color: '$lime900' }}>
              Lime
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime200',
            }}
          >
            <Text size="3" css={{ color: '$lime900' }}>
              Lime
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$lime800',
            }}
          >
            <Text size="3" css={{ color: 'black' }}>
              Lime
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$yellow900' }}>
              Yellow
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow100',
            }}
          >
            <Text size="3" css={{ color: '$yellow900' }}>
              Yellow
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow200',
            }}
          >
            <Text size="3" css={{ color: '$yellow900' }}>
              Yellow
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$yellow800',
            }}
          >
            <Text size="3" css={{ color: 'black' }}>
              Yellow
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$orange900' }}>
              Orange
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange100',
            }}
          >
            <Text size="3" css={{ color: '$orange900' }}>
              Orange
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange200',
            }}
          >
            <Text size="3" css={{ color: '$orange900' }}>
              Orange
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$orange800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Orange
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$bronze900' }}>
              Bronze
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze100',
            }}
          >
            <Text size="3" css={{ color: '$bronze900' }}>
              Bronze
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze200',
            }}
          >
            <Text size="3" css={{ color: '$bronze900' }}>
              Bronze
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$bronze800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Bronze
            </Text>
          </Flex>

          <Flex css={{ ai: 'center', jc: 'center', height: 100 }}>
            <Text size="3" css={{ color: '$gold900' }}>
              Gold
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold100',
            }}
          >
            <Text size="3" css={{ color: '$gold900' }}>
              Gold
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold200',
            }}
          >
            <Text size="3" css={{ color: '$gold900' }}>
              Gold
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$gold800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Gold
            </Text>
          </Flex>
        </Grid>
      </Container>

      <Container size="2">
        <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
          Lines
        </Text>
        <Paragraph css={{ mb: '$7' }}>
          The <Code>500</Code> line should be very subtle, but visible on all backgrounds.
        </Paragraph>
      </Container>

      <Container size="2">
        <Flex css={{ position: 'relative' }}>
          <Box
            css={{
              fb: '0',
              fg: '1',
              height: 160,
              backgroundColor: '$loContrast',
            }}
          ></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate100' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate200' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate300' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$slate400' }}></Box>
          <Box
            css={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: 1,
              backgroundColor: '$slate500',
            }}
          ></Box>
        </Flex>
      </Container>

      <Container size="2">
        <Paragraph css={{ my: '$7' }}>
          These <Code>500</Code> lines should have a nice constrast against the <Code>100</Code>{' '}
          background. Make sure the borders don't look too harsh or vibrant.
        </Paragraph>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '$7',
            ai: 'center',
          }}
        >
          <Box
            css={{
              p: '$3',
              borderRadius: '$3',
              backgroundColor: '$red100',
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
              backgroundColor: '$crimson100',
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
              backgroundColor: '$pink100',
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
              backgroundColor: '$purple100',
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
              backgroundColor: '$violet100',
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
              backgroundColor: '$indigo100',
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
              backgroundColor: '$blue100',
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
              backgroundColor: '$cyan100',
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
              backgroundColor: '$teal100',
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
              backgroundColor: '$green100',
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
              backgroundColor: '$lime100',
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
              backgroundColor: '$yellow100',
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
              backgroundColor: '$orange100',
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
              backgroundColor: '$bronze100',
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
              backgroundColor: '$gold100',
              border: '1px solid $gold500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$gold900', lineHeight: '23px' }}>
              Warning: obsessing over color is a terrible idea. Chill down ffs.
            </Text>
          </Box>
        </Grid>
      </Container>

      <Box css={{ backgroundColor: '$red800', height: '100vh', p: '$9', mt: '$9' }}>
        <Title css={{ color: 'white' }}>This should look good and pass contrast ratio.</Title>
      </Box>
    </Section>
  );
}
