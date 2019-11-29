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

type Variants = 'gray' | 'blue' | 'green' | 'red';
type Sizes = 0 | 1;

type ButtonProps = ButtonPrimitiveProps & {
  variant?: Prop<Variants>;
  isWaiting?: boolean;
  size?: Prop<Sizes>;
  // TODO: type Theme
  theme?: any;
};

export const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <ButtonPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        alignItems: 'center',
        display: 'inline-flex',
        border: '1px solid',
        borderRadius: 1,
        cursor: 'default',
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
          backgroundColor: 'gray200',
          borderColor: 'gray500',
        },
        '&:disabled': {
          backgroundColor: 'gray100',
          borderColor: 'gray300',
          color: 'gray500',
          cursor: 'not-allowed',
          pointerEvents: 'none', // TODO: Remove this when update Primitives
        },
      }),
      variant({
        variant: {
          gray: {
            backgroundColor: 'gray100',
            borderColor: 'gray400',
            color: 'gray800',
            '&:hover': {
              borderColor: 'gray500',
            },
            '&:active': {
              backgroundColor: 'gray200',
              borderColor: 'gray500',
            },
            '&:focus': {
              borderColor: 'blue500',
              boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
          },
          blue: {
            backgroundColor: 'blue100',
            borderColor: 'blue400',
            color: 'blue700',
            '&:hover': {
              borderColor: 'blue500',
            },
            '&:active': {
              backgroundColor: 'blue200',
              borderColor: 'blue500',
            },
            '&:focus': {
              borderColor: 'blue500',
              boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
          },
          green: {
            backgroundColor: 'green100',
            borderColor: 'green400',
            color: 'green700',
            '&:hover': {
              borderColor: 'green500',
            },
            '&:active': {
              backgroundColor: 'green200',
              borderColor: 'green500',
            },
            '&:focus': {
              borderColor: 'green500',
              boxShadow: `0 0 0 1px ${props.theme.colors.green500}`,
            },
          },
          red: {
            backgroundColor: 'gray100',
            borderColor: 'gray400',
            color: 'red700',
            '&:hover': {
              backgroundColor: 'red100',
              borderColor: 'red400',
            },
            '&:active': {
              backgroundColor: 'red200',
              borderColor: 'red500',
            },
            '&:focus': {
              borderColor: 'red500',
              boxShadow: `0 0 0 1px ${props.theme.colors.red500}`,
            },
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
      variant({
        isWaiting: {
          true: {
            backgroundColor: 'gray200',
            borderColor: 'gray400',
            color: 'transparent',
            overflow: 'hidden',
            position: 'relative',
            pointerEvents: 'none',
            '&:hover': {
              borderColor: 'gray400',
            },
            '&:focus': {
              borderColor: 'gray400',
            },
            '&:active': {
              borderColor: 'gray400',
            },
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
              rgba(0, 0, 0, 0.03) 33%,
              rgba(0, 0, 0, 0.03) 66%,
              transparent 66%
            )`,
              backgroundSize:
                props.size === 1
                  ? `${themeGet('space.9')(props)} ${themeGet('space.6')(props)}`
                  : `${themeGet('space.7')(props)} ${themeGet('space.5')(props)}`,
            },
          },
        },
      }),
      // Code below specifically for the `isWaiting` variant
      props.isWaiting &&
        _css`
      &::before {
        animation: ${waitingAnimation(props)} 500ms linear infinite
      }
    `,
      { lineHeight: '1' },
      props.css,
    ]}
  />
));

export const Button = withTheme(BaseButton);

BaseButton.defaultProps = {
  variant: 'gray',
  size: 0,
};
