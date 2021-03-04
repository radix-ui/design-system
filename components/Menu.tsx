import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS } from '../stitches.config';
import { Box } from './Box';
import { Flex } from './Flex';
import { panelStyles } from './Panel';
import * as MenuPrimitive from '@radix-ui/react-menu';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const baseItemCss: any = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  px: '$5',
};

export const itemCss: any = {
  ...baseItemCss,
  position: 'relative',
  color: '$hiContrast',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$blue800',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$slate800',
  },
};

export const labelCss: any = {
  ...baseItemCss,
  color: '$slate900',
};

export const menuCss: any = {
  boxSizing: 'border-box',
  minWidth: 120,
  py: '$1',
};

export const separatorCss: any = {
  height: 1,
  my: '$1',
  backgroundColor: '$slate500',
};

const StyledMenu = styled(MenuPrimitive.Root, { ...menuCss, ...panelStyles });

type MenuCSSProp = { css?: CSS };
type MenuOwnProps = Polymorphic.OwnProps<typeof MenuPrimitive.Root> & MenuCSSProp;
type MenuComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof MenuPrimitive.Root>,
  MenuOwnProps
>;

export const Menu = React.forwardRef((props, forwardedRef) => (
  <StyledMenu {...props} ref={forwardedRef} />
)) as MenuComponent;

export const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss);

export const MenuItem = styled(MenuPrimitive.Item, itemCss);

const StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss);

type MenuRadioItemCSSProp = { css?: CSS };
type MenuRadioItemOwnProps = Polymorphic.OwnProps<typeof MenuPrimitive.RadioItem> &
  MenuRadioItemCSSProp;
type MenuRadioItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof MenuPrimitive.RadioItem>,
  MenuRadioItemOwnProps
>;

export const MenuRadioItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <Flex css={{ width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          ></Box>
        </Flex>
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
)) as MenuRadioItemComponent;

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss);

type MenuCheckboxItemCSSProp = { css?: CSS };
type MenuCheckboxItemOwnProps = Polymorphic.OwnProps<typeof MenuPrimitive.CheckboxItem> &
  MenuCheckboxItemCSSProp;
type MenuCheckboxItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof MenuPrimitive.CheckboxItem>,
  MenuCheckboxItemOwnProps
>;

export const MenuCheckboxItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
)) as MenuCheckboxItemComponent;

export const MenuLabel = styled(MenuPrimitive.Label, labelCss);
export const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {});
export const MenuGroup = styled(MenuPrimitive.Group, {});
