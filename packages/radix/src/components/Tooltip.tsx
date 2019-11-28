import React from 'react';
import themeGet from '@styled-system/theme-get';
import css from '@styled-system/css';
import { withTheme } from 'styled-components';
import {
  Arrow,
  Tooltip as TooltipPrimitive,
  TooltipProps as TooltipPrimitiveProps,
} from 'mdlz-prmtz';

type TooltipProps = TooltipPrimitiveProps & { theme?: any };

export const Tooltip = withTheme((props: TooltipProps) => (
  <TooltipPrimitive
    arrow={<Arrow width={12} height={6} fill={themeGet('colors.gray800')(props)} />}
    arrowOffset={6}
    sideOffset={-3}
    {...props}
    getAnimationConfig={() => ({
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      immediate: true,
    })}
    css={css({
      backgroundColor: 'gray800',
      paddingY: 0,
      paddingX: 1,
      lineHeight: 1,
      borderRadius: 1,
      fontSize: 1,
    })}
  />
));
