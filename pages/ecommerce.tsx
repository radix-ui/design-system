import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';
import { Grid } from '../components/Grid';
import { Select } from '../components/Select';
import { Separator } from '../components/Separator';
import { Card } from '../components/Card';
import { Image } from '../components/Image';
import { Link } from '../components/Link';
import { Section } from '../components/Section';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '../components/Accordion';
import { ScrollArea } from '../components/Scrollbar';
import { Subtitle } from '../components/Subtitle';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Badge } from '../components/Badge';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Toolbar } from '../custom/Toolbar';

import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';
import { darkTheme, flatTheme, softTheme, modulzTheme, coolTheme } from '../stitches.config';
import { callbackify } from 'node:util';

function Ecommerce() {
  return (
    <Box className={modulzTheme}>
      <Box as="header">
        <Box css={{ bc: '$gray200', py: '$2', px: '$4' }}>
          <Flex css={{ ai: 'center', jc: 'space-between' }}>
            <Box>
              Logo
            </Box>
            <Flex as="nav" css={{ gap: '$3' }}>
              <Link href="#"><Text size="2">Help</Text></Link>
              <Link href="#"><Text size="2">Join us</Text></Link>
              <Link href="#"><Text size="2">Sign in</Text></Link>
            </Flex>
          </Flex>
        </Box>
        <Flex css={{ ai: 'center', jc: 'space-between', py: '$3', px: '$4' }}>
          <Box css={{ fs: 0, minWidth: 300 }}>
            <Text size="5" css={{ fontWeight: 500 }}>Radix</Text>
          </Box>
          <Flex as="nav" css={{ gap: '$6', jc: 'center', fg: 1, }}>
            <Link><Text size="4">New Releases</Text></Link>
            <Link><Text size="4">Men</Text></Link>
            <Link><Text size="4">Women</Text></Link>
            <Link><Text size="4">Kids</Text></Link>
            <Link><Text size="4">Sale</Text></Link>
            <Link><Text size="4">Collections</Text></Link>
          </Flex>
          <Flex as="nav" css={{ ai: 'center', gap: '$3', fs: 0, minWidth: 300 }}>
            <Input size="3" placeholder="Search" />
            <IconButton size="2">
              <PlusIcon />
            </IconButton>
            <IconButton size="2">
              <PlusIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Box>

      <Section size="2" css={{ py: '$5' }}>
        <Container size="3">
          <Text
            css={{
              mb: '$5',
            }}
          >
            Nike > Item
          </Text>
          <Grid css={{ gridTemplateColumns: '2fr 1fr', gap: '$7' }}>
            <Grid css={{ gridTemplateColumns: '1fr 1fr', fg: 2, gap: '$3' }}>
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
            </Grid>
            <Box css={{ fg: 1 }}>
              <Heading>AAPE By A Bathing Ape camo detail windbreaker in green</Heading>
              <Box css={{ my: '$5' }}>
                <Text css={{ fontWeight: 500 }}>€384.99</Text>
              </Box>
              <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '$2' }}>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
              </Grid>
              <Flex css={{ ai: 'baseline', jc: 'space-between', mb: '$3', mt: '$5' }}>
                <Text css={{ fontWeight: 500 }}>Select Size</Text>
                <Text size="2" variant="gray">Size Assistant</Text>
              </Flex>
              <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '$2' }}>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
                <Flex css={{ boxShadow: 'inset 0 0 0 1px $colors$slate600', p: '$2', ai: 'center', jc: 'center', fontSize: '$3' }}>XL</Flex>
              </Grid>
              <Flex css={{ gap: '$5', my: '$5' }}>
                <Button variant="green" size="2" css={{ fg: 1 }}>Add to Bag</Button>
                <IconButton size="2">
                  <PlusIcon />
                </IconButton>
              </Flex>
              <Text>This product has shipping restrictions</Text>
              <Text>Free delivery &amp; returns. T&amp;Cs apply.</Text>
              <Box>
                <Text css={{ display: 'inline' }}>The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.</Text>
              </Box>

              <Accordion type="single">
                <AccordionItem value="accordion-one">
                  <AccordionButton>
                    <Text size="4" css={{ fontWeight: 500 }}>Size &amp; Fit</Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text css={{ lineHeight: '23px' }}>The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.</Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="accordion-two">
                  <AccordionButton>
                  <Text size="4" css={{ fontWeight: 500 }}>Free Delivery &amp; Returns</Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text css={{ lineHeight: '23px' }}>The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.</Text>
                  </AccordionPanel>
                </AccordionItem>
      </Accordion>
            </Box>
          </Grid>
        </Container>
      </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="2">
            <Container size="2">
              <Subheading
                css={{
                  mb: '$6',
                }}
              >
                Buy the look
              </Subheading>
              <Flex css={{ fd: 'row', gap: '$3' }}>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="2" css={{ bc: '$gray200' }}>
            <Container size="2">
              <Subheading
                css={{
                  mb: '$5',
                }}
              >
                Buy the look
              </Subheading>
              <Flex css={{ fd: 'row', gap: '$3' }}>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                    <Box css={{ p: '$3' }}>
                      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                      <Text css={{ fontWeight: 500 }}>€384.99</Text>
                    </Box>
                  </Card>
                </Box>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="2">
            <Container size="2">
              <Subheading
                css={{
                  mb: '$5',
                }}
              >
                Buy the look
              </Subheading>
              <Flex css={{ fd: 'row', gap: '$3' }}>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                  </Card>
                </Box>
                <Box css={{ width: 'calc(100% / 4)' }}>
                  <Card as="a" variant="interactive" href="#">
                    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                  </Card>
                </Box>
              </Flex>
            </Container>
          </Section>


      <Box css={{ bc: '$loContrast', height: '100%', width: 250, p: '$6', position: 'fixed', top: 100, left: 0, bottom: 0 }}>
        <ScrollArea>
          fwf iweuhifew
        </ScrollArea>
      </Box>

    </Box>
  );
}

export default Ecommerce;
