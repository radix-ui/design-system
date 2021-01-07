import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Accordion as AccordionPrimitive,
  AccordionProps as AccordionPrimitiveProps,
  AccordionItemProps as AccordionPrimitiveItemProps,
  AccordionButtonProps as AccordionPrimitiveButtonProps,
  AccordionPanelProps as AccordionPrimitivePanelProps,
} from '@interop-ui/react-accordion';
import { ChevronDownIcon } from '@modulz/radix-icons';

export type AccordionProps = AccordionPrimitiveProps & StitchesProps<typeof StyledAccordion>;
export type AccordionItemProps = AccordionPrimitiveItemProps & StitchesProps<typeof StyledItem>;
export type AccordionButtonProps = AccordionPrimitiveButtonProps &
  StitchesProps<typeof StyledButton>;
export type AccordionPanelProps = AccordionPrimitivePanelProps & StitchesProps<typeof StyledPanel>;

const StyledAccordion = styled(AccordionPrimitive, {});

export function Accordion(props: AccordionProps) {
  return <StyledAccordion {...props} />;
}

const StyledItem = styled(AccordionPrimitive.Item, {
  borderTop: '1px solid $gray500',

  '&:last-of-type': {
    borderBottom: '1px solid $gray500',
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

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)'
  },

  // TODO: check if there should be a data-state attr
  '&[aria-expanded="true"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

export const AccordionButton = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ children }, forwardedRef) => (
    <StyledHeader>
      <StyledButton ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </StyledButton>
    </StyledHeader>
  )
);

const StyledPanel = styled(AccordionPrimitive.Panel, {
  p: '$2',
});

Accordion.Item = StyledItem;
Accordion.Button = AccordionButton;
Accordion.Panel = StyledPanel;
