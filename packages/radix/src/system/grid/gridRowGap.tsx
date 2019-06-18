import { system, CustomStyleDefinitions } from 'styled-system';
export { GridRowGapProps } from 'styled-system';

export const config: CustomStyleDefinitions = {
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
};

export const gridRowGap = system(config);
