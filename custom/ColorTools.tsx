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
  BlendingModeIcon,
  ResetIcon,
} from '@radix-ui/react-icons';
import { darkTheme as darkThemeClassName, theme as lightThemeClassName } from '../stitches.config';
import { colors, getHiContrast } from '../pages/colors';

// We are editing steps 100 through 700 via the tools
const steps = 7;

// How much to boost the saturation towards the left end of the bezier curve
const defaultSaturationBoost = 1;

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
    /** How much to boost the saturation towards the left end of the bezier curve */
    saturationBoost?: number;
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
    /** How much to boost the saturation towards the left end of the bezier curve */
    saturationBoost?: number;
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
            end: 'hsl(0 0% 78%)',
            defaultCurve: [0.65, 0.47, 0.905, 0.47],
            overrides: {
              gray000: 'hsl(0 0% 99.0%)',
              gray900: 'hsl(0, 0%, 43.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(0 0% 9.8%)',
            end: 'hsl(0 0% 31.2%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
            overrides: {
              gray000: 'hsl(0 0% 8.5%)',
              gray900: 'hsl(0 0% 62.8%)',
            },
          }}
        />
        <EditableScale
          name="quartz"
          lightThemeConfig={{
            start: 'hsl(300 10% 97.6%)',
            end: 'hsl(252 4% 78.9%)',
            defaultCurve: [0.655, 0.455, 0.905, 0.47],
            overrides: {
              quartz800: 'hsl(252 4% 57.3%)',
              quartz900: 'hsl(252 4% 45%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(246 6% 10.3%)',
            end: 'hsl(250 5% 32.5%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
            overrides: {
              quartz000: 'hsl(246 6% 9%)',
              quartz800: 'hsl(252 4% 45.2%)',
              // quartz900: 'hsl(253 4% 54.2%)',
              quartz900: 'hsl(253 4% 63.7%)',
              quartz1000: 'hsl(256 6% 93.2%)',
            },
          }}
        />
        <EditableScale
          name="slate"
          lightThemeConfig={{
            start: 'hsl(206 17% 97.6%)',
            end: 'hsl(206 10% 78%)',
            defaultCurve: [0.65, 0.47, 0.905, 0.47],
            overrides: {
              slate900: 'hsl(206 6% 43.5%)',
              slate1000: 'hsl(206 24% 9%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(200 6% 10%)',
            end: 'hsl(204 6% 31.5%)',
            defaultCurve: [0.395, 0.22, 0.685, 0.37],
            overrides: {
              slate000: 'hsl(200 7% 8.8%)',
              slate900: 'hsl(206 6% 63.0%)',
            },
          }}
        />
        <EditableScale
          name="sage"
          lightThemeConfig={{
            start: 'hsl(155 17% 97.6%)',
            end: 'hsl(155 6% 77.3%)',
            defaultCurve: [0.65, 0.47, 0.89, 0.475],
            overrides: {
              sage800: 'hsl(155, 3.5%, 55.5%)',
              sage900: 'hsl(155, 3%, 43.0%)',
              sage1000: 'hsl(155 24% 9.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(155 9% 9.6%)',
            end: 'hsl(155 5% 30.5%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
            overrides: {
              sage000: 'hsl(155 7% 8.4%)',
              sage800: 'hsl(155 6% 42.5%)',
              // sage900: 'hsl(155 5% 51.9%)',
              sage900: 'hsl(155 5% 61.8%)',
              sage1000: 'hsl(155 6% 93%)',
            },
          }}
        />
        <EditableScale
          name="olive"
          lightThemeConfig={{
            start: 'hsl(110 17% 97.6%)',
            end: 'hsl(110 5% 77.3%)',
            defaultCurve: [0.65, 0.47, 0.905, 0.47],
            overrides: {
              olive800: 'hsl(110, 3.5%, 55.5%)',
              olive900: 'hsl(110, 3%, 43.0%)',
              olive1000: 'hsl(110 25% 9.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(110 6% 9.6%)',
            end: 'hsl(110 4% 30.5%)',
            defaultCurve: [0.395, 0.22, 0.69, 0.395],
            overrides: {
              olive000: 'hsl(110 5% 8.6%)',
              olive800: 'hsl(110 6% 42.5%)',
              // olive900: 'hsl(110 5% 51.9%)',
              olive900: 'hsl(110 5% 61.8%)',
              olive1000: 'hsl(110 6% 93%)',
            },
          }}
        />
        <EditableScale
          name="sand"
          lightThemeConfig={{
            start: 'hsl(50 9% 97.5%)',
            end: 'hsl(50 6% 77%)',
            defaultCurve: [0.65, 0.45, 0.905, 0.47],
            overrides: {
              sand900: 'hsl(50 2% 43.1%)',
              sand1000: 'hsl(50 6% 10%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(61 2% 9.6%)',
            end: 'hsl(46 4% 30.6%)',
            defaultCurve: [0.41, 0.225, 0.7, 0.43],
            overrides: {
              sand800: 'hsl(50 4% 42.7%)',
              sand900: 'hsl(50 4% 61.8%)',
              sand1000: 'hsl(56 4% 92.8%)',
            },
          }}
        />
        <EditableScale
          name="tomato"
          lightThemeConfig={{
            start: 'hsl(10 90% 98.3%)',
            end: 'hsl(10 72% 71%)',
            saturationBoost: 1.2,
            defaultCurve: [0.55, 0.225, 0.74, 0.525],
            overrides: {
              tomato800: 'hsl(10 78% 54.0%)',
              tomato900: 'hsl(10 82% 43.5%)',
              tomato1000: 'hsl(10 50% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(10 45% 10.8%)',
            end: 'hsl(10 80% 35.8%)',
            defaultCurve: [0.615, 0.335, 0.735, 0.535],
            overrides: {
              tomato800: 'hsl(10 78% 54%)',
              tomato900: 'hsl(10 85% 62.8%)',
            },
          }}
        />
        <EditableScale
          name="red"
          lightThemeConfig={{
            start: 'hsl(359 100% 98.5%)',
            end: 'hsl(359 70% 74.5%)',
            saturationBoost: 1.2,
            defaultCurve: [0.61, 0.265, 0.72, 0.52],
            overrides: {
              red000: 'hsl(359 100% 99.4%)',
              red100: 'hsl(359 100% 98.6%)',
              red800: 'hsl(358 75% 59.0%)',
              red900: 'hsl(358 65% 48.7%)',
              red1000: 'hsl(354 50% 14.6%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(353 35% 11.3%)',
            end: 'hsl(358 65% 40.5%)',
            defaultCurve: [0.46, 0.225, 0.785, 0.525],
            overrides: {
              red000: 'hsl(353 23% 9.8%)',
              red900: 'hsl(358 100% 69.5%)',
            },
          }}
        />
        <EditableScale
          name="crimson"
          lightThemeConfig={{
            start: 'hsl(332 100% 98.5%)',
            end: 'hsl(336 62% 72.8%)',
            saturationBoost: 1.2,
            defaultCurve: [0.6, 0.26, 0.71, 0.5],
            overrides: {
              crimson000: 'hsl(332 100% 99.4%)',
              crimson800: 'hsl(336 80% 57.8%)',
              crimson900: 'hsl(336 75% 47.2%)',
              crimson1000: 'hsl(340 65% 14.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(335 33% 11%)',
            end: 'hsl(336 75% 39%)',
            defaultCurve: [0.57, 0.28, 0.86, 0.585],
            overrides: {
              crimson000: 'hsl(335 20% 9.6%)',
              crimson900: 'hsl(341 90% 67.3%)',
            },
          }}
        />
        <EditableScale
          name="pink"
          lightThemeConfig={{
            start: 'hsl(322 100% 98.5%)',
            end: 'hsl(322 60% 72.2%)',
            saturationBoost: 1.2,
            defaultCurve: [0.61, 0.27, 0.715, 0.5],
            overrides: {
              pink000: 'hsl(322 100% 99.4%)',
              pink800: 'hsl(322 65% 54.5%)',
              pink900: 'hsl(322 75% 46%)',
              pink1000: 'hsl(320 70% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(318 33% 11%)',
            end: 'hsl(322 75% 37.5%)',
            defaultCurve: [0.53, 0.245, 0.825, 0.565],
            overrides: {
              pink000: 'hsl(318 25% 9.6%)',
              pink900: 'hsl(325 90% 66.4%)',
            },
          }}
        />
        <EditableScale
          name="plum"
          lightThemeConfig={{
            start: 'hsl(297 100% 98.6%)',
            end: 'hsl(292 48% 70.9%)',
            saturationBoost: 1.2,
            defaultCurve: [0.64, 0.29, 0.715, 0.495],
            overrides: {
              plum000: 'hsl(292 90% 99.4%)',
              plum800: 'hsl(292 45% 51.0%)',
              plum900: 'hsl(292 60% 42.5%)',
              plum1000: 'hsl(291 66% 14.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(301 30% 10.8%)',
            end: 'hsl(292 45% 40.0%)',
            defaultCurve: [0.51, 0.255, 0.73, 0.46],
            overrides: {
              plum000: 'hsl(301 20% 9.4%)',
              plum900: 'hsl(300 60% 62.0%)',
            },
          }}
        />
        <EditableScale
          name="purple"
          lightThemeConfig={{
            start: 'hsl(280 100% 99.0%)',
            end: 'hsl(272 60% 73.5%)',
            saturationBoost: 1.2,
            defaultCurve: [0.635, 0.3, 0.755, 0.485],
            overrides: {
              purple000: 'hsl(280 65% 99.4%)',
              purple900: 'hsl(272 50% 45.8%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(284 31% 11.2%)',
            end: 'hsl(272 52% 46%)',
            defaultCurve: [0.555, 0.285, 0.73, 0.495],
            overrides: {
              purple000: 'hsl(284 20% 9.6%)',
              purple900: 'hsl(275 80% 71%)',
            },
          }}
        />
        <EditableScale
          name="violet"
          lightThemeConfig={{
            start: 'hsl(252 100% 99.0%)',
            end: 'hsl(252 68% 76.2%)',
            saturationBoost: 1.2,
            defaultCurve: [0.69, 0.31, 0.76, 0.525],
            overrides: {
              violet000: 'hsl(255 65% 99.4%)',
              violet800: 'hsl(252 56% 57.5%)',
              violet900: 'hsl(250 43% 48.0%)',
              violet1000: 'hsl(254 60% 18.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(255 30% 12.6%)',
            end: 'hsl(250 52% 51.2%)',
            defaultCurve: [0.48, 0.235, 0.73, 0.465],
            overrides: {
              violet000: 'hsl(250 20% 10.2%)',
              violet900: 'hsl(250 95% 76.8%)',
            },
          }}
        />
        <EditableScale
          name="indigo"
          lightThemeConfig={{
            start: 'hsl(226 100% 98.7%)',
            end: 'hsl(226 76% 74.5%)',
            saturationBoost: 1.2,
            defaultCurve: [0.575, 0.18, 0.815, 0.61],
            overrides: {
              indigo000: 'hsl(225 60% 99.4%)',
              indigo800: 'hsl(226 70% 55.5%)',
              indigo900: 'hsl(226 55% 45%)',
              indigo1000: 'hsl(226 62% 17.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(229 37% 12.3%)',
            end: 'hsl(226 58% 44.3%)',
            defaultCurve: [0.555, 0.28, 0.785, 0.58],
            overrides: {
              indigo000: 'hsl(229 24% 10%)',
              indigo900: 'hsl(228 100% 75.9%)',
            },
          }}
        />
        <EditableScale
          name="blue"
          lightThemeConfig={{
            start: 'hsl(206 100% 98%)',
            end: 'hsl(206 82% 65.4%)',
            saturationBoost: 1.2,
            defaultCurve: [0.48, 0.135, 0.8, 0.555],
            overrides: {
              blue900: 'hsl(211 100% 43.2%)',
              blue1000: 'hsl(211 100% 15%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(216 50% 11.2%)',
            end: 'hsl(211 90% 34%)',
            defaultCurve: [0.485, 0.22, 0.735, 0.51],
            overrides: {
              blue000: 'hsl(212 35% 9.2%)',
            },
          }}
        />
        <EditableScale
          name="sky"
          lightThemeConfig={{
            start: 'hsl(191 100% 97.3%)',
            end: 'hsl(193 80% 70%)',
            saturationBoost: 1.4,
            defaultCurve: [0.55, 0.23, 0.815, 0.55],
            overrides: {
              sky000: 'hsl(193 100% 98.8%)',
              sky800: 'hsl(193 98% 70%)',
              sky900: 'hsl(195 100% 31.5%)',
              sky1000: 'hsl(195 100% 13.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(202 70% 9.1%)',
            end: 'hsl(198 100% 26%)',
            defaultCurve: [0.51, 0.265, 0.745, 0.615],
            overrides: {
              sky900: 'hsl(192 85% 55.8%)',
            },
          }}
        />
        <EditableScale
          name="mint"
          lightThemeConfig={{
            start: 'hsl(161 88% 96.8%)',
            end: 'hsl(163 60% 65%)',
            saturationBoost: 1.4,
            defaultCurve: [0.515, 0.285, 0.835, 0.53],
            overrides: {
              mint000: 'hsl(163 80% 98.8%)',
              mint800: 'hsl(163 75% 65.5%)',
              mint900: 'hsl(168 72% 29%)',
              mint1000: 'hsl(168 70% 12.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(173 75% 6.9%)',
            end: 'hsl(168 100% 21.2%)',
            defaultCurve: [0.5, 0.28, 0.825, 0.58],
            overrides: {
              mint000: 'hsl(173 50% 6.6%)',
              mint800: 'hsl(163 75% 65.5%)',
              mint900: 'hsl(163 70% 48%)',
              mint1000: 'hsl(163 80% 94.8%)',
            },
          }}
        />
        <EditableScale
          name="cyan"
          lightThemeConfig={{
            start: 'hsl(185 70% 97.0%)',
            end: 'hsl(189 60% 52.5%)',
            saturationBoost: 2,
            defaultCurve: [0.505, 0.13, 0.78, 0.565],
            overrides: {
              cyan000: 'hsl(185 60% 98.7%)',
              cyan800: 'hsl(190 95% 39.0%)',
              cyan900: 'hsl(192 85% 31.0%)',
              cyan1000: 'hsl(192 88% 12.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(192 72% 7.9%)',
            end: 'hsl(192 100% 24.5%)',
            defaultCurve: [0.465, 0.295, 0.795, 0.575],
            overrides: {
              cyan000: 'hsl(192 60% 7.2%)',
              cyan900: 'hsl(186 100% 42.2%)',
            },
          }}
        />
        <EditableScale
          name="teal"
          lightThemeConfig={{
            start: 'hsl(165 70% 96.7%)',
            end: 'hsl(172 42% 52.5%)',
            saturationBoost: 2,
            defaultCurve: [0.505, 0.13, 0.795, 0.55],
            overrides: {
              teal000: 'hsl(165 60% 98.8%)',
              teal800: 'hsl(173 80% 36.0%)',
              teal900: 'hsl(174 90% 25.2%)',
              teal1000: 'hsl(170 50% 12.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(168 76% 6.8%)',
            end: 'hsl(173 80% 23.8%)',
            defaultCurve: [0.48, 0.27, 0.77, 0.47],
            overrides: {
              teal900: 'hsl(174 90% 40.7%)',
            },
          }}
        />
        <EditableScale
          name="green"
          lightThemeConfig={{
            start: 'hsl(136 66% 97%)',
            end: 'hsl(151 40% 54.0%)',
            saturationBoost: 1.6,
            defaultCurve: [0.505, 0.13, 0.775, 0.51],
            overrides: {
              green000: 'hsl(136 50% 98.9%)',
              green800: 'hsl(151 55% 41.5%)',
              green900: 'hsl(153 67% 28.5%)',
              green1000: 'hsl(155 40% 14.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(154 43% 8.0%)',
            end: 'hsl(151 52% 28.5%)',
            defaultCurve: [0.38, 0.25, 0.74, 0.4],
            overrides: {
              green900: 'hsl(151 50% 53.2%)',
            },
          }}
        />
        <EditableScale
          name="grass"
          lightThemeConfig={{
            start: 'hsl(120 60% 97%)',
            end: 'hsl(131 38% 56.2%)',
            saturationBoost: 1.6,
            defaultCurve: [0.505, 0.13, 0.775, 0.51],
            overrides: {
              grass000: 'hsl(116 50% 98.9%)',
              grass800: 'hsl(131 41% 46.5%)',
              grass900: 'hsl(133 50% 32.5%)',
              grass1000: 'hsl(130 30% 14.9%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(134 33% 8.5%)',
            end: 'hsl(131 40% 30.8%)',
            defaultCurve: [0.38, 0.25, 0.74, 0.4],
            overrides: {
              grass800: 'hsl(131 41% 46.5%)',
              grass900: 'hsl(131 43% 57.2%)',
            },
          }}
        />
        <EditableScale
          name="lime"
          lightThemeConfig={{
            start: 'hsl(85 70% 96.5%)',
            end: 'hsl(76 62% 57%)',
            saturationBoost: 2,
            defaultCurve: [0.525, 0.18, 0.735, 0.555],
            overrides: {
              lime000: 'hsl(85 50% 98.7%)',
              lime800: 'hsl(81 67% 50%)',
              lime900: 'hsl(75 80% 26%)',
              lime1000: 'hsl(78 70% 11.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(75 55% 7.0%)',
            end: 'hsl(75 65% 24.5%)',
            defaultCurve: [0.34, 0.195, 0.72, 0.425],
            overrides: {
              lime000: 'hsl(75 55% 6.0%)',
              lime900: 'hsl(81 70% 43.8%)',
            },
          }}
        />
        <EditableScale
          name="yellow"
          lightThemeConfig={{
            start: 'hsl(53 95% 95.5%)',
            end: 'hsl(53 85% 55%)',
            saturationBoost: 3,
            defaultCurve: [0.48, 0.125, 0.705, 0.515],
            overrides: {
              yellow000: 'hsl(60 54% 98.5%)',
              yellow800: 'hsl(53 92% 50%)',
              yellow900: 'hsl(42 100% 29%)',
              yellow1000: 'hsl(40 55% 13.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(40 100% 7.2%)',
            end: 'hsl(42 100% 24.5%)',
            saturationBoost: 3,
            defaultCurve: [0.38, 0.15, 0.75, 0.47],
            overrides: {
              yellow000: 'hsl(40 80% 6.8%)',
              yellow900: 'hsl(48 100% 47%)',
              yellow1000: 'hsl(53 100% 91%)',
            },
          }}
        />
        <EditableScale
          name="amber"
          lightThemeConfig={{
            start: 'hsl(39 100% 96.5%)',
            end: 'hsl(39 100% 64.0%)',
            defaultCurve: [0.635, 0.38, 0.775, 0.64],
            overrides: {
              amber000: 'hsl(39 70% 99.0%)',
              amber800: 'hsl(39 100% 57%)',
              amber900: 'hsl(30 100% 34.0%)',
              amber1000: 'hsl(20 80% 17.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(26 80% 8.9%)',
            end: 'hsl(30 100% 28.6%)',
            saturationBoost: 2.5,
            defaultCurve: [0.39, 0.19, 0.655, 0.36],
            overrides: {
              amber000: 'hsl(30 50% 8.1%)',
              amber900: 'hsl(39 90% 49.8%)',
            },
          }}
        />
        <EditableScale
          name="orange"
          lightThemeConfig={{
            start: 'hsl(24 90% 97.8%)',
            end: 'hsl(24 95% 64.5%)',
            defaultCurve: [0.605, 0.235, 0.79, 0.56],
            overrides: {
              orange000: 'hsl(24 70% 99.0%)',
              orange800: 'hsl(24 94% 50%)',
              orange900: 'hsl(24 100% 37%)',
              orange1000: 'hsl(15 60% 17.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(18 70% 9.9%)',
            end: 'hsl(24 90% 31.5%)',
            saturationBoost: 2.5,
            defaultCurve: [0.54, 0.255, 0.76, 0.5],
            overrides: {
              orange000: 'hsl(20 50% 8.9%)',
              orange900: 'hsl(24 100% 66.2%)',
            },
          }}
        />
        <EditableScale
          name="brown"
          lightThemeConfig={{
            start: 'hsl(30 55% 97.8%)',
            end: 'hsl(28 50% 63.1%)',
            defaultCurve: [0.58, 0.275, 0.71, 0.485],
            overrides: {
              brown000: 'hsl(30 40% 99.1%)',
              brown900: 'hsl(25 30% 41.0%)',
              brown1000: 'hsl(20 30% 19.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(22 30% 10%)',
            end: 'hsl(28 30% 35.8%)',
            defaultCurve: [0.48, 0.165, 0.84, 0.58],
            overrides: {
              brown000: 'hsl(22 15% 8.7%)',
              brown900: 'hsl(28 60% 64.5%)',
            },
          }}
        />
        <EditableScale
          name="bronze"
          lightThemeConfig={{
            start: 'hsl(18 70% 98.0%)',
            end: 'hsl(16 25% 66.5%)',
            defaultCurve: [0.58, 0.275, 0.725, 0.48],
            overrides: {
              bronze000: 'hsl(15 30% 99.1%)',
              bronze900: 'hsl(15 20% 43.1%)',
              bronze1000: 'hsl(12 22% 21.5%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(17 14% 10.0%)',
            end: 'hsl(18 20% 38.0%)',
            defaultCurve: [0.48, 0.19, 0.84, 0.57],
            overrides: {
              bronze000: 'hsl(17 10% 8.8%)',
              bronze900: 'hsl(18 35% 68.5%)',
            },
          }}
        />
        <EditableScale
          name="gold"
          lightThemeConfig={{
            start: 'hsl(50 50% 96.6%)',
            end: 'hsl(36 27% 61.8%)',
            defaultCurve: [0.535, 0.24, 0.745, 0.485],
            overrides: {
              gold000: 'hsl(50 20% 99.1%)',
              gold800: 'hsl(36 20% 49.5%)',
              gold900: 'hsl(36 20% 39.0%)',
              gold1000: 'hsl(36 16% 20.0%)',
            },
          }}
          darkThemeConfig={{
            start: 'hsl(43 15% 9.2%)',
            end: 'hsl(36 20% 35.1%)',
            defaultCurve: [0.48, 0.175, 0.84, 0.57],
            overrides: {
              gold000: 'hsl(44 9% 8.3%)',
              gold900: 'hsl(35 30% 64.0%)',
            },
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

      // Saturation speed adjustment for the left end of the bezier curve
      const boost1 = config.saturationBoost ?? defaultSaturationBoost;
      // Smaller speed adjustment for the right end of the bezier curve to reduce the left end pull
      const boost2 = boost1 / 10 + 0.9;

      const [x1, y1, x2, y2] = newCurve;
      const hueCurve = newCurve;
      // Boost saturation speed on the left end of the curve, reduce slightly on the right end of the curve
      const chromaCurve: Curve = [x1, y1 * boost1, Math.min(1, x2 * boost2), y2];
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
    const bgContrastColor = getHiContrast(name);

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
            // Toggle all on Alt key
            if (event.altKey) {
              document
                .querySelectorAll(`[data-show-code-toggle][data-show-code="${showCode}"]`)
                .forEach((element) => (element as HTMLElement).click());
              return;
            }

            // Toggle all and copy color codes for all scales on the Command key
            if (event.metaKey) {
              let clipboard = '';

              document.querySelectorAll(`[data-color-code]`).forEach((element) => {
                const codeToCopy = (element as HTMLElement).textContent;
                clipboard = clipboard + codeToCopy;
              });

              // Insert newlines before 000's
              clipboard = clipboard.replaceAll(/(,)(?=\D+?000:)/g, ',\n \n');

              navigator.clipboard.writeText(clipboard);
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
            {Array.from(Array(11)).map((_, index) => (
              <Text
                key={index}
                css={{
                  fontSize: '10px',
                  fontFamily: '$mono',
                  width: '100%',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  lineHeight: '25px',
                }}
              >
                {name}
                {index}00: '{computedStyles.getPropertyValue(`--colors-${name}${index}00`)}',
              </Text>
            ))}
          </Grid>

          {!showCode && (
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
                css={{ bc: `$${name}800`, color: getHiContrast(name) }}
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
    const hsl = color.hsl().map((value) => (isNaN(value) ? 0 : value));
    // Normalise hue if saturation is a ridiculously small number like 9.609723609371595e-7
    hsl[0] = hsl[1] < 0.001 ? 0 : hsl[0];
    const [h, s, l] = hsl;

    const colorObj: Color = {
      name: `${name}${index + indexOffset}00`,
      value: `hsl(${Math.round(h)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%)`,
    };

    colorMap.push(colorObj);
  }

  return colorMap;
}
