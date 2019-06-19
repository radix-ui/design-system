import { system, Config } from '@styled-system/core';
export { GridRowGapProps } from '@styled-system/core';

export const config: Config = {
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
};

export const gridRowGap = system(config);
