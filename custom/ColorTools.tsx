import React from 'react';
import chroma from 'chroma-js';
import bezier from 'bezier-easing';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Input } from '../components/Input';
import { Text } from '../components/Text';
import { BezierCurveEditor } from 'react-bezier-curve-editor';
import {
  TriangleDownIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  CodeIcon,
  BlendingModeIcon,
  ResetIcon,
} from '@radix-ui/react-icons';
import { darkTheme as darkThemeClassName, theme as lightThemeClassName } from '../stitches.config';
import { colors } from '../pages/colors';

// We are editing steps 100 through 700 via the tools
const steps = 7;

type Curve = [number, number, number, number];

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

type EditableScaleProps = {
  name: ElementType<typeof colors>;
  lightThemeConfig: {
    /** Step 100 */
    start: string;
    /** Step 700 */
    end: string;
    /** Initial Bezier curve */
    defaultCurve: Curve;
    /** Colors to override, e.g. "red000", "red500", "red900", etc */
    overrides?: Record<string, string>;
  };
  darkThemeConfig: {
    /** Step 100 */
    start: string;
    /** Step 700 */
    end: string;
    /** Initial Bezier curve */
    defaultCurve: Curve;
    /** Colors to override, e.g. "red000", "red500", "red900", etc */
    overrides?: Record<string, string>;
  };
};

export function ColorTools() {
  // No SSR please
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Flex css={{ minHeight: '100%', fd: 'column', jc: 'space-between' }}>
      <Box css={{ flex: 'none', mb: '$3' }}>
        <EditableScale
          name="gray"
          lightThemeConfig={{
            start: 'hsl(0 0% 97.3%)',
            end: 'hsl(0 0% 65.0%)',
            defaultCurve: [0.625, 0.225, 0.74, 0.515],
            overrides: {
              gray000: 'hsl(0 0% 99.0%)',
              gray900: 'hsl(0, 0%, 43.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(0 0% 9.6%)',
            end: 'hsl(0 0% 31.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="quartz"
          lightThemeConfig={{
            start: 'hsl(300 10% 97.6%)',
            end: 'hsl(252 4% 65.8%)',
            defaultCurve: [0.615, 0.21, 0.745, 0.515],
            overrides: {
              quartz800: 'hsl(252 4% 57.3%)',
              quartz900: 'hsl(252 4% 45%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(246 6% 9.6%)',
            end: 'hsl(250 5% 32.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="slate"
          lightThemeConfig={{
            start: 'hsl(206 17% 97.6%)',
            end: 'hsl(206 10% 65.0%)',
            defaultCurve: [0.605, 0.23, 0.745, 0.515],
            overrides: {
              slate900: 'hsl(206 6% 43.5%)',
              slate1000: 'hsl(206 24% 9%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(200 6% 9.6%)',
            end: 'hsl(204 6% 31.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="sage"
          lightThemeConfig={{
            start: 'hsl(155 17% 97.6%)',
            end: 'hsl(155 6% 63.8%)',
            defaultCurve: [0.605, 0.23, 0.735, 0.515],
            overrides: {
              sage800: 'hsl(155, 3.5%, 55.5%)',
              sage900: 'hsl(155, 3%, 43.0%)',
              sage1000: 'hsl(155 24% 9.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(0 0% 9.6%)',
            end: 'hsl(155 4% 30.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="olive"
          lightThemeConfig={{
            start: 'hsl(110 17% 97.6%)',
            end: 'hsl(110 5% 64%)',
            defaultCurve: [0.595, 0.22, 0.725, 0.525],
            overrides: {
              olive800: 'hsl(110, 3.5%, 55.5%)',
              olive900: 'hsl(110, 3%, 43.0%)',
              olive1000: 'hsl(110 25% 9.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(0 0% 9.6%)',
            end: 'hsl(110 4% 30.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="sand"
          lightThemeConfig={{
            start: 'hsl(50 9% 97.5%)',
            end: 'hsl(50 6% 63.8%)',
            defaultCurve: [0.595, 0.22, 0.725, 0.525],
            overrides: {
              sand900: 'hsl(50 2% 43.1%)',
              sand1000: 'hsl(50 6% 10%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(61 2% 9.6%)',
            end: 'hsl(46 4% 30.0%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
          }}
        />
        <EditableScale
          name="tomato"
          lightThemeConfig={{
            start: 'hsl(10 90% 98.3%)',
            end: 'hsl(10 70% 71.5%)',
            defaultCurve: [0.555, 0.215, 0.84, 0.675],
            overrides: {
              tomato800: 'hsl(10 82% 54.0%)',
              tomato900: 'hsl(10 82% 44%)',
              tomato1000: 'hsl(10 50% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(353 35% 10.2%)',
            end: 'hsl(353 70% 36.9%)',
            defaultCurve: [0.58, 0.195, 0.955, 0.545],
          }}
        />
        <EditableScale
          name="red"
          lightThemeConfig={{
            start: 'hsl(351 100% 98.5%)',
            end: 'hsl(355 70% 74.5%)',
            defaultCurve: [0.62, 0.32, 0.735, 0.49],
            overrides: {
              red000: 'hsl(351 100% 99.4%)',
              red100: 'hsl(351 100% 98.6%)',
              red800: 'hsl(356 75% 59.0%)',
              red900: 'hsl(356 65% 48.5%)',
              red1000: 'hsl(351 50% 14.6%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(353 35% 10.2%)',
            end: 'hsl(353 70% 36.9%)',
            defaultCurve: [0.58, 0.195, 0.955, 0.545],
          }}
        />
        <EditableScale
          name="crimson"
          lightThemeConfig={{
            start: 'hsl(332 100% 98.5%)',
            end: 'hsl(336 62% 72.8%)',
            defaultCurve: [0.62, 0.32, 0.735, 0.49],
            overrides: {
              crimson000: 'hsl(332 100% 99.4%)',
              crimson800: 'hsl(336 80% 57.8%)',
              crimson900: 'hsl(336 70% 46%)',
              crimson1000: 'hsl(340 65% 14.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(335 33% 10.0%)',
            end: 'hsl(334 80% 35.9%)',
            defaultCurve: [0.6, 0.25, 0.855, 0.56],
          }}
        />
        <EditableScale
          name="pink"
          lightThemeConfig={{
            start: 'hsl(322 100% 98.5%)',
            end: 'hsl(322 60% 72.2%)',
            defaultCurve: [0.62, 0.32, 0.735, 0.49],
            overrides: {
              pink000: 'hsl(322 100% 99.4%)',
              pink800: 'hsl(322 65% 54.5%)',
              pink900: 'hsl(322 65% 44%)',
              pink1000: 'hsl(320 70% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(318 33% 10.0%)',
            end: 'hsl(320 72% 38.0%)',
            defaultCurve: [0.555, 0.275, 0.815, 0.485],
          }}
        />
        <EditableScale
          name="plum"
          lightThemeConfig={{
            start: 'hsl(297 100% 98.6%)',
            end: 'hsl(292 48% 70.9%)',
            defaultCurve: [0.62, 0.32, 0.755, 0.485],
            overrides: {
              plum000: 'hsl(292 90% 99.4%)',
              plum800: 'hsl(292 45% 51.0%)',
              plum900: 'hsl(292 60% 42.5%)',
              plum1000: 'hsl(291 66% 14.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(301 30% 10.0%)',
            end: 'hsl(296 60% 38.0%)',
            defaultCurve: [0.7, 0.415, 0.86, 0.655],
          }}
        />
        <EditableScale
          name="purple"
          lightThemeConfig={{
            start: 'hsl(280 100% 99.0%)',
            end: 'hsl(272 60% 73.5%)',
            defaultCurve: [0.62, 0.32, 0.755, 0.485],
            overrides: {
              purple000: 'hsl(280 65% 99.4%)',
              purple900: 'hsl(272 50% 45.8%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(284 28% 10.4%)',
            end: 'hsl(272 55% 42.0%)',
            defaultCurve: [0.7, 0.415, 0.86, 0.655],
          }}
        />
        <EditableScale
          name="violet"
          lightThemeConfig={{
            start: 'hsl(252 100% 99.0%)',
            end: 'hsl(252 68% 76.2%)',
            defaultCurve: [0.62, 0.32, 0.775, 0.49],
            overrides: {
              violet000: 'hsl(255 65% 99.4%)',
              violet800: 'hsl(252 56% 57.5%)',
              violet900: 'hsl(250 43% 48.0%)',
              violet1000: 'hsl(254 60% 18.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(250 30% 11.8%)',
            end: 'hsl(252 58% 50.0%)',
            defaultCurve: [0.62, 0.36, 0.795, 0.485],
          }}
        />
        <EditableScale
          name="indigo"
          lightThemeConfig={{
            start: 'hsl(226 100% 98.7%)',
            end: 'hsl(226 76% 74.5%)',
            defaultCurve: [0.485, 0.205, 0.77, 0.46],
            overrides: {
              indigo000: 'hsl(225 60% 99.4%)',
              indigo800: 'hsl(226 70% 55.5%)',
              indigo900: 'hsl(226 55% 45%)',
              indigo1000: 'hsl(226 62% 17.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(229 37% 11.8%)',
            end: 'hsl(225 62% 47.1%)',
            defaultCurve: [0.585, 0.305, 0.845, 0.475],
          }}
        />
        <EditableScale
          name="blue"
          lightThemeConfig={{
            start: 'hsl(206 100% 98%)',
            end: 'hsl(206 82% 65.4%)',
            defaultCurve: [0.47, 0.165, 0.805, 0.56],
            overrides: {
              blue900: 'hsl(211 100% 43.2%)',
              blue1000: 'hsl(211 100% 15%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(212 50% 10.2%)',
            end: 'hsl(208 93% 40.0%)',
            defaultCurve: [0.695, 0.39, 0.815, 0.48],
          }}
        />
        <EditableScale
          name="sky"
          lightThemeConfig={{
            start: 'hsl(194 100% 97.8%)',
            end: 'hsl(195 80% 54.5%)',
            defaultCurve: [0.46, 0.205, 0.805, 0.56],
            overrides: {
              sky800: 'hsl(198 100% 44.0%)',
              sky900: 'hsl(204 100% 37.5%)',
              sky1000: 'hsl(205 100% 14.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(212 50% 10.2%)',
            end: 'hsl(208 93% 40.0%)',
            defaultCurve: [0.695, 0.39, 0.815, 0.48],
          }}
        />
        <EditableScale
          name="cyan"
          lightThemeConfig={{
            start: 'hsl(185 70% 97.0%)',
            end: 'hsl(189 60% 52.5%)',
            defaultCurve: [0.635, 0.24, 0.825, 0.69],
            overrides: {
              cyan000: 'hsl(185 60% 98.7%)',
              cyan800: 'hsl(190 95% 39.0%)',
              cyan900: 'hsl(192 85% 31.0%)',
              cyan1000: 'hsl(192 88% 12.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(192 68% 7.5%)',
            end: 'hsl(190 85% 32.0%)',
            defaultCurve: [0.54, 0.335, 0.93, 0.675],
          }}
        />
        <EditableScale
          name="teal"
          lightThemeConfig={{
            start: 'hsl(165 70% 96.7%)',
            end: 'hsl(172 42% 52.5%)',
            defaultCurve: [0.635, 0.24, 0.84, 0.69],
            overrides: {
              teal000: 'hsl(165 60% 98.8%)',
              teal800: 'hsl(173 80% 36.0%)',
              teal900: 'hsl(174 90% 25.2%)',
              teal1000: 'hsl(170 50% 12.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(168 76% 6.5%)',
            end: 'hsl(173 80% 29.0%)',
            defaultCurve: [0.69, 0.315, 0.91, 0.59],
          }}
        />
        <EditableScale
          name="green"
          lightThemeConfig={{
            start: 'hsl(136 66% 97%)',
            end: 'hsl(151 40% 54.0%)',
            defaultCurve: [0.625, 0.225, 0.85, 0.66],
            overrides: {
              green000: 'hsl(136 50% 98.9%)',
              green800: 'hsl(151 55% 41.5%)',
              green900: 'hsl(153 67% 28.5%)',
              green1000: 'hsl(155 40% 14.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(146 43% 8.2%)',
            end: 'hsl(151 60% 35.1%)',
            defaultCurve: [0.645, 0.24, 0.91, 0.48],
          }}
        />
        <EditableScale
          name="lime"
          lightThemeConfig={{
            start: 'hsl(85 70% 96.5%)',
            end: 'hsl(76 50% 51.0%)',
            defaultCurve: [0.595, 0.295, 0.785, 0.69],
            overrides: {
              lime000: 'hsl(85 50% 98.7%)',
              lime800: 'hsl(81 68% 46.0%)',
              lime900: 'hsl(75 65% 27.5%)',
              lime1000: 'hsl(78 70% 11.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(80 47% 7.5%)',
            end: 'hsl(76 85% 38.0%)',
            defaultCurve: [0.67, 0.155, 0.965, 0.47],
          }}
        />
        <EditableScale
          name="yellow"
          lightThemeConfig={{
            start: 'hsl(60 65% 95.8%)',
            end: 'hsl(55 85% 55%)',
            defaultCurve: [0.585, 0.705, 0.89, 0.92],
            overrides: {
              yellow000: 'hsl(60 54% 98.5%)',
              // yellow100: 'hsl(55 60% 96.0%)',
              yellow800: 'hsl(57 85% 60.5%)',
              yellow900: 'hsl(40 100% 29.5%)',
              yellow1000: 'hsl(40 55% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(44 59% 7.6%)',
            end: 'hsl(50 100% 45.1%)',
            defaultCurve: [1.0, 0.18, 1.0, 0.72],
          }}
        />
        <EditableScale
          name="orange"
          lightThemeConfig={{
            start: 'hsl(28 90% 97.8%)',
            end: 'hsl(28 95% 71.0%)',
            defaultCurve: [0.63, 0.515, 0.91, 0.895],
            overrides: {
              orange000: 'hsl(28 70% 99.0%)',
              // orange100: 'hsl(28 100% 97.5%)',
              orange800: 'hsl(28 100% 65%)',
              orange900: 'hsl(28 90% 36%)',
              orange1000: 'hsl(23 60% 17.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(30 50% 8.6%)',
            end: 'hsl(38 90% 48.0%)',
            defaultCurve: [0.75, 0.145, 1.0, 0.47],
          }}
        />
        <EditableScale
          name="brown"
          lightThemeConfig={{
            start: 'hsl(30 55% 98.0%)',
            end: 'hsl(28 50% 61.6%)',
            defaultCurve: [0.58, 0.275, 0.77, 0.46],
            overrides: {
              brown000: 'hsl(30 40% 99.1%)',
              brown900: 'hsl(25 30% 41.0%)',
              brown1000: 'hsl(20 30% 19.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(22 40% 9.2%)',
            end: 'hsl(28 48% 45.1%)',
            defaultCurve: [0.675, 0.245, 0.92, 0.505],
          }}
        />
        <EditableScale
          name="bronze"
          lightThemeConfig={{
            start: 'hsl(18 70% 98.5%)',
            end: 'hsl(16 25% 65.0%)',
            defaultCurve: [0.58, 0.275, 0.785, 0.445],
            overrides: {
              bronze000: 'hsl(15 30% 99.1%)',
              bronze900: 'hsl(15 20% 43.1%)',
              bronze1000: 'hsl(12 22% 21.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(17 14% 10.0%)',
            end: 'hsl(18 25% 44.9%)',
            defaultCurve: [0.58, 0.32, 0.94, 0.495],
          }}
        />
        <EditableScale
          name="gold"
          lightThemeConfig={{
            start: 'hsl(50 50% 97%)',
            end: 'hsl(36 27% 60%)',
            defaultCurve: [0.58, 0.275, 0.785, 0.445],
            overrides: {
              gold000: 'hsl(50 20% 99.1%)',
              gold800: 'hsl(36 20% 49.5%)',
              gold900: 'hsl(36 20% 39.0%)',
              gold1000: 'hsl(36 16% 20.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(43 15% 9.2%)',
            end: 'hsl(36 28% 45.1%)',
            defaultCurve: [0.73, 0.31, 0.93, 0.52],
          }}
        />
      </Box>

      <Text size="1" variant="gray" css={{ p: '$2', my: '$1' }}>
        Hint: Hold Alt for bulk icon actions
      </Text>
    </Flex>
  );
}

function EditableScale({ name, lightThemeConfig, darkThemeConfig }: EditableScaleProps) {
  // Whether dark theme is currently active
  const isDarkTheme = document.body.classList.contains(darkThemeClassName.toString());

  // Current curves
  const [lightThemeCurve, setLightThemeCurve] = React.useState(lightThemeConfig.defaultCurve);
  const [darkThemeCurve, setDarkThemeCurve] = React.useState(darkThemeConfig.defaultCurve);

  // Colors that we generated
  const [lightColors, setLightColors] = React.useState<Color[]>([]);
  const [darkColors, setDarkColors] = React.useState<Color[]>([]);

  // Contrast ratios for a couple of colors
  const [contrasts, setContrasts] = React.useState<number[]>([]);
  const [failsContrast, setFailsContrast] = React.useState(false);

  // Whether the panel UI is collapsed
  const [collapsed, setCollapsed] = React.useState(true);

  // Whether color modifications are active
  const [active, setActive] = React.useState(true);

  // Whether to show the CSS color codes
  const [showCode, setShowCode] = React.useState(false);

  // Refs to current values
  const curveRef = React.useRef<Curve>(isDarkTheme ? darkThemeCurve : lightThemeCurve);
  const generatedColorsRef = React.useRef<Color[]>([]);
  React.useEffect(() => {
    curveRef.current = isDarkTheme ? darkThemeCurve : lightThemeCurve;
    generatedColorsRef.current = isDarkTheme ? darkColors : lightColors;
  });

  // Whether to show the curve reset button
  const showResetButton =
    curveRef.current.join() !==
    (isDarkTheme ? darkThemeConfig : lightThemeConfig).defaultCurve.join();

  // Create a callback for when the curve changes
  const onCurveChange = React.useCallback(
    (newCurve: Curve) => {
      const config = isDarkTheme ? darkThemeConfig : lightThemeConfig;
      const [x1, y1, x2, y2] = newCurve;
      const hueCurve = newCurve;
      const chromaCurve = newCurve;
      const lumCurve: Curve = [1 - x2, 1 - y2, 1 - x1, 1 - y1];

      const newColors = generateColors({
        name,
        start: config.start,
        end: config.end,
        steps,
        hueCurve,
        chromaCurve,
        lumCurve,
      });

      // Set overrides
      if (config.overrides) {
        for (const key in config.overrides) {
          // Make sure that color name matches the desired override
          if (key.includes(name)) {
            newColors.push({ name: key, value: config.overrides[key] });
          }
        }
      }

      // Set CSS variables
      newColors.forEach((color) => {
        document.body.style.setProperty(`--colors-${color.name}`, color.value);
      });

      setActive(true);
      if (isDarkTheme) {
        setDarkThemeCurve(newCurve);
        setDarkColors(newColors);
      } else {
        setLightThemeCurve(newCurve);
        setLightColors(newColors);
      }
    },
    [isDarkTheme, darkThemeConfig, lightThemeConfig]
  );

  // Set new CSS variables when active or theme is changed
  React.useEffect(() => {
    // Deactivate and/or clear potentially stale stuff
    Array.from(Array(11)).forEach((_, index) => {
      document.body.style.removeProperty(`--colors-${name}${index}00`);
    });

    // Set relevant values if active
    if (active) {
      generatedColorsRef.current.forEach((color) => {
        document.body.style.setProperty(`--colors-${color.name}`, color.value);
      });
    }
  }, [active, isDarkTheme]);

  // Set initial values and catch dark theme changes
  React.useEffect(() => {
    onCurveChange(curveRef.current);
  }, [onCurveChange]);

  // Keep contrast ratios up to date
  const computedStyles = getComputedStyle(document.body);
  React.useEffect(() => {
    const getValue = (step: string) => {
      const cssVariableValue = computedStyles.getPropertyValue(`--colors-${name}${step}`);
      return prepareColorStringForChroma(cssVariableValue);
    };

    const step000 = getValue('000');
    const step100 = getValue('100');
    const step200 = getValue('200');
    const step800 = getValue('800');
    const step900 = getValue('900');
    const bgContrastColor = getStep800Contrast(name);

    const newContrasts = [
      chroma.contrast(step000, step900),
      chroma.contrast(step100, step900),
      chroma.contrast(step200, step900),
      chroma.contrast(step800, bgContrastColor),
    ];

    setContrasts(newContrasts);
    setFailsContrast(newContrasts.slice(0, -1).some((ratio) => ratio < 4.5) || newContrasts[3] < 3);
  }, [active, isDarkTheme, darkColors, lightColors]);

  return (
    <Box css={{ mb: '-$2', color: '$hiContrast' }}>
      <Flex css={{ ai: 'center', mr: '$1' }}>
        <Text
          data-panel-toggle
          data-panel-collapsed={collapsed}
          size="2"
          css={{
            display: 'flex',
            ai: 'center',
            flex: '1 1 auto',
            fontWeight: '500',
            textTransform: 'capitalize',
            px: '$2',
            pb: '$2',
            mt: '$2',
            mr: '$2',
            lineHeight: '25px',
            cursor: 'default',
            userSelect: 'none',
          }}
          onClick={(event) => {
            if (event.altKey) {
              document
                .querySelectorAll(`[data-panel-toggle][data-panel-collapsed="${collapsed}"]`)
                .forEach((element) => (element as HTMLElement).click());
              return;
            }

            setCollapsed(!collapsed);
          }}
        >
          <TriangleDownIcon
            style={{
              verticalAlign: 'middle',
              opacity: 0.3,
              marginTop: -2,
              marginLeft: -3,
              marginRight: 1,
              transform: collapsed ? 'rotate(-90deg)' : 'none',
            }}
          />
          <Box css={{ bc: `$${name}800`, width: 13, height: 13, mr: '$1' }} />
          {name} {failsContrast && '⛔️'}
        </Text>

        {showResetButton && (
          <Box
            data-reset-button
            onClick={(event) => {
              if (event.altKey) {
                document
                  .querySelectorAll(`[data-reset-button]`)
                  .forEach((element) => (element as HTMLElement).click());
                return;
              }

              onCurveChange((isDarkTheme ? darkThemeConfig : lightThemeConfig).defaultCurve);
            }}
            css={{ p: '$1', flex: 'none' }}
          >
            <ResetIcon />
          </Box>
        )}

        <Box
          data-show-code-toggle
          data-show-code={showCode}
          onClick={(event) => {
            if (event.altKey) {
              document
                .querySelectorAll(`[data-show-code-toggle][data-show-code="${showCode}"]`)
                .forEach((element) => (element as HTMLElement).click());
              return;
            }

            if (collapsed) {
              setCollapsed(false);
            }

            setShowCode(!showCode);
          }}
          css={{ p: '$1', flex: 'none' }}
        >
          {showCode ? <CodeIcon /> : <BlendingModeIcon />}
        </Box>

        <Box
          data-active-toggle
          data-active={active}
          onClick={(event) => {
            if (event.altKey) {
              document
                .querySelectorAll(`[data-active-toggle][data-active="${active}"]`)
                .forEach((element) => (element as HTMLElement).click());
              return;
            }

            setActive(!active);
          }}
          css={{ p: '$1', flex: 'none' }}
        >
          {active ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Box>
      </Flex>

      {!collapsed && (
        <Box>
          {showCode ? (
            <Grid css={{ mx: '$2', gridAutoRows: '25px' }}>
              {Array.from(Array(11)).map((_, index) => (
                <Text
                  css={{
                    fontSize: '10px',
                    fontFamily: '$mono',
                    width: '100%',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    lineHeight: '25px',
                  }}
                >
                  ${name}
                  {index}00: '{computedStyles.getPropertyValue(`--colors-${name}${index}00`)}',
                </Text>
              ))}
            </Grid>
          ) : (
            <Grid css={{ mx: '$2', gridAutoRows: '25px' }}>
              <RatioBox css={{ bc: `$${name}000`, color: `$${name}900` }} ratio={contrasts[0]} />
              <RatioBox css={{ bc: `$${name}100`, color: `$${name}900` }} ratio={contrasts[1]} />
              <RatioBox css={{ bc: `$${name}200`, color: `$${name}900` }} ratio={contrasts[2]} />
              <RatioBox css={{ bc: `$${name}300` }} />
              <RatioBox css={{ bc: `$${name}400` }} />
              <RatioBox css={{ bc: `$${name}500` }} />
              <RatioBox css={{ bc: `$${name}600` }} />
              <RatioBox css={{ bc: `$${name}700` }} />
              <RatioBox
                css={{ bc: `$${name}800`, color: getStep800Contrast(name) }}
                ratio={contrasts[3]}
                type="AA Large Text"
              />
              <RatioBox css={{ bc: `$${name}900` }} />
              <RatioBox css={{ bc: `$${name}1000` }} />
            </Grid>
          )}

          <Editor
            curve={isDarkTheme ? darkThemeCurve : lightThemeCurve}
            onCurveChange={onCurveChange}
          />
        </Box>
      )}
    </Box>
  );
}

// Step 800 for lime, yellow, and orange are supposed to be used with black text color rather than with white
function getStep800Contrast(scaleName: ElementType<typeof colors>) {
  if (scaleName === 'lime' || scaleName === 'yellow' || scaleName === 'orange') {
    return 'hsl(0, 0%, 0%)';
  }

  return 'hsl(0, 0%, 100%)';
}

type RatioBoxProps = {
  ratio?: number;
  type?: 'AA' | 'AA Large Text';
  css?: any;
};

function RatioBox({ css, ratio, type = 'AA' }: RatioBoxProps) {
  return (
    <Text
      css={{
        fontSize: 10,
        width: '100%',
        fontFamily: '$mono',
        lineHeight: '25px',
        ta: 'right',
        pr: 5,
        ...css,
      }}
    >
      {ratio !== undefined &&
        (type === 'AA'
          ? `${type} ${ratio >= 4.5 ? 'Pass' : 'Fail'} ${ratio.toFixed(2)}`
          : `${type} ${ratio >= 3 ? 'Pass' : 'Fail'} ${ratio.toFixed(2)}`)}
    </Text>
  );
}

type EditorProps = {
  curve: Curve;
  onCurveChange?: (curve: Curve) => void;
};

function Editor({ curve, onCurveChange }: EditorProps) {
  const curveToString = (c: Curve) => c.map((n) => n.toFixed(3)).join(', ');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState(curveToString(curve));
  const inputValueCurve = inputValue.split(', ').map(parseFloat);
  const inputValueIsValid =
    inputValueCurve.length === 4 && inputValueCurve.every((number) => !isNaN(number));

  // Update input when value changes externally
  React.useEffect(() => {
    // Update input when curve editor updates
    const [x1, y1, x2, y2] = curve;
    const [X1, Y1, X2, Y2] = inputRef.current!.value.split(', ').map(parseFloat);
    if (x1 !== X1 || y1 !== Y1 || x2 !== X2 || y2 !== Y2) {
      setInputValue(curveToString(curve));
    }
  }, [curve]);

  return (
    <Box>
      <Box
        css={{
          bc: '$gray200',
          m: '$2',
          borderRadius: '$3',
          'svg + span': { display: 'none' },
          'svg + span + span': { display: 'none' },
          'div:nth-child(2)': { display: 'none' },
          'button[class]': {
            width: 10,
            height: 10,
            bc: '$gray700',
            boxShadow: 'none',
            cursor: 'default',
          },
        }}
      >
        <BezierCurveEditor
          strokeWidth={1}
          outerAreaSize={70}
          curveLineColor="var(--colors-gray900)"
          handleLineColor="var(--colors-gray700)"
          fixedHandleColor="transparent"
          rowColor="transparent"
          outerAreaColor="transparent"
          innerAreaColor="transparent"
          value={curve}
          onChange={(newCurve) => {
            onCurveChange?.(newCurve);
          }}
        />
      </Box>
      <Box css={{ px: '$2', mb: '$3' }}>
        <Input
          variant="ghost"
          ref={inputRef}
          state={inputValueIsValid ? undefined : 'invalid'}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            const newCurve = event.target.value.split(', ').map(parseFloat);
            if (newCurve.length === 4 && newCurve.every((number) => !isNaN(number))) {
              onCurveChange?.(newCurve as Curve);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              if (!inputValueIsValid) {
                setInputValue(curveToString(curve));
              }

              event.currentTarget.blur();
            }
          }}
        />
      </Box>
    </Box>
  );
}

// Chroma JS doesn't know that "hsl(0 0% 50%)" format without commas is legit and breaks otherwise
function prepareColorStringForChroma(color: string) {
  return /hsl/.test(color) && !/,/.test(color) ? color.replace(/\s+/g, ', ') : color;
}

function distribute(value: number, rangeA: number[], rangeB: number[]) {
  const [fromLow, fromHigh] = Array.from(rangeA);
  const [toLow, toHigh] = Array.from(rangeB);

  const result = toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow;
    }
    if (result > toHigh) {
      return toHigh;
    }
  } else {
    if (result > toLow) {
      return toLow;
    }
    if (result < toHigh) {
      return toHigh;
    }
  }

  return result;
}

type ScaleSpec = {
  name: string;
  start: string;
  end: string;
  steps: number;
  hueCurve: Curve;
  chromaCurve: Curve;
  lumCurve: Curve;
};

type Color = {
  name: string;
  value: string;
};

function generateColors({
  name,
  start,
  end,
  steps,
  hueCurve,
  chromaCurve,
  lumCurve,
}: ScaleSpec): Color[] {
  function generateNumberOfSteps(curve: Curve) {
    const array: number[] = [];
    for (const key in Array.from(Array(steps).keys())) {
      const step = parseInt(key);
      const easingFunction = bezier(...curve);
      const value = easingFunction(step / (steps - 1));
      array.push(value);
    }
    array.reverse();
    return array;
  }
  const indexOffset = 1;

  start = prepareColorStringForChroma(start);
  end = prepareColorStringForChroma(end);

  const startColor = chroma(start);
  const endColor = chroma(end);

  const hueStart = startColor.hcl()[0];
  const chrStart = startColor.hcl()[1] * 100;
  const lumStart = startColor.hcl()[2] * 100;
  const hueEnd = endColor.hcl()[0];
  const chrEnd = endColor.hcl()[1] * 100;
  const lumEnd = endColor.hcl()[2] * 100;

  let lumArray = generateNumberOfSteps(lumCurve);
  let chrArray = generateNumberOfSteps(chromaCurve);
  let hueArray = generateNumberOfSteps(hueCurve);
  const lumArrayAdjusted: number[] = [];
  const chrArrayAdjusted: number[] = [];
  const hueArrayAdjusted: number[] = [];

  for (const index in lumArray) {
    const step = lumArray[index];
    lumArrayAdjusted.push(distribute(step, [0, 1], [lumEnd * 0.01, lumStart * 0.01]));
  }

  for (const index in chrArray) {
    const step = chrArray[index];
    const chrStep = distribute(step, [0, 1], [chrStart * 0.01, chrEnd * 0.01]);
    chrArrayAdjusted.push(chrStep);
  }

  for (const index in hueArray) {
    const step = hueArray[index];
    hueArrayAdjusted.push(distribute(step, [0, 1], [hueStart, hueEnd]));
  }

  chrArrayAdjusted.reverse();
  hueArrayAdjusted.reverse();

  lumArray = lumArrayAdjusted;
  chrArray = chrArrayAdjusted;
  hueArray = hueArrayAdjusted;

  const colorMap: Color[] = [];

  for (const key in lumArray) {
    const index = parseInt(key);

    const params = {
      hue: hueArray[index],
      chroma: chrArray[index],
      luminosity: lumArray[index],
    };

    const color = chroma(chroma.lch(params.luminosity, params.chroma, params.hue));
    const [h, s, l] = color.hsl().map((value) => (isNaN(value) ? 0 : value));

    const colorObj: Color = {
      name: `${name}${index + indexOffset}00`,
      value: `hsl(${Math.round(h)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%)`,
    };

    colorMap.push(colorObj);
  }

  return colorMap;
}
