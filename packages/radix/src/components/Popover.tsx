import React from 'react';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
  Arrow,
} from 'mdlz-prmtz';
import { Card } from './Card';

type PopoverProps = PopoverPrimitiveProps & {
  isOpen?: boolean;
  showArrow?: boolean;
};

export const Popover = ({ children, showArrow, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitive
      side="bottom"
      align="center"
      // TODO: Arrow `null` to not render an Arrow Component
      arrow={showArrow ? <Arrow width={20} height={10} /> : <div />}
      {...props}
      getAnimationConfig={() => ({
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        immediate: true,
      })}
    >
      <Card variant="shadow" p={0} borderWidth={0}>
        {children}
      </Card>
    </PopoverPrimitive>
  );
};
