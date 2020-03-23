import React from 'react';
import { Table as TablePrimitive, TableProps as TablePrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';
export {
  Thead,
  TheadProps,
  Tfoot,
  TfootProps,
  Tbody,
  TbodyProps,
  Tr,
  TrProps,
  Th,
  ThProps,
  Td,
  TdProps,
} from '@modulz/primitives';

export type TableProps = TablePrimitiveProps;

export const Table = React.forwardRef<HTMLTableElement, TableProps>((props, forwardedRef) => (
  <TablePrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        th: {
          normal: {
            paddingTop: theme.space[2],
            paddingBottom: theme.space[2],
            paddingRight: theme.space[3],
            borderBottom: '1px solid',
            borderColor: theme.colors.gray300,
            color: theme.colors.gray700,
            fontSize: theme.fontSizes[1],
            fontVariantNumeric: 'tabular-nums',
            lineHeight: theme.lineHeights[2],
            '&:last-of-type': {
              paddingRight: 0,
            },
          },
        },
        td: {
          normal: {
            paddingTop: theme.space[2],
            paddingBottom: theme.space[2],
            paddingRight: theme.space[3],
            borderBottom: '1px solid',
            borderColor: theme.colors.gray300,
            fontSize: theme.fontSizes[2],
            fontVariantNumeric: 'tabular-nums',
            lineHeight: theme.lineHeights[2],
            '&:last-of-type': {
              paddingRight: 0,
            },
          },
        },
      },
    }}
  />
));
