import {
  RadiobuttonIcon,
  SliderIcon,
  SwitchIcon,
  TextIcon,
  PlusIcon,
  CursorArrowIcon,
  FontFamilyIcon,
  FontSizeIcon,
  LineHeightIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Code } from '../components/Code';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { IconButton } from '../components/IconButton';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Separator } from '../components/Separator';
import { Text } from '../components/Text';
import { TextField } from '../components/TextField';
import { TreeItem } from '../components/TreeItem';
import { ColorTools } from '../custom/ColorTools';
import { darkTheme as darkThemeClassName } from '../stitches.config';

const sidebarWidth = 240;

export const loContrasts = ['lime', 'yellow', 'amber', 'sky', 'mint'];

export const colors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',

  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',

  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',

  'brown',
  'bronze',
  'gold',

  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'orange',
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export const grayBackground: Record<ElementType<typeof colors>, string> = {
  gray: 'gray1',
  mauve: 'mauve1',
  slate: 'slate1',
  sage: 'sage1',
  olive: 'olive1',
  sand: 'sand1',

  tomato: 'gray1',
  red: 'gray1',
  ruby: 'gray1',
  crimson: 'gray1',
  pink: 'gray1',
  plum: 'gray1',
  purple: 'gray1',
  violet: 'gray1',

  iris: 'gray1',
  indigo: 'gray1',
  blue: 'gray1',
  cyan: 'gray1',
  sky: 'gray1',

  teal: 'gray1',
  jade: 'gray1',
  green: 'gray1',
  mint: 'gray1',

  grass: 'gray1',
  lime: 'gray1',

  yellow: 'gray1',
  gold: 'gray1',
  brown: 'gray1',
  bronze: 'gray1',
  amber: 'gray1',
  orange: 'gray1',
} as const;

export const grayPair: Record<ElementType<typeof colors>, string> = {
  gray: 'gray',
  mauve: 'mauve',
  slate: 'slate',
  sage: 'sage',
  olive: 'olive',
  sand: 'sand',

  tomato: 'mauve',
  red: 'mauve',
  ruby: 'mauve',
  crimson: 'mauve',
  pink: 'mauve',
  plum: 'mauve',
  purple: 'mauve',
  violet: 'mauve',

  iris: 'slate',
  indigo: 'slate',
  blue: 'slate',
  cyan: 'slate',
  sky: 'slate',

  teal: 'sage',
  jade: 'sage',
  green: 'sage',
  mint: 'sage',

  grass: 'olive',
  lime: 'olive',

  yellow: 'sand',
  gold: 'sand',
  brown: 'sand',
  bronze: 'sand',
  amber: 'sand',
  orange: 'sand',
} as const;

export default function Colors() {
  const [palette, setPalette] = useLocalStorage('colors-palette', true);
  const [panels, setPanels] = useLocalStorage('colors-panels', false);
  const [layers, setLayers] = useLocalStorage('colors-layers', true);
  const [layersAlpha, setLayersAlpha] = useLocalStorage('colors-layers-alpha', false);
  const [alerts, setAlerts] = useLocalStorage('colors-alerts', false);
  const [alertsAlpha, setAlertsAlpha] = useLocalStorage('colors-alerts-alpha', false);
  const [buttons, setButtons] = useLocalStorage('colors-buttons', false);
  const [lines, setLines] = useLocalStorage('colors-lines', false);
  const [linesAlpha, setLinesAlpha] = useLocalStorage('colors-lines-alpha', false);
  const [textBlocks, setTextBlocks] = useLocalStorage('colors-textBlocks', false);
  const [alphaScales, setAlphaScales] = useLocalStorage('colors-alphaScales', false);

  const [darkTheme, setDarkTheme] = useLocalStorage('colors-darkTheme', false);
  const [grayscale, setGrayscale] = useLocalStorage('colors-grayscale', false);
  const [blur, setBlur] = useLocalStorage('colors-blur', false);
  const [gap, setGap] = useLocalStorage('colors-gap', false);
  const [p3, setP3] = useLocalStorage('colors-p3', false);
  const [outputJs, setOutputJs] = useLocalStorage('colors-output-js', false);

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

  React.useEffect(() => {
    const nextElement = document.body.querySelector('#__next') as HTMLDivElement;

    if (p3) {
      const computedStyle = getComputedStyle(document.body);

      colors.forEach((color) =>
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
          const valueP3 = computedStyle.getPropertyValue(`--colors-${color}${step}-p3`);
          const valueAlphaP3 = computedStyle.getPropertyValue(`--colors-${color}A${step}-p3`);

          if (valueP3) {
            nextElement.style.setProperty(
              `--colors-${color}${step}`,
              `var(--colors-${color}${step}-p3)`
            );
          }

          if (valueAlphaP3) {
            nextElement.style.setProperty(
              `--colors-${color}A${step}`,
              `var(--colors-${color}A${step}-p3)`
            );
          }
        })
      );
    } else {
      colors.forEach((color) =>
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
          nextElement.style.removeProperty(`--colors-${color}${step}`);
          nextElement.style.removeProperty(`--colors-${color}A${step}`);
        })
      );
    }

    return () => {
      colors.forEach((color) =>
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
          nextElement.style.removeProperty(`--colors-${color}${step}`);
          nextElement.style.removeProperty(`--colors-${color}A${step}`);
        })
      );
    };
  }, [p3]);

  React.useEffect(() => {
    document.body.classList.toggle('theme-default', !darkTheme);
    document.body.classList.toggle(darkThemeClassName, darkTheme);
    document.documentElement.style.backgroundColor = darkTheme ? 'black' : '';
  }, [darkTheme]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'd' && event.metaKey) {
        event.preventDefault();
        document.getElementById('dark-theme')?.querySelector('label')?.click();
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => removeEventListener('keydown', handleKeyDown);
  });

  return (
    <>
      <Section size="3" css={{ py: '$7', ml: sidebarWidth, overflowY: 'scroll', height: '100vh' }}>
        <Container size="3" css={{ mb: '$5' }}>
          <Box>
            <Checkbox defaultChecked={palette} onChange={(e) => setPalette(e.target.checked)}>
              Palette
            </Checkbox>
            <Checkbox defaultChecked={panels} onChange={(e) => setPanels(e.target.checked)}>
              Panels
            </Checkbox>
            <Checkbox defaultChecked={layers} onChange={(e) => setLayers(e.target.checked)}>
              Layers
            </Checkbox>
            <Checkbox
              defaultChecked={layersAlpha}
              onChange={(e) => setLayersAlpha(e.target.checked)}
            >
              Layers (Alpha)
            </Checkbox>
            <Checkbox defaultChecked={buttons} onChange={(e) => setButtons(e.target.checked)}>
              Buttons
            </Checkbox>
            <Checkbox defaultChecked={lines} onChange={(e) => setLines(e.target.checked)}>
              Lines
            </Checkbox>
            <Checkbox defaultChecked={linesAlpha} onChange={(e) => setLinesAlpha(e.target.checked)}>
              Lines (Alpha)
            </Checkbox>
            <Checkbox defaultChecked={alerts} onChange={(e) => setAlerts(e.target.checked)}>
              Alerts
            </Checkbox>
            <Checkbox
              defaultChecked={alertsAlpha}
              onChange={(e) => setAlertsAlpha(e.target.checked)}
            >
              Alerts (Alpha)
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
            <Checkbox defaultChecked={blur} onChange={(e) => setBlur(e.target.checked)}>
              Blur
            </Checkbox>
            <span id="dark-theme">
              <Checkbox checked={darkTheme} onChange={() => setDarkTheme((value) => !value)}>
                Dark theme (⌘D)
              </Checkbox>
            </span>
            <Separator css={{ my: '$3' }} />
            <Checkbox
              data-alpha-scales
              defaultChecked={alphaScales}
              onChange={(e) => setAlphaScales(e.target.checked)}
            >
              Show alpha scales
            </Checkbox>
            <Checkbox data-use-p3 defaultChecked={p3} onChange={(e) => setP3(e.target.checked)}>
              Use P3 colors
            </Checkbox>
            <Checkbox
              data-output-js
              defaultChecked={outputJs}
              onChange={(e) => setOutputJs(e.target.checked)}
            >
              Output JS
            </Checkbox>
          </Box>
        </Container>

        <div style={{ filter: blur ? 'blur(20px)' : undefined }}>
          {palette && <Palette showAlphaScales={alphaScales} />}
          {panels && <Panels />}
          {layers && <Layers />}
          {layersAlpha && <LayersAlpha />}
          {buttons && <Buttons />}
          {lines && <Lines />}
          {linesAlpha && <LinesAlpha />}
          {alerts && <Alerts />}
          {alertsAlpha && <AlertsAlpha />}
          {textBlocks && <TextBlocks />}
        </div>
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
        boxShadow: '1px 0 $colors$gray6',
        width: 240,
        ...darkThemeColor('black'),
      }}
    >
      <ColorTools />
    </Box>
  );
}

function Panels() {
  return (
    <Container size="4" css={{ p: '$9' }}>
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '80vh', gap: '$5' }}>
        {['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'].map((color) => (
          <Box key={color} css={{ backgroundColor: `$${color}1` }}>
            <Box css={{ backgroundColor: `$${color}2`, ml: '10vw', height: '80%' }}></Box>
            <Box css={{ backgroundColor: `$${color}3`, height: '20%' }}></Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function Layers() {
  return (
    <Container size="4" css={{ p: '$9' }}>
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color}>
            <TreeItem css={{ bc: `$${color}5` }}>
              <Box css={{ mr: '$2' }}>
                <RadiobuttonIcon />
              </Box>
              <Text size="1">Radio</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
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
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
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
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
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

function LayersAlpha() {
  return (
    <Container size="4" css={{ p: '$9' }}>
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color}>
            <TreeItem css={{ bc: `$${color}A5` }}>
              <Box css={{ mr: '$2' }}>
                <RadiobuttonIcon />
              </Box>
              <Text size="1">Radio</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}A3`,
                '&:hover': { bc: `$${color}A4` },
                '&:active': { bc: `$${color}A5` },
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
                bc: `$${color}A3`,
                '&:hover': { bc: `$${color}A4` },
                '&:active': { bc: `$${color}A5` },
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
                bc: `$${color}A3`,
                '&:hover': { bc: `$${color}A4` },
                '&:active': { bc: `$${color}A5` },
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
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$5' }}>
        Buttons & TextFields
      </Text>

      <Grid css={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color} css={{ '&[class] * + *': { ml: '$2', verticalAlign: 'top' } }}>
            <Button
              css={{
                fontWeight: 500,
                textTransform: 'capitalize',
                backgroundColor: `$${color}2`,
                boxShadow: `inset 0 0 0 1px $colors$${color}7`,
                color: `$${color}11`,
                '@hover': {
                  '&:hover': {
                    boxShadow: `inset 0 0 0 1px $colors$${color}8`,
                  },
                },
                '&:active': {
                  backgroundColor: `$${color}3`,
                  boxShadow: `inset 0 0 0 1px $colors$${color}8`,
                },
                '&:focus': {
                  boxShadow: `inset 0 0 0 1px $colors$${color}8, 0 0 0 1px $colors$${color}8`,
                },
              }}
            >
              {color}
            </Button>
            <Button
              css={{
                fontWeight: 500,
                textTransform: 'capitalize',
                backgroundColor: `transparent`,
                boxShadow: `inset 0 0 0 1px $colors$${color}8`,
                color: `$${color}11`,
                '@hover': {
                  '&:hover': {
                    boxShadow: `inset 0 0 0 1px $colors$${color}9`,
                  },
                },
                '&:active': {
                  backgroundColor: `$${color}3`,
                  boxShadow: `inset 0 0 0 1px $colors$${color}9`,
                },
                '&:focus': {
                  boxShadow: `inset 0 0 0 1px $colors$${color}8, 0 0 0 1px $colors$${color}A8`,
                },
              }}
            >
              {color}
            </Button>
          </Box>
        ))}
      </Grid>

      <Grid css={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '$2', mt: '$7' }}>
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              ...darkThemeColor(`$${color}1`),
              p: '$2',
              borderRadius: '$2',
              boxShadow: `inset 0 0 0 1px $colors$${color}6`,
              '&[class] * + *': { ml: '$1', verticalAlign: 'top' },
              '@hover': {
                'button:hover': {
                  backgroundColor: `$${color}A3`,
                },
              },
              'button:focus': {
                boxShadow: `inset 0 0 0 1px $colors$${color}A8, 0 0 0 1px $colors$${color}A8`,
              },
              'button:active': {
                backgroundColor: `$${color}A4`,
              },
            }}
          >
            <IconButton>
              <PlusIcon />
            </IconButton>
            <IconButton>
              <CursorArrowIcon />
            </IconButton>
            <IconButton>
              <TextIcon />
            </IconButton>
            <IconButton>
              <FontFamilyIcon />
            </IconButton>
            <IconButton>
              <FontSizeIcon />
            </IconButton>
            <IconButton>
              <LineHeightIcon />
            </IconButton>
            <Text
              size="2"
              css={{ display: 'inline', lineHeight: '25px', textTransform: 'capitalize' }}
            >
              {color}
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid css={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '$5', mt: '$7' }}>
        <TextField
          size="2"
          placeholder="Gray"
          css={{
            ...darkThemeColor('$gray1'),
            boxShadow: 'inset 0 0 0 1px $colors$gray7',
            color: '$gray12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$gray6, inset 0 0 0 100px $colors$gray3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$gray8, 0px 0px 0px 1px $colors$gray8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$gray8, 0px 0px 0px 1px $colors$gray8, inset 0 0 0 100px $colors$gray3',
              },
            },
            '&::placeholder': {
              color: '$gray9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Gray (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$grayA7',
            color: '$grayA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$grayA6, inset 0 0 0 100px $colors$grayA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$grayA8, 0px 0px 0px 1px $colors$grayA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$grayA8, 0px 0px 0px 1px $colors$grayA8, inset 0 0 0 100px $colors$grayA3',
              },
            },
            '&::placeholder': {
              color: '$grayA9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Mauve & Plum"
          css={{
            ...darkThemeColor('$mauve1'),
            boxShadow: 'inset 0 0 0 1px $colors$mauve7',
            color: '$mauve12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$plum6, inset 0 0 0 100px $colors$plum3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$plum8, 0px 0px 0px 1px $colors$plum8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$plum8, 0px 0px 0px 1px $colors$plum8, inset 0 0 0 100px $colors$plum3',
              },
            },
            '&::placeholder': {
              color: '$mauve9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Mauve & Plum (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$mauveA7',
            color: '$mauveA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$plumA6, inset 0 0 0 100px $colors$plumA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$plumA8, 0px 0px 0px 1px $colors$plumA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$plumA8, 0px 0px 0px 1px $colors$plumA8, inset 0 0 0 100px $colors$plumA3',
              },
            },
            '&::placeholder': {
              color: '$mauveA9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Slate & Blue"
          css={{
            ...darkThemeColor('$slate1'),
            boxShadow: 'inset 0 0 0 1px $colors$slate7',
            color: '$slate12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
              },
            },
            '&::placeholder': {
              color: '$slate9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Slate & Blue (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
            color: '$slateA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$blueA6, inset 0 0 0 100px $colors$blueA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$blueA8, 0px 0px 0px 1px $colors$blueA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$blueA8, 0px 0px 0px 1px $colors$blueA8, inset 0 0 0 100px $colors$blueA3',
              },
            },
            '&::placeholder': {
              color: '$slateA9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Sage & Teal"
          css={{
            ...darkThemeColor('$sage1'),
            boxShadow: 'inset 0 0 0 1px $colors$sage7',
            color: '$sage12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$teal6, inset 0 0 0 100px $colors$teal3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$teal8, 0px 0px 0px 1px $colors$teal8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$teal8, 0px 0px 0px 1px $colors$teal8, inset 0 0 0 100px $colors$teal3',
              },
            },
            '&::placeholder': {
              color: '$sage9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Sage & Teal (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$sageA7',
            color: '$sageA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$tealA6, inset 0 0 0 100px $colors$tealA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$tealA8, 0px 0px 0px 1px $colors$tealA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$tealA8, 0px 0px 0px 1px $colors$tealA8, inset 0 0 0 100px $colors$tealA3',
              },
            },
            '&::placeholder': {
              color: '$sageA9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Olive & Lime"
          css={{
            ...darkThemeColor('$olive1'),
            boxShadow: 'inset 0 0 0 1px $colors$olive7',
            color: '$olive12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$lime6, inset 0 0 0 100px $colors$lime3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$lime8, 0px 0px 0px 1px $colors$lime8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$lime8, 0px 0px 0px 1px $colors$lime8, inset 0 0 0 100px $colors$lime3',
              },
            },
            '&::placeholder': {
              color: '$olive9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Olive & Lime (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$oliveA7',
            color: '$oliveA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$limeA6, inset 0 0 0 100px $colors$limeA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$limeA8, 0px 0px 0px 1px $colors$limeA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$limeA8, 0px 0px 0px 1px $colors$limeA8, inset 0 0 0 100px $colors$limeA3',
              },
            },
            '&::placeholder': {
              color: '$oliveA9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Sand & Amber"
          css={{
            ...darkThemeColor('$sand1'),
            boxShadow: 'inset 0 0 0 1px $colors$sand7',
            color: '$sand12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$amber6, inset 0 0 0 100px $colors$amber3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$amber8, 0px 0px 0px 1px $colors$amber8, inset 0 0 0 100px $colors$amber3',
              },
            },
            '&::placeholder': {
              color: '$sand9',
            },
          }}
        />
        <TextField
          size="2"
          placeholder="Sand & Amber (Alpha)"
          css={{
            bc: 'transparent',
            boxShadow: 'inset 0 0 0 1px $colors$sandA7',
            color: '$sandA12',
            fontVariantNumeric: 'tabular-nums',

            '&:-webkit-autofill': {
              boxShadow: 'inset 0 0 0 1px $colors$amberA6, inset 0 0 0 100px $colors$amberA3',
            },

            '&:-webkit-autofill::first-line': {
              fontFamily: '$untitled',
              color: '$hiContrast',
            },

            '&:focus': {
              boxShadow: 'inset 0px 0px 0px 1px $colors$amberA8, 0px 0px 0px 1px $colors$amberA8',
              '&:-webkit-autofill': {
                boxShadow:
                  'inset 0px 0px 0px 1px $colors$amberA8, 0px 0px 0px 1px $colors$amberA8, inset 0 0 0 100px $colors$amberA3',
              },
            },
            '&::placeholder': {
              color: '$sandA9',
            },
          }}
        />
      </Grid>

      <Grid css={{ gridTemplateColumns: 'repeat(8, 1fr)', gap: '$5', mt: '$9' }}>
        {colors.map((color) => (
          <Box key={color} css={{ '&[class] * + *': { ml: '$2', verticalAlign: 'top' } }}>
            <Button
              size="2"
              css={{
                // fontWeight: 5,
                textTransform: 'capitalize',
                backgroundColor: `$${color}9`,
                color: getHiContrast(color),
                boxShadow: 'none',
                borderRadius: '$pill',
                '@hover': {
                  '&:hover': {
                    color: getHiContrast(color),
                    boxShadow: 'none',
                    backgroundColor: `var(--colors-${color}10)`,
                  },
                },
                '&:active': {
                  boxShadow: 'none',
                  color: 'white',
                  backgroundColor: `$${color}11`,
                },
                '&:focus': {
                  boxShadow: `0 0 0 2px $colors$${color}7`,
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
        The <Code>6</Code> line should be very subtle, but visible on all backgrounds.
      </Paragraph>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$gray1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$gray2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$gray3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$gray4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$gray5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$gray6',
          }}
        ></Box>
      </Flex>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$mauve1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$mauve2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$mauve3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$mauve4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$mauve5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$mauve6',
          }}
        ></Box>
      </Flex>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$slate1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$slate2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$slate3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$slate4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$slate5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$slate6',
          }}
        ></Box>
      </Flex>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$sage1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sage2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sage3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sage4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sage5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$sage6',
          }}
        ></Box>
      </Flex>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$olive1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$olive2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$olive3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$olive4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$olive5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$olive6',
          }}
        ></Box>
      </Flex>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$sand1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sand2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sand3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sand4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$sand5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$sand6',
          }}
        ></Box>
      </Flex>
    </Container>
  );
}

function LinesAlpha() {
  return (
    <Container size="2" css={{ my: '$9' }}>
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
        Lines (Alpha)
      </Text>
      <Paragraph css={{ mb: '$7' }}>
        The <Code>6</Code> line should be very subtle, but visible on all backgrounds.
      </Paragraph>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: 1,
            height: 160,
            backgroundColor: '$grayA1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$grayA2' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$grayA3' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$grayA4' }}></Box>
        <Box css={{ fb: '0', fg: 1, height: 160, backgroundColor: '$grayA5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$grayA6',
          }}
        ></Box>
      </Flex>
    </Container>
  );
}

function Alerts() {
  return (
    <Container size="3" css={{ mb: '$9' }}>
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$5' }}>
        Alerts
      </Text>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box key={color} css={{ p: '$4', borderRadius: '$3', bc: `$${color}9` }}>
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
              bc: `$${color}2`,
              borderLeft: `2px solid $${color}6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
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
              bc: `$${color}2`,
              borderLeft: `3px solid $${color}8`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
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
              bc: `$${color}3`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}12` }}>
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
              bc: `$${color}2`,
              border: `1px solid $${color}6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function AlertsAlpha() {
  return (
    <Container size="3" css={{ mb: '$9' }}>
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$5' }}>
        Alerts (Alpha)
      </Text>

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
              bc: `$${color}A2`,
              borderLeft: `2px solid $${color}A6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}A11` }}>
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
              bc: `$${color}A2`,
              borderLeft: `3px solid $${color}A8`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}A11` }}>
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
              bc: `$${color}A3`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}A12` }}>
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
              bc: `$${color}A2`,
              border: `1px solid $${color}A6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}A11` }}>
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
        const color1 = `$${color}1`;
        const color2 = `$${color}2`;
        const color3 = `$${color}3`;
        const color9 = `$${color}9`;
        const color12 = `$${color}12`;

        return (
          <Box key={color} css={{ 'html.gap &': { display: 'grid', gap: '$5' } }}>
            <Box css={{ bc: color1, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color2, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color3, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color9, p: 200 }}>
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
            <Box css={{ bc: color12, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color2, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color2 }}>
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

function Palette({ showAlphaScales = false }: { showAlphaScales: boolean }) {
  const gridStyle = {
    gridAutoRows: '35px',
    gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
    'html.gap &': { gap: 2 },
  };

  return (
    <Container size="3">
      <Box css={{ mb: '$9', 'html.gap &': { display: 'grid', gap: 2 } }}>
        <Grid css={gridStyle}>
          <Box></Box>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>1</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>2</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>3</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>4</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>5</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>6</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>7</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>8</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>9</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>10</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>11</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>12</Text>
        </Grid>

        {colors.map((color) => (
          <Grid css={gridStyle} key={color}>
            <Box css={{ alignSelf: 'center' }}>
              <Text size="2" css={{ textTransform: 'capitalize' }}>
                {color}
              </Text>
            </Box>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <Box
                key={i}
                css={{ bc: `$${color}${i}` }}
                onClick={() => {
                  const thisColor = `var(--colors-${color}${i})`;
                  const newColor =
                    document.body.style.backgroundColor === thisColor ? '' : thisColor;
                  document.body.style.backgroundColor = newColor;
                }}
              />
            ))}

            {showAlphaScales && (
              <Box css={{ alignSelf: 'center' }}>
                <Text size="2" style={{ textTransform: 'capitalize' }}>
                  {color} A.
                </Text>
              </Box>
            )}

            {showAlphaScales &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <Box key={i} css={darkThemeColor(`var(--colors-${grayBackground[color]})`)}>
                  <Box
                    css={{ bc: `$${color}A${i}`, height: '100%' }}
                    onClick={() => {
                      const thisColor = `var(--colors-${color}A${i})`;
                      const newColor =
                        document.body.style.backgroundColor === thisColor ? '' : thisColor;
                      document.body.style.backgroundColor = newColor;
                    }}
                  />
                </Box>
              ))}
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

export function getHiContrast(color: ElementType<typeof colors>) {
  if (loContrasts.includes(color as any)) {
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

function darkThemeColor(color: string): any {
  return {
    [`body.${darkThemeClassName} &`]: {
      bc: color,
    },
  };
}
