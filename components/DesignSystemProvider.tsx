import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />;
};
