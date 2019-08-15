import React from 'react';
import { theme, Heading, AspectRatio, Grid, Card, Box, Text } from '@modulz/radix';

// console.log(theme);

export function ThemeSection() {
  return (
    <>
      <Heading as="h2" fontWeight={500} size={2} mt={8} mb={4}>
        Colors
      </Heading>

      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={4}>
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
    >
      <AspectRatio width={100} bg={color} ratio="16:9" />
    </Card>
    <Box mt={1}>
      <Heading as="h3" size={0} fontWeight={500} mb={1}>
        {name}
      </Heading>
      <Text as="p" size={1} textColor="grays.5">
        {color}
      </Text>
    </Box>
  </Box>
);
