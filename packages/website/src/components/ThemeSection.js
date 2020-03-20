import React from 'react';
import {
  theme,
  Heading as RadixHeading,
  AspectRatio,
  Grid,
  Card,
  Box,
  Text,
  Divider,
} from '@modulz/radix';

const removeUnit = str => str.replace('px', '');

export function ThemeSection() {
  return (
    <>
      <Heading mb={4}>Fonts</Heading>
      {Object.entries(theme.fonts).map(([key, value]) => (
        <Box mb={3} key={key}>
          <SectionTitle>{key}</SectionTitle>
          <Text
            as="p"
            size={key === 'mono' ? 7 : 8}
            mt={2}
            mb={6}
            sx={{ lineHeight: 5, fontFamily: key }}
          >
            Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
          </Text>
        </Box>
      ))}

      <Divider my={5} />

      <Heading my={4}>Font sizes</Heading>
      <Grid sx={{ alignItems: 'baseline', gridAutoFlow: 'column', columnGap: 4 }}>
        {Object.entries(theme.fontSizes)
          .reverse()
          .map(([key, value]) => (
            <Box key={key}>
              <Text as="p" size={5} mb={1}>
                <span style={{ fontSize: value }}>Aa</span>
              </Text>
              <SectionTitle>{removeUnit(value)}</SectionTitle>
            </Box>
          ))}
      </Grid>

      <Divider my={5} />

      <Heading my={4}>Line heights</Heading>
      {Object.entries(theme.lineHeights).map(([key, value]) => (
        <Text size={8} mr={4} weight="medium" key={key}>
          {removeUnit(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Space scale</Heading>
      {Object.entries(theme.space).map(([key, value]) => (
        <Text size={8} mr={4} weight="medium" key={key}>
          {removeUnit(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Size scale</Heading>
      {Object.entries(theme.sizes).map(([key, value]) => (
        <Text size={8} mr={4} weight="medium" key={key}>
          {removeUnit(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Radii scale</Heading>
      {Object.entries(theme.radii).map(([key, value]) => (
        <Text size={8} mr={4} weight="medium" key={key}>
          {typeof value === 'string' ? removeUnit(value) : value}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Colors</Heading>

      <Subheading>Primary</Subheading>
      <ColorGrid>
        {Object.entries(theme.colors).map(([key, value]) => {
          return !Array.isArray(value) && <ColorCard color={value} name={key} key={key} />;
        })}
      </ColorGrid>
    </>
  );
}

const ColorGrid = props => (
  <Grid
    mt={2}
    {...props}
    sx={{
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)'],
      gap: 4,
    }}
  />
);

const checkerboard = `
  linear-gradient(45deg, #f8f8f8 25%, transparent 25%), linear-gradient(135deg, #f8f8f8 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #f8f8f8 75%), linear-gradient(135deg, transparent 75%, #f8f8f8 75%)`;

const ColorCard = ({ color, name, props }) => (
  <Box {...props}>
    <Box>
      <Card
        p={0}
        sx={{
          border: 0,
          backgroundImage: checkerboard,
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 0, 5px -5px, 0px 5px',
          overflow: 'hidden',
        }}
      >
        <AspectRatio
          sx={{
            bg: color,
            borderRadius: 'inherit',
            '& > *': {
              borderRadius: 'inherit',
              boxShadow: '0 0 0 1.25px rgba(0, 0, 0, 0.06) inset',
            },
          }}
        />
      </Card>
      <Box mt={1}>
        <RadixHeading as="h4" size={0} weight="medium" mt={2} mb={1}>
          <span style={{ textTransform: 'capitalize' }}>{name}</span>
        </RadixHeading>
        <Text as="p" size={0} mb={2} sx={{ color: 'gray700' }}>
          <span style={{ textTransform: 'uppercase' }}>
            {color.replace(/\(|\)/g, ' ').replace('.', '0.')}
          </span>
        </Text>
      </Box>
    </Box>
  </Box>
);

const Heading = props => <RadixHeading as="h2" weight="medium" size={2} mt={8} mb={4} {...props} />;

const Subheading = props => (
  <RadixHeading as="h3" weight="medium" size={1} mt={6} mb={4} {...props} />
);

const SectionTitle = props => (
  <Text
    size={2}
    marginY={0}
    {...props}
    sx={{
      color: 'gray700',
      textTransform: 'capitalize',
    }}
  />
);
