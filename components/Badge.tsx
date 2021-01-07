import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type BadgeProps = StitchesProps<typeof Badge>;
export type BadgeVariants = StitchesVariants<typeof Badge>;

export const Badge = styled('span', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  ':disabled': {
    backgroundColor: '$gray200',
    pointerEvents: 'none',
    color: '$gray700',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },

  // Custom
  backgroundColor: '$gray200',
  borderRadius: '$pill',
  color: '$gray900',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    size: {
      '1': {
        height: '$3',
        px: '$1',
        fontSize: '$1',
      },
      '2': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
      },
    },
    variant: {
      red: {
        backgroundColor: '$red200',
        color: '$red900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $red700, 0 0 0 1px $red700',
        },
      },
      crimson: {
        backgroundColor: '$crimson200',
        color: '$crimson900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $crimson700, 0 0 0 1px $crimson700',
        },
      },
      pink: {
        backgroundColor: '$pink200',
        color: '$pink900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $pink700, 0 0 0 1px $pink700',
        },
      },
      purple: {
        backgroundColor: '$purple200',
        color: '$purple900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $purple700, 0 0 0 1px $purple700',
        },
      },
      violet: {
        backgroundColor: '$violet200',
        color: '$violet900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $violet700, 0 0 0 1px $violet700',
        },
      },
      indigo: {
        backgroundColor: '$indigo200',
        color: '$indigo900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $indigo700, 0 0 0 1px $indigo700',
        },
      },
      blue: {
        backgroundColor: '$blue200',
        color: '$blue900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $blue700, 0 0 0 1px $blue700',
        },
      },
      turquoise: {
        backgroundColor: '$turquoise200',
        color: '$turquoise900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $turquoise700, 0 0 0 1px $turquoise700',
        },
      },
      teal: {
        backgroundColor: '$teal200',
        color: '$teal900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $teal700, 0 0 0 1px $teal700',
        },
      },
      green: {
        backgroundColor: '$green200',
        color: '$green900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $green700, 0 0 0 1px $green700',
        },
      },
      lime: {
        backgroundColor: '$lime200',
        color: '$lime900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $lime700, 0 0 0 1px $lime700',
        },
      },
      yellow: {
        backgroundColor: '$yellow200',
        color: '$yellow900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $yellow700, 0 0 0 1px $yellow700',
        },
      },
      orange: {
        backgroundColor: '$orange200',
        color: '$orange900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $orange700, 0 0 0 1px $orange700',
        },
      },
      gold: {
        backgroundColor: '$gold200',
        color: '$gold900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gold700, 0 0 0 1px $gold700',
        },
      },
      bronze: {
        backgroundColor: '$bronze200',
        color: '$bronze900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $bronze700, 0 0 0 1px $bronze700',
        },
      },
    },
    interactive: {
      true: {
        // ':focus': {
        //   boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
        // },
      }
    }
  },
});

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'red',
  },
  {
    ':hover': {
      backgroundColor: '$red300',
    },
    ':active': {
      backgroundColor: '$red400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'crimson',
  },
  {
    ':hover': {
      backgroundColor: '$crimson300',
    },
    ':active': {
      backgroundColor: '$crimson400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'pink',
  },
  {
    ':hover': {
      backgroundColor: '$pink300',
    },
    ':active': {
      backgroundColor: '$pink400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'purple',
  },
  {
    ':hover': {
      backgroundColor: '$purple300',
    },
    ':active': {
      backgroundColor: '$purple400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'violet',
  },
  {
    ':hover': {
      backgroundColor: '$violet300',
    },
    ':active': {
      backgroundColor: '$violet400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'indigo',
  },
  {
    ':hover': {
      backgroundColor: '$indigo300',
    },
    ':active': {
      backgroundColor: '$indigo400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'blue',
  },
  {
    ':hover': {
      backgroundColor: '$blue300',
    },
    ':active': {
      backgroundColor: '$blue400',
    },
  },
);
Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'turquoise',
  },
  {
    ':hover': {
      backgroundColor: '$turquoise300',
    },
    ':active': {
      backgroundColor: '$turquoise400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'teal',
  },
  {
    ':hover': {
      backgroundColor: '$teal300',
    },
    ':active': {
      backgroundColor: '$teal400',
    },
  },
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'green',
  },
  {
    ':hover': {
      backgroundColor: '$green300',
    },
    ':active': {
      backgroundColor: '$green400',
    },
  }
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'lime',
  },
  {
    ':hover': {
      backgroundColor: '$lime300',
    },
    ':active': {
      backgroundColor: '$lime400',
    },
  }
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'yellow',
  },
  {
    ':hover': {
      backgroundColor: '$yellow300',
    },
    ':active': {
      backgroundColor: '$yellow400',
    },
  }
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'orange',
  },
  {
    ':hover': {
      backgroundColor: '$orange300',
    },
    ':active': {
      backgroundColor: '$orange400',
    },
  }
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'gold',
  },
  {
    ':hover': {
      backgroundColor: '$gold300',
    },
    ':active': {
      backgroundColor: '$gold400',
    },
  }
);

Badge.compoundVariant(
  {
    interactive: 'true',
    variant: 'bronze',
  },
  {
    ':hover': {
      backgroundColor: '$bronze300',
    },
    ':active': {
      backgroundColor: '$bronze400',
    },
  }
);
