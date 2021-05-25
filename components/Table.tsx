import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'table';

export const Caption = styled('caption', {
  textAlign: 'start',
  marginBottom: '$5',
});

export const Tbody = styled('tbody', {
  width: '100%',
});

export const Tfoot = styled('tfoot', {});

export const Tr = styled('tr', {});

export const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$2',
  py: '$2',
  borderBottom: '1px solid $gray4',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
});

export const Td = styled('td', {
  py: '$2',
  borderBottom: '1px solid $gray4',
  fontSize: '$2',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
});

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
  [`& ${Td}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
});

export const StyledTable = styled(DEFAULT_TAG, {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              bc: '$gray2',
            },
          },
        },
      },
    },
  },
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
