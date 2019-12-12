import React from 'react';
import styled, { css as _css, keyframes } from 'styled-components';
import css from '@styled-system/css';

import { Prop } from '@modulz/radix-system';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

type Variant = 'gray' | 'blue' | 'green' | 'red';
type Size = 0 | 1;

export type ButtonProps = ButtonPrimitiveProps & {
  variant?: Prop<Variant>;
  isWaiting?: boolean;
  size?: Prop<Size>;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <ButtonPrimitive
      {...props}
      ref={ref}
      styleConfig={{
        base: {
          button: {
            normal: {
              alignItems: 'center',
              display: 'inline-flex',
              border: 0,
              borderRadius: theme.radii[1],
              cursor: 'default',
              fontFamily: theme.fonts.normal,
              fontWeight: 500,
              position: 'relative',
              textAlign: 'center',
              textDecoration: 'none',
              userSelect: 'none',
              whiteSpace: 'nowrap',
            },
            focus: {
              // We previously had: (need to validate in FF)
              // '&:focus': {
              //   '&::-moz-focus-inner': {
              //     border: 0,
              //   },
              // },
              border: 0,
            },
            active: {
              backgroundColor: theme.colors.gray200,
              boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
            },
            disabled: {
              backgroundColor: theme.colors.gray100,
              boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
              color: theme.colors.gray500,
              cursor: 'not-allowed',
            },
          },
        },
        variants: {
          variant: {
            gray: {
              button: {
                normal: {
                  backgroundColor: theme.colors.gray100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray400}`,
                  color: theme.colors.gray800,
                },
                hover: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
                },
                active: {
                  backgroundColor: theme.colors.gray200,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
                },
                focus: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
                },
              },
            },
            blue: {
              button: {
                normal: {
                  backgroundColor: theme.colors.blue100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue400}`,
                  color: theme.colors.blue700,
                },
                hover: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}`,
                },
                active: {
                  backgroundColor: theme.colors.blue200,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}`,
                },
                focus: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
                },
              },
            },
            green: {
              button: {
                normal: {
                  backgroundColor: theme.colors.green100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.green400}`,
                  color: theme.colors.green700,
                },
                hover: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.green500}`,
                },
                active: {
                  backgroundColor: theme.colors.green200,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.green500}`,
                },
                focus: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.green500}, 0 0 0 1px ${theme.colors.green500}`,
                },
              },
            },
            red: {
              button: {
                normal: {
                  backgroundColor: theme.colors.red100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.red400}`,
                  color: theme.colors.red700,
                },
                hover: {
                  backgroundColor: theme.colors.red100,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.red500}`,
                },
                active: {
                  backgroundColor: theme.colors.red200,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.red500}`,
                },
                focus: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.red500}, 0 0 0 1px ${theme.colors.red500}`,
                },
              },
            },
          },
          size: {
            0: {
              button: {
                normal: {
                  fontSize: theme.fontSizes[1],
                  paddingLeft: theme.space[2],
                  paddingRight: theme.space[2],
                  height: theme.sizes[5],
                  minWidth: theme.sizes[5],
                  lineHeight: theme.lineHeights[2],
                  letterSpacing: '-0.02em',
                },
              },
            },
            1: {
              button: {
                normal: {
                  fontSize: theme.fontSizes[2],
                  paddingLeft: theme.space[3],
                  paddingRight: theme.space[3],
                  height: theme.sizes[6],
                  minWidth: theme.sizes[6],
                  lineHeight: theme.lineHeights[4],
                  letterSpacing: '-0.02em',
                },
              },
            },
          },
          isWaiting: {
            true: {
              button: {
                normal: {
                  backgroundColor: theme.colors.gray200,
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
                  color: 'transparent',
                  overflow: 'hidden',
                  pointerEvents: 'none',
                },
                focus: {
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
                },
              },
            },
          },
        },
      }}
    >
      {children}
      {props.isWaiting && <Waiting size={props.size} />}
    </ButtonPrimitive>
  )
);

Button.defaultProps = {
  variant: 'gray',
  size: 0,
};

const waitingAnimation = (props: ButtonProps) => keyframes`
  100% {
    transform: translateX(${props.size === 1 ? theme.space[9] : theme.space[7]});
	}
`;

const Waiting = styled('div')<ButtonProps>(
  props =>
    css({
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '200%',
      height: '100%',
      backgroundImage: `linear-gradient(
                -45deg,
                transparent 33%,
                rgba(0, 0, 0, 0.03) 33%,
                rgba(0, 0, 0, 0.03) 66%,
                transparent 66%
              )`,
      backgroundSize:
        props.size === 1
          ? `${theme.space[9]} ${theme.space[6]}`
          : `${theme.space[7]} ${theme.space[5]}`,
    })(props),

  props => _css`
      animation: ${waitingAnimation(props)} 500ms linear infinite
    `
);
