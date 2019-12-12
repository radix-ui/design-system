import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { MarginProps, system, Prop } from '@modulz/radix-system';
import themeGet from '@styled-system/theme-get';
import css from '@styled-system/css';
import * as CSS from 'csstype';
import { transparentize } from 'polished';
import { Box } from './Box';

const pillWidth = system({
  pillWidth: {
    property: 'width',
  },
});

interface PillWidthProps {
  pillWidth?: Prop<CSS.WidthProperty<{}>>;
}

export type PillNavProps = MarginProps &
  PillWidthProps & {
    children: ReactElement<PillButtonProps>[];
  };

export const PillNav: FC<PillNavProps> = ({ children, pillWidth, ...props }) => {
  return (
    <Box {...props}>
      {React.Children.map(children, (pill: ReactElement<PillButtonProps>) =>
        React.cloneElement(pill, { pillWidth })
      )}
    </Box>
  );
};

export type PillButtonProps = PillWidthProps & {
  active?: boolean;
};

export const PillButton = styled('button')<PillButtonProps>(
  ({ active, pillWidth, ...props }) =>
    css({
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: 0,
      flexGrow: 1,
      position: 'relative',
      fontSize: 2,
      fontFamily: 'normal',
      fontWeight: 500,
      backgroundColor: active ? 'gray200' : 'white',
      border: '1px solid',
      borderColor: active ? 'gray500' : 'gray400',
      color: 'gray700',
      height: 5,
      paddingY: 0,
      paddingX: 4,
      minWidth: 5,
      textDecoration: 'none',
      textAlign: 'center',
      outline: 'none',
      zIndex: active ? 1 : 0,
      margin: 0,
      marginLeft: '-1px',
      pointerEvents: active && 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      boxShadow:
        active && `inset 0 1px 0 ${transparentize(0.9, themeGet('colors.gray900')(props))}`,
      '&:first-child': {
        marginLeft: 0,
        borderTopLeftRadius: 9999,
        borderBottomLeftRadius: 9999,
      },
      '&:last-child': {
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
      },
      '&:hover:not(:disabled)': {
        borderColor: 'gray500',
        zIndex: 2,
      },
      '&:disabled': {
        backgroundColor: 'gray200',
        color: 'gray500',
      },
      '&:focus': {
        borderColor: 'gray500',
        zIndex: 2,
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
    }),
  {
    lineHeight: '1',
  },
  pillWidth
);
