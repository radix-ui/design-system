import { system, CustomStyleDefinitions } from 'styled-system';
export { GridColumnGapProps } from 'styled-system';

export const config: CustomStyleDefinitions = {
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
};

export const gridColumnGap = system(config);
