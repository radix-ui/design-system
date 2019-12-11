import React from 'react';
import { ThemeContext } from 'styled-components';
import { Select as SelectPrimitive, SelectProps as SelectPrimitiveProps } from 'mdlz-prmtz';
import { transparentize } from 'polished';

export { Option, OptionGroup } from 'mdlz-prmtz';

type Variant = 'normal' | 'ghost';
type Size = 0 | 1;

type SelectProps = SelectPrimitiveProps & { variant?: Variant; size?: Size };

export const Select = (props: SelectProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <SelectPrimitive
      styleConfig={{
        base: {
          button: {
            normal: {
              backgroundColor: theme.colors.gray100,
              fontFamily: theme.fonts.normal,
              lineHeight: theme.lineHeights[0],
              borderRadius: theme.radii[1],
              border: '1px solid',
              borderColor: theme.colors.gray300,
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            hover: {
              borderColor: theme.colors.gray400,
            },
            focus: {
              borderColor: theme.colors.blue500,
              boxShadow: `0 0 0 1px ${theme.colors.blue500}`,
            },
            disabled: {
              borderColor: theme.colors.gray300,
              color: theme.colors.gray500,
              cursor: 'not-allowed',
            },
          },
          buttonIcon: {
            normal: {
              marginLeft: theme.space[2],
            },
          },
          menu: {
            normal: {
              backgroundColor: theme.colors.white,
              borderRadius: theme.radii[1],
              paddingTop: theme.space[1],
              paddingBottom: theme.space[1],
              boxShadow: `0 10px 38px -10px ${transparentize(0.65, theme.colors.gray900)},
      0 10px 20px -15px ${transparentize(0.8, theme.colors.gray900)}`,
            },
          },
          item: {
            normal: {
              fontFamily: theme.fonts.normal,
              fontSize: theme.fontSizes[1],
              letterSpacing: '-0.01em',
              height: theme.sizes[5],
              paddingLeft: theme.space[5],
              paddingRight: theme.space[6],
            },
            grouped: {
              paddingLeft: theme.space[6],
            },
            highlighted: {
              backgroundColor: theme.colors.blue600,
              color: theme.colors.white,
            },
            disabled: {
              color: theme.colors.gray600,
            },
          },
          itemIcon: {
            normal: {
              left: theme.space[1],
            },
          },
          label: {
            normal: {
              fontFamily: theme.fonts.normal,
              fontSize: theme.fontSizes[1],
              letterSpacing: '-0.01em',
              height: theme.sizes[5],
              paddingLeft: theme.space[5],
              color: theme.colors.gray600,
            },
          },
          separator: {
            normal: {
              height: '1px',
              backgroundColor: theme.colors.gray300,
              marginTop: theme.space[1],
              marginBottom: theme.space[1],
            },
          },
          scrollIndicator: {
            normal: {
              backgroundColor: theme.colors.white,
              height: theme.sizes[4],
            },
          },
        },
        variants: {
          variant: {
            normal: {
              button: {
                normal: {
                  color: theme.colors.gray800,
                },
              },
            },
            ghost: {
              button: {
                normal: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                },
                focus: {
                  borderColor: theme.colors.blue500,
                },
              },
            },
          },
          size: {
            0: {
              button: {
                normal: {
                  fontSize: theme.fontSizes[1],
                  height: theme.sizes[5],
                  paddingLeft: theme.space[1],
                  paddingRight: theme.space[1],
                },
              },
            },
            1: {
              button: {
                normal: {
                  fontSize: theme.fontSizes[2],
                  height: theme.sizes[6],
                  paddingLeft: theme.space[2],
                  paddingRight: theme.space[2],
                },
              },
            },
          },
        },
      }}
      {...props}
    />
  );
};

Select.defaultProps = {
  size: 0,
};
