import { system, Config } from 'styled-system';
export { GridColumnGapProps } from 'styled-system';

export const config: Config = {
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
};

export const gridColumnGap = system(config);
