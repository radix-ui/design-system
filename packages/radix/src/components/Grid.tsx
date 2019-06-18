import styled from 'styled-components';
import { compose } from 'styled-system';

import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  gridGap,
  GridGapProps,
  gridColumnGap,
  GridColumnGapProps,
  gridRowGap,
  GridRowGapProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridArea,
  GridAreaProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from '../system';

type GridProps = AlignContentProps &
  AlignItemsProps &
  GridGapProps &
  GridColumnGapProps &
  GridRowGapProps &
  GridColumnProps &
  GridRowProps &
  GridAutoFlowProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridTemplateAreasProps &
  GridAreaProps &
  MarginProps &
  PaddingProps;

const styleProps = compose(
  alignContent,
  alignItems,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  margin,
  padding
);

export const Grid = styled.div<GridProps>({ display: 'grid' }, styleProps);
