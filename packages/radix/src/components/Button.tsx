import React from 'react';
import styled, { css as _css, keyframes } from 'styled-components';
import css from '@styled-system/css';
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';
import {
  stylesFor,
  withBase,
  withType,
  withDefaultSizes,
  withVariants,
} from '../utilities/styles-creator';
import {
  buttonBaseStyles,
  buttonIsWaiting,
  buttonSizesCSS,
  buttonVariantsCSS,
} from './button/button-description';

type Variant = 'gray' | 'blue' | 'green' | 'red' | 'ghost';
type Size = 0 | 1;

export type ButtonProps = ButtonPrimitiveProps & {
  variant?: Variant;
  isWaiting?: boolean;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => (
    <ButtonPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={stylesFor('button')(
        withBase(buttonBaseStyles),
        withVariants(buttonVariantsCSS),
        withDefaultSizes(buttonSizesCSS),
        withType('isWaiting')(buttonIsWaiting)
      )}
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
