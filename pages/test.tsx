import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';
import { Separator } from '../components/Separator';
import { Section } from '../components/Section';
import { ScrollArea } from '../components/Scrollbar';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Toolbar } from '../custom/Toolbar';
import { DarkThemeButton } from '../custom/DarkThemeButton';

import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';
import { darkTheme } from '../stitches.config';

function Test() {
  return (
    <Box css={{ height: '100%' }}>
      <DarkThemeButton />
      <Toolbar />
      <Box css={{ bc: '$loContrast', height: '100%', px: 250, pt: '36px' }}>
        <ScrollArea>
          <Section size="3">
            <Container size="2">
              <Heading
                css={{
                  mb: '$6',
                }}
              >
                Theming
              </Heading>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$6' }}>
                <Flex css={{ gap: '$4' }}>
                  <Button>Button</Button>
                  <Button size="2">Button</Button>
                </Flex>
                <Flex css={{ gap: '$4' }}>
                  <Button size="2">Button</Button>
                  <Button size="2" variant="blue">
                    Button
                  </Button>
                  <Button size="2" variant="green">
                    Button
                  </Button>
                  <Button size="2" variant="red">
                    Button
                  </Button>
                </Flex>
                {/* <Flex css={{ gap: '$4' }}>
                  <Button size="2" ghost>Button</Button>
                  <Button size="2" variant="blue" ghost>Button</Button>
                  <Button size="2" variant="green" ghost>Button</Button>
                  <Button size="2" variant="red" ghost>Button</Button>
                </Flex> */}
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Heading
                css={{
                  mb: '$6',
                }}
              >
                In search of perfect baseline alignment
              </Heading>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$2' }}>
                <Flex css={{ ai: 'center', height: '$8', bc: '$crimson4' }}>
                  <Text size="9">This search is hopeless</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$7', bc: '$crimson4' }}>
                  <Text size="8">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$6', bc: '$crimson4' }}>
                  <Text size="7">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$6', bc: '$crimson4' }}>
                  <Text size="6">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$6', bc: '$crimson4' }}>
                  <Text size="5">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$6', bc: '$crimson4' }}>
                  <Text size="4">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$6', bc: '$crimson4' }}>
                  <Text size="3">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$5', bc: '$crimson4' }}>
                  <Text size="2">This search is hopeless and I am insane.</Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '$5', bc: '$crimson4' }}>
                  <Text size="1">This search is hopeless and I am insane.</Text>
                </Flex>
              </Flex>
            </Container>
            <Container size="2">
              <Box css={{ maxWidth: 525, mt: 100 }}>
                <Text
                  size="5"
                  variant="pink"
                  css={{ mb: '$4', lineHeight: '25px', fontWeight: 500 }}
                >
                  Why Modulz
                </Text>
                <Text size="8" css={{ mb: '$4', lineHeight: '37px', fontWeight: 500 }}>
                  Design in the target medium. Prototype with real components.
                </Text>
                <Text size="4" css={{ mb: '$3', lineHeight: '25px', pr: '$9' }}>
                  Almost all design tools are optimised for illustration. Drawing tools are great
                  for exploration but when it comes to designing websites, apps, and user
                  interfaces, we need something more powerful.
                </Text>
                <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>
                  It is exceptionally hard to have a great design tool that outputs useful code.
                  Many have tried but in the end the trade offs were too great. That was until
                  Modulz made it their mission.
                </Text>
              </Box>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Heading
                css={{
                  mb: '$2',
                }}
              >
                Tracking test
              </Heading>
              <Paragraph css={{ mb: '$7' }}>
                Tracking should be tight and sexi.<sup>1</sup>
              </Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    100
                  </Text>
                  <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
              </Flex>

              <Heading
                css={{
                  mb: '$2',
                  mt: '$9',
                }}
              >
                Corrective indent test
              </Heading>
              <Paragraph css={{ mb: '$7' }}>
                Text should be aligned with the yellow box along the left edge. There's some optical
                shit going on here too, so this is not gospel.
              </Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4', position: 'relative' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$slate11', width: '65px' }}>
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
                    background: '$yellow6',
                    zIndex: '-1',
                  }}
                ></Box>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Heading
                css={{
                  mb: '$2',
                }}
              >
                Baseline alignment test
              </Heading>
              <Paragraph css={{ mb: '$7' }}>Shit should be centered af.</Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Flex css={{ ai: 'center', height: '75px', bc: '$pink5' }}>
                  <Text size="9" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '65px', bc: '$pink5' }}>
                  <Text size="8" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '45px', bc: '$pink5' }}>
                  <Text size="7" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '45px', bc: '$pink5' }}>
                  <Text size="6" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink5' }}>
                  <Text size="5" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink5' }}>
                  <Text size="4" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink5' }}>
                  <Text size="3" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink5' }}>
                  <Text size="2" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '25px', bc: '$pink5' }}>
                  <Text size="1" as="p">
                    The quick brown fox
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
              <Heading css={{ mb: '$7' }}>Text colors</Heading>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Heading css={{ color: '$gray12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$mauve12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$slate12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$red12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$crimson12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$pink12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$purple12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$violet12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$indigo12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$blue12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$cyan12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$teal12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$green12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$lime12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$yellow12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$orange12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$gold12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$brown12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
                <Heading css={{ color: '$bronze12' }}>
                  This heading look balanced and slightly saturated
                </Heading>
              </Flex>
              <Flex css={{ fd: 'column', gap: '$4', mt: '$7' }}>
                <Heading css={{ color: '$gray11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$mauve11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$slate11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$red11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$crimson11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$pink11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$purple11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$violet11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$indigo11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$blue11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$cyan11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$teal11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$green11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$lime11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$yellow11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$orange11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$gold11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$brown11' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$bronze11' }}>This heading look balanced</Heading>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>
        </ScrollArea>

        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Test;
