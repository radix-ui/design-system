import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

export const DesignSystemProvider: React.FC = ({ children }) => (
  <TooltipProvider>{children}</TooltipProvider>
);
