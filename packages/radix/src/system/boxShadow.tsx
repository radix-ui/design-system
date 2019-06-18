import { system, CustomStyleDefinitions } from 'styled-system';
export { BoxShadowProps } from 'styled-system';

const config: CustomStyleDefinitions = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
};

export const boxShadow = system(config);
