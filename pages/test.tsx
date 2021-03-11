import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
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

import {
  Cross1Icon,
  PlusIcon,
} from '@radix-ui/react-icons';

function Test() {
  return (
    <Box css={{ height: '100%' }}>
      <Toolbar />
      <Box css={{ bc: '$loContrast', height: '100%', px: 250, pt: '36px' }}>
        <ScrollArea>
        <Section size="3">
            <Container size="2">
              <Heading
                css={{
                  mb: '$2',
                }}
              >
                In search of perfect baseline alignment
              </Heading>
              <Paragraph css={{ mb: '$7' }}>This search is hopeless and I am insane.</Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ gap: '$2' }}>
                <Input defaultValue="Input 017489 jpy" css={{ width: 150 }} />
                <Button css={{ fontSize: 12 }}>
                  <Box css={{ mr: '$1' }}>
                    <PlusIcon />
                  </Box>
                  Button 017489 jpy</Button>
                <Badge>Badge 017489 jpy</Badge>
              </Flex>
            </Container>
            <Container size="2">
              <Box css={{ maxWidth: 525, mt: 100 }}>
              <Text size="5" variant="pink" css={{ mb: '$4', lineHeight: '25px', fontWeight: 500 }}>Why Modulz</Text>
              <Text size="8" css={{ mb: '$4', lineHeight: '37px', fontWeight: 500 }}>Design in the target medium. Prototype with real components.</Text>
                <Text size="4" css={{ mb: '$3', lineHeight: '25px', pr: '$9' }}>Almost all design tools are optimised for illustration. Drawing tools are great for exploration but when it comes to designing websites, apps, and user interfaces, we need something more powerful.</Text>
                <Text size="3" variant="gray" css={{ lineHeight: '23px' }}>It is exceptionally hard to have a great design tool that outputs useful code. Many have tried but in the end the trade offs were too great. That was until Modulz made it their mission.</Text>
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
              <Paragraph css={{ mb: '$7' }}>Tracking should be tight and sexi.<sup>1</sup></Paragraph>
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

              <Heading
                css={{
                  mb: '$2',
                  mt: '$9'
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
                <Flex css={{ ai: 'center', height: '75px', bc: '$pink400' }}>
                  <Text size="9" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '65px', bc: '$pink400' }}>
                  <Text size="8" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '45px', bc: '$pink400' }}>
                  <Text size="7" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '45px', bc: '$pink400' }}>
                  <Text size="6" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink400' }}>
                  <Text size="5" as="p" css={{ fontWeight: 500 }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink400' }}>
                  <Text size="4" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink400' }}>
                  <Text size="3" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '35px', bc: '$pink400' }}>
                  <Text size="2" as="p">
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center', height: '25px', bc: '$pink400' }}>
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
                <Heading css={{ color: '$gray1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$quartz1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$slate1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$red1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$crimson1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$pink1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$purple1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$violet1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$indigo1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$blue1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$cyan1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$teal1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$green1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$lime1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$yellow1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$orange1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$gold1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$brown1000' }}>This heading look balanced and slightly saturated</Heading>
                <Heading css={{ color: '$bronze1000' }}>This heading look balanced and slightly saturated</Heading>
              </Flex>
              <Flex css={{ fd: 'column', gap: '$4', mt: '$7' }}>
                <Heading css={{ color: '$gray900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$quartz900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$slate900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$red900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$crimson900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$pink900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$purple900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$violet900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$indigo900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$blue900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$cyan900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$teal900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$green900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$lime900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$yellow900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$orange900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$gold900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$brown900' }}>This heading look balanced</Heading>
                <Heading css={{ color: '$bronze900' }}>This heading look balanced</Heading>
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
