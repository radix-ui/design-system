import React from 'react';
import { transparentize } from 'polished';
import {
  Menu as MenuPrimitive,
  MenuProps as MenuPrimitiveProps,
  StyleConfig,
  MenuParts,
} from '@modulz/primitives';
import { theme } from '../theme';

export {
  MenuItem,
  MenuItemProps,
  MenuItemCheckbox,
  MenuItemCheckboxProps,
  MenuItemRadioGroup,
  MenuItemRadioGroupProps,
  MenuItemRadio,
  MenuItemRadioProps,
  MenuItemLabel,
  MenuItemLabelProps,
  MenuItemSeparator,
  MenuItemSeparatorProps,
} from '@modulz/primitives';

export type MenuProps = MenuPrimitiveProps;

export const Menu = (props: MenuProps) => (
  <MenuPrimitive {...props} styleConfig={menuStyleConfig} />
);

export const menuStyleConfig: StyleConfig<MenuParts> = {
  base: {
    menu: {
      normal: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[1],
        paddingTop: theme.space[1],
        paddingBottom: theme.space[1],
        boxShadow: `0 10px 38px -10px ${transparentize(0.65, theme.colors.gray900)},
0 10px 20px -15px ${transparentize(0.8, theme.colors.gray900)}`,
      },
    },
    item: {
      normal: {
        fontFamily: theme.fonts.normal,
        fontSize: theme.fontSizes[1],
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.001em',
        height: theme.sizes[5],
        paddingLeft: theme.space[5],
        paddingRight: theme.space[6],
      },
      highlighted: {
        backgroundColor: theme.colors.blue600,
        color: theme.colors.white,
      },
      disabled: {
        color: theme.colors.gray600,
      },
    },
    itemIcon: {
      normal: {
        left: theme.space[1],
      },
    },
    label: {
      normal: {
        fontFamily: theme.fonts.normal,
        fontSize: theme.fontSizes[1],
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.001em',
        height: theme.sizes[5],
        paddingLeft: theme.space[5],
        paddingRight: theme.space[6],
        color: theme.colors.gray600,
      },
    },
    separator: {
      normal: {
        height: '1px',
        backgroundColor: theme.colors.gray300,
        marginTop: theme.space[1],
        marginBottom: theme.space[1],
      },
    },
    scrollIndicator: {
      normal: {
        backgroundColor: theme.colors.white,
        height: theme.sizes[4],
      },
    },
  },
};
