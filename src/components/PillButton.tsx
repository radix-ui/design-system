import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { MarginProps, themeGet } from 'styled-system';
import { Box } from './Box';

type PillButtonGroupProps = MarginProps & {
  children: ReactElement<PillButtonProps>[];
};

export const PillButtonGroup: FC<PillButtonGroupProps> = ({
  children,
  ...props
}) => {
  return <Box {...props}>{children}</Box>;
};

type PillButtonProps = {
  active?: boolean;
};

export const PillButton = styled.button<PillButtonProps>`
  appearance: none;
  border: none;
  display: inline-flex;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  position: relative;
  font-size: ${themeGet('fontSizes.2')};
  font-family: ${themeGet('fonts.medium')};
  background-color: transparent;
  line-height: 1;
  box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.3')};
  color: ${themeGet('colors.grays.5')};
  height: ${themeGet('space.5')};
  padding: 0 ${themeGet('space.4')};
  min-width: ${themeGet('space.5')};
  text-decoration: none;
  outline: none;

  &:first-child {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
  }

  &:last-child {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }

  & + & {
    margin-left: -1px;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')};
    z-index: 1;
  }

  &:disabled {
    background-color: ${themeGet('colors.grays.1')};
    color: ${themeGet('colors.grays.4')};
    pointer-events: none;
  }

  ${props =>
    props.active &&
    css`
      background-color: ${themeGet('colors.grays.1')};
      box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')},
        inset 0 2px 0 ${transparentize(0.9, themeGet('colors.grays.8')(props))};
      color: ${themeGet('colors.grays.5')};
      z-index: 1;

      &:hover {
        box-shadow: inset 0 0 0 1px ${themeGet('colors.grays.4')},
          inset 0 2px 0
            ${transparentize(0.9, themeGet('colors.grays.8')(props))};
      }
    `}
`;
