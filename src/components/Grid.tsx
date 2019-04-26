import styled from 'styled-components';
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
  GridTemplatesColumnsProps,
  gridTemplateRows,
  GridTemplatesRowsProps,
  gridTemplateAreas,
  GridTemplatesAreasProps,
  gridArea,
  GridAreaProps,
  space,
  SpaceProps,
} from 'styled-system';

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
  GridTemplatesColumnsProps &
  GridTemplatesRowsProps &
  GridTemplatesAreasProps &
  GridAreaProps &
  SpaceProps;

export const Grid = styled.div<GridProps>`
  display: grid;

  ${alignContent}
  ${alignItems}
  ${gridGap}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridColumn}
  ${gridRow}
  ${gridAutoFlow}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridArea}
  ${space}
`;
