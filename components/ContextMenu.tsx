import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS } from '../stitches.config';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { menuCss, separatorCss, itemCss, interactiveItemCss, labelCss } from './Menu';
import { Box } from './Box';
import { panelStyles } from './Panel';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const StyledContextMenuContent = styled(ContextMenuPrimitive.Content, {
  ...menuCss,
  ...panelStyles,
});

type MenuCSSProp = { css?: CSS };
type MenuOwnProps = Polymorphic.OwnProps<typeof ContextMenuPrimitive.Content> & MenuCSSProp;
type MenuComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ContextMenuPrimitive.Content>,
  MenuOwnProps
>;

export const ContextMenuContent = React.forwardRef((props, forwardedRef) => (
  <StyledContextMenuContent {...props} ref={forwardedRef} />
)) as MenuComponent;

export const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss);

export const ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss);

const StyledMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, interactiveItemCss);

type MenuRadioItemCSSProp = { css?: CSS };
type MenuRadioItemOwnProps = Polymorphic.OwnProps<typeof ContextMenuPrimitive.RadioItem> &
  MenuRadioItemCSSProp;
type MenuRadioItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ContextMenuPrimitive.RadioItem>,
  MenuRadioItemOwnProps
>;

export const ContextMenuRadioItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
)) as MenuRadioItemComponent;

const StyledMenuCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, interactiveItemCss);

type MenuCheckboxItemCSSProp = { css?: CSS };
type MenuCheckboxItemOwnProps = Polymorphic.OwnProps<typeof ContextMenuPrimitive.CheckboxItem> &
  MenuCheckboxItemCSSProp;
type MenuCheckboxItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ContextMenuPrimitive.CheckboxItem>,
  MenuCheckboxItemOwnProps
>;

export const ContextMenuCheckboxItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
)) as MenuCheckboxItemComponent;

export const ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss);

// Group CSS cant be abstraced because it contains variants
// and Stitches Alpha types dont work properly
export const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {
  variants: {
    indented: {
      true: {
        '[data-radix-menu-item], [data-radix-menu-label]': {
          paddingLeft: '$5',
        },
      },
    },
  },
});

// Group CSS cant be abstraced because it contains variants
// and Stitches Alpha types dont work properly
export const ContextMenuGroup = styled(ContextMenuPrimitive.Group, {
  variants: {
    indented: {
      true: {
        '[data-radix-menu-item], [data-radix-menu-label]': {
          paddingLeft: '$5',
        },
      },
    },
  },
});
