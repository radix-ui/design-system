import React, { useState, FC } from 'react';
import { Box, BoxProps } from './Box';

export type HoverProps = BoxProps & {
  children(isHovered: boolean): JSX.Element;
  as?: any;
};

export const Hover: FC<HoverProps> = ({ as: Component = Box, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      {...props}
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children(isHovered)}
    </Component>
  );
};
