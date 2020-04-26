import { Styles } from '@modulz/primitives';
import {
  SimplifiedType,
  SimplifiedTypeWithDefaultState,
  StateName,
} from '../../utilities/styles-creator';
import { colors, theme } from '../../theme';
import { shadow } from '../../utilities/shadow';

export const buttonBaseStyles: Styles<StateName> = {
  normal: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.fonts.normal,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: theme.radii[1],
    cursor: 'default',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  disabled: {
    backgroundColor: colors.gray100,
    boxShadow: shadow.grayVLight,
    color: colors.gray500,
    cursor: 'not-allowed',
  },
};

export const buttonVariantsCSS: SimplifiedType = {
  gray: {
    normal: {
      backgroundColor: colors.gray100,
      boxShadow: shadow.grayLight,
      color: colors.gray800,
    },
    hover: {
      boxShadow: shadow.gray,
    },
    active: {
      backgroundColor: colors.gray200,
      boxShadow: shadow.gray,
    },
    focus: {
      boxShadow: `${shadow.gray}, ${shadow.gray}`,
    },
  },
  blue: {
    normal: {
      backgroundColor: colors.blue100,
      boxShadow: shadow.blueLight,
      color: colors.blue700,
    },
    hover: {
      boxShadow: shadow.blue,
    },
    active: {
      backgroundColor: colors.blue200,
      boxShadow: shadow.blue,
    },
    focus: {
      boxShadow: `${shadow.blue}, ${shadow.blue}`,
    },
  },
  green: {
    normal: {
      backgroundColor: colors.green100,
      boxShadow: shadow.greenLight,
      color: colors.green700,
    },
    hover: {
      boxShadow: shadow.green,
    },
    active: {
      backgroundColor: colors.green200,
      boxShadow: shadow.green,
    },
    focus: {
      boxShadow: `${shadow.green}, ${shadow.green}`,
    },
  },
  red: {
    normal: {
      backgroundColor: colors.gray100,
      boxShadow: shadow.grayLight,
      color: colors.red700,
    },
    hover: {
      backgroundColor: colors.red100,
      boxShadow: shadow.redLight,
    },
    active: {
      backgroundColor: colors.red200,
      boxShadow: shadow.red,
    },
    focus: {
      boxShadow: `${shadow.red}, ${shadow.red}`,
    },
  },
  ghost: {
    normal: {
      backgroundColor: 'transparent',
      color: colors.gray800,
      mixBlendMode: 'multiply',
    },
    hover: {
      backgroundColor: colors.gray200,
    },
    active: {
      backgroundColor: colors.gray300,
    },
    focus: {
      boxShadow: `${shadow.gray}, ${shadow.gray}`,
    },
  },
};
export const buttonSizesCSS: SimplifiedTypeWithDefaultState = {
  0: {
    fontSize: theme.fontSizes[1],
    paddingLeft: theme.space[2],
    paddingRight: theme.space[2],
    minWidth: theme.sizes[5],
    lineHeight: theme.lineHeights[2],
    letterSpacing: '-0.005em',
  },
  1: {
    fontSize: theme.fontSizes[2],
    paddingLeft: theme.space[3],
    paddingRight: theme.space[3],
    minWidth: theme.sizes[6],
    lineHeight: theme.lineHeights[4],
    letterSpacing: '-0.008em',
  },
};

export const buttonIsWaiting: SimplifiedType = {
  true: {
    normal: {
      backgroundColor: colors.gray200,
      boxShadow: `inset 0 0 0 1px ${colors.gray300}`,
      color: 'transparent',
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    focus: {
      boxShadow: `inset 0 0 0 1px ${colors.gray300}`,
    },
  },
};
