import { system } from '@styled-system/core';
import { config as gridGapConfig } from './gridGap';
import { config as gridColumnGapConfig } from './gridColumnGap';
import { config as gridRowGapConfig } from './gridRowGap';
import { config as gridColumnConfig } from './gridColumn';
import { config as gridRowConfig } from './gridRow';
import { config as gridAutoFlowConfig } from './gridAutoFlow';
import { config as gridAutoColumnsConfig } from './gridAutoColumns';
import { config as gridAutoRowsConfig } from './gridAutoRows';
import { config as gridTemplateColumnsConfig } from './gridTemplateColumns';
import { config as gridTemplateRowsConfig } from './gridTemplateRows';
import { config as gridTemplateAreasConfig } from './gridTemplateAreas';
import { config as gridAreaConfig } from './gridArea';
export { GridProps as GridSetProps } from '@styled-system/core';

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
