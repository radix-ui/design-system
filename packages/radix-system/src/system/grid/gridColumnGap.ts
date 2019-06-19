import { system, Config } from '@styled-system/core';
export { GridColumnGapProps } from '@styled-system/core';

export const config: Config = {
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
};

export const gridColumnGap = system(config);
