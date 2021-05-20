import { createCss, StitchesCss } from '@stitches/react';
export type { StitchesVariants } from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      gray000: 'hsl(0 0% 99%)',
      gray100: 'hsl(0 0% 97.3%)',
      gray200: 'hsl(0 0% 95%)',
      gray300: 'hsl(0 0% 92.9%)',
      gray400: 'hsl(0 0% 90.8%)',
      gray500: 'hsl(0 0% 88.6%)',
      gray600: 'hsl(0 0% 85.7%)',
      gray700: 'hsl(0 0% 78%)',
      gray800: 'hsl(0 0% 56.1%)',
      gray900: 'hsl(0, 0%, 43.5%)',
      gray1000: 'hsl(0 0% 9%)',

      quartz000: 'hsl(300 20% 99%)',
      quartz100: 'hsl(300 7.7% 97.5%)',
      quartz200: 'hsl(294 5.5% 95.3%)',
      quartz300: 'hsl(289 4.7% 93.3%)',
      quartz400: 'hsl(283 4.4% 91.3%)',
      quartz500: 'hsl(278 4.1% 89.1%)',
      quartz600: 'hsl(271 3.9% 86.3%)',
      quartz700: 'hsl(255 3.7% 78.8%)',
      quartz800: 'hsl(252 4% 57.3%)',
      quartz900: 'hsl(252 4% 45%)',
      quartz1000: 'hsl(260 25% 11%)',

      slate000: 'hsl(206 30% 98.8%)',
      slate100: 'hsl(210 16.7% 97.6%)',
      slate200: 'hsl(209 13.3% 95.3%)',
      slate300: 'hsl(209 12.2% 93.2%)',
      slate400: 'hsl(208 11.7% 91.1%)',
      slate500: 'hsl(208 11.3% 88.9%)',
      slate600: 'hsl(207 11.1% 85.9%)',
      slate700: 'hsl(205 10.7% 78%)',
      slate800: 'hsl(206 6% 56.1%)',
      slate900: 'hsl(206 6% 43.5%)',
      slate1000: 'hsl(206 24% 9%)',

      sage000: 'hsl(155 30% 98.8%)',
      sage100: 'hsl(150 16.7% 97.6%)',
      sage200: 'hsl(151 10.6% 95.2%)',
      sage300: 'hsl(151 8.8% 93%)',
      sage400: 'hsl(151 7.8% 90.8%)',
      sage500: 'hsl(152 7.2% 88.4%)',
      sage600: 'hsl(153 6.7% 85.3%)',
      sage700: 'hsl(154 6.1% 77.5%)',
      sage800: 'hsl(155, 3.5%, 55.5%)',
      sage900: 'hsl(155, 3%, 43%)',
      sage1000: 'hsl(155 24% 9%)',

      olive000: 'hsl(110 20% 99%)',
      olive100: 'hsl(120 16.7% 97.6%)',
      olive200: 'hsl(119 10.1% 95.2%)',
      olive300: 'hsl(118 8.1% 93%)',
      olive400: 'hsl(117 7.1% 90.8%)',
      olive500: 'hsl(115 6.4% 88.5%)',
      olive600: 'hsl(114 5.9% 85.4%)',
      olive700: 'hsl(110 5.2% 77.3%)',
      olive800: 'hsl(110, 3.5%, 55.5%)',
      olive900: 'hsl(110, 3%, 43%)',
      olive1000: 'hsl(110 25% 9.5%)',

      sand000: 'hsl(50 20% 99%)',
      sand100: 'hsl(60 7.7% 97.5%)',
      sand200: 'hsl(59 6.5% 95.1%)',
      sand300: 'hsl(58 6.1% 92.9%)',
      sand400: 'hsl(57 6% 90.7%)',
      sand500: 'hsl(56 5.9% 88.4%)',
      sand600: 'hsl(55 5.9% 85.2%)',
      sand700: 'hsl(51 6% 77.1%)',
      sand800: 'hsl(50 2% 55.7%)',
      sand900: 'hsl(50 2% 43.1%)',
      sand1000: 'hsl(50 6% 10%)',

      tomato000: 'hsl(10 100% 99.4%)',
      tomato100: 'hsl(8 100% 98.4%)',
      tomato200: 'hsl(8 100% 96.6%)',
      tomato300: 'hsl(8 100% 94.3%)',
      tomato400: 'hsl(8 92.8% 91%)',
      tomato500: 'hsl(9 84.7% 86.3%)',
      tomato600: 'hsl(10 77.3% 79.5%)',
      tomato700: 'hsl(10 71.6% 71%)',
      tomato800: 'hsl(10 78% 54%)',
      tomato900: 'hsl(10 82% 43.5%)',
      tomato1000: 'hsl(10 50% 13.5%)',

      red000: 'hsl(359 100% 99.4%)',
      red100: 'hsl(359 100% 98.6%)',
      red200: 'hsl(360 100% 96.8%)',
      red300: 'hsl(360 97.9% 94.8%)',
      red400: 'hsl(360 90.2% 91.9%)',
      red500: 'hsl(360 81.7% 87.8%)',
      red600: 'hsl(359 74.2% 81.7%)',
      red700: 'hsl(359 69.5% 74.3%)',
      red800: 'hsl(358 75% 59%)',
      red900: 'hsl(358 65% 48.7%)',
      red1000: 'hsl(354 50% 14.6%)',

      crimson000: 'hsl(332 100% 99.4%)',
      crimson100: 'hsl(330 100% 98.4%)',
      crimson200: 'hsl(331 85.6% 96.6%)',
      crimson300: 'hsl(331 78.1% 94.2%)',
      crimson400: 'hsl(332 72.1% 91.1%)',
      crimson500: 'hsl(333 67% 86.7%)',
      crimson600: 'hsl(335 63.5% 80.4%)',
      crimson700: 'hsl(336 62.3% 72.9%)',
      crimson800: 'hsl(336 80% 57.8%)',
      crimson900: 'hsl(336 75% 47.2%)',
      crimson1000: 'hsl(340 65% 14.5%)',

      pink000: 'hsl(322 100% 99.4%)',
      pink100: 'hsl(323 100% 98.4%)',
      pink200: 'hsl(323 86.3% 96.5%)',
      pink300: 'hsl(323 78.7% 94.2%)',
      pink400: 'hsl(323 72.2% 91.1%)',
      pink500: 'hsl(323 66.3% 86.6%)',
      pink600: 'hsl(323 62% 80.1%)',
      pink700: 'hsl(323 60.3% 72.4%)',
      pink800: 'hsl(322 65% 54.5%)',
      pink900: 'hsl(322 75% 46%)',
      pink1000: 'hsl(320 70% 13.5%)',

      plum000: 'hsl(292 90% 99.4%)',
      plum100: 'hsl(300 100% 98.6%)',
      plum200: 'hsl(299 71.2% 96.4%)',
      plum300: 'hsl(299 62% 93.8%)',
      plum400: 'hsl(298 56.1% 90.5%)',
      plum500: 'hsl(296 51.3% 85.8%)',
      plum600: 'hsl(295 48.2% 78.9%)',
      plum700: 'hsl(292 47.7% 70.8%)',
      plum800: 'hsl(292 45% 51%)',
      plum900: 'hsl(292 60% 42.5%)',
      plum1000: 'hsl(291 66% 14%)',

      purple000: 'hsl(280 65% 99.4%)',
      purple100: 'hsl(276 100% 99%)',
      purple200: 'hsl(276 83.1% 97%)',
      purple300: 'hsl(275 76.4% 94.7%)',
      purple400: 'hsl(275 70.8% 91.8%)',
      purple500: 'hsl(274 65.4% 87.8%)',
      purple600: 'hsl(273 61% 81.7%)',
      purple700: 'hsl(272 60% 73.5%)',
      purple800: 'hsl(272 51% 54%)',
      purple900: 'hsl(272 50% 45.8%)',
      purple1000: 'hsl(272 66% 16%)',

      violet000: 'hsl(255 65% 99.4%)',
      violet100: 'hsl(252 100% 99%)',
      violet200: 'hsl(252 96.9% 97.4%)',
      violet300: 'hsl(252 91.5% 95.5%)',
      violet400: 'hsl(252 85.1% 93%)',
      violet500: 'hsl(252 77.8% 89.4%)',
      violet600: 'hsl(252 71% 83.7%)',
      violet700: 'hsl(252 68.6% 76.3%)',
      violet800: 'hsl(252 56% 57.5%)',
      violet900: 'hsl(250 43% 48%)',
      violet1000: 'hsl(254 60% 18.5%)',

      indigo000: 'hsl(225 60% 99.4%)',
      indigo100: 'hsl(223 100% 98.6%)',
      indigo200: 'hsl(223 98.4% 97.1%)',
      indigo300: 'hsl(223 92.9% 95%)',
      indigo400: 'hsl(224 87.1% 92%)',
      indigo500: 'hsl(224 81.9% 87.8%)',
      indigo600: 'hsl(225 77.4% 82.1%)',
      indigo700: 'hsl(226 75.4% 74.5%)',
      indigo800: 'hsl(226 70% 55.5%)',
      indigo900: 'hsl(226 55% 45%)',
      indigo1000: 'hsl(226 62% 17%)',

      blue000: 'hsl(206 100% 99.2%)',
      blue100: 'hsl(210 100% 98%)',
      blue200: 'hsl(209 100% 96.5%)',
      blue300: 'hsl(210 98.8% 94%)',
      blue400: 'hsl(209 88.6% 90.1%)',
      blue500: 'hsl(209 81.2% 84.5%)',
      blue600: 'hsl(208 77.5% 76.9%)',
      blue700: 'hsl(206 81.9% 65.3%)',
      blue800: 'hsl(206 100% 50%)',
      blue900: 'hsl(211 100% 43.2%)',
      blue1000: 'hsl(211 100% 15%)',

      sky000: 'hsl(193 100% 98.8%)',
      sky100: 'hsl(193 100% 97.3%)',
      sky200: 'hsl(193 95.2% 95.2%)',
      sky300: 'hsl(193 90.3% 92.7%)',
      sky400: 'hsl(193 85.7% 89.7%)',
      sky500: 'hsl(193 81.6% 85.7%)',
      sky600: 'hsl(193 78.8% 79.9%)',
      sky700: 'hsl(193 80.4% 70%)',
      sky800: 'hsl(193 98% 70%)',
      sky900: 'hsl(195 100% 31.5%)',
      sky1000: 'hsl(195 100% 13%)',

      mint000: 'hsl(163 80% 98.8%)',
      mint100: 'hsl(159 87.5% 96.9%)',
      mint200: 'hsl(159 77.2% 93.8%)',
      mint300: 'hsl(159 71.6% 90.5%)',
      mint400: 'hsl(160 67.2% 86.9%)',
      mint500: 'hsl(160 63.3% 82.6%)',
      mint600: 'hsl(161 60.2% 76.5%)',
      mint700: 'hsl(163 59.8% 64.9%)',
      mint800: 'hsl(163 75% 65.5%)',
      mint900: 'hsl(168 72% 29%)',
      mint1000: 'hsl(168 70% 12%)',

      cyan000: 'hsl(185 60% 98.7%)',
      cyan100: 'hsl(185 73.3% 97.1%)',
      cyan200: 'hsl(186 70.2% 94.4%)',
      cyan300: 'hsl(186 63.8% 90.6%)',
      cyan400: 'hsl(187 58.3% 85.4%)',
      cyan500: 'hsl(188 54.6% 78.4%)',
      cyan600: 'hsl(189 53.7% 68.7%)',
      cyan700: 'hsl(189 60.3% 52.5%)',
      cyan800: 'hsl(190 95% 39%)',
      cyan900: 'hsl(192 85% 31%)',
      cyan1000: 'hsl(192 88% 12.5%)',

      teal000: 'hsl(165 60% 98.8%)',
      teal100: 'hsl(169 64.7% 96.7%)',
      teal200: 'hsl(169 59.8% 94%)',
      teal300: 'hsl(169 53.1% 90.2%)',
      teal400: 'hsl(170 47.1% 85%)',
      teal500: 'hsl(170 42.6% 77.9%)',
      teal600: 'hsl(170 39.9% 68.1%)',
      teal700: 'hsl(172 42.1% 52.5%)',
      teal800: 'hsl(173 80% 36%)',
      teal900: 'hsl(174 90% 25.2%)',
      teal1000: 'hsl(170 50% 12.5%)',

      green000: 'hsl(136 50% 98.9%)',
      green100: 'hsl(138 62.5% 96.9%)',
      green200: 'hsl(139 55.2% 94.5%)',
      green300: 'hsl(140 48.7% 91%)',
      green400: 'hsl(141 43.7% 86%)',
      green500: 'hsl(143 40.3% 79%)',
      green600: 'hsl(146 38.5% 69%)',
      green700: 'hsl(151 40.2% 54.1%)',
      green800: 'hsl(151 55% 41.5%)',
      green900: 'hsl(153 67% 28.5%)',
      green1000: 'hsl(155 40% 14%)',

      grass000: 'hsl(116 50% 98.9%)',
      grass100: 'hsl(120 60% 97.1%)',
      grass200: 'hsl(120 53.6% 94.8%)',
      grass300: 'hsl(121 47.5% 91.4%)',
      grass400: 'hsl(122 42.6% 86.5%)',
      grass500: 'hsl(124 39% 79.7%)',
      grass600: 'hsl(126 37.1% 70.2%)',
      grass700: 'hsl(131 38.1% 56.3%)',
      grass800: 'hsl(131 41% 46.5%)',
      grass900: 'hsl(133 50% 32.5%)',
      grass1000: 'hsl(130 30% 14.9%)',

      lime000: 'hsl(85 50% 98.7%)',
      lime100: 'hsl(85 66.7% 96.5%)',
      lime200: 'hsl(84 73.8% 93.2%)',
      lime300: 'hsl(84 72.1% 89.3%)',
      lime400: 'hsl(82 68.1% 84.4%)',
      lime500: 'hsl(80 63.8% 77.9%)',
      lime600: 'hsl(78 60.9% 69.2%)',
      lime700: 'hsl(76 61.8% 56.9%)',
      lime800: 'hsl(81 67% 50%)',
      lime900: 'hsl(75 80% 26%)',
      lime1000: 'hsl(78 70% 11.5%)',

      yellow000: 'hsl(60 54% 98.5%)',
      yellow100: 'hsl(54 91.3% 95.5%)',
      yellow200: 'hsl(55 95.6% 91.9%)',
      yellow300: 'hsl(55 92.8% 87.8%)',
      yellow400: 'hsl(54 88.7% 83.1%)',
      yellow500: 'hsl(53 85% 77.3%)',
      yellow600: 'hsl(52 83.1% 69.7%)',
      yellow700: 'hsl(53 85.2% 55.1%)',
      yellow800: 'hsl(53 92% 50%)',
      yellow900: 'hsl(42 100% 29%)',
      yellow1000: 'hsl(40 55% 13.5%)',

      amber000: 'hsl(39 70% 99%)',
      amber100: 'hsl(40 100% 96.5%)',
      amber200: 'hsl(40 100% 93.1%)',
      amber300: 'hsl(40 100% 89.3%)',
      amber400: 'hsl(40 100% 85%)',
      amber500: 'hsl(40 100% 79.7%)',
      amber600: 'hsl(39 100% 72.8%)',
      amber700: 'hsl(39 100% 63.9%)',
      amber800: 'hsl(39 100% 57%)',
      amber900: 'hsl(30 100% 34%)',
      amber1000: 'hsl(20 80% 17%)',

      orange000: 'hsl(24 70% 99%)',
      orange100: 'hsl(24 83.3% 97.6%)',
      orange200: 'hsl(24 100% 95.3%)',
      orange300: 'hsl(25 100% 92.2%)',
      orange400: 'hsl(25 100% 88.2%)',
      orange500: 'hsl(25 100% 82.8%)',
      orange600: 'hsl(24 100% 75.3%)',
      orange700: 'hsl(24 94.5% 64.3%)',
      orange800: 'hsl(24 94% 50%)',
      orange900: 'hsl(24 100% 37%)',
      orange1000: 'hsl(15 60% 17%)',

      brown000: 'hsl(30 40% 99.1%)',
      brown100: 'hsl(30 50% 97.6%)',
      brown200: 'hsl(30 52.5% 94.6%)',
      brown300: 'hsl(30 53% 91.2%)',
      brown400: 'hsl(29 52.9% 86.8%)',
      brown500: 'hsl(29 52.5% 80.9%)',
      brown600: 'hsl(29 51.5% 72.8%)',
      brown700: 'hsl(28 50% 63.1%)',
      brown800: 'hsl(28 34% 51%)',
      brown900: 'hsl(25 30% 41%)',
      brown1000: 'hsl(20 30% 19%)',

      bronze000: 'hsl(15 30% 99.1%)',
      bronze100: 'hsl(17 63.6% 97.8%)',
      bronze200: 'hsl(17 42.1% 95.2%)',
      bronze300: 'hsl(17 35.2% 92.1%)',
      bronze400: 'hsl(17 31.5% 88.2%)',
      bronze500: 'hsl(17 29% 83%)',
      bronze600: 'hsl(17 26.9% 75.6%)',
      bronze700: 'hsl(17 25.1% 66.5%)',
      bronze800: 'hsl(17 20% 54%)',
      bronze900: 'hsl(15 20% 43.1%)',
      bronze1000: 'hsl(12 22% 21.5%)',

      gold000: 'hsl(50 20% 99.1%)',
      gold100: 'hsl(47 52.9% 96.7%)',
      gold200: 'hsl(46 38.2% 93.7%)',
      gold300: 'hsl(44 32.7% 90.1%)',
      gold400: 'hsl(43 29.9% 85.7%)',
      gold500: 'hsl(41 28.3% 79.8%)',
      gold600: 'hsl(39 27.6% 71.9%)',
      gold700: 'hsl(36 27.2% 61.8%)',
      gold800: 'hsl(36 20% 49.5%)',
      gold900: 'hsl(36 20% 39%)',
      gold1000: 'hsl(36 16% 20%)',

      // Semantic colors
      hiContrast: '$slate1000',
      // loContrast: '$slate000',
      loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    // space: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    // sizes: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    // fontSizes: {
    //   1: '11px',
    //   2: '12px',
    //   3: '15px',
    //   4: '17px',
    //   5: '20px',
    //   6: '22px',
    //   7: '28px',
    //   8: '36px',
    //   9: '60px',
    // },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (config) => (value: any) => ({ textAlign: value }),

    fd: (config) => (value: any) => ({ flexDirection: value }),
    fw: (config) => (value: any) => ({ flexWrap: value }),

    ai: (config) => (value: any) => ({ alignItems: value }),
    ac: (config) => (value: any) => ({ alignContent: value }),
    jc: (config) => (value: any) => ({ justifyContent: value }),
    as: (config) => (value: any) => ({ alignSelf: value }),
    fg: (config) => (value: any) => ({ flexGrow: value }),
    fs: (config) => (value: any) => ({ flexShrink: value }),
    fb: (config) => (value: any) => ({ flexBasis: value }),

    bc: (config) => (value: any) => ({
      backgroundColor: value,
    }),

    br: (config) => (value: any) => ({
      borderRadius: value,
    }),
    btrr: (config) => (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (config) => (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (config) => (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (config) => (value: any) => ({
      borderTopLeftRadius: value,
    }),

    bs: (config) => (value: any) => ({ boxShadow: value }),

    lh: (config) => (value: any) => ({ lineHeight: value }),

    ox: (config) => (value: any) => ({ overflowX: value }),
    oy: (config) => (value: any) => ({ overflowY: value }),

    pe: (config) => (value: any) => ({ pointerEvents: value }),
    us: (config) => (value: any) => ({ WebkitUserSelect: value, userSelect: value }),

    size: (config) => (value: any) => ({
      width: value,
      height: value,
    }),

    linearGradient: (config) => (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    appearance: (config) => (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (config) => (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (config) => (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;

export const { styled, css, theme, getCssString, global, keyframes, config } = stitches;

export const utils = config.utils;

export const darkTheme = theme('dark-theme', {
  colors: {
    gray000: 'hsl(0 0% 8.5%)',
    gray100: 'hsl(0 0% 9.8%)',
    gray200: 'hsl(0 0% 11.7%)',
    gray300: 'hsl(0 0% 13.8%)',
    gray400: 'hsl(0 0% 16.4%)',
    gray500: 'hsl(0 0% 19.9%)',
    gray600: 'hsl(0 0% 24.7%)',
    gray700: 'hsl(0 0% 31.2%)',
    gray800: 'hsl(0 0% 43.9%)',
    gray900: 'hsl(0 0% 62.8%)',
    gray1000: 'hsl(0 0% 93%)',

    quartz000: 'hsl(246 6% 9%)',
    quartz100: 'hsl(240 5.7% 10.4%)',
    quartz200: 'hsl(241 5.5% 12.3%)',
    quartz300: 'hsl(241 5.3% 14.5%)',
    quartz400: 'hsl(242 5.2% 17.2%)',
    quartz500: 'hsl(244 5% 20.8%)',
    quartz600: 'hsl(245 4.9% 25.8%)',
    quartz700: 'hsl(247 4.8% 32.5%)',
    quartz800: 'hsl(252 4% 45.2%)',
    quartz900: 'hsl(253 4% 63.7%)',
    quartz1000: 'hsl(256 6% 93.2%)',

    slate000: 'hsl(200 7% 8.8%)',
    slate100: 'hsl(200 5.9% 10%)',
    slate200: 'hsl(201 5.8% 11.8%)',
    slate300: 'hsl(201 5.8% 13.9%)',
    slate400: 'hsl(202 5.8% 16.5%)',
    slate500: 'hsl(203 5.8% 19.9%)',
    slate600: 'hsl(205 5.7% 24.8%)',
    slate700: 'hsl(207 5.6% 31.6%)',
    slate800: 'hsl(206 6% 43.9%)',
    slate900: 'hsl(206 6% 63%)',
    slate1000: 'hsl(210 6% 93%)',

    sage000: 'hsl(155 7% 8.4%)',
    sage100: 'hsl(156 10.2% 9.6%)',
    sage200: 'hsl(155 9.1% 11.4%)',
    sage300: 'hsl(155 8.2% 13.5%)',
    sage400: 'hsl(154 7.3% 16.1%)',
    sage500: 'hsl(153 6.5% 19.5%)',
    sage600: 'hsl(152 5.8% 24.2%)',
    sage700: 'hsl(150 5.1% 30.6%)',
    sage800: 'hsl(155 6% 42.5%)',
    sage900: 'hsl(155 5% 61.8%)',
    sage1000: 'hsl(155 6% 93%)',

    olive000: 'hsl(110 5% 8.6%)',
    olive100: 'hsl(100 6.1% 9.6%)',
    olive200: 'hsl(101 5.6% 11.4%)',
    olive300: 'hsl(102 5.2% 13.5%)',
    olive400: 'hsl(103 4.8% 16.1%)',
    olive500: 'hsl(105 4.5% 19.5%)',
    olive600: 'hsl(107 4.2% 24.2%)',
    olive700: 'hsl(110 3.8% 30.6%)',
    olive800: 'hsl(110 6% 42.5%)',
    olive900: 'hsl(110 5% 61.8%)',
    olive1000: 'hsl(110 6% 93%)',

    sand000: 'hsl(61 2% 8.3%)',
    sand100: 'hsl(60 2% 9.6%)',
    sand200: 'hsl(59 2.3% 11.4%)',
    sand300: 'hsl(58 2.6% 13.5%)',
    sand400: 'hsl(56 2.9% 16.2%)',
    sand500: 'hsl(55 3.2% 19.6%)',
    sand600: 'hsl(53 3.5% 24.3%)',
    sand700: 'hsl(50 3.8% 30.6%)',
    sand800: 'hsl(50 4% 42.7%)',
    sand900: 'hsl(50 4% 61.8%)',
    sand1000: 'hsl(56 4% 92.8%)',

    tomato000: 'hsl(10 23% 9.4%)',
    tomato100: 'hsl(10 45.5% 10.8%)',
    tomato200: 'hsl(8 49.6% 13.4%)',
    tomato300: 'hsl(7 54% 16.2%)',
    tomato400: 'hsl(7 58.9% 19.5%)',
    tomato500: 'hsl(7 64.5% 23.7%)',
    tomato600: 'hsl(8 71.4% 29.3%)',
    tomato700: 'hsl(10 80.2% 35.7%)',
    tomato800: 'hsl(10 78% 54%)',
    tomato900: 'hsl(10 85% 62.8%)',
    tomato1000: 'hsl(10 89% 96%)',

    red000: 'hsl(353 23% 9.8%)',
    red100: 'hsl(354 34.5% 11.4%)',
    red200: 'hsl(354 40.4% 13.9%)',
    red300: 'hsl(354 45.8% 17%)',
    red400: 'hsl(354 51% 20.6%)',
    red500: 'hsl(354 56% 25.3%)',
    red600: 'hsl(355 61% 31.5%)',
    red700: 'hsl(358 65% 40.4%)',
    red800: 'hsl(358 75% 59%)',
    red900: 'hsl(358 100% 69.5%)',
    red1000: 'hsl(351 89% 96%)',

    crimson000: 'hsl(335 20% 9.6%)',
    crimson100: 'hsl(333 32.1% 11%)',
    crimson200: 'hsl(333 38% 13.5%)',
    crimson300: 'hsl(334 43.4% 16.4%)',
    crimson400: 'hsl(334 48.8% 19.8%)',
    crimson500: 'hsl(335 54.7% 24.1%)',
    crimson600: 'hsl(335 62.2% 29.9%)',
    crimson700: 'hsl(336 74.9% 39%)',
    crimson800: 'hsl(336 80% 57.8%)',
    crimson900: 'hsl(341 90% 67.3%)',
    crimson1000: 'hsl(332 87% 96%)',

    pink000: 'hsl(318 25% 9.6%)',
    pink100: 'hsl(317 32.1% 11%)',
    pink200: 'hsl(317 36.9% 13.2%)',
    pink300: 'hsl(318 41.7% 16%)',
    pink400: 'hsl(318 46.9% 19.3%)',
    pink500: 'hsl(319 52.9% 23.7%)',
    pink600: 'hsl(321 60.9% 29.4%)',
    pink700: 'hsl(322 74.9% 37.5%)',
    pink800: 'hsl(322 65% 54.5%)',
    pink900: 'hsl(325 90% 66.4%)',
    pink1000: 'hsl(322 90% 95.8%)',

    plum000: 'hsl(301 20% 9.4%)',
    plum100: 'hsl(300 30.9% 10.8%)',
    plum200: 'hsl(299 33.5% 13.1%)',
    plum300: 'hsl(298 35.9% 15.8%)',
    plum400: 'hsl(297 38.2% 19.2%)',
    plum500: 'hsl(296 40.5% 23.8%)',
    plum600: 'hsl(294 42.9% 30.6%)',
    plum700: 'hsl(292 45.1% 40%)',
    plum800: 'hsl(292 45% 51%)',
    plum900: 'hsl(300 60% 62%)',
    plum1000: 'hsl(296 74% 95.7%)',

    purple000: 'hsl(284 20% 9.6%)',
    purple100: 'hsl(286 29.8% 11.2%)',
    purple200: 'hsl(284 34.8% 13.9%)',
    purple300: 'hsl(283 39% 17%)',
    purple400: 'hsl(281 42.8% 21%)',
    purple500: 'hsl(279 46.4% 26.5%)',
    purple600: 'hsl(276 49.7% 34.7%)',
    purple700: 'hsl(272 52.1% 45.9%)',
    purple800: 'hsl(272 51% 54%)',
    purple900: 'hsl(275 80% 71%)',
    purple1000: 'hsl(279 75% 95.7%)',

    violet000: 'hsl(250 20% 10.2%)',
    violet100: 'hsl(255 31.2% 12.5%)',
    violet200: 'hsl(254 35.2% 15.6%)',
    violet300: 'hsl(253 38.6% 19.2%)',
    violet400: 'hsl(252 41.6% 23.9%)',
    violet500: 'hsl(251 44.3% 30.2%)',
    violet600: 'hsl(250 47% 39.1%)',
    violet700: 'hsl(250 51.8% 51.2%)',
    violet800: 'hsl(252 56% 57.5%)',
    violet900: 'hsl(250 95% 76.8%)',
    violet1000: 'hsl(252 87% 96.4%)',

    indigo000: 'hsl(229 24% 10%)',
    indigo100: 'hsl(230 36.5% 12.4%)',
    indigo200: 'hsl(228 41% 15%)',
    indigo300: 'hsl(227 45.2% 18.1%)',
    indigo400: 'hsl(226 49.2% 22%)',
    indigo500: 'hsl(226 53.1% 27.1%)',
    indigo600: 'hsl(225 56.5% 34.1%)',
    indigo700: 'hsl(226 58.2% 44.1%)',
    indigo800: 'hsl(226 70% 55.5%)',
    indigo900: 'hsl(228 100% 75.9%)',
    indigo1000: 'hsl(226 83% 96.3%)',

    blue000: 'hsl(212 35% 9.2%)',
    blue100: 'hsl(215 50.9% 11.2%)',
    blue200: 'hsl(214 56.6% 13.1%)',
    blue300: 'hsl(213 63.1% 15.4%)',
    blue400: 'hsl(212 70.6% 18.2%)',
    blue500: 'hsl(211 79.5% 21.9%)',
    blue600: 'hsl(210 88.5% 26.7%)',
    blue700: 'hsl(211 89.7% 34.1%)',
    blue800: 'hsl(206 100% 50%)',
    blue900: 'hsl(210 100% 66.1%)',
    blue1000: 'hsl(206 98% 95.8%)',

    sky000: 'hsl(193 60% 7.3%)',
    sky100: 'hsl(201 69.6% 9%)',
    sky200: 'hsl(200 72.8% 10.7%)',
    sky300: 'hsl(200 76.7% 12.7%)',
    sky400: 'hsl(199 81.4% 15.2%)',
    sky500: 'hsl(199 87.2% 18.2%)',
    sky600: 'hsl(198 93.9% 21.9%)',
    sky700: 'hsl(198 100% 26.1%)',
    sky800: 'hsl(193 98% 70%)',
    sky900: 'hsl(192 85% 55.8%)',
    sky1000: 'hsl(198 98% 95.8%)',

    mint000: 'hsl(173 50% 6.6%)',
    mint100: 'hsl(173 77.1% 6.9%)',
    mint200: 'hsl(173 80.9% 8.2%)',
    mint300: 'hsl(172 86.8% 9.6%)',
    mint400: 'hsl(172 92.9% 11.2%)',
    mint500: 'hsl(171 99% 13.2%)',
    mint600: 'hsl(170 100% 16.3%)',
    mint700: 'hsl(168 100% 21.2%)',
    mint800: 'hsl(163 75% 65.5%)',
    mint900: 'hsl(163 70% 48%)',
    mint1000: 'hsl(163 80% 94.8%)',

    cyan000: 'hsl(192 60% 7.2%)',
    cyan100: 'hsl(192 70.7% 8%)',
    cyan200: 'hsl(192 73.7% 9.9%)',
    cyan300: 'hsl(192 77.1% 11.8%)',
    cyan400: 'hsl(192 80.9% 14.1%)',
    cyan500: 'hsl(192 85.5% 16.7%)',
    cyan600: 'hsl(192 91.6% 20%)',
    cyan700: 'hsl(192 100% 24.5%)',
    cyan800: 'hsl(190 95% 39%)',
    cyan900: 'hsl(186 100% 42.2%)',
    cyan1000: 'hsl(185 73% 93.2%)',

    teal000: 'hsl(168 48% 6.5%)',
    teal100: 'hsl(167 77.1% 6.9%)',
    teal200: 'hsl(168 73.1% 8.5%)',
    teal300: 'hsl(168 72.6% 10.3%)',
    teal400: 'hsl(169 72.2% 12.4%)',
    teal500: 'hsl(170 72.3% 15%)',
    teal600: 'hsl(171 74.1% 18.7%)',
    teal700: 'hsl(173 80.2% 23.7%)',
    teal800: 'hsl(173 80% 36%)',
    teal900: 'hsl(174 90% 40.7%)',
    teal1000: 'hsl(166 73% 93.1%)',

    green000: 'hsl(146 30% 7.4%)',
    green100: 'hsl(155 41.5% 8%)',
    green200: 'hsl(155 43.2% 10.1%)',
    green300: 'hsl(155 45.7% 12%)',
    green400: 'hsl(155 47.9% 14.3%)',
    green500: 'hsl(154 49.9% 17.3%)',
    green600: 'hsl(153 51.4% 21.6%)',
    green700: 'hsl(151 51.7% 28.4%)',
    green800: 'hsl(151 55% 41.5%)',
    green900: 'hsl(151 50% 53.2%)',
    green1000: 'hsl(137 72% 94%)',

    grass000: 'hsl(146 30% 7.4%)',
    grass100: 'hsl(133 31.8% 8.6%)',
    grass200: 'hsl(135 33.9% 10.8%)',
    grass300: 'hsl(135 35.6% 12.9%)',
    grass400: 'hsl(134 37.1% 15.5%)',
    grass500: 'hsl(134 38.4% 18.7%)',
    grass600: 'hsl(133 39.5% 23.4%)',
    grass700: 'hsl(131 40.1% 30.8%)',
    grass800: 'hsl(131 41% 46.5%)',
    grass900: 'hsl(131 43% 57.2%)',
    grass1000: 'hsl(137 72% 94%)',

    lime000: 'hsl(75 55% 6%)',
    lime100: 'hsl(75 55.6% 7.1%)',
    lime200: 'hsl(79 49.5% 9.1%)',
    lime300: 'hsl(80 48.6% 11.2%)',
    lime400: 'hsl(80 50.8% 13.5%)',
    lime500: 'hsl(79 54.4% 16.2%)',
    lime600: 'hsl(77 58.8% 19.8%)',
    lime700: 'hsl(75 64.8% 24.5%)',
    lime800: 'hsl(81 67% 50%)',
    lime900: 'hsl(81 70% 43.8%)',
    lime1000: 'hsl(84 79% 92.6%)',

    yellow000: 'hsl(45 100% 5.5%)',
    yellow100: 'hsl(45 100% 6.3%)',
    yellow200: 'hsl(44 100% 7.6%)',
    yellow300: 'hsl(46 100% 9%)',
    yellow400: 'hsl(47 100% 10.8%)',
    yellow500: 'hsl(48 86.1% 14.1%)',
    yellow600: 'hsl(48 77.6% 18.6%)',
    yellow700: 'hsl(50 100% 22%)',
    yellow800: 'hsl(53 92% 50%)',
    yellow900: 'hsl(48 100% 47%)',
    yellow1000: 'hsl(53 100% 91%)',

    amber000: 'hsl(36 100% 6.1%)',
    amber100: 'hsl(35 100% 7.1%)',
    amber200: 'hsl(33 100% 8.3%)',
    amber300: 'hsl(34 100% 9.9%)',
    amber400: 'hsl(34 96.5% 12.1%)',
    amber500: 'hsl(33 84.1% 16.2%)',
    amber600: 'hsl(34 81.6% 21.1%)',
    amber700: 'hsl(36 100% 25.5%)',
    amber800: 'hsl(39 100% 57%)',
    amber900: 'hsl(39 90% 49.8%)',
    amber1000: 'hsl(39 97% 93.2%)',

    orange000: 'hsl(30 70% 7.2%)',
    orange100: 'hsl(28 100% 7.5%)',
    orange200: 'hsl(27 93.1% 9.2%)',
    orange300: 'hsl(26 88.8% 11.4%)',
    orange400: 'hsl(25 86.6% 14.1%)',
    orange500: 'hsl(24 86.9% 17.6%)',
    orange600: 'hsl(24 90.8% 22.3%)',
    orange700: 'hsl(25 100% 28%)',
    orange800: 'hsl(24 94% 50%)',
    orange900: 'hsl(24 100% 62.2%)',
    orange1000: 'hsl(24 97% 93.2%)',

    brown000: 'hsl(22 15% 8.7%)',
    brown100: 'hsl(20 29.4% 10%)',
    brown200: 'hsl(19 28.2% 11.8%)',
    brown300: 'hsl(20 28.4% 14.1%)',
    brown400: 'hsl(21 28.7% 17.3%)',
    brown500: 'hsl(23 29.1% 21.5%)',
    brown600: 'hsl(25 29.6% 27.2%)',
    brown700: 'hsl(27 30.1% 35.9%)',
    brown800: 'hsl(28 34% 51%)',
    brown900: 'hsl(28 60% 64.5%)',
    brown1000: 'hsl(30 67% 94%)',

    bronze000: 'hsl(17 10% 8.8%)',
    bronze100: 'hsl(17 13.7% 10%)',
    bronze200: 'hsl(17 14.8% 11.9%)',
    bronze300: 'hsl(17 15.9% 14.5%)',
    bronze400: 'hsl(17 17% 17.8%)',
    bronze500: 'hsl(17 17.9% 22.2%)',
    bronze600: 'hsl(17 18.7% 28.3%)',
    bronze700: 'hsl(17 19.6% 38%)',
    bronze800: 'hsl(17 20% 54%)',
    bronze900: 'hsl(18 35% 68.5%)',
    bronze1000: 'hsl(18 57% 94.1%)',

    gold000: 'hsl(44 9% 8.3%)',
    gold100: 'hsl(43 14.9% 9.2%)',
    gold200: 'hsl(42 15.1% 10.9%)',
    gold300: 'hsl(42 15.9% 13.1%)',
    gold400: 'hsl(41 16.7% 16.1%)',
    gold500: 'hsl(40 17.6% 20.2%)',
    gold600: 'hsl(38 18.5% 25.9%)',
    gold700: 'hsl(36 19.6% 35.1%)',
    gold800: 'hsl(36 20% 49.5%)',
    gold900: 'hsl(35 30% 64%)',
    gold1000: 'hsl(49 52% 93.8%)',

    // Semantic colors
    hiContrast: '$slate1000',
    loContrast: '$slate000',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate200',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});
