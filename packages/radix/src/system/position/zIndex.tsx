import { system, CustomStyleDefinitions } from 'styled-system';
export { ZIndexProps } from 'styled-system';

export const config: CustomStyleDefinitions = {
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

export const zIndex = system(config);
