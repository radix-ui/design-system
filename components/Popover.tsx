import React from 'react';
import { styled, StitchesProps, css } from '../stitches.config';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
  PopoverPopperProps,
  PopoverCloseProps as PopoverPrimitiveCloseProps,
} from '@interop-ui/react-popover';
import { Cross2Icon } from '@modulz/radix-icons';
import { Box } from './Box';
import { Panel } from './Panel';
import { IconButton } from './IconButton';

export type { PopoverTriggerProps } from '@interop-ui/react-popover';
export type PopoverProps = PopoverPrimitiveProps & {
  children: React.ReactNode;
};
export type PopoverContentProps = PopoverPopperProps &
  StitchesProps<typeof Content> & { hideArrow?: boolean };
export type PopoverCloseProps = PopoverPrimitiveCloseProps & StitchesProps<typeof CloseButton>;

export function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive {...props}>{children}</PopoverPrimitive>;
}

// const fadeIn = css.keyframes({
//   '0%': { opacity: 0 },
//   '100%': { opacity: 1 },
// });

// const slideUp = css.keyframes({
//   '0%': { transform: 'translateY(3px)' },
//   '100%': { transform: 'translateY(0)' },
// });

// const slideDown = css.keyframes({
//   '0%': { transform: 'translateY(-3px)' },
//   '100%': { transform: 'translateY(0)' },
// });

// const slideRight = css.keyframes({
//   '0%': { transform: 'translateX(-3px)' },
//   '100%': { transform: 'translateX(0)' },
// });

// const slideLeft = css.keyframes({
//   '0%': { transform: 'translateX(3px)' },
//   '100%': { transform: 'translateX(0)' },
// });

const Popper = styled(PopoverPrimitive.Popper, {
  '&:focus': {
    outline: 'none',
  },
  // '&[data-side=top]': {
  //   animation: `${fadeIn} 125ms cubic-bezier(0.22, 1, 0.36, 1), ${slideUp} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // },
  // '&[data-side=bottom]': {
  //   animation: `${fadeIn} 125ms cubic-bezier(0.22, 1, 0.36, 1), ${slideDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // },
  // '&[data-side=right]': {
  //   animation: `${fadeIn} 125ms cubic-bezier(0.22, 1, 0.36, 1), ${slideRight} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // },
  // '&[data-side=left]': {
  //   animation: `${fadeIn} 125ms cubic-bezier(0.22, 1, 0.36, 1), ${slideLeft} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // },
});

const Content = styled(PopoverPrimitive.Content, {
  minWidth: 200,
  maxWidth: 'fit-content',
  minHeight: '$6',
});

const CloseButton = styled(PopoverPrimitive.Close, {});

const Arrow = styled(PopoverPrimitive.Arrow, {
  fill: 'currentColor',
});

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Popper>,
  PopoverContentProps
>(({ children, css, hideArrow, ...props }, fowardedRef) => (
  <Popper sideOffset={0} {...props} ref={fowardedRef}>
    <Content as={Panel} css={css}>
      {children}
    </Content>
    {!hideArrow && (
      <Box css={{ color: '$panel' }}>
        <Arrow width={11} height={5} offset={5} />
      </Box>
    )}
  </Popper>
));

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverPrimitive.Close;
