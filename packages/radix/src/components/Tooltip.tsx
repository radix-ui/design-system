import React from 'react';
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
    {...props}
    css={css({
      backgroundColor: 'hsla(0, 0%, 0%, 0.8)',
      padding: '7px',
      borderRadius: 1,
      fontSize: 2,
    })}
    arrow={<Arrow width="12" height="12" fill="hsla(0, 0%, 0%, 0.8)" />}
    arrowOffset={6}
  />
));
