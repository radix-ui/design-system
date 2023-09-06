import React from 'react';
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
import { APCAcontrast, calcAPCA, displayP3toY, sRGBtoY } from '../apca-w3';
import Color from 'colorjs.io';

const steps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as const;

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

    p3?: {
      step1?: string;
      step2?: string;
      step3?: string;
      step4?: string;
      step5?: string;
      step6?: string;
      step7?: string;
      step8?: string;
      step9?: string;
      step10?: string;
      step11?: string;
      step12?: string;
    };

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

    p3?: {
      step1?: string;
      step2?: string;
      step3?: string;
      step4?: string;
      step5?: string;
      step6?: string;
      step7?: string;
      step8?: string;
      step9?: string;
      step10?: string;
      step11?: string;
      step12?: string;
    };

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
            // step1: '#181818',
            // step1: '#141414',
            step1: '#111111',
            step2: '#191919',
            step8: 'hsl(0, 0%, 37.5%)',
            step11: 'hsl(0, 0%, 70%)',
            mixRatioStep10: 0.2,
            defaultCurve: [0.265, 0.31, 0.775, 0.34],
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
            // step1: '#191719',
            step1: '#121113',
            step2: '#1a191b',
            step8: 'hsl(260, 5%, 39.2%)',
            step11: 'hsl(255, 7%, 71.9%)',
            // scaleStartSaturationBoost: 0.3,
            mixRatioStep10: 0.2,
            defaultCurve: [0.27, 0.3, 0.775, 0.34],
          }}
        />
        <EditableScale
          name="slate"
          lightThemeConfig={{
            defaultCurve: [0.65, 0.47, 0.905, 0.47],
          }}
          darkThemeConfig={{
            // step1: '#141416',
            // step2: '#19191c',
            // defaultCurve: [0.28, 0.31, 0.755, 0.34],
            step1: '#111113',
            step2: '#18191b',
            step8: 'hsl(210, 8%, 38.2%)',
            step11: 'hsl(218, 7%, 70.8%)',
            defaultCurve: [0.295, 0.325, 0.765, 0.325],
            mixRatioStep10: 0.2,

            // GitHub
            // step1: '#0D1116',

            // Initial WorkOS gray
            // step1: 'hsl(240, 5%, 9.8%)',
            // step2: 'hsl(240, 6.9%, 11.4%)',
            // step3: 'hsl(235, 6.8%, 17.1%)',
            // step4: 'hsl(233, 6.8%, 19.9%)',
            // step5: 'hsl(231, 6.8%, 21.7%)',
            // step6: 'hsl(230, 6.9%, 23.8%)',
            // step7: 'hsl(228, 7%, 27%)',
            // step8: 'hsl(225, 7.2%, 32.5%)',
            // step9: 'hsl(220, 6%, 44%)',
            // step10: 'hsl(220, 5.2%, 49.8%)',
            // step11: 'hsl(220, 7%, 70%)',
            // step12: 'hsl(220, 10%, 90%)',
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
            step1: '#101211',
            step2: '#171918',
            step8: 'hsl(155, 3.5%, 37%)',
            step11: 'hsl(153, 5%, 69%)',
            scaleStartSaturationBoost: 0.5,
            mixRatioStep10: 0.2,
            defaultCurve: [0.28, 0.31, 0.755, 0.34],
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
            step1: '#111210',
            step2: '#181917',
            step8: 'hsl(110, 3.5%, 37%)',
            step9: 'hsl(108, 4.5%, 42%)',
            step11: 'hsl(109, 5%, 69.5%)',
            scaleStartSaturationBoost: 0.5,
            mixRatioStep10: 0.2,
            defaultCurve: [0.285, 0.325, 0.755, 0.34],
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
            step1: '#111110',
            step2: '#191918',
            step8: 'hsl(46, 4%, 37%)',
            step11: 'hsl(50, 5%, 68.9%)',
            mixRatioStep10: 0.2,
            defaultCurve: [0.28, 0.31, 0.755, 0.34],
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
            // step1: '#15100f',
            step1: '#181111',
            step2: 'hsl(10, 25%, 10%)',
            // step8: 'hsl(10, 80%, 40.8%)',
            // step11: 'hsl(10, 100%, 75.5%)',
            step11: 'hsl(12, 100%, 74.5%)',
            mixRatioStep10: 0.2,
            // scaleStartSaturationBoost: 1.8,
            defaultCurve: [0.445, 0.295, 0.69, 0.37],

            scaleStartSaturationBoost: 3,
            step8: 'hsl(10, 55%, 45%)',
            p3: {
              step11: 'color(display-p3 1 0.585 0.455)',
            },
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
            // step1: '#151010',
            step1: '#191111',
            step2: 'hsl(356, 25%, 10%)',
            step8: 'hsl(358, 45%, 49%)',
            step11: 'hsl(2, 100%, 78.6%)',
            p3: {
              step11: 'color(display-p3 1 0.57 0.55)',
            },
            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2.8,
            defaultCurve: [0.425, 0.315, 0.71, 0.4],
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
            step1: '#191113',
            step2: 'hsl(347, 30%, 10%)',
            step8: 'hsl(348, 45%, 48.5%)',
            scaleStartSaturationBoost: 2.8,

            // TODO step 10 hovers
            step11: 'hsl(355, 100%, 79%)',
            p3: {
              step11: 'color(display-p3 1 0.57 0.59)',
            },

            mixRatioStep10: 0.23,
            defaultCurve: [0.42, 0.325, 0.69, 0.4],
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
            step1: '#191114',
            step2: 'hsl(335, 32%, 10%)',
            step8: 'hsl(336, 45%, 47.5%)',
            step11: 'hsl(345, 100%, 78.6%)',
            p3: {
              step11: 'color(display-p3 1 0.56 0.66)',
            },
            scaleStartSaturationBoost: 3.1,
            mixRatioStep10: 0.25,
            defaultCurve: [0.405, 0.315, 0.675, 0.365],
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
            step1: '#191117',
            step2: 'hsl(318, 30%, 10%)',
            step8: 'hsl(322, 40%, 47%)',
            step11: 'hsl(327, 100%, 77.6%)',
            p3: {
              step11: 'color(display-p3 1 0.535 0.78)',
            },
            mixRatioStep10: 0.23,
            scaleStartSaturationBoost: 2.8,
            defaultCurve: [0.465, 0.405, 0.56, 0.225],
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
            // step1: '#141014',
            step1: '#181118',
            step2: 'hsl(301, 25%, 10%)',
            step8: 'hsl(292, 30%, 47%)',
            step11: 'hsl(292, 80%, 77.1%)',
            mixRatioStep10: 0.22,
            scaleStartSaturationBoost: 2.4,
            defaultCurve: [0.485, 0.445, 0.585, 0.25],
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
            // step1: '#131014',
            step1: '#18111B',
            step2: 'hsl(280, 24%, 11%)',
            step8: 'hsl(272, 37%, 51%)',
            step11: 'hsl(272, 100%, 80.8%)',
            scaleStartSaturationBoost: 2,
            mixRatioStep10: 0.2,
            defaultCurve: [0.405, 0.41, 0.585, 0.25],
            p3: {
              step11: 'color(display-p3 0.8 0.62 1)',
            },
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
            // step1: '#121016',
            step1: '#14121F',
            step2: 'hsl(260, 27%, 11.6%)',
            step8: 'hsl(252, 38%, 52%)',
            scaleStartSaturationBoost: 2,
            step11: 'hsl(253, 100%, 82.65%)',
            defaultCurve: [0.45, 0.43, 0.605, 0.335],
            mixRatioStep10: 0.2,
            p3: {
              step11: 'color(display-p3 0.72 0.65 1)',
            },
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
            step1: '#13131E',
            step2: 'hsl(243, 25%, 11.5%)',
            // step8: 'hsl(240, 40%, 53%)',
            step8: 'hsl(241, 40%, 53%)',
            step11: 'hsl(246, 100%, 83.1%)',
            p3: {
              step11: 'color(display-p3 0.685 0.662 1)',
            },

            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2.1,
            defaultCurve: [0.4, 0.445, 0.6, 0.38],
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
            defaultCurve: [0.43, 0.51, 0.61, 0.47],

            step1: '#11131F',
            step2: 'hsl(232, 30%, 11.4%)',
            step8: 'hsl(226, 50%, 49%)',
            step11: 'hsl(228, 100%, 81%)',
            step12: 'hsl(224, 100%, 92%)',
            p3: {
              step11: 'color(display-p3 0.63 0.69 1)',
            },

            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 1.8,
            // step8: 'hsl(226, 55%, 49%)',
            // scaleStartSaturationBoost: 2.6,
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
            step1: '#0d1520',
            step2: 'hsl(216, 34%, 10.7%)',
            step8: 'hsl(211, 60%, 45%)',
            step11: 'hsl(205, 100%, 68%)',
            mixRatioStep10: 0.35,
            scaleStartSaturationBoost: 1.7,
            defaultCurve: [0.305, 0.335, 0.605, 0.45],
          }}
        />
        <EditableScale
          name="cyan"
          lightThemeConfig={{
            step2: 'hsl(185, 70%, 97.0%)',
            step8: 'hsl(189, 60%, 52.5%)',
            step9: 'hsl(191, 100%, 39%)',
            p3: {
              step9: 'color(display-p3 0.19 0.64 0.82)',
            },
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.505, 0.13, 0.78, 0.565],
          }}
          darkThemeConfig={{
            step1: 'hsl(195, 35%, 7.2%)',
            step2: '#111B1F',
            step8: 'hsl(192, 80%, 34%)',
            step9: 'hsl(191, 100%, 39%)',
            step11: 'hsl(190, 85%, 50%)',
            p3: {
              step9: 'color(display-p3 0.19 0.64 0.82)',
            },
            mixRatioStep10: 0.45,
            // scaleStartSaturationBoost: 3,
            scaleStartSaturationBoost: 1.6,
            defaultCurve: [0.355, 0.37, 0.635, 0.435],
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
            step1: 'hsl(171, 23%, 6.8%)',
            step2: 'hsl(171, 25%, 8.5%)',
            step8: 'hsl(173, 60%, 31%)',
            mixRatioStep10: 0.45,
            scaleStartSaturationBoost: 1.6,
            defaultCurve: [0.42, 0.445, 0.485, 0.37],
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
            step1: 'hsl(155, 23%, 6.8%)',
            step2: 'hsl(154, 25%, 8.4%)',
            step8: 'hsl(164, 50%, 33%)',
            scaleStartSaturationBoost: 2,
            mixRatioStep10: 0.435,
            defaultCurve: [0.355, 0.37, 0.605, 0.495],
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
            step1: '#0D1310',
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
            step1: '#0D130F',
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
            step1: '#131210',
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
            step1: '#141110',
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
            step1: '#121211',
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
            step10: '#74DAF8',
            scaleStartSaturationBoost: 3,
            mixRatioStep10: 0.1,
            defaultCurve: [0.55, 0.17, 0.64, 0.44],
          }}
          darkThemeConfig={{
            step1: '#0D1217',
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
            step1: '#0C1313',
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
            step10: '#B0E64C',
            scaleStartSaturationBoost: 5,
            mixRatioStep10: 0.12,
            defaultCurve: [0.62, 0.195, 0.72, 0.565],
          }}
          darkThemeConfig={{
            step1: '#111304',
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
            step10: '#F9DA11',
            scaleStartSaturationBoost: 9,
            defaultCurve: [0.665, 0.14, 0.71, 0.49],
          }}
          darkThemeConfig={{
            step1: '#141100',
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
            step10: '#FFBA18',
            scaleStartSaturationBoost: 8,
            defaultCurve: [0.595, 0.165, 0.74, 0.615],
          }}
          darkThemeConfig={{
            step1: '#151002',
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
            step10: '#ED5F01',
            scaleStartSaturationBoost: 8,
            defaultCurve: [0.635, 0.175, 0.79, 0.56],
          }}
          darkThemeConfig={{
            step1: '#160f02',
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
  const [lightColors, setLightColors] = React.useState<GeneratedColor[]>([]);
  const [darkColors, setDarkColors] = React.useState<GeneratedColor[]>([]);

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
  const generatedColorsRef = React.useRef<GeneratedColor[]>([]);

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
      const satBoost = config.scaleStartSaturationBoost ?? 1;

      const [x1, y1, x2, y2] = newCurve;
      // Boost hue speed on the left end of the curve
      const hueCurve: Curve = [x1, y1, x2, y2];
      // Boost saturation speed on the left end of the curve
      const chromaCurve: Curve = [x1, y1 * satBoost, x2, y2];
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

      // Normal steps
      steps.forEach((n) => {
        if (config['step' + n]) {
          const index = newColors.findIndex((color) => color.name === name + n);
          if (newColors[index]) {
            newColors[index].value = toHex(config['step' + n]);
          } else {
            newColors.push({
              name: name + n,
              value: toHex(config['step' + n]),
            });
          }
        }
      });

      // P3 steps
      steps.forEach((n) => {
        if (config.p3?.['step' + n]) {
          newColors.push({
            name: name + n + '-p3',
            value: config.p3['step' + n],
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

        const mixRatio = config.mixRatioStep10 ?? defaultMixRatioStep10;
        const step10 = new Color(Color.mix(baseColor, mixColor, mixRatio, { space: 'lch' }));

        newColors.push({ name: `${name}10`, value: toHex(step10) });
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
      document.body.style.removeProperty(`--colors-${name}${index + 1}-p3`);
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

    const step11ValueP3 = getValue('11-p3')
      .replace(/color\(display-p3 |\)/g, '')
      .split(' ')
      .filter(Boolean)
      .map(Number);

    const p3Step11Y = step11ValueP3.length ? displayP3toY(step11ValueP3) : 0;
    const step1Y = sRGBtoY(new Color(getValue('1')).srgb.map((c) => c * 255));
    const step2Y = sRGBtoY(new Color(getValue('2')).srgb.map((c) => c * 255));
    const p3Step1Contrast = +Math.abs(p3Step11Y ? +APCAcontrast(p3Step11Y, step1Y) : 0).toFixed(1);
    const p3Step2Contrast = +Math.abs(p3Step11Y ? +APCAcontrast(p3Step11Y, step2Y) : 0).toFixed(1);
    const background = isDarkTheme ? computedStyles.getPropertyValue(`--colors-gray1`) : '#FFFFFF';

    const newContrasts = [
      apca(getValue('A11'), getValue('1')),
      apca(getValue('A11'), getValue('2')),
      apca(getValue('A11'), getValue('3')),
      apca(getValue('A11'), getValue('4')),
      apca(getValue('A11'), getValue('5')),
      apca(getValue('6'), background),
      apca(getValue('7'), background),
      apca(getValue('8'), background),
      apca(getHiContrast(name), getValue('9')),
      p3Step1Contrast,
      p3Step2Contrast,
    ];

    setContrasts(newContrasts);
    setFailsContrast(
      newContrasts[0] < 60 ||
        newContrasts[1] < 60 ||
        newContrasts[2] < 45 ||
        newContrasts[3] < 45 ||
        newContrasts[4] < 45 ||
        newContrasts[8] < 60 ||
        (!!newContrasts[9] && newContrasts[9] < 60) ||
        (!!newContrasts[10] && newContrasts[10] < 60)
    );
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
              let format: 'js' | 'css' = 'css';

              const computedStyle = getComputedStyle(document.body);

              document.querySelectorAll(`[data-color-code]`).forEach((element) => {
                const parent = element.closest('[data-editable-scale]')!;
                const color = parent.getAttribute('data-editable-scale')!;

                if (format === 'css') {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}${step}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `--${color}-${step}: ${value};\n`;
                    }
                  });

                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}A${step}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `--${color}-a${step}: ${value};\n`;
                    }
                  });

                  clipboard += `\n`;
                }

                if (format === 'js') {
                  clipboard += isDarkTheme
                    ? `export const ${color}Dark = {\n`
                    : `export const ${color} = {\n`;

                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}${step}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `  ${color}${step}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                  clipboard += isDarkTheme
                    ? `export const ${color}DarkA = {\n`
                    : `export const ${color}A = {\n`;

                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}A${step}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `  ${color}A${step}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                  clipboard += isDarkTheme
                    ? `export const ${color}DarkP3 = {\n`
                    : `export const ${color}P3 = {\n`;

                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((step) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}${step}-p3`);

                    if (value) {
                      clipboard += `  ${color}${step}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                }

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
                  {step}: '{toHex(valueToShow)}',
                </Text>
              );
            })}
          </Grid>

          {!showCode && (
            <Grid css={{ mx: '$2', gridAutoRows: '25px' }}>
              <RatioBox
                css={{ bc: `$${name}1`, color: `$${name}A11` }}
                ratio={contrasts[0]}
                ratioP3={contrasts[9]}
                target={60}
              />
              <RatioBox
                css={{ bc: `$${name}2`, color: `$${name}A11` }}
                ratio={contrasts[1]}
                ratioP3={contrasts[10]}
                target={60}
              />
              <RatioBox
                css={{ bc: `$${name}3`, color: `$${name}A11` }}
                ratio={contrasts[2]}
                target={45}
              />
              <RatioBox
                css={{ bc: `$${name}4`, color: `$${name}A11` }}
                ratio={contrasts[3]}
                target={45}
              />
              <RatioBox
                css={{ bc: `$${name}5`, color: `$${name}A11` }}
                ratio={contrasts[4]}
                target={45}
              />
              <RatioBox
                css={{ bc: `$${name}6`, color: getHiContrast(name) }}
                ratio={contrasts[5]}
              />
              <RatioBox
                css={{ bc: `$${name}7`, color: getHiContrast(name) }}
                ratio={contrasts[6]}
              />
              <RatioBox
                css={{ bc: `$${name}8`, color: getHiContrast(name) }}
                ratio={contrasts[7]}
              />
              <RatioBox
                css={{ bc: `$${name}9`, color: getHiContrast(name) }}
                ratio={contrasts[8]}
                target={60}
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
  ratioP3?: number;
  target?: number;
  css?: any;
};

function RatioBox({ css, ratio, ratioP3, target }: RatioBoxProps) {
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
      {target !== undefined &&
        ratio !== undefined &&
        (ratio >= target ? `Lc ${target} Pass ` : `Lc ${target} Fail `)}
      {ratio !== undefined && ratio.toFixed(2)}
      {!!ratioP3 && ', P3 ' + ratioP3.toFixed(2)}
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

type GeneratedColor = {
  name: string;
  value: string;
  // valueP3: string;
};

function generateColors({
  name,
  start,
  end,
  stepsCount,
  hueCurve,
  chromaCurve,
  lumCurve,
}: ScaleSpec): GeneratedColor[] {
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

  const startColor = new Color(start);
  const endColor = new Color(end);

  const [lumStart, chrStart, lchHueStart] = startColor.lch;
  const [lumEnd, chrEnd, lchHueEnd] = endColor.lch;
  const hslHueStart = +startColor.to('hsl').coords[0];
  const hslHueEnd = +endColor.to('hsl').coords[0];

  let lumArray = generateNumberOfSteps(lumCurve);
  let chrArray = generateNumberOfSteps(chromaCurve);
  let hclHueArray = generateNumberOfSteps(hueCurve);
  let hslHueArray = generateNumberOfSteps(hueCurve);
  let lumArrayAdjusted: number[] = [];
  let chrArrayAdjusted: number[] = [];
  let hclHueArrayAdjusted: number[] = [];
  let hslHueArrayAdjusted: number[] = [];

  for (const index in lumArray) {
    const step = lumArray[index];
    lumArrayAdjusted.push(distribute(step, [0, 1], [lumEnd, lumStart]));
  }

  for (const index in chrArray) {
    const step = chrArray[index];
    const chrStep = distribute(step, [0, 1], [chrStart, chrEnd]);
    chrArrayAdjusted.push(chrStep);
  }

  for (const index in hclHueArray) {
    const step = hclHueArray[index];
    hclHueArrayAdjusted.push(distributeHue(step, [0, 1], [lchHueStart, lchHueEnd]));
    hslHueArrayAdjusted.push(distributeHue(step, [0, 1], [hslHueStart, hslHueEnd]));
  }

  chrArrayAdjusted.reverse();
  hclHueArrayAdjusted.reverse();
  hslHueArrayAdjusted.reverse();

  lumArray = lumArrayAdjusted;
  chrArray = chrArrayAdjusted;
  hclHueArray = hclHueArrayAdjusted;
  hslHueArray = hslHueArrayAdjusted;

  const colorMap: GeneratedColor[] = [];

  for (const key in lumArray) {
    const index = parseInt(key);
    const color = new Color('lch', [lumArray[index], chrArray[index], hclHueArray[index]]);
    colorMap.push({
      name: `${name}${index + indexOffset}`,
      value: toHex(color),
    });
  }

  return colorMap;
}

// target = background * (1 - alpha) + foreground * alpha
// alpha = (target - background) / (foreground - background)
function getAlphaColor(targetColor: string, backgroundColor: string, debugColorName?: string) {
  const [targetR, targetG, targetB] = new Color(targetColor).srgb.map((c) => Math.round(c * 255));
  const [backgroundR, backgroundG, backgroundB] = new Color(backgroundColor).srgb.map((c) =>
    Math.round(c * 255)
  );

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

  return toHex(`rgb(${R} ${G} ${B} / ${A})`);
}

// Important – I empirically discovered that this rounding is how the browser actually overlays
// transparent RGB bits over each other. It does NOT round the whole result altogether.
function overlayRgbBits(foreground: number, alpha: number, background: number) {
  return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha);
}

function apca(textColor: string, bgColor: string) {
  const textRgba = new Color(textColor).srgb.map((c) => Math.round(c * 255));
  const bgRgba = new Color(bgColor).srgb.map((c) => Math.round(c * 255));

  textRgba[3] = new Color(textColor).alpha;
  bgRgba[3] = new Color(bgColor).alpha;

  return Math.abs(+(+calcAPCA(textRgba as any, bgRgba as any)).toFixed(1));
}

function toHex(color: Color | string) {
  if (color instanceof Color) {
    return color.to('srgb').toString({ format: 'hex' });
  }

  return new Color(color).to('srgb').toString({ format: 'hex' });
}
