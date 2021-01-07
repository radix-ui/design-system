import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Tabs as TabsPrimitive,
  TabsProps as TabsPrimitiveProps,
  TabsListProps as TabsListPrimitiveProps,
  TabsTabProps as TabsTabPrimitiveProps,
  TabsPanelProps as TabsPanelPrimitiveProps,
} from '@interop-ui/react-tabs';
import { Separator } from './Separator';

export type TabsProps = TabsPrimitiveProps & StitchesProps<typeof StyledTabs>;
export type TabsTabProps = TabsTabPrimitiveProps & StitchesProps<typeof StyledTab>;
export type TabsListProps = TabsListPrimitiveProps & StitchesProps<typeof StyledTabsList>;
export type TabsPanelProps = TabsPanelPrimitiveProps & StitchesProps<typeof StyledTabsPanel>;

const StyledTabs = styled(TabsPrimitive, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

// Not able to use `forwardRef` here because then I can't add
// static props to it (eg: Tabs.List)
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
// export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, forwardedRef) => (
//   <StyledTabs ref={forwardedRef} {...props} />
// ));

export function Tabs(props: TabsProps) {
  return <StyledTabs {...props} />;
}

const StyledTab = styled(TabsPrimitive.Tab, {
  flexShrink: 0,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$2',
  px: '$2',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray900',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  zIndex: '10',

  '&:hover': {
    color: '$hiContrast',
  },

  '&[data-state="active"]': {
    color: '$hiContrast',
    borderColor: '$gray500',
    borderBottomColor: 'white',
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',

    '&[data-state="active"]': {
      borderBottomColor: '$gray500',
      borderRightColor: 'white',
    },
  },
});

const Tab = React.forwardRef<HTMLDivElement, TabsTabProps>((props, forwardedRef) => (
  <StyledTab ref={forwardedRef} {...props} />
));

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $gray500',
  }
});

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, forwardedRef) => (
  <>
    <StyledTabsList ref={forwardedRef} {...props} />
    <Separator />
  </>
));

const StyledTabsPanel = styled(TabsPrimitive.Panel, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },
});

const TabsPanel = React.forwardRef<HTMLDivElement, TabsPanelProps>((props, forwardedRef) => (
  <StyledTabsPanel ref={forwardedRef} {...props} />
));

Tabs.Tab = Tab;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
