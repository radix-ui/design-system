import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { styled, StitchesProps } from '../stitches.config';
import { Box } from './Box';
import { Panel } from './Panel';
import {
  Menu as MenuPrimitive,
  MenuGroup as MenuGroupPrimitive,
  MenuLabel as MenuLabelPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuCheckboxItem as MenuCheckboxItemPrimitive,
  MenuRadioGroup as MenuRadioGroupPrimitive,
  MenuRadioItem as MenuRadioItemPrimitive,
  MenuItemIndicator as MenuItemIndicatorPrimitive,
  MenuSeparator as MenuSeparatorPrimitive,
} from '@radix-ui/react-menu';

const baseItemCss: any = {
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
  px: '$2',
};

const interactiveItemCss = {
  ...baseItemCss,
  position: 'relative',
  color: '$hiContrast',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$blue800',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$gray800',
  },
};

export type MenuProps = StitchesProps<typeof Menu>;
export const Menu = (props: React.ComponentProps<typeof MenuPrimitive>) => (
  <Panel
    as={MenuPrimitive}
    {...props}
    css={{
      boxSizing: 'border-box',
      minWidth: 120,
      py: '$1',
      ...(props as any).css,
    }}
  />
);

export type MenuSeparatorProps = StitchesProps<typeof MenuSeparator>;
export const MenuSeparator = styled(MenuSeparatorPrimitive, {
  height: 1,
  my: '$1',
  backgroundColor: '$gray500',
});

export type MenuItemProps = StitchesProps<typeof MenuItem>;
export const MenuItem = styled(MenuItemPrimitive, interactiveItemCss);

const StyledMenuRadioItem = styled(MenuRadioItemPrimitive, {
  ...interactiveItemCss,
  paddingLeft: '$5',
});
export type MenuRadioItemProps = StitchesProps<typeof StyledMenuRadioItem>;
export const MenuRadioItem = ({ children, ...props }: MenuRadioItemProps) => (
  <StyledMenuRadioItem {...props}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuItemIndicatorPrimitive>
        <CheckIcon />
      </MenuItemIndicatorPrimitive>
    </Box>
    {children}
  </StyledMenuRadioItem>
);

const StyledMenuCheckboxItem = styled(MenuCheckboxItemPrimitive, {
  ...interactiveItemCss,
  paddingLeft: '$5',
});
export type MenuCheckboxItemProps = StitchesProps<typeof StyledMenuCheckboxItem>;
export const MenuCheckboxItem = ({ children, ...props }: MenuCheckboxItemProps) => (
  <StyledMenuCheckboxItem {...props}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuItemIndicatorPrimitive>
        <CheckIcon />
      </MenuItemIndicatorPrimitive>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
);

export type MenuLabelProps = StitchesProps<typeof MenuLabel>;
export const MenuLabel = styled(MenuLabelPrimitive, {
  ...baseItemCss,
  color: '$gray900',
});

export type MenuRadioGroupProps = StitchesProps<typeof MenuRadioGroup>;
export const MenuRadioGroup = styled(MenuRadioGroupPrimitive, {});

export type MenuGroupProps = StitchesProps<typeof MenuGroup>;
export const MenuGroup = styled(MenuGroupPrimitive, {
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
