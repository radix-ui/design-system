import React from 'react';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';
import { Grid } from '../components/Grid';
import { RadioGrid, RadioGridGroup } from '../components/RadioGrid';
import { Select } from '../components/Select';
import { Separator } from '../components/Separator';
import { Card } from '../components/Card';
import { Image } from '../components/Image';
import { Link } from '../components/Link';
import { Section } from '../components/Section';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '../components/Accordion';
import { ScrollArea } from '../components/Scrollbar';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Badge } from '../components/Badge';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Toolbar } from '../custom/Toolbar';

import {
  Cross1Icon,
  PlusIcon,
  BackpackIcon,
  ArchiveIcon,
  StarFilledIcon,
  StarIcon,
} from '@radix-ui/react-icons';

function Ecommerce() {
  return (
    <Box>
      <Box as="header">
        <Box css={{ bc: '$gray3', py: '$2', px: '$4' }}>
          <Flex css={{ ai: 'center', jc: 'space-between' }}>
            <Box>Logo</Box>
            <Flex as="nav" css={{ gap: '$5' }}>
              <Link href="#">
                <Text size="2">Help</Text>
              </Link>
              <Link href="#">
                <Text size="2">Join us</Text>
              </Link>
              <Link href="#">
                <Text size="2">Log in</Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Flex css={{ ai: 'center', jc: 'space-between', py: '$3', px: '$4' }}>
          <Box css={{ fs: 0, minWidth: 300 }}>
            <Text size="5" css={{ fontWeight: 500 }}>
              Radix
            </Text>
          </Box>
          <Flex as="nav" css={{ gap: '$6', jc: 'center', fg: 1 }}>
            <Link>
              <Text size="4">New Releases</Text>
            </Link>
            <Link>
              <Text size="4">Men</Text>
            </Link>
            <Link>
              <Text size="4">Women</Text>
            </Link>
            <Link>
              <Text size="4">Kids</Text>
            </Link>
            <Link>
              <Text size="4">Sale</Text>
            </Link>
            <Link>
              <Text size="4">Collections</Text>
            </Link>
          </Flex>
          <Flex as="nav" css={{ ai: 'center', gap: '$3', fs: 0, minWidth: 300 }}>
            <TextField size="3" placeholder="Search" />
            <IconButton size="2">
              <BackpackIcon />
            </IconButton>
            <IconButton size="2">
              <PlusIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Box>

      <Section size="2">
        <Container size="3">
          {/* <Text
            size="2"
            css={{
              mb: '$5',
            }}
          >
            Home > Men > Brands > AAPE BY A BATHING APE > AAPE By A Bathing Ape multi-camo water resistant jacket in multi
          </Text> */}
          <Grid css={{ gridTemplateColumns: '2fr 1fr', gap: '$7' }}>
            <Flex css={{ '@bp2': { gap: '$7' } }}>
              <Flex css={{ fd: 'column', gap: '$3', width: 45, fs: 0 }}>
                <Image
                  src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
                  css={{ width: '100%' }}
                />
                <Image
                  src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
                  css={{ width: '100%' }}
                />
                <Image
                  src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
                  css={{ width: '100%' }}
                />
                <Image
                  src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
                  css={{ width: '100%' }}
                />
              </Flex>
              <Box css={{ fg: 1 }}>
                <Image
                  src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
                  css={{ width: '100%' }}
                />
              </Box>
            </Flex>
            <Box css={{ fg: 1 }}>
              <Link variant="subtle" href="#">
                <Text
                  size="3"
                  css={{
                    mb: '$4',
                  }}
                >
                  AAPE By A Bathing Ape
                </Text>
              </Link>
              <Heading>Camo detail windbreaker</Heading>
              <Box css={{ my: '$5' }}>
                <Text css={{ fontWeight: 500 }}>€384.99</Text>
              </Box>
              <Text>Color: Green</Text>
              <Flex css={{ gap: '$2', my: '$5' }}>
                <Flex css={{ gap: '$1' }}>
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarIcon />
                </Flex>
                <Flex css={{ gap: '$2' }}>
                  <Text>3.8</Text>
                  <Text variant="gray">(6)</Text>
                </Flex>
              </Flex>
              {/* <Grid css={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '$2' }}>
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" css={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" css={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" css={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" css={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" css={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
              </Grid> */}
              <Flex css={{ ai: 'baseline', jc: 'space-between', mb: '$3', mt: '$5' }}>
                <Text css={{ fontWeight: 500 }}>Select Size</Text>
                <Text size="2" variant="gray">
                  Size Assistant
                </Text>
              </Flex>
              <RadioGridGroup defaultValue="1">
                <RadioGrid value="3">XS</RadioGrid>
                <RadioGrid value="4">S</RadioGrid>
                <RadioGrid value="5">M</RadioGrid>
                <RadioGrid value="6">L</RadioGrid>
                <RadioGrid value="7">XL</RadioGrid>
              </RadioGridGroup>
              <Flex css={{ gap: '$3', my: '$5' }}>
                <Button variant="green" size="3" css={{ fg: 1 }}>
                  Add to Bag
                </Button>
                <IconButton size="3">
                  <ArchiveIcon />
                </IconButton>
              </Flex>
              <Text variant="gray" css={{ mb: '$5' }}>
                This product has shipping restrictions
              </Text>
              <Link href="#">
                <Text css={{ mb: '$5' }}>View product details</Text>
              </Link>

              {/* <Accordion type="single">
                <AccordionItem value="accordion-one">
                  <AccordionTrigger>
                    <Text size="4" css={{ fontWeight: 500 }}>Size &amp; Fit</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text css={{ lineHeight: '23px' }}>The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.</Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="accordion-two">
                  <AccordionTrigger>
                  <Text size="4" css={{ fontWeight: 500 }}>Free Delivery &amp; Returns</Text>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Text css={{ lineHeight: '23px' }}>The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar in the hood helps keep you dry in cold, wet weather.</Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ jc: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size="2">
        <Container size="3">
          <Grid css={{ gridTemplateColumns: '2fr 1fr', gap: '$7' }}>
            <Grid css={{ gridTemplateColumns: '1fr 1fr', gap: '$7' }}>
              <Box>
                <Heading
                  css={{
                    mb: '$3',
                  }}
                >
                  Brand
                </Heading>
                <Box>
                  <Text css={{ lineHeight: '23px' }}>
                    A BATHING APE launched its brand new diffusion line, AAPE By A Bathing Ape (Aape
                    for short), in 2012 with the aim to create a collection of simple, light clothes
                    for everyday wear. Reviving the label’s classic logo, it stamps a younger
                    version of the original ape design across jersey T-shirts and sweatpants with
                    comfortable cuts.
                  </Text>
                </Box>
              </Box>
              <Box>
                <Heading
                  css={{
                    mb: '$3',
                  }}
                >
                  Details
                </Heading>
                <Box>
                  <Text css={{ lineHeight: '23px' }}>
                    Windbreaker jacket by AAPE By A Bathing Ape.
                  </Text>
                  <Box as="ul">
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Layered looks</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Camouflage design</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Adjustable toggle hood</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>High neck</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Zip fastening</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Branded print and patch details</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Side pockets</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Elasticated trims</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>Regular fit</Text>
                    </li>
                    <li>
                      <Text css={{ lineHeight: '23px' }}>True to size</Text>
                    </li>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Box>
              <Heading
                css={{
                  mb: '$3',
                }}
              >
                Size &amp; Fit
              </Heading>
              <Box>
                <Text css={{ lineHeight: '23px' }}>
                  The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer
                  fabric for added warmth without extra weight.
                </Text>
              </Box>
              <Heading
                css={{
                  mb: '$3',
                }}
              >
                Look After Me
              </Heading>
              <Box>
                <Text css={{ lineHeight: '23px' }}>
                  The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer
                  fabric for added warmth without extra weight.
                </Text>
              </Box>
              <Heading
                css={{
                  mb: '$3',
                }}
              >
                About me
              </Heading>
              <Box>
                <Text css={{ lineHeight: '23px' }}>
                  The Nike Sportswear Tech Fleece Full-Zip Hoodie is made from a double-sided spacer
                  fabric for added warmth without extra weight.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ jc: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size="2">
        <Container size="2">
          <Heading
            css={{
              mb: '$6',
            }}
          >
            Buy the look
          </Heading>
          <Flex css={{ fd: 'row', gap: '$3' }}>
            <Box css={{ width: 'calc(100% / 3)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                <Box css={{ p: '$3' }}>
                  <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                  <Text css={{ fontWeight: 500 }}>€384.99</Text>
                </Box>
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 3)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
                <Box css={{ p: '$3' }}>
                  <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
                  <Text css={{ fontWeight: 500 }}>€384.99</Text>
                </Box>
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 3)' }}>
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

      <Section size="2" css={{ bc: '$gray3' }}>
        <Container size="3">
          <Heading
            css={{
              mb: '$5',
            }}
          >
            Buy the look
          </Heading>
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
        <Container size="3">
          <Heading
            css={{
              mb: '$5',
            }}
          >
            Recently Viewed
          </Heading>
          <Flex css={{ fd: 'row', gap: '$3' }}>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
            <Box css={{ width: 'calc(100% / 6)' }}>
              <Card as="a" variant="interactive" href="#">
                <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
              </Card>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
}

export default Ecommerce;
