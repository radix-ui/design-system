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
import { colors, getHiContrast, grayBackground, grays } from '../pages/colors';
import { APCAcontrast, displayP3toY, sRGBtoY } from '../apca-w3';
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
            mixRatioStep10: 0.25,
            defaultCurve: [0.525, 0.48, 0.785, 0.44],
          }}
          darkThemeConfig={{
            // step1: '#181818',
            // step1: '#141414',
            step1: '#111111',
            step2: '#191919',
            step8: 'hsl(0, 0%, 37.5%)',
            step11: 'hsl(0, 0%, 70%)',
            mixRatioStep10: 0.2,
            defaultCurve: [0.31, 0.335, 0.71, 0.31],
          }}
        />
        <EditableScale
          name="mauve"
          lightThemeConfig={{
            step2: 'hsl(280, 23%, 98%)',
            step8: 'hsl(250, 11%, 75.5%)',
            mixRatioStep10: 0.25,
            defaultCurve: [0.525, 0.49, 0.785, 0.44],
          }}
          darkThemeConfig={{
            // step1: '#191719',
            step1: '#121113',
            step2: '#1a191b',
            step8: 'hsl(260, 5%, 39.2%)',
            step11: 'hsl(255, 7%, 71.9%)',
            // scaleStartSaturationBoost: 0.3,
            mixRatioStep10: 0.2,
            defaultCurve: [0.27, 0.3, 0.77, 0.345],
          }}
        />
        <EditableScale
          name="slate"
          lightThemeConfig={{
            // defaultCurve: [0.65, 0.47, 0.905, 0.47],
            defaultCurve: [0.575, 0.525, 0.74, 0.385],
            mixRatioStep10: 0.25,
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
            mixRatioStep10: 0.25,
            defaultCurve: [0.54, 0.47, 0.765, 0.435],
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
            mixRatioStep10: 0.25,
            defaultCurve: [0.545, 0.48, 0.79, 0.46],
          }}
          darkThemeConfig={{
            step1: '#111210',
            step2: '#181917',
            step8: 'hsl(110, 3.5%, 37%)',
            step9: 'hsl(108, 4.5%, 42%)',
            step11: 'hsl(109, 5%, 69.5%)',
            scaleStartSaturationBoost: 0.5,
            mixRatioStep10: 0.2,
            defaultCurve: [0.27, 0.305, 0.755, 0.33],
          }}
        />
        <EditableScale
          name="sand"
          lightThemeConfig={{
            step2: 'hsl(50, 9%, 97.5%)',
            step8: 'hsl(50, 5%, 72.5%)',
            mixRatioStep10: 0.25,
            defaultCurve: [0.48, 0.43, 0.805, 0.46],
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
            step3: 'hsl(10, 95%, 95.2%)',
            step8: 'hsl(10, 75%, 70.5%)',
            step11: 'hsl(10, 82%, 45%)',
            scaleStartSaturationBoost: 1.7,
            mixRatioStep10: 0.38,
            defaultCurve: [0.485, 0.34, 0.715, 0.53],
          }}
          darkThemeConfig={{
            step1: '#181111',
            step2: 'hsl(10, 24%, 9.8%)',
            step3: 'hsl(5, 48%, 15%)',
            step8: 'hsl(10, 50%, 45%)',
            step11: 'hsl(12, 100%, 74.5%)',
            mixRatioStep10: 0.25,
            // scaleStartSaturationBoost: 1.8,

            scaleStartSaturationBoost: 3.5,
            defaultCurve: [0.425, 0.335, 0.665, 0.375],
            p3: {
              step11: 'color(display-p3 1 0.585 0.455)',
            },
          }}
        />
        <EditableScale
          name="red"
          lightThemeConfig={{
            step2: 'hsl(359, 100%, 98.5%)',
            step3: 'hsl(359, 93%, 96%)',
            step8: 'hsl(359, 70%, 74%)',
            step11: 'hsl(358, 65%, 49%)',
            scaleStartSaturationBoost: 1.9,
            mixRatioStep10: 0.38,
            defaultCurve: [0.515, 0.35, 0.72, 0.525],
          }}
          darkThemeConfig={{
            step1: '#191111',
            step2: 'hsl(356, 25%, 10%)',
            step3: 'hsl(350, 53%, 15%)',
            step8: 'hsl(358, 45%, 49%)',
            step11: 'hsl(2, 100%, 78.6%)',
            p3: {
              step11: 'color(display-p3 1 0.57 0.55)',
            },
            mixRatioStep10: 0.25,
            scaleStartSaturationBoost: 3.7,
            defaultCurve: [0.37, 0.28, 0.69, 0.4],
          }}
        />
        <EditableScale
          name="ruby"
          lightThemeConfig={{
            step2: 'hsl(353, 100%, 98.5%)',
            step3: 'hsl(352, 92%, 95.7%)',
            step8: 'hsl(348, 61%, 73.5%)',
            scaleStartSaturationBoost: 1.9,
            mixRatioStep10: 0.34,
            defaultCurve: [0.49, 0.34, 0.73, 0.53],
          }}
          darkThemeConfig={{
            step1: '#191113',
            step2: 'hsl(347, 19%, 10%)',
            step3: 'hsl(345, 48%, 15.4%)',
            step8: 'hsl(348, 45%, 48.5%)',
            step11: 'hsl(355, 100%, 79%)',
            p3: {
              step11: 'color(display-p3 1 0.57 0.59)',
            },

            scaleStartSaturationBoost: 3.5,
            mixRatioStep10: 0.23,
            defaultCurve: [0.345, 0.285, 0.7, 0.385],
          }}
        />
        <EditableScale
          name="crimson"
          lightThemeConfig={{
            step2: 'hsl(342, 78%, 98.2%)',
            // step3: 'hsl(342, 92%, 95.8%)',
            step8: 'hsl(336, 55%, 72.8%)',
            scaleStartSaturationBoost: 1.8,
            mixRatioStep10: 0.32,
            defaultCurve: [0.48, 0.35, 0.7, 0.515],
          }}
          darkThemeConfig={{
            step1: '#191114',
            step2: 'hsl(335, 24%, 10%)',
            step3: 'hsl(333, 45%, 15.2%)',
            step8: 'hsl(336, 45%, 47.5%)',
            step11: 'hsl(345, 100%, 78.6%)',
            p3: {
              step11: 'color(display-p3 1 0.56 0.66)',
            },
            scaleStartSaturationBoost: 3.2,
            mixRatioStep10: 0.2,
            defaultCurve: [0.4, 0.33, 0.65, 0.345],
          }}
        />
        <EditableScale
          name="pink"
          lightThemeConfig={{
            step2: 'hsl(324, 85%, 98.3%)',
            // step3: 'hsl(324, 92%, 95.9%)',
            step8: 'hsl(322, 52%, 72.2%)',
            step11: 'hsl(322, 65%, 46%)',
            scaleStartSaturationBoost: 1.6,
            mixRatioStep10: 0.35,
            defaultCurve: [0.39, 0.305, 0.67, 0.46],
          }}
          darkThemeConfig={{
            step1: '#191117',
            step2: 'hsl(318, 30%, 10%)',
            step3: 'hsl(315, 40%, 15.3%)',
            step8: 'hsl(322, 40%, 47%)',
            step11: 'hsl(327, 100%, 77.6%)',
            p3: {
              step11: 'color(display-p3 1 0.535 0.78)',
            },
            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2.9,
            defaultCurve: [0.415, 0.385, 0.55, 0.255],
          }}
        />
        <EditableScale
          name="plum"
          lightThemeConfig={{
            // step2: 'hsl(298, 100%, 98.3%)',
            step2: 'oklch(0.983 0.009 325.69)',
            // step3: 'hsl(297, 88%, 95.9%)',
            step8: 'hsl(292, 48%, 70.9%)',
            step11: 'hsl(292, 45%, 44%)',
            scaleStartSaturationBoost: 1.6,
            mixRatioStep10: 0.45,
            defaultCurve: [0.48, 0.32, 0.72, 0.465],
          }}
          darkThemeConfig={{
            // step1: '#141014',
            step1: '#181118',
            step2: 'hsl(301, 25%, 10%)',
            step3: 'hsl(299, 35%, 15.4%)',
            step8: 'hsl(292, 30%, 47%)',
            step11: 'hsl(292, 80%, 77.1%)',
            mixRatioStep10: 0.18,
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.46, 0.46, 0.575, 0.265],
          }}
        />
        <EditableScale
          name="purple"
          lightThemeConfig={{
            step2: 'oklch(0.9822 0.009 313.22)',
            // step3: 'hsl(279, 92%, 96.4%)',
            step8: 'hsl(272, 60%, 73.5%)',
            step11: 'hsl(272, 45%, 49%)',
            scaleStartSaturationBoost: 1.5,
            mixRatioStep10: 0.8,
            defaultCurve: [0.52, 0.28, 0.735, 0.5],
          }}
          darkThemeConfig={{
            // step1: '#131014',
            step1: '#18111B',
            step2: 'hsl(280, 26%, 10.8%)',
            step3: 'hsl(278, 36%, 17%)',
            step8: 'hsl(272, 33%, 50.5%)',
            step11: 'hsl(272, 100%, 80.8%)',
            scaleStartSaturationBoost: 2.3,
            mixRatioStep10: 0.18,
            defaultCurve: [0.355, 0.395, 0.67, 0.335],
            p3: {
              step11: 'color(display-p3 0.8 0.62 1)',
            },
          }}
        />
        <EditableScale
          name="violet"
          lightThemeConfig={{
            step2: 'hsl(252, 100%, 98.7%)',
            step3: 'hsl(254, 90%, 97%)',
            step8: 'hsl(252, 68%, 76.2%)',
            step10: 'hsl(252, 50%, 53.5%)',
            step11: 'hsl(252, 43%, 52%)',
            scaleStartSaturationBoost: 1.9,
            defaultCurve: [0.62, 0.33, 0.76, 0.525],
          }}
          darkThemeConfig={{
            step1: '#14121F',
            step2: 'hsl(260, 27%, 11.5%)',
            step3: 'hsl(256, 37%, 19.6%)',
            step8: 'hsl(252, 34%, 51%)',
            step11: 'hsl(253, 100%, 82.65%)',
            p3: {
              step11: 'color(display-p3 0.72 0.65 1)',
            },
            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2.6,
            defaultCurve: [0.36, 0.44, 0.59, 0.355],
          }}
        />
        <EditableScale
          name="iris"
          lightThemeConfig={{
            step2: 'hsl(238, 100%, 98.6%)',
            step3: 'hsl(238, 90%, 97%)',
            step8: 'hsl(238, 74%, 77.5%)',
            step10: 'hsl(240, 55%, 56%)',
            step11: 'hsl(242, 50%, 55%)',
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.57, 0.26, 0.8, 0.565],
          }}
          darkThemeConfig={{
            step1: '#13131E',
            step2: 'hsl(243, 25%, 11.5%)',
            step3: 'hsl(237, 38%, 20.5%)',
            // step8: 'hsl(240, 40%, 53%)',
            step8: 'hsl(241, 36.5%, 52%)',
            step11: 'hsl(246, 100%, 83.1%)',
            p3: {
              step11: 'color(display-p3 0.685 0.662 1)',
            },

            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.37, 0.48, 0.55, 0.425],
          }}
        />
        <EditableScale
          name="indigo"
          lightThemeConfig={{
            step2: 'hsl(226, 100%, 98.5%)',
            step3: 'hsl(223, 90%, 96.3%)',
            step8: 'hsl(226, 76%, 74.5%)',
            step10: 'hsl(226, 65%, 51.5%)',
            step11: 'hsl(226, 56%, 50.5%)',
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.565, 0.25, 0.815, 0.61],
          }}
          darkThemeConfig={{
            step1: '#11131F',
            step2: 'hsl(232, 30%, 11.4%)',
            step3: 'hsl(225, 50%, 19%)',
            step8: 'hsl(226, 45%, 48%)',
            step11: 'hsl(228, 100%, 81%)',
            step12: 'hsl(224, 100%, 92%)',
            p3: {
              step11: 'color(display-p3 0.63 0.69 1)',
            },

            mixRatioStep10: 0.2,
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.39, 0.495, 0.56, 0.5],
          }}
        />
        <EditableScale
          name="blue"
          lightThemeConfig={{
            step2: 'hsl(207, 100%, 97.8%)',
            step3: 'hsl(204, 90%, 94.8%)',
            step8: 'hsl(205.6, 82%, 65.4%)',
            step11: 'hsl(208, 88%, 43%)',
            p3: {
              step11: 'color(display-p3 0.15 0.44 0.84)',
            },
            scaleStartSaturationBoost: 2.6,
            mixRatioStep10: 0.3,
            defaultCurve: [0.445, 0.165, 0.785, 0.535],
          }}
          darkThemeConfig={{
            step1: '#0d1520',
            step2: 'hsl(216, 40%, 10.8%)',
            step3: 'hsl(212, 70%, 16.4%)',
            step8: 'hsl(211, 65%, 45%)',
            step11: 'hsl(210, 100%, 72%)',
            p3: {
              step11: 'color(display-p3 0.49 0.72 1)',
            },
            mixRatioStep10: 0.35,
            scaleStartSaturationBoost: 3,
            defaultCurve: [0.32, 0.335, 0.59, 0.47],
          }}
        />
        <EditableScale
          name="cyan"
          lightThemeConfig={{
            step2: 'oklch(0.9802 0.009 203.47)',
            // step3: 'hsl(184, 70%, 93%)',
            step8: 'hsl(189, 60%, 52.5%)',
            step9: 'hsl(191, 100%, 39%)',
            step11: 'hsl(192, 81%, 33%)',
            p3: {
              step11: 'color(display-p3 0.08 0.48 0.63)',
            },
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.485, 0.225, 0.785, 0.52],
          }}
          darkThemeConfig={{
            step1: 'hsl(195, 39%, 7.2%)',
            step2: '#111B1F',
            step3: 'hsl(194, 75%, 12.2%)',
            step8: 'hsl(192, 80%, 34%)',
            step9: 'hsl(191, 100%, 39%)',
            step11: 'hsl(190, 75%, 60%)',
            mixRatioStep10: 0.3,
            // scaleStartSaturationBoost: 3,
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.355, 0.37, 0.635, 0.435],
          }}
        />
        <EditableScale
          name="teal"
          lightThemeConfig={{
            step2: 'oklch(0.9813 0.009 179.48)',
            // step3: 'hsl(164, 70%, 92.5%)',
            step8: 'hsl(172, 42%, 52.5%)',
            step11: 'hsl(172, 100%, 26%)',
            p3: {
              step11: 'color(display-p3 0.08 0.5 0.43)',
            },
            scaleStartSaturationBoost: 3.5,
            defaultCurve: [0.49, 0.185, 0.775, 0.55],
          }}
          darkThemeConfig={{
            step1: 'hsl(171, 23%, 6.8%)',
            step2: 'hsl(171, 23%, 9%)',
            step3: 'hsl(174, 55%, 11.5%)',
            step8: 'hsl(173, 60%, 31%)',
            mixRatioStep10: 0.27,
            scaleStartSaturationBoost: 2.2,
            defaultCurve: [0.37, 0.415, 0.495, 0.355],
          }}
        />
        <EditableScale
          name="jade"
          lightThemeConfig={{
            step2: 'oklch(0.9815 0.009 161.13)',
            step8: 'hsl(164, 42%, 53.2%)',
            step11: 'hsl(164, 61%, 31.8%)',
            p3: {
              step11: 'color(display-p3 0.15 0.5 0.37)',
            },
            scaleStartSaturationBoost: 1.8,
            defaultCurve: [0.56, 0.255, 0.765, 0.52],
          }}
          darkThemeConfig={{
            step1: 'hsl(155, 23%, 6.8%)',
            step2: 'hsl(154, 23%, 9%)',
            step3: 'hsl(158, 50%, 11.9%)',
            step8: 'hsl(164, 50%, 33%)',
            scaleStartSaturationBoost: 2.5,
            mixRatioStep10: 0.25,
            defaultCurve: [0.335, 0.38, 0.615, 0.47],
          }}
        />
        <EditableScale
          name="green"
          lightThemeConfig={{
            step2: 'oklch(0.9817 0.009 155.6)',
            // 'oklch(0.9823 0.0083 271.33)',
            step8: 'hsl(151, 40%, 54.0%)',
            step11: 'hsl(154, 60%, 32%)',
            p3: {
              step11: 'color(display-p3 0.19 0.5 0.32)',
            },
            scaleStartSaturationBoost: 1.8,
            defaultCurve: [0.525, 0.24, 0.775, 0.51],
          }}
          darkThemeConfig={{
            step1: 'hsl(150, 20%, 7%)',
            step2: 'hsl(150, 17%, 9%)',
            step3: 'hsl(153, 40%, 12.5%)',
            step8: 'hsl(151, 45%, 33.5%)',
            mixRatioStep10: 0.25,
            scaleStartSaturationBoost: 2,
            defaultCurve: [0.325, 0.39, 0.585, 0.495],
          }}
        />
        <EditableScale
          name="grass"
          lightThemeConfig={{
            step2: 'oklch(0.9819 0.009 145.46)            ',
            step8: 'hsl(131, 38%, 56.2%)',
            step11: 'hsl(132, 50%, 33%)',
            scaleStartSaturationBoost: 1.6,
            defaultCurve: [0.495, 0.21, 0.775, 0.51],
          }}
          darkThemeConfig={{
            step1: 'hsl(140, 20%, 7%)',
            step2: 'hsl(134, 11%, 9.2%)',
            step3: 'hsl(133, 22%, 13.5%)',
            step8: 'hsl(131, 32%, 36%)',
            mixRatioStep10: 0.3,
            scaleStartSaturationBoost: 1.7,
            defaultCurve: [0.28, 0.345, 0.53, 0.485],
          }}
        />
        <EditableScale
          name="brown"
          lightThemeConfig={{
            step2: 'hsl(30, 55%, 97.6%)',
            step8: 'hsl(28, 45%, 65.1%)',
            mixRatioStep10: 0.3,
            scaleStartSaturationBoost: 0.8,
            defaultCurve: [0.47, 0.36, 0.73, 0.44],
          }}
          darkThemeConfig={{
            step1: 'hsl(38, 10%, 6.5%)',
            step2: 'hsl(22, 12%, 9.8%)',
            step8: 'hsl(28, 28%, 38%)',
            mixRatioStep10: 0.25,
            scaleStartSaturationBoost: 0.8,
            defaultCurve: [0.3, 0.28, 0.665, 0.365],
          }}
        />
        <EditableScale
          name="bronze"
          lightThemeConfig={{
            step2: 'hsl(18, 70%, 97.6%)',
            step8: 'hsl(16, 25%, 68%)',
            mixRatioStep10: 0.34,
            scaleStartSaturationBoost: 0.8,
            defaultCurve: [0.485, 0.34, 0.745, 0.47],
          }}
          darkThemeConfig={{
            step1: '#141110',
            step2: 'hsl(17, 8%, 10%)',
            step8: 'hsl(18, 12%, 39%)',
            mixRatioStep10: 0.25,
            defaultCurve: [0.3, 0.28, 0.63, 0.405],
          }}
        />
        <EditableScale
          name="gold"
          lightThemeConfig={{
            step2: 'hsl(50, 45%, 96.6%)',
            step8: 'hsl(36, 24%, 64%)',
            mixRatioStep10: 0.28,
            scaleStartSaturationBoost: 0.7,
            defaultCurve: [0.475, 0.33, 0.75, 0.46],
          }}
          darkThemeConfig={{
            step1: '#121211',
            step2: 'hsl(43, 8%, 9.7%)',
            step8: 'hsl(36, 10%, 37.5%)',
            mixRatioStep10: 0.24,
            defaultCurve: [0.31, 0.275, 0.63, 0.405],
          }}
        />
        <EditableScale
          name="sky"
          lightThemeConfig={{
            step2: 'oklch(0.9796 0.01 218.05)',
            // step3: 'hsl(192, 93%, 93%)',
            step8: 'hsl(198, 60%, 61%)',
            step10: '#74DAF8',
            step11: 'hsl(196, 100%, 31%)',
            step12: 'hsl(205, 50%, 22.5%)',
            scaleStartSaturationBoost: 2.95,
            mixRatioStep10: 0.1,
            defaultCurve: [0.445, 0.165, 0.79, 0.53],
          }}
          darkThemeConfig={{
            step1: 'hsl(215, 41%, 8.5%)',
            step2: 'hsl(215, 35%, 11%)',
            step8: 'hsl(200, 75%, 39%)',
            step10: 'hsl(192, 100%, 83%)',
            step11: 'hsl(200, 80%, 70%)',
            scaleStartSaturationBoost: 2.2,
            defaultCurve: [0.335, 0.325, 0.595, 0.475],
          }}
        />
        <EditableScale
          name="mint"
          lightThemeConfig={{
            step2: 'oklch(0.982 0.01 179.35)',
            // step3: 'hsl(167, 75%, 92%)',
            step8: 'hsl(168, 45%, 51.5%)',
            step11: 'hsl(170, 96%, 24%)',
            scaleStartSaturationBoost: 3,
            mixRatioStep10: 0.08,
            defaultCurve: [0.54, 0.235, 0.77, 0.555],
          }}
          darkThemeConfig={{
            step1: 'hsl(176, 22%, 6.8%)',
            step2: 'hsl(176, 20%, 9.2%)',
            step3: 'hsl(178, 65%, 10.5%)',
            // step8: 'hsl(170, 60%, 35%)',
            step8: 'hsl(170, 53%, 32.5%)',
            step10: 'hsl(167, 80%, 81%)',
            step11: 'hsl(167, 60%, 59%)',
            scaleStartSaturationBoost: 2.5,
            defaultCurve: [0.37, 0.415, 0.555, 0.405],
          }}
        />
        <EditableScale
          name="lime"
          lightThemeConfig={{
            step2: 'oklch(0.9819 0.01 117.28)',
            // step3: 'hsl(77, 67%, 89.5%)',
            step8: 'hsl(85, 40%, 52%)',
            step10: '#B0E64C',
            step11: 'hsl(85, 45%, 33.5%)',
            scaleStartSaturationBoost: 4,
            mixRatioStep10: 0.12,
            defaultCurve: [0.53, 0.225, 0.75, 0.56],
          }}
          darkThemeConfig={{
            step1: '#111304',
            step2: 'hsl(90, 15%, 8.6%)',
            // step3: 'hsl(90, 50%, 10.4%)',
            step8: 'hsl(90, 35%, 34%)',
            step10: 'hsl(78, 100%, 72%)',
            step11: 'hsl(80, 70%, 66%)',
            scaleStartSaturationBoost: 1.2,
            // defaultCurve: [0.35, 0.355, 0.61, 0.35],
            defaultCurve: [0.32, 0.39, 0.58, 0.5],
          }}
        />
        <EditableScale
          name="yellow"
          lightThemeConfig={{
            // step2: 'hsl(53, 90%, 95%)',
            // step3: 'hsl(54, 94%, 87.5%)',
            // step2: '#fffef0',
            // step2: 'hsl(56, 100%, 94%)',
            step2: 'hsl(56, 90%, 95.5%)',
            step3: 'hsl(56, 100%, 86%)',
            step4: 'hsl(53, 100%, 79%)',
            // step3: 'hsl(53, 95%, 84%)',
            step5: 'hsl(50, 100%, 72%)',
            step6: 'hsl(48, 85%, 68%)',
            step7: 'hsl(46, 70%, 65%)',
            step8: 'hsl(45, 65%, 53%)',
            step9: 'hsl(53 100% 58%)',
            step10: '#ffdc00',
            // step11: 'hsl(44 100% 32.3%)',
            // step11: 'hsl(44 100% 32.3%)',
            step11: 'hsl(41 100% 31%)',
            p3: {
              step9: 'color(display-p3 1 0.92 0.22)',
              step11: 'color(display-p3 0.6 0.44 0)',
            },
            scaleStartSaturationBoost: 5,
            defaultCurve: [0.735, 0.36, 0.735, 0.44],
          }}
          darkThemeConfig={{
            step1: 'hsl(42, 28%, 6.2%)',
            step2: 'hsl(42, 20%, 8.6%)',
            step3: 'hsl(45, 80%, 9.7%)',
            step8: 'hsl(45, 60%, 32%)',
            step9: 'hsl(53 100% 58%)',
            step10: 'hsl(60, 100%, 67%)',
            // step11: 'hsl(48, 70%, 64%)',
            step11: 'hsl(53, 90%, 62%)',
            step12: '#f6eeb4',
            p3: {
              step9: 'color(display-p3 1 0.92 0.22)',
              // step10: 'color(display-p3 1 1 0.35)',
            },
            scaleStartSaturationBoost: 5,
            defaultCurve: [0.4, 0.345, 0.61, 0.35],
          }}
        />
        <EditableScale
          name="amber"
          lightThemeConfig={{
            step2: 'hsl(53, 90%, 95.5%)',
            step3: 'hsl(52, 100%, 88%)',
            step4: 'hsl(50, 100%, 80.5%)',
            step8: 'hsl(38, 75%, 55.0%)',
            step10: '#FFBA18',
            // step11: 'hsl(38 100% 31.5%)',
            step11: 'hsl(35 100% 33.6%)',
            p3: {
              step9: 'color(display-p3 1 0.77 0.26)',
              step11: 'color(display-p3 0.64 0.4 0)',
            },
            scaleStartSaturationBoost: 8,
            defaultCurve: [0.43, 0.205, 0.635, 0.255],
          }}
          darkThemeConfig={{
            step1: 'hsl(36, 28%, 6.6%)',
            step2: 'hsl(36, 20%, 9%)',
            step3: 'hsl(36, 70%, 11%)',
            step8: 'hsl(36, 60%, 35%)',
            step10: 'hsl(50, 100%, 52%)',
            step11: '#FFCA16',
            p3: {
              step9: 'color(display-p3 1 0.77 0.26)',
              step10: 'color(display-p3 1 0.87 0.15)',
              step11: 'color(display-p3 1 0.8 0.29)',
            },
            scaleStartSaturationBoost: 5,
            defaultCurve: [0.4, 0.345, 0.61, 0.35],
          }}
        />
        <EditableScale
          name="orange"
          lightThemeConfig={{
            step2: 'hsl(32, 100%, 96.5%)',
            step3: 'hsl(36, 100%, 92%)',
            step8: 'hsl(25, 80%, 63%)',
            step9: '#F76B15',
            step10: '#ef5f00',
            // step11: 'hsl(28 100% 37%)',
            step11: 'hsl(23, 100%, 40%)',
            p3: {
              step9: 'color(display-p3 0.9 0.45 0.2)',
              step11: 'color(display-p3 0.76 0.34 0)',
            },
            scaleStartSaturationBoost: 4,
            defaultCurve: [0.535, 0.36, 0.625, 0.39],
          }}
          darkThemeConfig={{
            step1: 'hsl(24, 25%, 7.3%)',
            step2: 'hsl(28, 23%, 9%)',
            step3: 'hsl(28, 65%, 12.2%)',
            step8: 'hsl(23, 60%, 40%)',
            step9: '#F76B15',
            step10: 'hsl(26, 100%, 56%)',
            step11: 'hsl(26, 100%, 67%)',
            p3: {
              step9: 'color(display-p3 0.9 0.45 0.2)',
              step10: 'color(display-p3 0.98 0.51 0.23)',
              step11: 'color(display-p3 1 0.63 0.38)',
            },
            scaleStartSaturationBoost: 5,
            defaultCurve: [0.32, 0.28, 0.62, 0.335],
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
        start: config.p3?.step2 ?? config.step2 ?? getCssVariable(`--colors-${name}2`),
        end: config.p3?.step8 ?? config.step8 ?? getCssVariable(`--colors-${name}8`),
        stepsCount: 7,
        hueCurve,
        chromaCurve,
        lumCurve,
      });

      steps.forEach((n) => {
        const index = newColors.findIndex((color) => color.name === name + n);

        let sRgbValue: string =
          config['step' + n] ?? newColors[index]?.value ?? getCssVariable(`--colors-${name}${n}`);

        let p3Value: string =
          config.p3?.['step' + n] ??
          config['step' + n] ??
          newColors[index]?.valueP3 ??
          toHex(sRgbValue);

        // Generate step 10 if it's not coming from the config
        if (n === '10') {
          const baseColor = config.step9 ?? getCssVariable(`--colors-${name}9`);
          const mixColor = config.step11 ?? getCssVariable(`--colors-${name}11`);
          const mixRatio = config.mixRatioStep10 ?? defaultMixRatioStep10;
          const step10 = new Color(Color.mix(baseColor, mixColor, mixRatio, { space: 'lch' }));

          if (config.step10 === undefined) {
            sRgbValue = toHex(step10);

            if (config.p3?.step10 === undefined) {
              p3Value = toP3(step10);
            }
          }
        }

        if (newColors[index]) {
          newColors[index].value = toHex(sRgbValue);
          newColors[index].valueP3 = toP3(p3Value);
        } else {
          newColors.push({
            name: name + n,
            value: toHex(sRgbValue),
            valueP3: toP3(p3Value),
          });
        }
      });

      // Set alpha scales
      newColors.forEach((target) => {
        const darkThemeBackdrop = grayBackground[name];

        const backgroundValue = isDarkTheme
          ? newColors.find((color) => color.name === darkThemeBackdrop)?.value ??
            getCssVariable(`--colors-${darkThemeBackdrop}`)
          : '#ffffff';

        // As of Sep 2023, Chrome renders Display P3 colors on text incorrectly (super desaturated)
        // if they have an alpha channel. We skip P3 for non-gray 11’s and 12’s.
        const isGray = grays.find((value) => target.name.includes(value));
        const isTextColor = target.name.match(/11|12/);
        const chromeBooo = !isGray && isTextColor;

        newColors.push({
          name: target.name.replace(/(\d)/, 'A$1'),
          value: getAlphaColorSrgb(target.value, backgroundValue),
          valueP3: chromeBooo ? target.valueP3 : getAlphaColorP3(target.valueP3, backgroundValue),
        });
      });

      // Set CSS variables
      newColors.forEach((color) => {
        document.body.style.setProperty(`--colors-${color.name}`, color.value);
        document.body.style.setProperty(`--colors-${color.name}-p3`, color.valueP3);
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
    steps.forEach((n) => {
      document.body.style.removeProperty(`--colors-${name}${n}`);
      document.body.style.removeProperty(`--colors-${name}A${n}`);
      document.body.style.removeProperty(`--colors-${name}${n}-p3`);
      document.body.style.removeProperty(`--colors-${name}A${n}-p3`);
    });

    // Set relevant values if active
    if (active) {
      generatedColorsRef.current.forEach((color) => {
        document.body.style.setProperty(`--colors-${color.name}`, color.value);
        document.body.style.setProperty(`--colors-${color.name}-p3`, color.valueP3);
      });
    }
  }, [active, isDarkTheme]);

  // Set initial values and catch dark theme changes
  React.useEffect(() => {
    onCurveChange(curveRef.current);
  }, [onCurveChange]);

  // Keep contrast ratios up to date
  React.useEffect(() => {
    const getValue = (step: string) => {
      return getCssVariable(`--colors-${name}${step}`) || '#00000000';
    };

    const background = isDarkTheme ? getCssVariable(`--colors-gray1`) : '#FFFFFF';

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
      apca(getValue('A11-p3'), getValue('1')),
      apca(getValue('A11-p3'), getValue('2')),
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
  }, [active, isDarkTheme, lightColors, darkColors]);

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
              const outputJs = (document.querySelector(
                '[data-output-js]'
              ) as HTMLInputElement | null)?.checked;

              const useP3 = (document.querySelector('[data-use-p3]') as HTMLInputElement | null)
                ?.checked;

              let clipboard = '';

              const computedStyle = getComputedStyle(document.body);

              document.querySelectorAll(`[data-color-code]`).forEach((element) => {
                const parent = element.closest('[data-editable-scale]')!;
                const color = parent.getAttribute('data-editable-scale')!;

                if (outputJs) {
                  clipboard += isDarkTheme
                    ? `export const ${color}Dark = {\n`
                    : `export const ${color} = {\n`;

                  steps.forEach((n) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}${n}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `  ${color}${n}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                  clipboard += isDarkTheme
                    ? `export const ${color}DarkA = {\n`
                    : `export const ${color}A = {\n`;

                  steps.forEach((n) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}A${n}`);

                    if (value) {
                      value = toHex(value);
                      clipboard += `  ${color}A${n}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                  clipboard += isDarkTheme
                    ? `export const ${color}DarkP3 = {\n`
                    : `export const ${color}P3 = {\n`;

                  steps.forEach((n) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}${n}-p3`);

                    if (value) {
                      clipboard += `  ${color}${n}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                  clipboard += isDarkTheme
                    ? `export const ${color}DarkP3A = {\n`
                    : `export const ${color}P3A = {\n`;

                  steps.forEach((n) => {
                    let value = computedStyle.getPropertyValue(`--colors-${color}A${n}-p3`);

                    if (value) {
                      clipboard += `  ${color}A${n}: '${value}',\n`;
                    }
                  });

                  clipboard += `};\n\n`;
                } else {
                  steps.forEach((n) => {
                    const name = useP3 ? `--colors-${color}${n}-p3` : `--colors-${color}${n}`;
                    const value = computedStyle.getPropertyValue(name);

                    if (value) {
                      clipboard += `--${color}-${n}: ${value};\n`;
                    }
                  });

                  steps.forEach((n) => {
                    const name = useP3 ? `--colors-${color}A${n}-p3` : `--colors-${color}A${n}`;
                    const value = computedStyle.getPropertyValue(name);

                    if (value) {
                      clipboard += `--${color}-a${n}: ${value};\n`;
                    }
                  });

                  clipboard += `\n`;
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
            {steps.map((n) => {
              const variableName = showAlphaValues
                ? `--colors-${name}A${n}`
                : `--colors-${name}${n}`;
              const valueToShow = getCssVariable(variableName);
              const nameToShow = showAlphaValues ? `--${name}-a${n}` : `--${name}-${n}`;

              return (
                <Text
                  key={n}
                  css={{
                    fontSize: '10px',
                    fontFamily: '$mono',
                    width: '100%',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    lineHeight: '25px',
                  }}
                >
                  {nameToShow}: {new Color(valueToShow).to('oklch').toString({ format: 'oklch' })};
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
              <RatioBox css={{ bc: `$${name}6`, color: `$${name}A11` }} ratio={contrasts[5]} />
              <RatioBox css={{ bc: `$${name}7`, color: `$${name}A11` }} ratio={contrasts[6]} />
              <RatioBox css={{ bc: `$${name}8`, color: `$${name}A11` }} ratio={contrasts[7]} />
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
      {ratio !== undefined && ratio.toFixed(1)}
      {!!ratioP3 && ', P3 ' + ratioP3.toFixed(1)}
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
  valueP3: string;
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
      valueP3: toP3(color),
    });
  }

  return colorMap;
}

// target = background * (1 - alpha) + foreground * alpha
// alpha = (target - background) / (foreground - background)
// Expects 0-1 numbers for the RGB channels
function getAlphaColor(
  targetRgb: number[],
  backgroundRgb: number[],
  rgbPrecision: number,
  alphaPrecision: number,
  targetAlpha?: number
) {
  const [tr, tg, tb] = targetRgb.map((c) => Math.round(c * rgbPrecision));
  const [br, bg, bb] = backgroundRgb.map((c) => Math.round(c * rgbPrecision));

  // Is the background color lighter, RGB-wise, than target color?
  // Decide whether we want to add as little color or as much color as possible,
  // darkening or lightening the background respectively.
  // If at least one of the bits of the target RGB value
  // is lighter than the background, we want to lighten it.
  let desiredRgb = tr > br ? rgbPrecision : tg > bg ? rgbPrecision : tb > bb ? rgbPrecision : 0;

  // Light theme example:
  // Consider a 200 120 150 target color with 255 255 255 background
  // What is the alpha value that will nudge background's 255 green to 120?
  //
  // Dark theme example:
  // Consider a 200 120 150 target color with 12 24 28 background
  // What is the alpha value that will nudge background's 12 red to 200?
  const alphaR = (tr - br) / (desiredRgb - br);
  const alphaG = (tg - bg) / (desiredRgb - bg);
  const alphaB = (tb - bb) / (desiredRgb - bb);

  const isPureGray = [alphaR, alphaG, alphaB].every((alpha) => alpha === alphaR);

  // No need for precision gymnastics with pure grays, and we can get cleaner output
  if (!targetAlpha && isPureGray) {
    // Convert back to 0-1 values
    const V = desiredRgb / rgbPrecision;
    return [V, V, V, alphaR] as const;
  }

  const clampRgb = (n: number) => (isNaN(n) ? 0 : Math.min(rgbPrecision, Math.max(0, n)));
  const clampA = (n: number) => (isNaN(n) ? 0 : Math.min(alphaPrecision, Math.max(0, n)));
  const maxAlpha = targetAlpha ?? Math.max(alphaR, alphaG, alphaB);

  let A = clampA(Math.ceil(maxAlpha * alphaPrecision)) / alphaPrecision;
  let R = clampRgb(((br * (1 - A) - tr) / A) * -1);
  let G = clampRgb(((bg * (1 - A) - tg) / A) * -1);
  let B = clampRgb(((bb * (1 - A) - tb) / A) * -1);

  R = Math.ceil(R);
  G = Math.ceil(G);
  B = Math.ceil(B);

  const blendedR = blendAlpha(R, A, br);
  const blendedG = blendAlpha(G, A, bg);
  const blendedB = blendAlpha(B, A, bb);

  // Correct for rounding errors in light mode
  if (desiredRgb === 0) {
    if (tr <= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1;
    }
    if (tg <= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1;
    }
    if (tb <= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1;
    }
  }

  // Correct for rounding errors in dark mode
  if (desiredRgb === rgbPrecision) {
    if (tr >= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1;
    }
    if (tg >= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1;
    }
    if (tb >= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1;
    }
  }

  // Convert back to 0-1 values
  R = R / rgbPrecision;
  G = G / rgbPrecision;
  B = B / rgbPrecision;

  return [R, G, B, A] as const;
}

function getAlphaColorSrgb(targetColor: string, backgroundColor: string, targetAlpha?: number) {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to('srgb').coords,
    new Color(backgroundColor).to('srgb').coords,
    255,
    255,
    targetAlpha
  );

  return formatHex(new Color('srgb', [r, g, b], a).toString({ format: 'hex' }));
}

function getAlphaColorP3(targetColor: string, backgroundColor: string, targetAlpha?: number) {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to('p3').coords,
    new Color(backgroundColor).to('p3').coords,
    // Not sure why, but the resulting P3 alpha colors are blended in the browser most precisely when
    // rounded to 255 integers too. Is the browser using 0-255 rather than 0-1 under the hood for P3 too?
    255,
    1000,
    targetAlpha
  );

  return new Color('p3', [r, g, b], a).toString();
}

// Important – I empirically discovered that this rounding is how the browser actually overlays
// transparent RGB bits over each other. It does NOT round the whole result altogether.
function blendAlpha(foreground: number, alpha: number, background: number, round = true) {
  if (round) {
    return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha);
  }

  return background * (1 - alpha) + foreground * alpha;
}

function apca(foreground: string, background: string) {
  const foregroundColor = new Color(foreground);
  const backgroundColor = new Color(background);

  const getLc = (foregroundY: number, backgroundY: number) =>
    Math.abs(+(+APCAcontrast(foregroundY, backgroundY)).toFixed(1));

  if (foregroundColor.space.id === 'p3') {
    const [fr, fg, fb] = foregroundColor.to('p3').coords;
    const [br, bg, bb] = backgroundColor.to('p3').coords;
    const fa = foregroundColor.alpha;

    const [blendedR, blendedG, blendedB] = [
      blendAlpha(fr, fa, br, false),
      blendAlpha(fg, fa, bg, false),
      blendAlpha(fb, fa, bb, false),
    ];

    const foregroundY = displayP3toY([blendedR, blendedG, blendedB]);
    const backgroundY = displayP3toY([br, bg, bb]);
    return getLc(foregroundY, backgroundY);
  }

  const [fr, fg, fb] = foregroundColor.to('srgb').coords.map((c) => Math.round(c * 255));
  const [br, bg, bb] = backgroundColor.to('srgb').coords.map((c) => Math.round(c * 255));
  const fa = foregroundColor.alpha;

  const [blendedR, blendedG, blendedB] = [
    blendAlpha(fr, fa, br, false),
    blendAlpha(fg, fa, bg, false),
    blendAlpha(fb, fa, bb, false),
  ];

  const foregroundY = sRGBtoY([blendedR, blendedG, blendedB]);
  const backgroundY = sRGBtoY([br, bg, bb]);
  return getLc(foregroundY, backgroundY);
}

function toHex(color: Color | string) {
  if (color instanceof Color) {
    return formatHex(color.to('srgb').toString({ format: 'hex' }));
  }

  return formatHex(new Color(color).to('srgb').toString({ format: 'hex' }));
}

function toP3(color: Color | string) {
  if (color instanceof Color) {
    return color.to('p3').toString();
  }

  return new Color(color).to('p3').toString();
}

// Format shortform hex to longform
function formatHex(str: string) {
  if (!str.startsWith('#')) {
    return str;
  }

  if (str.length === 4) {
    // @ts-ignore
    const [hash, r, g, b] = str;
    return hash + r + r + g + g + b + b;
  }

  if (str.length === 5) {
    // @ts-ignore
    const [hash, r, g, b, a] = str;
    return hash + r + r + g + g + b + b + a + a;
  }

  return str;
}

const getCssVariable = (name: string) => getComputedStyle(document.body).getPropertyValue(name);

// const lightMode2sSrgb = {
//   '--gray-2': '#f9f9f9',
//   '--mauve-2': '#faf9fb',
//   '--slate-2': '#f9f9fb',
//   '--sage-2': '#f7f9f8',
//   '--olive-2': '#f8faf8',
//   '--sand-2': '#f9f9f8',
//   '--tomato-2': '#fff8f7',
//   '--red-2': '#fff7f7',
//   '--ruby-2': '#fff7f8',
//   '--crimson-2': '#fef7f9',
//   '--pink-2': '#fef7fb',
//   '--plum-2': '#fdf7fd',
//   '--purple-2': '#fbf7fe',
//   '--violet-2': '#faf8ff',
//   '--iris-2': '#f8f8ff',
//   '--indigo-2': '#f7f9ff',
//   '--blue-2': '#f4faff',
//   '--cyan-2': '#f2fafb',
//   '--teal-2': '#f3fbf9',
//   '--jade-2': '#f4fbf7',
//   '--green-2': '#f4fbf6',
//   '--grass-2': '#f5fbf5',
//   '--brown-2': '#fcf9f6',
//   '--bronze-2': '#fdf7f5',
//   '--gold-2': '#faf9f2',
//   '--sky-2': '#f1fafd',
//   '--mint-2': '#f2fbf9',
//   '--lime-2': '#f8faf3',
//   '--yellow-2': '#fefce9',
//   '--amber-2': '#fefbe9',
//   '--orange-2': '#fff7ed',
// };

// const lightMode2sP3 = {
//   '--gray-2': 'color(display-p3 0.975 0.975 0.975)',
//   '--mauve-2': 'color(display-p3 0.9804 0.9756 0.9839)',
//   '--slate-2': 'color(display-p3 0.9765 0.9765 0.9836)',
//   '--sage-2': 'color(display-p3 0.97 0.9773 0.974)',
//   '--olive-2': 'color(display-p3 0.9745 0.9799 0.9725)',
//   '--sand-2': 'color(display-p3 0.9771 0.9765 0.9731)',
//   '--tomato-2': 'color(display-p3 0.9938 0.9737 0.9686)',
//   '--red-2': 'color(display-p3 0.9948 0.971 0.971)',
//   '--ruby-2': 'color(display-p3 0.9948 0.971 0.9737)',
//   '--crimson-2': 'color(display-p3 0.9911 0.9689 0.9761)',
//   '--pink-2': 'color(display-p3 0.9924 0.9695 0.9848)',
//   '--plum-2': 'color(display-p3 0.9876 0.971 0.9897)',
//   '--purple-2': 'color(display-p3 0.9828 0.971 0.9926)',
//   '--violet-2': 'color(display-p3 0.9783 0.9742 0.9978)',
//   '--iris-2': 'color(display-p3 0.9722 0.9729 0.9976)',
//   '--indigo-2': 'color(display-p3 0.9712 0.9768 0.9979)',
//   '--blue-2': 'color(display-p3 0.9604 0.9794 0.9979)',
//   '--cyan-2': 'color(display-p3 0.9548 0.9809 0.9842)',
//   '--teal-2': 'color(display-p3 0.958 0.9831 0.9763)',
//   '--jade-2': 'color(display-p3 0.9617 0.9831 0.9692)',
//   '--green-2': 'color(display-p3 0.9632 0.9831 0.9674)',
//   '--grass-2': 'color(display-p3 0.9662 0.9827 0.964)',
//   '--brown-2': 'color(display-p3 0.9869 0.9764 0.9642)',
//   '--bronze-2': 'color(display-p3 0.9887 0.9701 0.9605)',
//   '--gold-2': 'color(display-p3 0.9804 0.9764 0.9531)',
//   '--sky-2': 'color(display-p3 0.9525 0.9797 0.9899)',
//   '--mint-2': 'color(display-p3 0.957 0.9849 0.9773)',
//   '--lime-2': 'color(display-p3 0.975 0.9804 0.9539)',
//   '--yellow-2': 'color(display-p3 0.9945 0.9903 0.9217)',
//   '--amber-2': 'color(display-p3 0.9938 0.9864 0.9214)',
//   '--orange-2': 'color(display-p3 0.9943 0.9684 0.934)',
// };

// for (const color in lightMode2sSrgb) {
//   console.log(color, getAlphaColorSrgb(lightMode2sSrgb[color], '#fff', 0.8));
// }

// for (const color in lightMode2sP3) {
//   console.log(color, getAlphaColorP3(lightMode2sP3[color], '#fff', 0.8));
// }

// const darkMode2sSrgb = {
//   '--gray-2': '#191919',
//   '--mauve-2': '#1a191b',
//   '--slate-2': '#18191b',
//   '--sage-2': '#171918',
//   '--olive-2': '#181917',
//   '--sand-2': '#191918',
//   '--tomato-2': '#1f1513',
//   '--red-2': '#201314',
//   '--ruby-2': '#1e1517',
//   '--crimson-2': '#201318',
//   '--pink-2': '#21121d',
//   '--plum-2': '#201320',
//   '--purple-2': '#1e1423',
//   '--violet-2': '#1b1525',
//   '--iris-2': '#171625',
//   '--indigo-2': '#141726',
//   '--blue-2': '#111927',
//   '--cyan-2': '#111b1f',
//   '--teal-2': '#121c1b',
//   '--jade-2': '#121c18',
//   '--green-2': '#131b17',
//   '--grass-2': '#151a16',
//   '--brown-2': '#1c1816',
//   '--bronze-2': '#1c1917',
//   '--gold-2': '#1b1a17',
//   '--sky-2': '#121a26',
//   '--mint-2': '#131c1c',
//   '--lime-2': '#161913',
//   '--yellow-2': '#1a1812',
//   '--amber-2': '#1c1812',
//   '--orange-2': '#1c1712',
// };

// const darkMode2sP3 = {
//   '--gray-2': 'color(display-p3 0.098 0.098 0.098)',
//   '--mauve-2': 'color(display-p3 0.1013 0.0982 0.1053)',
//   '--slate-2': 'color(display-p3 0.0948 0.0979 0.1051)',
//   '--sage-2': 'color(display-p3 0.0916 0.0978 0.0943)',
//   '--olive-2': 'color(display-p3 0.0948 0.0979 0.0909)',
//   '--sand-2': 'color(display-p3 0.098 0.098 0.0945)',
//   '--tomato-2': 'color(display-p3 0.1155 0.0839 0.0761)',
//   '--red-2': 'color(display-p3 0.1176 0.0771 0.0791)',
//   '--ruby-2': 'color(display-p3 0.1131 0.0825 0.0892)',
//   '--crimson-2': 'color(display-p3 0.1168 0.078 0.0952)',
//   '--pink-2': 'color(display-p3 0.1214 0.0727 0.1098)',
//   '--plum-2': 'color(display-p3 0.1176 0.0771 0.1212)',
//   '--purple-2': 'color(display-p3 0.1116 0.0814 0.1325)',
//   '--violet-2': 'color(display-p3 0.1013 0.0847 0.1418)',
//   '--iris-2': 'color(display-p3 0.0886 0.0863 0.1396)',
//   '--indigo-2': 'color(display-p3 0.0815 0.0886 0.1438)',
//   '--blue-2': 'color(display-p3 0.0719 0.0984 0.147)',
//   '--cyan-2': 'color(display-p3 0.0749 0.1048 0.1197)',
//   '--teal-2': 'color(display-p3 0.078 0.1096 0.1044)',
//   '--jade-2': 'color(display-p3 0.078 0.1096 0.0938)',
//   '--green-2': 'color(display-p3 0.0809 0.1044 0.0909)',
//   '--grass-2': 'color(display-p3 0.0858 0.1015 0.0877)',
//   '--brown-2': 'color(display-p3 0.1073 0.0954 0.0873)',
//   '--bronze-2': 'color(display-p3 0.106 0.0969 0.0926)',
//   '--gold-2': 'color(display-p3 0.104 0.1005 0.0904)',
//   '--sky-2': 'color(display-p3 0.078 0.1027 0.1447)',
//   '--mint-2': 'color(display-p3 0.0812 0.1094 0.1076)',
//   '--lime-2': 'color(display-p3 0.0884 0.0985 0.0754)',
//   '--yellow-2': 'color(display-p3 0.1014 0.0932 0.0715)',
//   '--amber-2': 'color(display-p3 0.1056 0.0941 0.0745)',
//   '--orange-2': 'color(display-p3 0.1071 0.0894 0.0717)',
// };

// const graysBgsSrgb = {
//   '--gray-1': '#111111',
//   '--mauve-1': '#121113',
//   '--slate-1': '#111113',
//   '--sage-1': '#101211',
//   '--olive-1': '#111210',
//   '--sand-1': '#111110',
// };

// const graysBgsP3 = {
//   '--gray-1': 'color(display-p3 0.0667 0.0667 0.0667)',
//   '--mauve-1': 'color(display-p3 0.0699 0.0668 0.0739)',
//   '--slate-1': 'color(display-p3 0.0667 0.0667 0.0738)',
//   '--sage-1': 'color(display-p3 0.0642 0.0703 0.0669)',
//   '--olive-1': 'color(display-p3 0.0674 0.0705 0.0634)',
//   '--sand-1': 'color(display-p3 0.0667 0.0667 0.0631)',
// };

// for (const color in darkMode2sSrgb) {
//   console.log(
//     color,
//     getAlphaColorSrgb(
//       darkMode2sSrgb[color],
//       graysBgsSrgb[color.replace('-2', '-1')] ?? graysBgsSrgb['--gray-1'],
//       0.5
//     )
//   );
// }

// for (const color in darkMode2sP3) {
//   console.log(
//     color,
//     getAlphaColorP3(
//       darkMode2sP3[color],
//       graysBgsP3[color.replace('-2', '-1')] ?? graysBgsP3['--gray-1'],
//       0.5
//     )
//   );
// }

// // translucents
// for (const color in darkMode2sSrgb) {
//   console.log(
//     color,
//     getAlphaColorSrgb(
//       darkMode2sSrgb[color],
//       graysBgsSrgb[color.replace('-2', '-1')] ?? graysBgsSrgb['--gray-1'],
//       0.7
//     )
//   );
// }

// for (const color in darkMode2sP3) {
//   console.log(
//     color,
//     getAlphaColorP3(
//       darkMode2sP3[color],
//       graysBgsP3[color.replace('-2', '-1')] ?? graysBgsP3['--gray-1'],
//       0.7
//     )
//   );
// }
