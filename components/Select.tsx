import React from 'react';
import { styled, CSS } from '../stitches.config';
import { CaretSortIcon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

const SelectWrapper = styled('div', {
  backgroundColor: '$loContrast',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  color: '$hiContrast',
  fontSize: '$1',
  height: '$5',

  '&:focus-within': {
    zIndex: 1,
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
  },
});

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 'inherit',
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outline: 'none',
  width: '100%',
  height: '100%',
  pl: '$1',
  pr: '$3',
});

const StyledCaretSortIcon = styled(CaretSortIcon, {
  position: 'absolute',
  pointerEvents: 'none',

  // Use margins instead of top/left to avoid setting "position: relative" on parent,
  // which would make stacking context tricky with Select used in a control group.
  marginTop: 5,
  marginLeft: -16,
});

type SelectCSSProp = { css?: CSS };
type SelectOwnProps = SelectCSSProp;
type SelectComponent = Polymorphic.ForwardRefComponent<'select', SelectOwnProps>;

export const Select = React.forwardRef(function Select({ css, ...props }, forwardedRef) {
  return (
    <SelectWrapper css={css}>
      <StyledSelect ref={forwardedRef} {...props} />
      <StyledCaretSortIcon />
    </SelectWrapper>
  );
}) as SelectComponent;
