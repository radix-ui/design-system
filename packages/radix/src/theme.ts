type RadixBreakpoints<T> = Array<T> & {
  small: 0;
  medium: '38em';
  large: '62em';
  xlarge: '68em';
};

export const theme = {
  breakpoints: ['38em', '62em', '68em', '110em'] as RadixBreakpoints<any>,
  fonts: {
    normal:
      'UntitledSans, -apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
    medium:
      'UntitledSans-Medium, -apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
    mono: 'OperatorMono-Book, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: [
    '9px',
    '11px',
    '13px',
    '15px',
    '17px',
    '19px',
    '21px',
    '23px',
    '27px',
    '35px',
    '58px',
  ],
  space: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
  sizes: ['0', '5px', '10px', '15px', '20px', '25px', '35px', '45px', '65px', '80px'],
  lineHeights: ['20px', '25px', '30px', '35px', '40px', '45px', '50px', '55px', '60px'],
  radii: ['0', '3px', '5px', '10px'],
  colors: {
    black: 'hsl(0, 0%, 0%)',
    blacks: [
      'hsla(0, 0%, 0%, .9)',
      'hsla(0, 0%, 0%, .7)',
      'hsla(0, 0%, 0%, .5)',
      'hsla(0, 0%, 0%, .3)',
      'hsla(0, 0%, 0%, .1)',
    ],

    white: 'hsl(0, 0%, 100%)',
    whites: [
      'hsla(0, 0%, 100%, .9)',
      'hsla(0, 0%, 100%, .7)',
      'hsla(0, 0%, 100%, .5)',
      'hsla(0, 0%, 100%, .3)',
      'hsla(0, 0%, 100%, .1)',
    ],

    gray100: 'hsl(210, 14%, 99%)',
    gray200: 'hsl(210, 27%, 97%)',
    gray300: 'hsl(210, 12%, 92%)',
    gray400: 'hsl(210, 10%, 87%)',
    gray500: 'hsl(210, 9%, 75%)',
    gray600: 'hsl(210, 8%, 62%)',
    gray700: 'hsl(210, 7%, 46%)',
    gray800: 'hsl(210, 7%, 17%)',
    gray900: 'hsl(210, 5%, 9%)',

    blue100: 'hsl(208, 100%, 99%)',
    blue200: 'hsl(208, 100%, 96%)',
    blue300: 'hsl(208, 92%, 92%)',
    blue400: 'hsl(208, 94%, 81%)',
    blue500: 'hsl(208, 95%, 68%)',
    blue600: 'hsl(208, 98%, 50%)',
    blue700: 'hsl(208, 99%, 44%)',
    blue800: 'hsl(208, 98%, 14%)',
    blue900: 'hsl(208, 98%, 9%)',

    red100: 'hsl(348, 100%, 99%)',
    red200: 'hsl(356, 92%, 97%)',
    red300: 'hsl(357, 87%, 92%)',
    red400: 'hsl(358, 90%, 86%)',
    red500: 'hsl(358, 92%, 74%)',
    red600: 'hsl(350, 95%, 52%)',
    red700: 'hsl(348, 97%, 45%)',
    red800: 'hsl(345, 100%, 20%)',
    red900: 'hsl(338, 100%, 12%)',

    green100: 'hsl(150, 80%, 98%)',
    green200: 'hsl(143, 64%, 95%)',
    green300: 'hsl(144, 60%, 87%)',
    green400: 'hsl(145, 59%, 78%)',
    green500: 'hsl(148, 55%, 63%)',
    green600: 'hsl(148, 60%, 42%)',
    green700: 'hsl(150, 70%, 30%)',
    green800: 'hsl(149, 63%, 15%)',
    green900: 'hsl(144, 61%, 8%)',

    yellow100: 'hsl(42, 100%, 98%)',
    yellow200: 'hsl(42, 94%, 93%)',
    yellow300: 'hsl(45, 89%, 86%)',
    yellow400: 'hsl(50, 92%, 74%)',
    yellow500: 'hsl(51, 94%, 66%)',
    yellow600: 'hsl(52, 100%, 49%)',
    yellow700: 'hsl(35, 50%, 39%)',
    yellow800: 'hsl(35, 50%, 15%)',
    yellow900: 'hsl(32, 50%, 8%)',
  },
} as const;

// Breakpoint aliases
// By adding the following aliases, repsonsive props
// can be used like so:
// <Text fontSize={{ small: 3, medium: 4, large: 5 }} />
theme.breakpoints.small = 0;
theme.breakpoints.medium = theme.breakpoints[0];
theme.breakpoints.large = theme.breakpoints[1];
theme.breakpoints.xlarge = theme.breakpoints[2];
