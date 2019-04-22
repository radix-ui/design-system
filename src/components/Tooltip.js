import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import { themeColor } from '../theme';

const tooltipAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ARROW_SIZE = '6px';
const OFFSET = '6px';

const BaseTooltip = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  text-align: inherit;
  width: inherit;
  justify-content: inherit;

  &::before {
    content: "";
    position: absolute;
    z-index: 1000001;
    color: hsla(0, 0%, 0%, .8); /* TODO: add to theme */
    pointer-events: none;
    width: 0px;
    height: 0px;
    border: ${ARROW_SIZE} solid transparent;
    display: none;
    opacity: 0;
  }

  &::after {
    content: attr(aria-label);
    position: absolute;
    z-index: 1000000;
    font-family: ${themeGet('fonts.normal')};
    font-size: ${themeGet('fontSizes.2')};
    line-height: ${themeGet('fontSizes.2')};
    padding: ${themeGet('space.2')} ${themeGet('space.2')};
    color: ${themeColor('white')};
    text-align: center;
    word-wrap: break-word;
    white-space: pre;
    font-weight: 400;
    pointer-events: none;
    background: hsla(0, 0%, 0%, .8); /* TODO: add to theme */
    border-radius: ${themeGet('radii.1')};
    display: none;
    opacity: 0;
  }

  &:hover,
  &:active,
  &:focus {
    &::before,
    &::after {
      display: inline-block;
      text-decoration: none;
      animation-name: ${tooltipAppear};
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      animation-delay: 0.3s;
    }
  }

  ${props =>
    props.position === 'top' &&
    css`
      &::before {
        top: calc(-${ARROW_SIZE} - ${OFFSET});
        left: 50%;
        transform: translateX(-50%);
        border-top-color: currentColor;
      }

      &::after {
        left: 50%;
        bottom: calc(100% + ${OFFSET});
        margin-bottom: ${ARROW_SIZE};
        transform: translateX(-50%);
      }
    `}

  ${props =>
    props.position === 'bottom' &&
    css`
      &::before {
        bottom: calc(-${ARROW_SIZE} - ${OFFSET});
        left: 50%;
        transform: translateX(-50%);
        border-bottom-color: currentColor;
      }

      &::after {
        left: 50%;
        top: calc(100% + ${OFFSET});
        margin-top: ${ARROW_SIZE};
        transform: translateX(-50%);
      }
    `}

  ${props =>
    props.position === 'right' &&
    css`
      &::before {
        right: calc(-${ARROW_SIZE} - ${OFFSET});
        top: 50%;
        transform: translateY(-50%);
        border-right-color: currentColor;
      }

      &::after {
        left: calc(100% + ${OFFSET});
        top: 50%;
        margin-left: ${ARROW_SIZE};
        transform: translateY(-50%);
      }
    `}

    ${props =>
      props.position === 'left' &&
      css`
        &::before {
          left: calc(-${ARROW_SIZE} - ${OFFSET});
          top: 50%;
          transform: translateY(-50%);
          border-left-color: currentColor;
        }

        &::after {
          right: calc(100% + ${OFFSET});
          top: 50%;
          margin-right: ${ARROW_SIZE};
          transform: translateY(-50%);
        }
      `}

      ${props =>
        props.align === 'start' &&
        (props.position === 'top' || props.position === 'bottom') &&
        css`
          &::before {
            left: ${ARROW_SIZE};
            transform: none;
          }

          &::after {
            left: 0;
            transform: none;
          }
        `}

      ${props =>
        props.align === 'end' &&
        (props.position === 'top' || props.position === 'bottom') &&
        css`
          &::before {
            right: ${ARROW_SIZE};
            left: auto;
            transform: none;
          }

          &::after {
            left: auto;
            right: 0;
            transform: none;
          }
        `}

    ${props =>
      props.align === 'start' &&
      (props.position === 'right' || props.position === 'left') &&
      css`
        &::before {
          top: ${ARROW_SIZE};
          transform: none;
        }

        &::after {
          top: 0;
          transform: none;
        }
      `}

    ${props =>
      props.align === 'end' &&
      (props.position === 'right' || props.position === 'left') &&
      css`
        &::before {
          top: auto;
          bottom: ${ARROW_SIZE};
          transform: none;
        }

        &::after {
          top: auto;
          bottom: 0;
          transform: none;
        }
      `}
`;

export function Tooltip({ text, ...props }) {
  return <BaseTooltip aria-label={text} {...props} />;
}

Tooltip.defaultProps = {
  position: 'top',
};
