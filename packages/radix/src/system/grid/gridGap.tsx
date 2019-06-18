import { system, CustomStyleDefinitions } from 'styled-system';
export { GridGapProps } from 'styled-system';

export const config: CustomStyleDefinitions = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
};

export const gridGap = system(config);
