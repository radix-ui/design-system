import { system, Config } from 'styled-system';
export { GridGapProps } from 'styled-system';

export const config: Config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
};

export const gridGap = system(config);
