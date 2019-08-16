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
  Flex,
} from '@modulz/radix';

console.log(theme);

export function ThemeSection() {
  return (
    <>
      <Heading>Fonts</Heading>
      {Object.entries(theme.fonts).map(([key, value]) => (
        <Box mb={3}>
          <Text as="p" fontFamily={key} size={5}>
            Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis.
          </Text>
        </Box>
      ))}

      <Divider my={8} />

      <Heading>Font Sizes</Heading>
      {Object.entries(theme.fontSizes).map(([key, value]) => (
        <Text size={5} mr={2}>
          <span style={{ fontSize: value }}>Aa</span>
        </Text>
      ))}

      <Divider my={8} />

      <Heading>Space scale</Heading>
      {Object.entries(theme.space).map(([key, value]) => (
        <Text size={5} mr={2}>
          {value}
        </Text>
      ))}

      <Divider my={8} />

      <Heading>Sizes scale</Heading>
      {Object.entries(theme.sizes).map(([key, value]) => (
        <Text size={5} mr={2}>
          {value}
        </Text>
      ))}

      <Divider my={8} />

      <Heading>Line heights scale</Heading>
      {Object.entries(theme.lineHeights).map(([key, value]) => (
        <Text size={5} mr={2}>
          {value}
        </Text>
      ))}

      <Divider my={8} />

      <Heading>Radii scale</Heading>
      <Grid
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gridGap={4}
      >
        {Object.entries(theme.radii).map(([key, value]) => (
          <AspectRatio width={100}>
            <Box width="100%" height="100%" borderRadius={value} bg="blue"></Box>
          </AspectRatio>
        ))}
      </Grid>

      <Divider my={8} />

      <Heading>Colors</Heading>
      <Grid
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gridGap={4}
      >
        {Object.entries(theme.colors).map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((color, index) => (
              <ColorCard color={color} name={`${key}.${index}`} />
            ));
          }
          return <ColorCard color={value} name={key} />;
        })}
      </Grid>
    </>
  );
}

const ColorCard = ({ color, name }) => (
  <Box>
    <Card
      p={0}
      variant={
        name.includes('white') || name.includes('.0') || name.includes('.1') ? 'border' : 'ghost'
      }
      style={{ overflow: 'hidden' }}
    >
      <AspectRatio width={100} bg={color} />
    </Card>
    <Box mt={1}>
      <RadixHeading as="h3" size={0} fontWeight={500} mb={1}>
        {name}
      </RadixHeading>
      <Text as="p" size={1} textColor="grays.5">
        {color}
      </Text>
    </Box>
  </Box>
);

const Heading = props => (
  <RadixHeading as="h2" fontWeight={500} size={2} mt={8} mb={4} {...props} />
);
