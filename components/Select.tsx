import React from 'react';
import { styled, CSS } from '../stitches.config';
import { CaretSortIcon } from '@radix-ui/react-icons';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledSelect = styled('select', {
  appearance: 'none',
  backgroundColor: '$loContrast',
  border: 'none',
  fontFamily: 'inherit',
  height: '$5',
  fontSize: '$1',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  pl: '$1',
  pr: '$3',
  borderRadius: '$2',
  color: '$hiContrast',
  outline: 'none',

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
  },
});

const StyledCaretSortIcon = styled(CaretSortIcon, {
  color: '$hiContrast',
  position: 'absolute',
  top: 5,
  right: 1,
});

type SelectCSSProp = { css?: CSS };
type SelectOwnProps = SelectCSSProp;
type SelectComponent = Polymorphic.ForwardRefComponent<'select', SelectOwnProps>;

export const Select = React.forwardRef((props, forwardedRef) => {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <StyledSelect ref={forwardedRef} {...props} />
      <StyledCaretSortIcon />
    </div>
  );
}) as SelectComponent;
