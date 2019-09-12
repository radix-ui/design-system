import React from 'react';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
  Arrow,
} from 'mdlz-prmtz';
import { Card } from './Card';

type PopoverProps = PopoverPrimitiveProps & {
  isOpen?: boolean;
};

export const Popover = ({ children, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitive
      side="bottom"
      align="center"
      arrow={<Arrow width={20} height={10} />}
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
