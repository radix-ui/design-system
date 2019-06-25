import styled, { css as _css, keyframes } from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get';
import { margin, MarginProps, variant, Prop } from '@modulz/radix-system';

const waitingAnimation = (props: any) => keyframes`
  100% {
    transform: translateX(${themeGet(props.size === 'large' ? 'space.9' : 'space.7')(props)});
	}
`;

type Variants = 'gray' | 'blue' | 'green' | 'red' | 'active' | 'waiting';
type Sizes = 'normal' | 'large';

type ButtonProps = MarginProps & {
  variant?: Prop<Variants>;
  size?: Prop<Sizes>;
  // TODO: type Theme
  theme?: any;
};

export const Button = styled('button')<ButtonProps>(
  css({
    alignItems: 'center',
    appearance: 'none',
    border: '1px solid',
    borderRadius: 1,
    cursor: 'pointer',
    display: 'inline-flex',
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
      normal: {
        fontSize: 2,
        paddingX: 2,
        height: 5,
        minWidth: 5,
      },
      large: {
        fontSize: 3,
        paddingX: 3,
        height: 6,
        minWidth: 6,
      },
    },
  }),
  // Code below specifically for the `waiting` variant
  ({ variant, theme, size }) =>
    variant === 'waiting' &&
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
          size === 'large'
            ? `${themeGet('space.9')({ theme })} ${themeGet('space.6')({
                theme,
              })}`
            : `${themeGet('space.7')({ theme })} ${themeGet('space.5')({
                theme,
              })}`,
      },
    }),
  _css`
      &::before {
        animation: ${({ theme, size }: ButtonProps) =>
          _css`${waitingAnimation({
            theme,
            size,
          })} 500ms linear infinite`}
      }
    `,
  { lineHeight: '1' },
  margin
);

Button.defaultProps = {
  variant: 'gray',
  size: 'normal',
};
