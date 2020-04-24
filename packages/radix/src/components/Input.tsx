import React from 'react';
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

type Variant = 'normal' | 'ghost';
type Cursor = 'default' | 'text';
type Size = 0 | 1;

export type InputProps = InputPrimitiveProps & {
  variant?: Variant;
  cursor?: Cursor;
  size?: Size & any;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => (
  <InputPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        input: {
          normal: {
            color: theme.colors.gray800,
            fontFamily: theme.fonts.normal,
            fontVariantNumeric: 'tabular-nums',
            borderRadius: theme.radii[1],
          },
          readOnly: {
            color: theme.colors.gray700,
          },
          disabled: {
            backgroundColor: theme.colors.gray100,
            color: theme.colors.gray500,
            cursor: 'not-allowed',
          },
          focus: {
            boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
            cursor: 'text',
          },
        },
        placeholder: {
          normal: {
            color: theme.colors.gray600,
          },
        },
      },
      variants: {
        variant: {
          normal: {
            input: {
              normal: {
                boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
              },
            },
          },
        },
        size: {
          0: {
            input: {
              normal: {
                fontSize: theme.fontSizes[1],
                letterSpacing: '-0.001em',
                height: theme.sizes[5],
                lineHeight: theme.lineHeights[0], // Yields nice text selection height in Safari
                paddingLeft: theme.space[1],
                paddingRight: theme.space[1],
              },
            },
          },
          1: {
            input: {
              normal: {
                fontSize: theme.fontSizes[2],
                letterSpacing: '-0.002em',
                height: theme.sizes[6],
                lineHeight: theme.lineHeights[0], // Yields nice text selection height in Safari
                paddingLeft: theme.space[2],
                paddingRight: theme.space[2],

                // A workaround for a tiny visual bug in Chrome
                //
                // When input is positioned ambiguously — imagine it's vertically centered on the screen
                // so its position seems to be calculated with subpixel-level precision — there is a schism
                // between how the actual input “box” is placed and how its text baseline is placed. In this
                // case resizing the viewport height may introduce slight baseline misalignments and make
                // text look not centered vertically within the input.
                //
                // This happens because actual input text is rendered by a shadow DOM element, which doesn't use
                // the line height of the input. Instead, it uses the default "line-height: normal", which means 1.2.
                //
                // So:
                // * The input height is 35px, the font size is 13px
                // * The shadow DOM element height is Math.ceil(13px * 1.2) = 16px
                // * 35px - 16px = 19px for the browser to allocate above and below the shadow DOM element
                //
                // Hence adding the 1px padding to resolve the mismatch between the odd input height (35px) and
                // the even shadow DOM value element height (16px). This way baseline position stays consistent
                // no matter how the input is placed.
                paddingBottom: '1px',
              },
            },
          },
        },
        cursor: {
          text: {
            input: {
              normal: {
                cursor: 'text',
              },
            },
          },
          default: {
            input: {
              normal: {
                cursor: 'default',
              },
            },
          },
        },
      },
    }}
  />
));

Input.defaultProps = {
  type: 'text',
  variant: 'normal',
  cursor: 'text',
  size: 0,
};
