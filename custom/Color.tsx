import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Code } from '../components/Code';
import { Flex } from '../components/Flex';
import { Paragraph } from '../components/Paragraph';

import { Title } from '../components/Title';

export function Color() {
  return (
    <Section size="3">
      <Container size="2">
        <Box css={{ height: 35, backgroundColor: '$hiContrast' }}></Box>
        <Text css={{ color: '$hiContrast' }}>fewfwefwefw</Text>
        <Box css={{ height: 35, backgroundColor: '$canvas' }}></Box>
      </Container>

      <Container size="3" css={{ py: '$7' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
            gap: 2,
            ai: 'center',
          }}
        >
          <Box></Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>100</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>200</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>300</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>400</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>500</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>600</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>700</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>800</Text>
          </Box>
          <Box css={{ ta: 'center', pb: '$2' }}>
            <Text css={{ fontSize: '$2', color: '$gray900' }}>900</Text>
          </Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gray</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Red</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$red900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Crimson</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$crimson100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$crimson900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Pink</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$pink900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Purple</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$purple900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Violet</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$violet900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Indigo</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$indigo100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$indigo900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Blue</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Turquoise</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$turquoise900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Teal</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$teal100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$teal900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Green</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$green900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Lime</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$lime100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$lime900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Yellow</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$yellow900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Orange</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$orange900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Gold</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$gold100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$gold900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Brown</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$brown100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$brown900' }}></Box>

          <Box>
            <Text css={{ fontSize: '$2' }}>Bronze</Text>
          </Box>
          <Box css={{ height: 35, backgroundColor: '$bronze100' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze200' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze300' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze400' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze500' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze700' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze800' }}></Box>
          <Box css={{ height: 35, backgroundColor: '$bronze900' }}></Box>
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
            <Text size="3" css={{ color: '$gray900' }}>
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
            <Text size="3" css={{ color: '$gray900' }}>
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
              backgroundColor: '$turquoise800',
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
            <Text size="3" css={{ color: '$gray900' }}>
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
            <Text size="3" css={{ color: '$gray900' }}>
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
              backgroundColor: '$turquoise200',
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
            <Text size="3" css={{ color: '$turquoise900' }}>
              Turquoise
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$turquoise100',
            }}
          >
            <Text size="3" css={{ color: '$turquoise900' }}>
              Turquoise
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$turquoise200',
            }}
          >
            <Text size="3" css={{ color: '$turquoise900' }}>
              Turquoise
            </Text>
          </Flex>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: 100,
              backgroundColor: '$turquoise800',
            }}
          >
            <Text size="3" css={{ color: 'white' }}>
              Turquoise
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
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray100' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray200' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray300' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray400' }}></Box>
          <Box
            css={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: 1,
              backgroundColor: '$gray500',
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
              backgroundColor: '$turquoise100',
              border: '1px solid $turquoise500',
            }}
          >
            <Text size="3" as="p" css={{ color: '$turquoise900', lineHeight: '23px' }}>
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
