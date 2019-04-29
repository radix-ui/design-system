import React, { useState, FC } from 'react';
import { Box, BoxProps } from './Box';

type HoverProps = BoxProps & {
  children(isHovered: boolean): JSX.Element;
};

export const Hover: FC<HoverProps> = ({ children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children(isHovered)}
    </Box>
  );
};
