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
    gray: 'hsl(210, 9%, 75%)',
    grays: [
      'hsl(210, 14%, 99%)',
      'hsl(210, 27%, 97%)',
      'hsl(210, 12%, 92%)',
      'hsl(210, 10%, 87%)',
      'hsl(210, 9%, 75%)',
      'hsl(210, 8%, 62%)',
      'hsl(210, 7%, 46%)',
      'hsl(210, 7%, 17%)',
      'hsl(210, 5%, 9%)',
    ],
    blue: 'hsl(208, 95%, 68%)',
    blues: [
      'hsl(208, 99%, 99%)',
      'hsl(208, 90%, 96%)',
      'hsl(208, 92%, 92%)',
      'hsl(208, 94%, 81%)',
      'hsl(208, 95%, 68%)',
      'hsl(208, 98%, 50%)',
      'hsl(208, 99%, 44%)',
      'hsl(208, 98%, 14%)',
      'hsl(211, 98%, 9%)',
    ],
    red: 'hsl(358, 100%, 75%)',
    reds: [
      'hsl(348, 100%, 99%)',
      'hsl(356, 100%, 97%)',
      'hsl(357, 100%, 92%)',
      'hsl(358, 100%, 86%)',
      'hsl(358, 100%, 75%)',
      'hsl(350, 100%, 50%)',
      'hsl(348, 100%, 44%)',
      'hsl(345, 100%, 20%)',
      'hsl(338, 100%, 12%)',
    ],
    green: 'hsl(148, 55%, 61%)',
    greens: [
      'hsl(150, 80%, 98%)',
      'hsl(143, 74%, 94%)',
      'hsl(144, 68%, 85%)',
      'hsl(145, 59%, 74%)',
      'hsl(148, 55%, 61%)',
      'hsl(148, 60%, 42%)',
      'hsl(150, 70%, 30%)',
      'hsl(149, 63%, 15%)',
      'hsl(144, 61%, 8%)',
    ],
    yellow: 'hsl(51, 94%, 66%)',
    yellows: [
      'hsl(42, 100%, 98%)',
      'hsl(42, 94%, 93%)',
      'hsl(45, 89%, 86%)',
      'hsl(50, 92%, 74%)',
      'hsl(51, 94%, 66%)',
      'hsl(52, 100%, 49%)',
      'hsl(35, 50%, 39%)',
      'hsl(35, 50%, 15%)',
      'hsl(32, 50%, 8%)',
    ],
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
