import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'table';

export const StyledTable = styled(DEFAULT_TAG, {
  width: '100%',
  tableLayout: 'fixed',
});

export const Caption = styled('caption', {
  textAlign: 'left',
});

export const Thead = styled('thead', {

});

export const Tbody = styled('tbody', {
  width: '100%',
});

export const Tfoot = styled('tfoot', {

});

export const Tr = styled('tr', {

});

export const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  padding: 0,
});

export const Td = styled('td', {
  padding: 0,
});

type TableCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type TableVariants = Omit<StitchesVariants<typeof StyledTable>, 'size'>;
type TableOwnProps = TableCSSProp & TableVariants & { size?: any };

type TableComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TableOwnProps>;

export const Table = React.forwardRef((props, forwardedRef) => {
  return <StyledTable {...props} ref={forwardedRef} />;
}) as TableComponent;

Table.toString = () => `.${StyledTable.className}`;
