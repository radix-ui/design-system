import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Box } from './Box';
import { panelStyles } from './Panel';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
});

type PopoverContentPrimitiveProps = React.ComponentProps<typeof PopoverPrimitive.Content>;
type PopoverContentProps = PopoverContentPrimitiveProps & { css?: CSS; hideArrow?: boolean };

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <PopoverPrimitive.Portal>
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: '$panel' }}>
          <PopoverPrimitive.Arrow width={11} height={5} style={{ fill: 'currentColor' }} />
        </Box>
      )}
    </StyledContent>
  </PopoverPrimitive.Portal>
));

const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };
