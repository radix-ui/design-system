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
        border: 0,
        borderRadius: 1,
        cursor: 'default',
        fontFamily: 'normal',
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
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray500')(props)}`,
        },
        '&:disabled': {
          backgroundColor: 'gray100',
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray300')(props)}`,
          color: 'gray500',
          cursor: 'not-allowed',
          pointerEvents: 'none', // TODO: Remove this when update Primitives
        },
      }),
      variant({
        variant: {
          gray: {
            backgroundColor: 'gray100',
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray400')(props)}`,
            color: 'gray800',
            '&:hover': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray500')(props)}`,
            },
            '&:active': {
              backgroundColor: 'gray200',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray500')(props)}`,
            },
            '&:focus': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue500')(
                props
              )}, 0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
          },
          blue: {
            backgroundColor: 'blue100',
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue400')(props)}`,
            color: 'blue700',
            '&:hover': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
            '&:active': {
              backgroundColor: 'blue200',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
            '&:focus': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue500')(
                props
              )}, 0 0 0 1px ${themeGet('colors.blue500')(props)}`,
            },
          },
          green: {
            backgroundColor: 'green100',
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.green400')(props)}`,
            color: 'green700',
            '&:hover': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.green500')(props)}`,
            },
            '&:active': {
              backgroundColor: 'green200',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.green500')(props)}`,
            },
            '&:focus': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.green500')(
                props
              )}, 0 0 0 1px ${themeGet('colors.green500')(props)}`,
            },
          },
          red: {
            backgroundColor: 'gray100',
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray400')(props)}`,
            color: 'red700',
            '&:hover': {
              backgroundColor: 'red100',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.red400')(props)}`,
            },
            '&:active': {
              backgroundColor: 'red200',
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.red500')(props)}`,
            },
            '&:focus': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.red500')(props)}, 0 0 0 1px ${themeGet(
                'colors.red500'
              )(props)}`,
            },
          },
        },
      }),
      variant({
        size: {
          0: {
            fontSize: 1,
            paddingX: 2,
            height: 5,
            minWidth: 5,
            lineHeight: 2,
            letterSpacing: '-0.035em',
          },
          1: {
            fontSize: 2,
            paddingX: 3,
            height: 6,
            minWidth: 6,
            lineHeight: 4,
            letterSpacing: '-0.035em',
          },
        },
      }),
      variant({
        isWaiting: {
          true: {
            backgroundColor: 'gray200',
            boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray300')(props)}`,
            color: 'transparent',
            overflow: 'hidden',
            position: 'relative',
            pointerEvents: 'none',
            '&:focus': {
              boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray300')(props)}`,
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
      // { lineHeight: '1' },
      props.css,
    ]}
  />
));

BaseButton.defaultProps = {
  variant: 'gray',
  size: 0,
};

export const Button = withTheme(BaseButton);
