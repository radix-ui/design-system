import React, {
  ComponentProps,
  FC,
  ReactElement,
  forwardRef,
  ComponentPropsWithRef,
} from 'react';
import styled from 'styled-components';
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

type MenuItemProps = ComponentPropsWithRef<'button'> & {
  variant?: 'active' | 'selected';
  size?: 'medium';
  icon?: ReactElement;
  contentOnHover?: ReactElement;
};

type Ref = HTMLButtonElement;

export const MenuItem: FC<MenuItemProps> = forwardRef<Ref, MenuItemProps>(
  (props, ref) => {
    const {
      children,
      variant,
      icon,
      disabled,
      contentOnHover,
      ...menuItemProps
    } = props;
    return (
      <Hover as={MenuItemWrapper}>
        {isHovered => (
          <Box position="relative">
            <BaseMenuItem
              {...menuItemProps}
              ref={ref}
              variant={variant}
              disabled={disabled}
            >
              {icon && <Box mr={3}>{icon}</Box>}
              <MenuText variant={variant}>{children}</MenuText>
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
  }
);

export const MenuText: FC<MenuItemProps> = ({ variant, children }) => {
  return (
    <Text
      size={2}
      bold={variant === 'active'}
      color="inherit"
      as="p"
      style={{ minWidth: '100%' }}
    >
      {children}
    </Text>
  );
};

// This is used to handle the `hover` effect correctly
const MenuItemWrapper = styled('div')({});

export const BaseMenuItem: FC<MenuItemProps> = styled('button')(
  ({ variant, size, ...props }: MenuItemProps) =>
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
      lineHeight: '1em',
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
