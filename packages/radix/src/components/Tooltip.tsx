import React, { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import css from '@styled-system/css';

type BaseTooltipProps = {
  position?: 'top' | 'bottom' | 'right' | 'left';
  align?: 'start' | 'end';
};

type TooltipProps = BaseTooltipProps & {
  text: string;
};

export const Tooltip: FC<TooltipProps> = ({ text, ...props }) => {
  if (!text) {
    return null;
  }
  return <BaseTooltip aria-label={text} {...props} />;
};

Tooltip.defaultProps = {
  position: 'top',
};

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

const BaseTooltip = styled('span')<BaseTooltipProps>(({ position, align }) =>
  css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'inherit',
    width: 'inherit',
    justifyContent: 'inherit',
    '&::before ': {
      content: `''`,
      position: 'absolute',
      zIndex: 1000001,
      color: 'hsla(0, 0%, 0%, .8)',
      pointerEvents: 'none',
      width: 0,
      height: 0,
      border: `${ARROW_SIZE} solid transparent`,
      display: 'none',
      opacity: 0,
      ...(position === 'top' && {
        top: `calc(-${ARROW_SIZE} - ${OFFSET})`,
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopColor: 'currentColor',
      }),
      ...(position === 'bottom' && {
        bottom: `calc(-${ARROW_SIZE} - ${OFFSET})`,
        left: '50%',
        transform: 'translateX(-50%)',
        borderBottomColor: 'currentColor',
      }),
      ...(position === 'right' && {
        right: `calc(-${ARROW_SIZE} - ${OFFSET})`,
        top: '50%',
        transform: 'translateY(-50%)',
        borderRightColor: 'currentColor',
      }),
      ...(position === 'left' && {
        left: `calc(-${ARROW_SIZE} - ${OFFSET})`,
        top: '50%',
        transform: 'translateY(-50%)',
        borderLeftColor: 'currentColor',
      }),
      ...(align === 'start' &&
        (position === 'top' || position === 'bottom') && {
          left: ARROW_SIZE,
          transform: 'none',
        }),
      ...(align === 'end' &&
        (position === 'top' || position === 'bottom') && {
          right: ARROW_SIZE,
          left: 'auto',
          transform: 'none',
        }),
      ...(align === 'start' &&
        (position === 'right' || position === 'left') && {
          top: ARROW_SIZE,
          transform: 'none',
        }),
      ...(align === 'end' &&
        (position === 'right' || position === 'left') && {
          top: 'auto',
          bottom: ARROW_SIZE,
          transform: 'none',
        }),
    },
    '&::after': {
      content: 'attr(aria-label)',
      position: 'absolute',
      zIndex: 1000000,
      fontFamily: 'normal',
      fontSize: 2,
      lineHeight: 0,
      padding: 1,
      color: 'white',
      textAlign: 'center',
      wordWrap: 'break-word',
      whiteSpace: 'pre',
      fontWeight: 400,
      pointerEvents: 'none',
      background: 'hsla(0, 0%, 0%, .8)',
      borderRadius: 1,
      display: 'none',
      opacity: 0,
      ...(position === 'top' && {
        left: '50%',
        bottom: `calc(100% + ${OFFSET})`,
        marginBottom: ARROW_SIZE,
        transform: 'translateX(-50%)',
      }),
      ...(position === 'bottom' && {
        left: '50%',
        top: `calc(100% + ${OFFSET})`,
        marginTop: ARROW_SIZE,
        transform: 'translateX(-50%)',
      }),
      ...(position === 'right' && {
        left: `calc(100% + ${OFFSET})`,
        top: '50%',
        marginLeft: ARROW_SIZE,
        transform: 'translateY(-50%)',
      }),
      ...(position === 'left' && {
        right: `calc(100% + ${OFFSET})`,
        top: '50%',
        marginRight: ARROW_SIZE,
        transform: 'translateY(-50%)',
      }),
      ...(align === 'start' &&
        (position === 'top' || position === 'bottom') && {
          left: 0,
          transform: 'none',
        }),
      ...(align === 'end' &&
        (position === 'top' || position === 'bottom') && {
          left: 'auto',
          right: 0,
          transform: 'none',
        }),
      ...(align === 'start' &&
        (position === 'right' || position === 'left') && {
          top: 0,
          transform: 'none',
        }),
      ...(align === 'end' &&
        (position === 'right' || position === 'left') && {
          top: 'auto',
          bottom: 0,
          transform: 'none',
        }),
    },
    '&:hover, &:active, &:focus': {
      '&::before, &::after': {
        display: 'inline-block',
        textDecoration: 'none',
        animationName: `${tooltipAppear}`,
        animationDuration: '0.1s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in',
        animationDelay: '0.3s',
      },
    },
  })
);
