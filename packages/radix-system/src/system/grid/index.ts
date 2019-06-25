import { system } from '@styled-system/core';
import { config as gridGapConfig, GridGapProps } from './gridGap';
import { config as gridColumnGapConfig, GridColumnGapProps } from './gridColumnGap';
import { config as gridRowGapConfig, GridRowGapProps } from './gridRowGap';
import { config as gridColumnConfig, GridColumnProps } from './gridColumn';
import { config as gridRowConfig, GridRowProps } from './gridRow';
import { config as gridAutoFlowConfig, GridAutoFlowProps } from './gridAutoFlow';
import { config as gridAutoColumnsConfig, GridAutoColumnsProps } from './gridAutoColumns';
import { config as gridAutoRowsConfig, GridAutoRowsProps } from './gridAutoRows';
import {
  config as gridTemplateColumnsConfig,
  GridTemplateColumnsProps,
} from './gridTemplateColumns';
import { config as gridTemplateRowsConfig, GridTemplateRowsProps } from './gridTemplateRows';
import { config as gridTemplateAreasConfig, GridTemplateAreasProps } from './gridTemplateAreas';
import { config as gridAreaConfig, GridAreaProps } from './gridArea';

export interface GridSetProps
  extends GridGapProps,
    GridColumnGapProps,
    GridRowGapProps,
    GridColumnProps,
    GridRowProps,
    GridAutoFlowProps,
    GridAutoColumnsProps,
    GridAutoRowsProps,
    GridTemplateColumnsProps,
    GridTemplateRowsProps,
    GridTemplateAreasProps,
    GridAreaProps {}

export const gridSet = system({
  ...gridGapConfig,
  ...gridColumnGapConfig,
  ...gridRowGapConfig,
  ...gridColumnConfig,
  ...gridRowConfig,
  ...gridAutoFlowConfig,
  ...gridAutoColumnsConfig,
  ...gridAutoRowsConfig,
  ...gridTemplateColumnsConfig,
  ...gridTemplateRowsConfig,
  ...gridTemplateAreasConfig,
  ...gridAreaConfig,
});
