import { RadiobuttonIcon, SliderIcon, SwitchIcon, TextIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Code } from '../components/Code';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Separator } from '../components/Separator';
import { Text } from '../components/Text';
import { TreeItem } from '../components/TreeItem';
import { ColorTools } from '../custom/ColorTools';
import { darkTheme as darkThemeClassName } from '../stitches.config';

const sidebarWidth = 240;

export const colors = [
  'gray',
  'quartz',
  'slate',
  'sage',
  'olive',
  'sand',

  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',

  'blue',
  'sky',
  'cyan',
  'teal',
  'green',

  'lime',
  'yellow',
  'amber',
  'orange',

  'brown',
  'bronze',
  'gold',
] as const;

export default function Colors() {
  const [palette, setPalette] = useLocalStorage('colors-palette', true);
  const [layers, setLayers] = useLocalStorage('colors-layers', true);
  const [alerts, setAlerts] = useLocalStorage('colors-alerts', true);
  const [buttons, setButtons] = useLocalStorage('colors-buttons', true);
  const [lines, setLines] = useLocalStorage('colors-lines', true);
  const [textBlocks, setTextBlocks] = useLocalStorage('colors-textBlocks', true);

  const [darkTheme, setDarkTheme] = useLocalStorage('colors-darkTheme', false);
  const [grayscale, setGrayscale] = useLocalStorage('colors-grayscale', false);
  const [gap, setGap] = useLocalStorage('colors-gap', true);

  // No SSR please
  if (typeof window === 'undefined') {
    return null;
  }

  React.useLayoutEffect(() => {
    document.body.style.filter = grayscale ? 'saturate(0)' : '';
  }, [grayscale]);

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('gap', gap);
  }, [gap]);

  React.useLayoutEffect(() => {
    document.body.classList.toggle('theme-default', !darkTheme);
    document.body.classList.toggle(darkThemeClassName, darkTheme);
    document.body.style.backgroundColor = darkTheme ? 'black' : '';
  }, [darkTheme]);

  return (
    <>
      <Section size="3" css={{ py: '$7', ml: sidebarWidth, overflowY: 'scroll', height: '100vh' }}>
        <Container size="3" css={{ mb: '$5' }}>
          <Box>
            <Checkbox defaultChecked={palette} onChange={(e) => setPalette(e.target.checked)}>
              Palette
            </Checkbox>
            <Checkbox defaultChecked={layers} onChange={(e) => setLayers(e.target.checked)}>
              Layers
            </Checkbox>
            <Checkbox defaultChecked={buttons} onChange={(e) => setButtons(e.target.checked)}>
              Buttons
            </Checkbox>
            <Checkbox defaultChecked={buttons} onChange={(e) => setLines(e.target.checked)}>
              Lines
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
        {layers && <Layers />}
        {buttons && <Buttons />}
        {lines && <Lines />}
        {alerts && <Alerts />}
        {textBlocks && <TextBlocks />}
      </Section>
      <Sidebar />
    </>
  );
}

function Sidebar() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        bc: 'white',
        overflowY: 'scroll',
        boxShadow: '1px 0 $colors$gray500',
        width: 240,
        [`body.${darkThemeClassName} &`]: {
          bc: 'black',
        } as any,
      }}
    >
      <ColorTools />
    </Box>
  );
}

function Layers() {
  return (
    <Container size="4" css={{ p: '$9' }}>
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color}>
            <TreeItem css={{ bc: `$${color}400` }}>
              <Box css={{ mr: '$2' }}>
                <RadiobuttonIcon />
              </Box>
              <Text size="1">Radio</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}200`,
                '&:hover': { bc: `$${color}300` },
                '&:active': { bc: `$${color}400` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <SliderIcon />
              </Box>
              <Text size="1">Slider</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}200`,
                '&:hover': { bc: `$${color}300` },
                '&:active': { bc: `$${color}400` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <SwitchIcon />
              </Box>
              <Text size="1">Switch</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}200`,
                '&:hover': { bc: `$${color}300` },
                '&:active': { bc: `$${color}400` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <TextIcon />
              </Box>
              <Text size="1">Text</Text>
            </TreeItem>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function Buttons() {
  return (
    <Container size="3" css={{ my: '$9' }}>
      <Grid css={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color} css={{ '&[class] * + *': { ml: '$2', verticalAlign: 'top' } }}>
            <Button variant="gray">Neutral</Button>
            <Button
              css={{
                fontWeight: 500,
                textTransform: 'capitalize',
                backgroundColor: `$${color}100`,
                boxShadow: `inset 0 0 0 1px $colors$${color}600`,
                color: `$${color}900`,
                '@hover': {
                  '&:hover': {
                    boxShadow: `inset 0 0 0 1px $colors$${color}700`,
                  },
                },
                '&:active': {
                  backgroundColor: `$${color}200`,
                  boxShadow: `inset 0 0 0 1px $colors$${color}700`,
                },
                '&:focus': {
                  boxShadow: `inset 0 0 0 1px $colors$${color}700, 0 0 0 1px $colors$${color}700`,
                },
              }}
            >
              {color}
            </Button>
            <Button
              css={{
                fontWeight: 400,
                textTransform: 'capitalize',
                backgroundColor: `$${color}800`,
                color: getHiContrast(color),
                boxShadow: 'none',
                '@hover': {
                  '&:hover': {
                    color: 'white',
                    boxShadow: 'none',
                    backgroundColor: `$${color}900`,
                  },
                },
                '&:active': {
                  boxShadow: 'none',
                  color: getHiContrast(color),
                  backgroundColor: `$${color}700`,
                },
                '&:focus': {
                  boxShadow: `0 0 0 2px $colors$${color}600`,
                },
              }}
            >
              {color}
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function Lines() {
  return (
    <Container size="2" css={{ my: '$9' }}>
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
        Lines
      </Text>
      <Paragraph css={{ mb: '$7' }}>
        The <Code>500</Code> line should be very subtle, but visible on all backgrounds.
      </Paragraph>

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
  );
}

function Alerts() {
  return (
    <Container size="3" css={{ mb: '$9' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box key={color} css={{ p: '$4', borderRadius: '$3', bc: `$${color}800` }}>
            <Text size="2" as="p" css={{ color: getHiContrast(color) }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              bc: `$${color}100`,
              borderLeft: `2px solid $${color}500`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}900` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              bc: `$${color}100`,
              borderLeft: `3px solid $${color}700`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}900` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              borderRadius: '$3',
              bc: `$${color}200`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}1000` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              borderRadius: '$3',
              bc: `$${color}100`,
              border: `1px solid $${color}500`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}900` }}>
              Warning: obsessing over {color} is a terrible idea.
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
        const color800 = `$${color}800`;
        const color1000 = `$${color}1000`;

        return (
          <Box key={color} css={{ 'html.gap &': { display: 'grid', gap: '$5' } }}>
            <Box css={{ bc: color000, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color100, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color200, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color1000, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color1000 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color800, p: 200 }}>
              <Container size="3">
                <Heading
                  css={{ mb: '$2', color: getHiContrast(color), textTransform: 'capitalize' }}
                >
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: getHiContrast(color) }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color1000, p: 200 }}>
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
          <Grid key={color} css={gridStyle}>
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
      <Text size="2" as="label" css={{ display: 'inline-block', lineHeight: '20px' }}>
        <input
          type="checkbox"
          style={{ verticalAlign: 'middle', margin: 0, marginRight: 5, marginTop: -2 }}
          {...props}
        />{' '}
        {children}
      </Text>
    </Box>
  );
}

export function getHiContrast(color: string) {
  if (['lime', 'yellow', 'amber'].includes(color)) {
    return 'hsl(0, 0%, 0%)';
  }

  return 'hsl(0, 0%, 100%)';
}

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

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
