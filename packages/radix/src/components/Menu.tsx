import React, { ComponentProps, FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  themeGet,
  width,
  WidthProps,
} from 'styled-system';
import { transparentize } from 'polished';
import { Text } from './Text';
import { Box } from './Box';
import { Flex } from './Flex';
import { Hover } from './Hover';
import { get } from '../utils/get';

type Variants = 'shadow';
type MenuProps = SpaceProps &
  WidthProps &
  MaxWidthProps & { variant?: Variants };

export const Menu = styled('nav')<MenuProps>(
  ({ variant, ...props }) =>
    css({
      borderRadius: 1,
      paddingY: 1,
      paddingX: 0,
      boxShadow:
        variant === 'shadow'
          ? `0 10px 38px -10px ${transparentize(
              0.65,
              themeGet('colors.grays.8')(props)
            )}, 0 10px 20px -15px ${transparentize(
              0.8,
              themeGet('colors.grays.8')(props)
            )}`
          : 'none',
    }),
  space,
  width,
  maxWidth
);

type MenuItemProps = ComponentProps<'button'> &
  ComponentProps<'a'> & {
    variant?: 'active' | 'selected';
    size?: 'medium';
    icon?: ReactElement;
    contentOnHover?: ReactElement;
  };

export const MenuItem: FC<MenuItemProps> = ({
  children,
  variant,
  icon,
  disabled,
  contentOnHover,
  ...props
}) => {
  return (
    <Hover as={MenuItemWrapper}>
      {isHovered => (
        <Box position="relative">
          <BaseMenuItem {...props} variant={variant} disabled={disabled}>
            {icon && <Box mr={3}>{icon}</Box>}
            <MenuText>{children}</MenuText>
          </BaseMenuItem>
          {isHovered && !disabled && (
            <Flex
              position="absolute"
              top={0}
              right={0}
              height="100%"
              alignItems="center"
              mr={1}
            >
              {contentOnHover}
            </Flex>
          )}
        </Box>
      )}
    </Hover>
  );
};

export const MenuText: FC = ({ children, ...props }) => {
  return (
    <Text
      {...props}
      fontSize="inherit"
      color="inherit"
      fontFamily="inherit"
      fontWeight="inherit"
    >
      {children}
    </Text>
  );
};

// This is used to handle the `hover` effect correctly
const MenuItemWrapper = styled('div')({});

const BaseMenuItem = styled('button')<MenuItemProps>(
  ({ variant, size, ...props }) =>
    css({
      alignItems: 'center',
      appearance: 'none',
      backgroundColor: get(
        { active: 'blues.4', selected: 'blues.1' },
        variant,
        'white'
      ),
      border: 0,
      boxSizing: 'border-box',
      color: get({ active: 'white' }, variant, 'grays.7'),
      cursor: 'pointer',
      display: 'flex',
      fontFamily: get({ active: 'medium' }, variant, 'normal'),
      // fontSize: get({ medium: 3 }, size, 2),
      fontSize: 2,
      fontWeight: get({ active: 500 }, variant, 400),
      lineHeight: '1em',
      // minHeight: get({ medium: 7 }, size, 6),
      minHeight: 6,
      outline: '1px solid transparent',
      outlineOffset: '-1px',
      paddingX: 3,
      paddingY: 1,
      position: 'relative',
      textAlign: 'left',
      textDecoration: 'none',
      userSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      width: '100%',
      '&:active': {
        backgroundColor: get(
          { active: 'blues.4', selected: 'blues.1' },
          variant,
          'grays.2'
        ),
      },
      '&:focus': {
        outlineColor: variant !== 'active' && themeGet('colors.blues.2')(props),
      },
      [`${MenuItemWrapper}:hover &`]: {
        backgroundColor: get(
          { active: 'blues.4', selected: 'blues.1' },
          variant,
          'grays.1'
        ),
      },
      [`${MenuItemWrapper}:hover &:disabled`]: {
        backgroundColor: 'white',
      },
      '&:disabled': {
        color: 'grays.4',
        cursor: 'not-allowed',
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
    })
);

export const MenuGroup = styled('div')(
  css({
    paddingY: 1,
    paddingX: 0,
    marginY: 1,
    marginX: 0,
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'grays.2',
  })
);
