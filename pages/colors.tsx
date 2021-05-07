import React from 'react';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Separator } from '../components/Separator';
import { Text } from '../components/Text';
import { darkTheme as darkThemeClass } from '../stitches.config';

const colors = [
  'gray',
  'quartz',
  'slate',
  'sand',
  'red',
  'crimson',
  'pink',
  'purple',
  'violet',
  'indigo',
  'blue',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
  'brown',
  'bronze',
  'gold',
];

export default function Colors() {
  const [palette, setPalette] = useLocalStorage('palette', true);
  const [alerts, setAlerts] = useLocalStorage('alerts', true);
  const [textBlocks, setTextBlocks] = useLocalStorage('textBlocks', true);

  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', false);
  const [grayscale, setGrayscale] = useLocalStorage('grayscale', false);
  const [gap, setGap] = useLocalStorage('gap', true);

  React.useLayoutEffect(() => {
    document.body.style.filter = grayscale ? 'saturate(0)' : '';
  }, [grayscale]);

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('gap', gap);
  }, [gap]);

  React.useLayoutEffect(() => {
    document.body.classList.toggle('theme-default', !darkTheme);
    document.body.classList.toggle(darkThemeClass, darkTheme);
    document.body.style.backgroundColor = darkTheme ? 'black' : '';
  }, [darkTheme]);

  // No SSR please
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Section size="3" css={{ py: '$7' }}>
      <Container size="3" css={{ mb: '$5' }}>
        <Box>
          <Checkbox defaultChecked={palette} onChange={(e) => setPalette(e.target.checked)}>
            Palette
          </Checkbox>
          <Checkbox defaultChecked={alerts} onChange={(e) => setAlerts(e.target.checked)}>
            Alerts
          </Checkbox>
          <Checkbox defaultChecked={textBlocks} onChange={(e) => setTextBlocks(e.target.checked)}>
            Text Blocks
          </Checkbox>
          <Separator css={{ my: '$3' }} />
          <Checkbox defaultChecked={grayscale} onChange={(e) => setGrayscale(e.target.checked)}>
            Grayscale
          </Checkbox>
          <Checkbox defaultChecked={gap} onChange={(e) => setGap(e.target.checked)}>
            Gaps
          </Checkbox>
          <Checkbox defaultChecked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)}>
            Dark theme
          </Checkbox>
        </Box>
      </Container>

      {palette && <Palette />}
      {alerts && <Alerts />}
      {textBlocks && <TextBlocks />}
    </Section>
  );
}

function Alerts() {
  return (
    <Container size="3" css={{ mb: '$9' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box key={color} css={{ p: '$5', borderRadius: '$3', bc: `$${color}800` }}>
            <Text size="2" as="p" css={{ color: 'white' }}>
              Warning: obsessing over color is a terrible idea.
            </Text>
          </Box>
        ))}
        {colors.map((color) => (
          <Box
            css={{
              p: '$5',
              borderRadius: '$3',
              bc: `$${color}100`,
              border: `1px solid $${color}500`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}900` }}>
              Warning: obsessing over color is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function TextBlocks() {
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
    <Box css={{ mb: '$9' }}>
      {colors.map((color) => {
        const color000 = `$${color}000`;
        const color100 = `$${color}100`;
        const color200 = `$${color}200`;
        const color1000 = `$${color}1000`;

        return (
          <Box key={color} css={{ 'html.gap &': { display: 'grid', gap: '$5' } }}>
            <Box css={{ backgroundColor: color000, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ backgroundColor: color100, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ backgroundColor: color200, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ backgroundColor: color1000, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color100, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color100 }}>
                  {text}
                </Text>
              </Container>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function Palette() {
  const gridStyle = {
    gridAutoRows: '35px',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    'html.gap &': { gap: 2 },
  };

  return (
    <Container size="3">
      <Box css={{ mb: '$9', 'html.gap &': { display: 'grid', gap: 2 } }}>
        <Grid css={gridStyle}>
          <Box></Box>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>000</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>100</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>200</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>300</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>400</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>500</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>600</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>700</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>800</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>900</Text>
          <Text css={{ color: '$gray800', fontSize: '$2', ta: 'center' }}>1000</Text>
        </Grid>

        {colors.map((color) => (
          <Grid css={gridStyle}>
            <Box css={{ alignSelf: 'center' }}>
              <Text size="2" css={{ textTransform: 'capitalize' }}>
                {color}
              </Text>
            </Box>
            <Box css={{ bc: `$${color}000` }} />
            <Box css={{ bc: `$${color}100` }} />
            <Box css={{ bc: `$${color}200` }} />
            <Box css={{ bc: `$${color}300` }} />
            <Box css={{ bc: `$${color}400` }} />
            <Box css={{ bc: `$${color}500` }} />
            <Box css={{ bc: `$${color}600` }} />
            <Box css={{ bc: `$${color}700` }} />
            <Box css={{ bc: `$${color}800` }} />
            <Box css={{ bc: `$${color}900` }} />
            <Box css={{ bc: `$${color}1000` }} />
          </Grid>
        ))}
      </Box>
    </Container>
  );
}

function Checkbox({
  children,
  ...props
}: React.ComponentProps<'input'> & { children?: React.ReactNode }) {
  return (
    <Box>
      <Text size="2" as="label" css={{ display: 'inline-block' }}>
        <input type="checkbox" {...props} /> {children}
      </Text>
    </Box>
  );
}

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
