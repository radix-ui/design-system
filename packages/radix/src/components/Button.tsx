import styled, { css as _css, keyframes } from 'styled-components';
import { space, SpaceProps, themeGet, Theme } from 'styled-system';
import css from '@styled-system/css';
import { get } from '../utils/get';

const waitingAnimation = (props: any) => keyframes`
  100% {
    transform: translateX(${themeGet(
      props.size === 'medium' ? 'space.9' : 'space.7'
    )(props)});
	}
`;

type Variants = 'blue' | 'green' | 'red' | 'active' | 'waiting';
type Sizes = 'medium';

type ButtonProps = SpaceProps & {
  variant?: Variants;
  size?: Sizes;
  waiting?: boolean;
  block?: boolean;
  theme?: Theme;
};

export const Button = styled('button')<ButtonProps>(
  ({ size, variant = undefined }) =>
    css({
      alignItems: 'center',
      appearance: 'none',
      backgroundColor: get(
        {
          blue: 'blues.0',
          green: 'greens.0',
          active: 'grays.1',
          waiting: 'grays.2',
        },
        variant,
        'grays.0'
      ),
      border: '1px solid',
      borderColor: get(
        {
          blue: 'blues.3',
          green: 'greens.3',
          active: 'grays.3',
          waiting: 'grays.3',
        },
        variant,
        'grays.3'
      ),
      borderRadius: 1,
      color: get(
        {
          blue: 'blues.5',
          green: 'greens.5',
          red: 'reds.5',
          waiting: 'transparent',
        },
        variant,
        'grays.5'
      ),
      cursor: 'pointer',
      display: 'inline-flex',
      fontFamily: 'normal',
      fontWeight: 500,
      fontSize: size === 'medium' ? 3 : 2,
      height: size === 'medium' ? 6 : 5,
      lineHeight: '1em',
      minWidth: size === 'medium' ? 6 : 5,
      outline: 'none',
      paddingY: 0,
      paddingX: size === 'medium' ? 3 : 2,
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      '&:hover': {
        borderColor: get(
          {
            blue: 'blues.4',
            green: 'greens.4',
            active: 'grays.4',
          },
          variant,
          'grays.4'
        ),
      },
      '&:focus': {
        borderColor: get(
          {
            blue: 'blues.4',
            green: 'greens.4',
            active: 'grays.4',
          },
          variant,
          'grays.4'
        ),
        '&::-moz-focus-inner': {
          border: 0,
        },
      },
      '&:active': {
        backgroundColor: get(
          {
            blue: 'blues.1',
            green: 'greens.1',
            active: 'grays.1',
          },
          variant,
          'grays.1'
        ),
        borderColor: get(
          {
            blue: 'blues.4',
            green: 'greens.4',
            active: 'grays.4',
          },
          variant,
          'grays.4'
        ),
      },
      '&:disabled': {
        backgroundColor: 'grays.1',
        borderColor: 'grays.2',
        color: 'grays.4',
        cursor: 'not-allowed',
      },
    }),
  // Code below specifically for the `waiting`
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
          size === 'medium'
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
  space
);
