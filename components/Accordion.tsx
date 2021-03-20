import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledAccordion = styled(AccordionPrimitive.Root, {});

const StyledItem = styled(AccordionPrimitive.Item, {
  borderTop: '1px solid $colors$slate500',

  '&:last-of-type': {
    borderBottom: '1px solid $colors$slate500',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {});

const StyledButton = styled(AccordionPrimitive.Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',

  '@hover': {
    '&:hover': {
      backgroundColor: '$slate100',
    },
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

type AccordionButtonOwnProps = Polymorphic.OwnProps<typeof AccordionPrimitive.Button> & {
  css?: any;
};

type AccordionButtonComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AccordionPrimitive.Button>,
  AccordionButtonOwnProps
>;

export const AccordionButton = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledButton {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon />
    </StyledButton>
  </StyledHeader>
)) as AccordionButtonComponent;

const StyledPanel = styled(AccordionPrimitive.Panel, {
  p: '$2',
});

export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionPanel = StyledPanel;
