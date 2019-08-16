import React from 'react';
import css from '@styled-system/css';
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
const format = str => str.replace('px', '');

export function ThemeSection() {
  return (
    <>
      <Divider my={5} />

      <Heading my={4}>Fonts</Heading>
      {Object.entries(theme.fonts).map(([key, value]) => (
        <Box mb={3}>
          <Text
            css={css({
              fontSize: 2,
              marginY: 0,
              textTransform: 'capitalize',
              color: theme.colors.grays[5],
            })}
          >
            {key}
          </Text>
          <Text
            as="p"
            css={css({
              fontSize: key === 'mono' ? 8 : 9,
              letterSpacing: key === 'medium' ? -1 : 0,
              fontFamily: key,
              lineHeight: 4,
              mt: 2,
              mb: 6,
            })}
            fontFamily={key}
          >
            Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
          </Text>
        </Box>
      ))}

      <Divider my={5} />

      <Heading my={4}>Font sizes</Heading>
      <Grid
        alignItems={'baseline'}
        gridAutoFlow={'column'}
        gridTemplateRows={'auto auto'}
        gridColumnGap={theme.space[4]}
      >
        {Object.entries(theme.fontSizes)
          .reverse()
          .map(([key, value]) => (
            <>
              <Text size={5}>
                <span style={{ fontSize: value }}>Aa</span>
              </Text>
              <Text size={2} mt={1} textColor={theme.colors.grays[5]}>
                {format(value)}
              </Text>
            </>
          ))}
      </Grid>

      <Divider my={5} />

      <Heading my={4}>Line heights</Heading>
      {Object.entries(theme.lineHeights).map(([key, value]) => (
        <Text size={8} mr={4} fontWeight={500}>
          {format(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Space scale</Heading>
      {Object.entries(theme.space).map(([key, value]) => (
        <Text size={8} mr={4} fontWeight={500}>
          {format(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Size scale</Heading>
      {Object.entries(theme.sizes).map(([key, value]) => (
        <Text size={8} mr={4} fontWeight={500}>
          {format(value)}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Radii scale</Heading>
      {Object.entries(theme.radii).map(([key, value]) => (
        <Text size={8} mr={4} fontWeight={500}>
          {typeof value === 'string' ? format(value) : value}
        </Text>
      ))}

      <Divider my={5} />

      <Heading my={4}>Colors</Heading>

      <Subheading>Primary</Subheading>
      <Flex flexWrap="wrap" m={-2}>
        {Object.entries(theme.colors).map(([key, value]) => {
          return Array.isArray(value) || <ColorCard color={value} name={key} />;
        })}
      </Flex>

      <Divider mt={6} mb={4} />

      <Subheading>Secondary</Subheading>
      <Flex flexDirection="column" m={-2}>
        {Object.entries(theme.colors).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <>
                <Text
                  css={css({
                    fontSize: 2,
                    marginX: 2,
                    marginTop: 4,
                    marginBottom: 2,
                    textTransform: 'capitalize',
                    color: theme.colors.grays[5],
                  })}
                >
                  {key}
                </Text>
                <Flex flexWrap="wrap">
                  {value.map((color, index) => (
                    <ColorCard color={color} name={`${key.replace(/s$/, '')} ${index}`} />
                  ))}
                </Flex>
                <Divider mx={2} mt={3} mb={2} />
              </>
            );
          }
          return null;
        })}
      </Flex>
    </>
  );
}

const checkerboard = `
linear-gradient(45deg, #f8f8f8 25%, transparent 25%), linear-gradient(135deg, #f8f8f8 25%, transparent 25%),
linear-gradient(45deg, transparent 75%, #f8f8f8 75%), linear-gradient(135deg, transparent 75%, #f8f8f8 75%)`;

const ColorCard = ({ color, name }) => (
  <Box width={'20%'}>
    <Box m={2}>
      <Card
        p={0}
        border={0}
        css={css({
          backgroundImage: checkerboard,
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 5px 0, 5px -5px, 0px 5px',
          overflow: 'hidden',
        })}
      >
        <AspectRatio
          bg={color}
          css={css({
            borderRadius: 'inherit',
            '& > *': {
              borderRadius: 'inherit',
              boxShadow: '0 0 0 1.25px rgba(0, 0, 0, 0.06) inset',
            },
          })}
        />
      </Card>
      <Box mt={1}>
        <RadixHeading as="h4" size={0} fontWeight={500} mt={2} mb={1}>
          <span css={css({ textTransform: 'capitalize' })}>{name}</span>
        </RadixHeading>
        <Text as="p" size={0} textColor="grays.5" mb={2}>
          <span css={css({ textTransform: 'uppercase' })}>
            {color.replace(/\(|\)/g, ' ').replace('.', '0.')}
          </span>
        </Text>
      </Box>
    </Box>
  </Box>
);

const Heading = props => (
  <RadixHeading as="h2" fontWeight={500} size={2} mt={8} mb={4} {...props} />
);

const Subheading = props => (
  <RadixHeading as="h3" fontWeight={500} size={1} mt={6} mb={4} {...props} />
);
