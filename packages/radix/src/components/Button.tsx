import React from 'react';
import { css as _css, keyframes, withTheme } from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { variant, Prop } from '@modulz/radix-system';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from 'mdlz-prmtz';

const waitingAnimation = (props: ButtonProps) => keyframes`
  100% {
    transform: translateX(${themeGet(props.size === 1 ? 'space.9' : 'space.7')(props)});
	}
`;

type Variants = 'gray' | 'blue' | 'green' | 'red' | 'active' | 'waiting';
type Sizes = 0 | 1;

type ButtonProps = {
  variant?: Prop<Variants>;
  size?: Prop<Sizes>;
  // TODO: type Theme
  theme?: any;
} & ButtonPrimitiveProps;

type Ref = HTMLButtonElement;

export const BaseButton = React.forwardRef<Ref, ButtonProps>((props, ref) => (
  <ButtonPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        border: '1px solid',
        borderRadius: 1,
        cursor: 'pointer',
        fontFamily: 'medium',
        fontWeight: 500,
        outline: 'none',
        paddingY: 0,
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        '&:focus': {
          '&::-moz-focus-inner': {
            border: 0,
          },
        },
        '&:active': {
          backgroundColor: 'grays.1',
          borderColor: 'grays.4',
        },
        '&:disabled': {
          backgroundColor: 'grays.1',
          borderColor: 'grays.2',
          color: 'grays.4',
          cursor: 'not-allowed',
        },
      }),
      variant({
        variant: {
          gray: {
            backgroundColor: 'grays.0',
            borderColor: 'grays.3',
            color: 'grays.5',
            '&:hover': {
              borderColor: 'grays.4',
            },
            '&:focus': {
              borderColor: 'grays.4',
            },
          },
          blue: {
            backgroundColor: 'blues.0',
            borderColor: 'blues.3',
            color: 'blues.5',
            '&:hover': {
              borderColor: 'blues.4',
            },
            '&:focus': {
              borderColor: 'blues.4',
            },
            '&:active': {
              backgroundColor: 'blues.1',
              borderColor: 'blues.4',
            },
          },
          green: {
            backgroundColor: 'greens.0',
            borderColor: 'greens.3',
            color: 'greens.5',
            '&:hover': {
              borderColor: 'greens.4',
            },
            '&:focus': {
              borderColor: 'greens.4',
            },
            '&:active': {
              backgroundColor: 'greens.1',
              borderColor: 'greens.4',
            },
          },
          red: {
            backgroundColor: 'grays.0',
            color: 'reds.5',
            borderColor: 'grays.3',
            '&:hover': {
              borderColor: 'grays.4',
            },
          },
          active: {
            backgroundColor: 'grays.1',
            borderColor: 'grays.3',
            color: 'grays.5',
            '&:hover': {
              borderColor: 'grays.4',
            },
            '&:focus': {
              borderColor: 'grays.4',
            },
            '&:active': {
              backgroundColor: 'grays.1',
              borderColor: 'grays.4',
            },
          },
          waiting: {
            backgroundColor: 'grays.2',
            borderColor: 'grays.3',
            color: 'transparent',
          },
        },
      }),
      variant({
        size: {
          0: {
            fontSize: 2,
            paddingX: 2,
            height: 5,
            minWidth: 5,
          },
          1: {
            fontSize: 3,
            paddingX: 3,
            height: 6,
            minWidth: 6,
          },
        },
      }),
      // Code below specifically for the `waiting` variant
      props.variant === 'waiting' &&
        css({
          overflow: 'hidden',
          position: 'relative',
          pointerEvents: 'none',
          '&::before': {
            position: 'absolute',
            content: `''`,
            top: 0,
            left: '-100%',
            width: '200%',
            height: '100%',
            backgroundImage: `linear-gradient(
            -45deg,
            transparent 33%,
            rgba(0, 0, 0, 0.05) 33%,
            rgba(0, 0, 0, 0.05) 66%,
            transparent 66%
          )`,
            backgroundSize:
              props.size === 1
                ? `${themeGet('space.9')(props)} ${themeGet('space.6')(props)}`
                : `${themeGet('space.7')(props)} ${themeGet('space.5')(props)}`,
          },
        }),
      _css`
      &::before {
        animation: ${waitingAnimation(props)} 500ms linear infinite
      }
    `,
      { lineHeight: '1' },
    ]}
  />
));

export const Button = withTheme(BaseButton);

BaseButton.defaultProps = {
  variant: 'gray',
  size: 0,
};
