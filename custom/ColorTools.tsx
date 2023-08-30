import React from 'react';
import chroma from 'chroma-js';
import bezier from 'bezier-easing';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { TextField } from '../components/TextField';
import { Text } from '../components/Text';
import { BezierCurveEditor } from 'react-bezier-curve-editor';
import {
  TriangleDownIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  CodeIcon,
  ResetIcon,
  CheckIcon,
  TextAlignJustifyIcon,
} from '@radix-ui/react-icons';
import { darkTheme as darkThemeClassName } from '../stitches.config';
import { colors, getHiContrast, grayBackground, loContrasts } from '../pages/colors';

const steps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as const;

// How much to boost the saturation towards the left end of the bezier curve
const defaultScaleStartSaturationBoost = 1;

// How much to mix step 9 and 11
const defaultMixRatioStep10 = 0.3;

type Curve = [number, number, number, number];

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

type EditableScaleProps = {
  name: ElementType<typeof colors>;
  lightThemeConfig: {
    // Steps to interpolate between
    step2?: string;
    step8?: string;

    // Optional overrides of the scale
    step1?: string;
    step3?: string;
    step4?: string;
    step5?: string;
    step6?: string;
    step7?: string;
    step9?: string;
    step10?: string;
    step11?: string;
    step12?: string;

    // Initial Bezier curve for step 2 to step 8
    defaultCurve: Curve;
    // How much to boost the saturation towards the left end of the bezier curve
    scaleStartSaturationBoost?: number;
    // How much to mix step 9 and 11
    mixRatioStep10?: number;
  };
  darkThemeConfig: {
    // Steps to interpolate between
    step2?: string;
    step8?: string;

    // Optional overrides of the scale
    step1?: string;
    step3?: string;
    step4?: string;
    step5?: string;
    step6?: string;
    step7?: string;
    step9?: string;
    step10?: string;
    step11?: string;
    step12?: string;

    // Initial Bezier curve for step 2 to step 8
    defaultCurve: Curve;
    // How much to boost the saturation towards the left end of the bezier curve
    scaleStartSaturationBoost?: number;
    // How much to mix step 9 and 11
    mixRatioStep10?: number;
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
            step2: 'hsl(0, 0%, 97.5%)',
            step8: 'hsl(0, 0%, 73.2%)',
            defaultCurve: [0.625, 0.455, 0.875, 0.405],
          }}
          darkThemeConfig={{
            step2: '#1e1e1e',
            step8: 'hsl(0, 0%, 37.5%)',
            defaultCurve: [0.2, 0.42, 0.78, 0.4],
          }}
        />
        <EditableScale
          name="mauve"
          lightThemeConfig={{
            step2: 'hsl(280, 23%, 98%)',
            step8: 'hsl(250, 11%, 75.5%)',
            defaultCurve: [0.64, 0.47, 0.905, 0.47],
          }}
          darkThemeConfig={{
            step2: '#1e1c1e',
            step8: 'hsl(260, 5%, 39.2%)',
            scaleStartSaturationBoost: 0.3,
            defaultCurve: [0.21, 0.43, 0.77, 0.375],
          }}
        />
        <EditableScale
          name="slate"
          lightThemeConfig={{
            defaultCurve: [0.65, 0.47, 0.905, 0.47],
          }}
          darkThemeConfig={{
            step2: '#1C1C1f',
            step8: 'hsl(210, 6%, 38.2%)',
            defaultCurve: [0.235, 0.435, 0.775, 0.395],
          }}
        />
        <EditableScale
          name="sage"
          lightThemeConfig={{
            step2: 'hsl(155, 17%, 97.3%)',
            step8: 'hsl(155, 3%, 73%)',
            defaultCurve: [0.665, 0.45, 0.865, 0.42],
          }}
          darkThemeConfig={{
            step2: '#1a1d1c',
            step8: 'hsl(155, 5%, 37%)',
            defaultCurve: [0.21, 0.405, 0.785, 0.38],
          }}
        />
        <EditableScale
          name="olive"
          lightThemeConfig={{
            step2: 'hsl(110, 17%, 97.6%)',
            step8: 'hsl(110, 3%, 73%)',
            defaultCurve: [0.64, 0.45, 0.885, 0.465],
          }}
          darkThemeConfig={{
            // step1: 'hsl(90, 6%, 9%)',
            step1: '#171816',
            step2: 'hsl(90, 4%, 11%)',
            step8: 'hsl(110, 3%, 37%)',
            defaultCurve: [0.21, 0.405, 0.78, 0.4],
          }}
        />
        <EditableScale
          name="sand"
          lightThemeConfig={{
            step2: 'hsl(50, 9%, 97.5%)',
            step8: 'hsl(50, 5%, 72.5%)',
            defaultCurve: [0.65, 0.45, 0.875, 0.48],
          }}
          darkThemeConfig={{
            step2: 'hsl(61, 2%, 10.3%)',
            step8: 'hsl(46, 4%, 37%)',
            defaultCurve: [0.21, 0.405, 0.78, 0.4],
          }}
        />
        <EditableScale
          name="tomato"
          lightThemeConfig={{
            step2: 'hsl(10, 90%, 98.3%)',
            step8: 'hsl(10, 72%, 71%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.38,
            defaultCurve: [0.55, 0.225, 0.74, 0.525],
          }}
          darkThemeConfig={{
            step2: 'hsl(10, 40%, 11.5%)',
            step8: 'hsl(10, 80%, 44%)',
            mixRatioStep10: 0.55,
            defaultCurve: [0.295, 0.29, 0.77, 0.15],
          }}
        />
        <EditableScale
          name="red"
          lightThemeConfig={{
            step2: 'hsl(359, 100%, 98.5%)',
            step8: 'hsl(359, 70%, 74.5%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.38,
            defaultCurve: [0.61, 0.265, 0.72, 0.52],
          }}
          darkThemeConfig={{
            step2: 'hsl(356, 30%, 12.5%)',
            step8: 'hsl(358, 75%, 47%)',
            mixRatioStep10: 0.48,
            defaultCurve: [0.325, 0.28, 0.765, 0.16],
          }}
        />
        <EditableScale
          name="ruby"
          lightThemeConfig={{
            step2: 'hsl(350, 100%, 98.5%)',
            step8: 'hsl(348, 62%, 73.5%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.4,
            defaultCurve: [0.6, 0.26, 0.71, 0.5],
          }}
          darkThemeConfig={{
            step2: 'hsl(347, 34%, 12.2%)',
            step8: 'hsl(348, 77%, 46%)',
            mixRatioStep10: 0.46,
            defaultCurve: [0.355, 0.315, 0.725, 0.11],
          }}
        />
        <EditableScale
          name="crimson"
          lightThemeConfig={{
            step2: 'hsl(332, 100%, 98.5%)',
            step8: 'hsl(336, 62%, 72.8%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.42,
            defaultCurve: [0.6, 0.26, 0.71, 0.5],
          }}
          darkThemeConfig={{
            step2: 'hsl(335, 33%, 12%)',
            step8: 'hsl(336, 80%, 45%)',
            mixRatioStep10: 0.48,
            defaultCurve: [0.32, 0.28, 0.73, 0.12],
          }}
        />
        <EditableScale
          name="pink"
          lightThemeConfig={{
            step2: 'hsl(322, 100%, 98.5%)',
            step8: 'hsl(322, 60%, 72.2%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.5,
            defaultCurve: [0.61, 0.27, 0.715, 0.5],
          }}
          darkThemeConfig={{
            step2: 'hsl(318, 33%, 12%)',
            step8: 'hsl(322, 60%, 46%)',
            mixRatioStep10: 0.4,
            defaultCurve: [0.32, 0.28, 0.73, 0.12],
          }}
        />
        <EditableScale
          name="plum"
          lightThemeConfig={{
            step2: 'hsl(297, 100%, 98.6%)',
            step8: 'hsl(292, 48%, 70.9%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.5,
            defaultCurve: [0.64, 0.29, 0.715, 0.495],
          }}
          darkThemeConfig={{
            step2: 'hsl(301, 30%, 11.5%)',
            step8: 'hsl(292, 40%, 48%)',
            mixRatioStep10: 0.4,
            defaultCurve: [0.36, 0.335, 0.73, 0.15],
          }}
        />
        <EditableScale
          name="purple"
          lightThemeConfig={{
            step2: 'hsl(280, 100%, 99.0%)',
            step8: 'hsl(272, 60%, 73.5%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.45,
            defaultCurve: [0.635, 0.3, 0.755, 0.485],
          }}
          darkThemeConfig={{
            step2: 'hsl(284, 31%, 12%)',
            step8: 'hsl(272, 43%, 50%)',
            defaultCurve: [0.335, 0.385, 0.705, 0.17],
          }}
        />
        <EditableScale
          name="violet"
          lightThemeConfig={{
            step2: 'hsl(252, 100%, 99.0%)',
            step8: 'hsl(252, 68%, 76.2%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.42,
            defaultCurve: [0.69, 0.31, 0.76, 0.525],
          }}
          darkThemeConfig={{
            step2: 'hsl(255, 30%, 13.1%)',
            step8: 'hsl(250, 46%, 54%)',
            defaultCurve: [0.34, 0.38, 0.685, 0.185],
          }}
        />
        <EditableScale
          name="iris"
          lightThemeConfig={{
            step2: 'hsl(238, 100%, 99%)',
            step8: 'hsl(238, 74%, 77.5%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.4,
            defaultCurve: [0.575, 0.21, 0.8, 0.565],
          }}
          darkThemeConfig={{
            step2: 'hsl(243, 31%, 13.5%)',
            step8: 'hsl(240, 45%, 54.8%)',
            mixRatioStep10: 0.28,
            defaultCurve: [0.355, 0.38, 0.705, 0.195],
          }}
        />
        <EditableScale
          name="indigo"
          lightThemeConfig={{
            step2: 'hsl(226, 100%, 98.7%)',
            step8: 'hsl(226, 76%, 74.5%)',
            scaleStartSaturationBoost: 1.2,
            mixRatioStep10: 0.4,
            defaultCurve: [0.575, 0.18, 0.815, 0.61],
          }}
          darkThemeConfig={{
            step1: '#181821',
            step2: 'hsl(230, 25%, 13%)',
            step8: 'hsl(226, 60%, 52%)',
            mixRatioStep10: 0.28,
            scaleStartSaturationBoost: 0.8,
            defaultCurve: [0.34, 0.38, 0.715, 0.165],
          }}
        />
        <EditableScale
          name="blue"
          lightThemeConfig={{
            step2: 'hsl(207, 100%, 98%)',
            step8: 'hsl(205.6, 82%, 65.4%)',
            scaleStartSaturationBoost: 1.9,
            mixRatioStep10: 0.4,
            defaultCurve: [0.48, 0.095, 0.795, 0.575],
          }}
          darkThemeConfig={{
            step1: '#181921',
            step2: 'hsl(216, 50%, 11.7%)',
            step8: 'hsl(211, 85%, 48%)',
            mixRatioStep10: 0.5,
            defaultCurve: [0.355, 0.3, 0.735, 0.15],
          }}
        />
        <EditableScale
          name="cyan"
          lightThemeConfig={{
            step2: 'hsl(185, 70%, 97.0%)',
            step8: 'hsl(189, 60%, 52.5%)',
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.505, 0.13, 0.78, 0.565],
          }}
          darkThemeConfig={{
            step2: 'hsl(192, 50%, 8.8%)',
            step8: 'hsl(192, 60%, 39%)',
            mixRatioStep10: 0.45,
            defaultCurve: [0.36, 0.295, 0.735, 0.15],
          }}
        />
        <EditableScale
          name="teal"
          lightThemeConfig={{
            step2: 'hsl(165, 70%, 96.7%)',
            step8: 'hsl(172, 42%, 52.5%)',
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.505, 0.13, 0.795, 0.55],
          }}
          darkThemeConfig={{
            step2: 'hsl(168, 55%, 7.8%)',
            step8: 'hsl(173, 60%, 34%)',
            mixRatioStep10: 0.45,
            defaultCurve: [0.375, 0.3, 0.725, 0.15],
          }}
        />
        <EditableScale
          name="jade"
          lightThemeConfig={{
            step2: 'hsl(151, 82%, 96.5%)',
            step8: 'hsl(164, 42%, 53.2%)',
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.505, 0.155, 0.78, 0.51],
          }}
          darkThemeConfig={{
            step2: 'hsl(153, 47%, 8.4%)',
            step8: 'hsl(164, 60%, 34%)',
            mixRatioStep10: 0.435,
            defaultCurve: [0.415, 0.315, 0.725, 0.16],
          }}
        />
        <EditableScale
          name="green"
          lightThemeConfig={{
            step2: 'hsl(136, 66%, 97%)',
            step8: 'hsl(151, 40%, 54.0%)',
            scaleStartSaturationBoost: 1.6,
            defaultCurve: [0.505, 0.13, 0.775, 0.51],
          }}
          darkThemeConfig={{
            step2: 'hsl(154, 33%, 8.6%)',
            step8: 'hsl(151, 52%, 36%)',
            mixRatioStep10: 0.42,
            defaultCurve: [0.405, 0.33, 0.735, 0.165],
          }}
        />
        <EditableScale
          name="grass"
          lightThemeConfig={{
            step2: 'hsl(120, 60%, 97%)',
            step8: 'hsl(131, 38%, 56.2%)',
            scaleStartSaturationBoost: 1.6,
            defaultCurve: [0.505, 0.13, 0.775, 0.51],
          }}
          darkThemeConfig={{
            step2: 'hsl(134, 20%, 9.5%)',
            step8: 'hsl(131, 35%, 40%)',
            mixRatioStep10: 0.52,
            defaultCurve: [0.41, 0.33, 0.73, 0.165],
          }}
        />
        <EditableScale
          name="brown"
          lightThemeConfig={{
            step2: 'hsl(30, 55%, 97.8%)',
            step8: 'hsl(28, 50%, 63.1%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.58, 0.275, 0.71, 0.485],
          }}
          darkThemeConfig={{
            step2: 'hsl(22, 12%, 10.4%)',
            step8: 'hsl(28, 28%, 45%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.41, 0.295, 0.75, 0.185],
          }}
        />
        <EditableScale
          name="bronze"
          lightThemeConfig={{
            step2: 'hsl(18, 70%, 98.0%)',
            step8: 'hsl(16, 25%, 66.5%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.58, 0.275, 0.725, 0.48],
          }}
          darkThemeConfig={{
            step2: 'hsl(17, 8%, 10.2%)',
            step8: 'hsl(18, 16%, 47.7%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.4, 0.31, 0.75, 0.185],
          }}
        />
        <EditableScale
          name="gold"
          lightThemeConfig={{
            step2: 'hsl(50, 50%, 96.6%)',
            step8: 'hsl(36, 27%, 61.8%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.535, 0.24, 0.745, 0.485],
          }}
          darkThemeConfig={{
            step2: 'hsl(43, 8%, 9.7%)',
            step8: 'hsl(36, 15%, 45%)',
            mixRatioStep10: 0.35,
            defaultCurve: [0.41, 0.29, 0.78, 0.23],
          }}
        />
        <EditableScale
          name="sky"
          lightThemeConfig={{
            step2: 'hsl(191, 100%, 97.3%)',
            step8: 'hsl(193, 65%, 56%)',
            scaleStartSaturationBoost: 3,
            mixRatioStep10: 0.1,
            defaultCurve: [0.55, 0.17, 0.64, 0.44],
          }}
          darkThemeConfig={{
            step2: 'hsl(202, 50%, 10%)',
            step8: 'hsl(200, 60%, 44%)',
            defaultCurve: [0.415, 0.305, 0.76, 0.175],
          }}
        />
        <EditableScale
          name="mint"
          lightThemeConfig={{
            step2: 'hsl(166, 88%, 96.6%)',
            step8: 'hsl(168, 45%, 53%)',
            scaleStartSaturationBoost: 3,
            mixRatioStep10: 0.08,
            defaultCurve: [0.52, 0.215, 0.635, 0.345],
          }}
          darkThemeConfig={{
            step2: 'hsl(176, 50%, 8%)',
            step8: 'hsl(170, 60%, 35%)',
            defaultCurve: [0.415, 0.3, 0.745, 0.2],
          }}
        />
        <EditableScale
          name="lime"
          lightThemeConfig={{
            step2: 'hsl(85, 70%, 96.5%)',
            step8: 'hsl(76, 40%, 52%)',
            scaleStartSaturationBoost: 5,
            mixRatioStep10: 0.12,
            defaultCurve: [0.62, 0.195, 0.72, 0.565],
          }}
          darkThemeConfig={{
            step2: 'hsl(75, 40%, 8%)',
            step8: 'hsl(75, 50%, 35%)',
            defaultCurve: [0.44, 0.31, 0.76, 0.195],
          }}
        />
        <EditableScale
          name="yellow"
          lightThemeConfig={{
            step2: 'hsl(53, 100%, 94%)',
            step8: 'hsl(46, 55%, 53%)',
            scaleStartSaturationBoost: 9,
            defaultCurve: [0.665, 0.14, 0.71, 0.49],
          }}
          darkThemeConfig={{
            step2: 'hsl(45, 80%, 7.3%)',
            step8: 'hsl(50, 60%, 35%)',
            defaultCurve: [0.44, 0.31, 0.76, 0.195],
          }}
        />
        <EditableScale
          name="amber"
          lightThemeConfig={{
            step2: 'hsl(39, 100%, 96.5%)',
            step8: 'hsl(35, 60%, 60.0%)',
            scaleStartSaturationBoost: 8,
            defaultCurve: [0.595, 0.165, 0.74, 0.615],
          }}
          darkThemeConfig={{
            step2: 'hsl(36, 80%, 8%)',
            step8: 'hsl(36, 60%, 41.5%)',
            defaultCurve: [0.45, 0.29, 0.76, 0.195],
          }}
        />
        <EditableScale
          name="orange"
          lightThemeConfig={{
            step2: 'hsl(22, 100%, 97.8%)',
            step8: 'hsl(19, 80%, 64.5%)',
            scaleStartSaturationBoost: 8,
            defaultCurve: [0.635, 0.175, 0.79, 0.56],
          }}
          darkThemeConfig={{
            step2: 'hsl(28, 80%, 8.6%)',
            step8: 'hsl(25, 70%, 45%)',
            defaultCurve: [0.45, 0.29, 0.76, 0.195],
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

  const showAlphaValues =
    (document.querySelector('[data-alpha-scales]') as HTMLInputElement | null)?.checked ?? false;

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

      // Saturation speed adjustment for the left end of the bezier curve
      const boost1 = config.scaleStartSaturationBoost ?? defaultScaleStartSaturationBoost;
      // Smaller speed adjustment for the right end of the bezier curve to reduce the left end pull
      const boost2 = boost1 / 10 + 0.9;

      const [x1, y1, x2, y2] = newCurve;
      const hueCurve = newCurve;
      // Boost saturation speed on the left end of the curve, reduce slightly on the right end of the curve
      const chromaCurve: Curve = [x1, y1 * boost1, Math.min(1, x2 * boost2), y2];
      const lumCurve: Curve = [1 - x2, 1 - y2, 1 - x1, 1 - y1];

      const newColors = generateColors({
        name,
        start: config.step2 ?? computedStyles.getPropertyValue(`--colors-${name}2`) ?? '#000000',
        end: config.step8 ?? computedStyles.getPropertyValue(`--colors-${name}8`) ?? '#000000',
        stepsCount: 7,
        hueCurve,
        chromaCurve,
        lumCurve,
      });

      steps.forEach((n) => {
        if (n === '2' || n === '8') {
          return;
        }

        if (config['step' + n]) {
          newColors.push({
            name: name + n,
            value: config['step' + n],
          });
        }
      });

      // Add 10 as a mix of 9 and 11, unless they have been added manually before
      if (!newColors.find((color) => color.name === `${name}10`)) {
        const computedStyles = getComputedStyle(document.body);
        const isLoContrast = loContrasts.includes(name);
        const baseStep = '9';
        const mixStep = isDarkTheme && isLoContrast ? '12' : '11';

        const baseColor =
          newColors.find((color) => color.name === `${name}${baseStep}`)?.value ??
          computedStyles.getPropertyValue(`--colors-${name}${baseStep}`);

        const mixColor =
          newColors.find((color) => color.name === `${name}${mixStep}`)?.value ??
          computedStyles.getPropertyValue(`--colors-${name}${mixStep}`);

        const step10 = chroma.interpolate(
          baseColor,
          mixColor,
          config.mixRatioStep10 ?? defaultMixRatioStep10,
          'hcl'
        );

        newColors.push({ name: `${name}10`, value: step10.hex() });
      }

      // Set alpha scales
      Array.from(Array(12)).forEach((_, index) => {
        const newColor = newColors.find((color) => color.name === name + (index + 1));

        const targetColorValue =
          newColor?.value ?? computedStyles.getPropertyValue(`--colors-${name}${index + 1}`);

        if (targetColorValue) {
          const darkThemeBackdrop = grayBackground[name];

          const backgroundColor = isDarkTheme
            ? newColors.find((color) => color.name === darkThemeBackdrop)?.value ??
              computedStyles.getPropertyValue(`--colors-${darkThemeBackdrop}`)
            : '#ffffff';

          const alphaValue = getAlphaColor(targetColorValue, backgroundColor, name + (index + 1));
          newColors.push({ name: `${name}A${index + 1}`, value: alphaValue });
        }
      });

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
    Array.from(Array(12)).forEach((_, index) => {
      document.body.style.removeProperty(`--colors-${name}${index + 1}`);
      document.body.style.removeProperty(`--colors-${name}A${index + 1}`);
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
      return computedStyles.getPropertyValue(`--colors-${name}${step}`);
    };

    const step1 = getValue('1');
    const step2 = getValue('2');
    const step3 = getValue('3');
    const step9 = getValue('9');
    const step11 = getValue('11');
    const bgContrastColor = getHiContrast(name);

    const newContrasts = [
      chroma.contrast(step1, step11),
      chroma.contrast(step2, step11),
      chroma.contrast(step3, step11),
      chroma.contrast(step9, bgContrastColor),
    ];

    setContrasts(newContrasts);
    setFailsContrast(newContrasts.slice(0, -1).some((ratio) => ratio < 4.5) || newContrasts[3] < 3);
  }, [active, isDarkTheme, darkColors, lightColors]);

  return (
    <Box data-editable-scale={name} css={{ mb: '-$2', color: '$hiContrast' }}>
      <Flex css={{ ai: 'center', mr: '$1' }}>
        <Text
          data-panel-toggle
          data-panel-collapsed={collapsed}
          size="2"
          css={{
            display: 'flex',
            ai: 'center',
            flex: '1 1 auto',
            fontWeight: 500,
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
          <Box css={{ bc: `$${name}9`, width: 13, height: 13, mr: '$1' }} />
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
          data-code-button
          data-show-code={showCode}
          onClick={(event) => {
            // Toggle all on Alt key
            if (event.altKey) {
              document
                .querySelectorAll(`[data-code-button][data-show-code="${showCode}"]`)
                .forEach((element) => (element as HTMLElement).click());
              return;
            }

            // Toggle all and copy color codes for all scales on the Command key
            if (event.metaKey) {
              let clipboard = '';

              document.querySelectorAll(`[data-color-code]`).forEach((element) => {
                const parent = element.closest('[data-editable-scale]')!;
                const scaleName =
                  parent.getAttribute('data-editable-scale')! + (showAlphaValues ? 'A' : '');
                const colorCodes = Array.from((element as HTMLElement).childNodes)
                  .map((child) => '  ' + child.textContent + '\n')
                  .join('');
                const codeToCopy = `export const ${scaleName} = {\n` + colorCodes + `};\n\n`;

                clipboard = clipboard + codeToCopy;

                // Show check icon for a moment after copying
                parent
                  .querySelector('[data-code-button]')!
                  .setAttribute('data-show-check-icon', 'true');

                setTimeout(() => {
                  parent!
                    .querySelector('[data-code-button]')!
                    .removeAttribute('data-show-check-icon');
                }, 1000);
              });

              // Remove redundant newline
              clipboard = clipboard.replace(/\n\n$/m, '\n');

              navigator.clipboard.writeText(clipboard);
              return;
            }

            if (collapsed) {
              setCollapsed(false);
            }

            setShowCode(!showCode);
          }}
          css={{
            p: '$1',
            flex: 'none',
            '& [data-check-icon]': {
              display: 'none',
            },
            '&[data-show-check-icon]': {
              '& [data-main-icon]': {
                display: 'none',
              },
              '& [data-check-icon]': {
                display: 'block',
              },
            },
          }}
        >
          {showCode ? <CodeIcon data-main-icon /> : <TextAlignJustifyIcon data-main-icon />}
          <CheckIcon data-check-icon />
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
          <Grid
            data-color-code
            css={{
              mx: '$2',
              gridAutoRows: '25px',
              opacity: showCode ? 1 : 0,
              position: showCode ? 'static' : 'absolute',
              pointerEvents: showCode ? 'auto' : 'none',
            }}
          >
            {steps.map((step) => {
              const variableName = showAlphaValues
                ? `--colors-${name}A${step}`
                : `--colors-${name}${step}`;
              const valueToShow = computedStyles.getPropertyValue(variableName);
              const nameToShow = showAlphaValues ? `${name}A` : name;

              return (
                <Text
                  key={step}
                  css={{
                    fontSize: '10px',
                    fontFamily: '$mono',
                    width: '100%',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    lineHeight: '25px',
                  }}
                >
                  {nameToShow}
                  {step}: '{chroma(valueToShow).hex()}',
                </Text>
              );
            })}
          </Grid>

          {!showCode && (
            <Grid css={{ mx: '$2', gridAutoRows: '25px' }}>
              <RatioBox css={{ bc: `$${name}1`, color: `$${name}11` }} ratio={contrasts[0]} />
              <RatioBox css={{ bc: `$${name}2`, color: `$${name}11` }} ratio={contrasts[1]} />
              <RatioBox css={{ bc: `$${name}3`, color: `$${name}11` }} ratio={contrasts[2]} />
              <RatioBox css={{ bc: `$${name}4` }} />
              <RatioBox css={{ bc: `$${name}5` }} />
              <RatioBox css={{ bc: `$${name}6` }} />
              <RatioBox css={{ bc: `$${name}7` }} />
              <RatioBox css={{ bc: `$${name}8` }} />
              <RatioBox
                css={{ bc: `$${name}9`, color: getHiContrast(name) }}
                ratio={contrasts[3]}
                type="AA Large Text"
              />
              <RatioBox css={{ bc: `$${name}10` }} />
              <RatioBox css={{ bc: `$${name}11` }} />
              <RatioBox css={{ bc: `$${name}12` }} />
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
          bc: '$gray3',
          m: '$2',
          borderRadius: '$3',
          'svg + span': { display: 'none' },
          'svg + span + span': { display: 'none' },
          'div:nth-child(2)': { display: 'none' },
          'button[class]': {
            width: 10,
            height: 10,
            bc: '$gray8',
            boxShadow: 'none',
            cursor: 'default',
          },
        }}
      >
        <BezierCurveEditor
          strokeWidth={1}
          outerAreaSize={70}
          curveLineColor="var(--colors-gray11)"
          handleLineColor="var(--colors-gray8)"
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
        <TextField
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

function distributeHue(value: number, rangeA: number[], rangeB: number[]) {
  let [toLow, toHigh] = Array.from(rangeB);

  const hueDistanceA = toLow - toHigh;
  const hueDistanceB = 360 - Math.max(toLow, toHigh) + Math.min(toLow, toHigh);
  const shouldRotateDirection = Math.abs(hueDistanceA) > Math.abs(hueDistanceB);

  if (shouldRotateDirection) {
    toLow = toLow > toHigh ? toLow : toHigh + hueDistanceB;
    toHigh = toLow > toHigh ? toLow + hueDistanceB : toHigh;
  }

  return distribute(value, rangeA, [toLow, toHigh]);
}

type ScaleSpec = {
  name: string;
  start: string;
  end: string;
  stepsCount: number;
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
  stepsCount,
  hueCurve,
  chromaCurve,
  lumCurve,
}: ScaleSpec): Color[] {
  function generateNumberOfSteps(curve: Curve) {
    const array: number[] = [];
    for (const key in Array.from(Array(stepsCount).keys())) {
      const step = parseInt(key);
      const easingFunction = bezier(...curve);
      const value = easingFunction(step / (stepsCount - 1));
      array.push(value);
    }
    array.reverse();
    return array;
  }

  const indexOffset = 2;

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
  let lumArrayAdjusted: number[] = [];
  let chrArrayAdjusted: number[] = [];
  let hueArrayAdjusted: number[] = [];

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
    hueArrayAdjusted.push(distributeHue(step, [0, 1], [hueStart, hueEnd]));
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

    const colorObj: Color = {
      name: `${name}${index + indexOffset}`,
      value: color.hex(),
    };

    colorMap.push(colorObj);
  }

  return colorMap;
}

// target = background * (1 - alpha) + foreground * alpha
// alpha = (target - background) / (foreground - background)
function getAlphaColor(targetColor: string, backgroundColor: string, debugColorName?: string) {
  const [targetR, targetG, targetB] = chroma(targetColor).rgb();
  const [backgroundR, backgroundG, backgroundB] = chroma(backgroundColor).rgb();

  // Is the background color lighter, RGB-wise, than target color?
  // Decide whether we want to add as little color or as much color as possible,
  // darkening or lightening the background respectively.
  // If at least one of the bits of the target RGB value
  // is lighter than the background, we want to lighten it.
  let desiredRGB =
    targetR > backgroundR ? 255 : targetG > backgroundG ? 255 : targetB > backgroundB ? 255 : 0;

  // Light theme example:
  // Consider a 200 120 150 target color with 255 255 255 background
  // What is the alpha value that will nudge background's 255 green to 120?
  //
  // Dark theme example:
  // Consider a 200 120 150 target color with 12 24 28 background
  // What is the alpha value that will nudge background's 12 red to 200?
  const alphaR = (targetR - backgroundR) / (desiredRGB - backgroundR);
  const alphaG = (targetG - backgroundG) / (desiredRGB - backgroundG);
  const alphaB = (targetB - backgroundB) / (desiredRGB - backgroundB);

  const clamp = (n: number) => (isNaN(n) ? 0 : Math.min(255, Math.max(0, n)));

  // Round alpha in 1/255 increments as it’s going to be converted to hex after
  const A = clamp(Math.ceil(Math.max(alphaR, alphaG, alphaB) * 255)) / 255;

  let R = clamp(((backgroundR * (1 - A) - targetR) / A) * -1);
  let G = clamp(((backgroundG * (1 - A) - targetG) / A) * -1);
  let B = clamp(((backgroundB * (1 - A) - targetB) / A) * -1);

  R = Math.ceil(R);
  G = Math.ceil(G);
  B = Math.ceil(B);

  const overlayR = overlayRgbBits(R, A, backgroundR);
  const overlayG = overlayRgbBits(G, A, backgroundG);
  const overlayB = overlayRgbBits(B, A, backgroundB);

  // Correct for rounding errors in light mode
  if (desiredRGB === 0) {
    if (targetR <= backgroundR && targetR !== overlayR) {
      R = targetR > overlayR ? R + 1 : R - 1;
    }
    if (targetG <= backgroundG && targetG !== overlayG) {
      G = targetG > overlayG ? G + 1 : G - 1;
    }
    if (targetB <= backgroundB && targetB !== overlayB) {
      B = targetB > overlayB ? B + 1 : B - 1;
    }
  }

  // Correct for rounding errors in dark mode
  if (desiredRGB === 255) {
    if (targetR >= backgroundR && targetR !== overlayR) {
      R = targetR > overlayR ? R + 1 : R - 1;
    }
    if (targetG >= backgroundG && targetG !== overlayG) {
      G = targetG > overlayG ? G + 1 : G - 1;
    }
    if (targetB >= backgroundB && targetB !== overlayB) {
      B = targetB > overlayB ? B + 1 : B - 1;
    }
  }

  return chroma.rgb(R, G, B).alpha(A).hex();
}

// Important – I empirically discovered that this rounding is how the browser actually overlays
// transparent RGB bits over each other. It does NOT round the whole result altogether.
function overlayRgbBits(foreground: number, alpha: number, background: number) {
  return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha);
}
