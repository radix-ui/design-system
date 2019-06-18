import { system, Config } from 'styled-system';
export { GridRowGapProps } from 'styled-system';

export const config: Config = {
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
};

export const gridRowGap = system(config);
