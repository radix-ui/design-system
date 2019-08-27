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
    arrow={<Arrow width={12} height={6} fill="hsla(0, 0%, 0%, 0.8)" />}
    arrowOffset={6}
    sideOffset={-3}
    {...props}
    getAnimationConfig={() => ({
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { mass: 1, tension: 600, friction: 30 },
    })}
    css={css({
      backgroundColor: 'hsla(0, 0%, 0%, 0.8)',
      padding: '7px',
      borderRadius: 1,
      fontSize: 2,
    })}
  />
));
