import { system, CustomStyleDefinitions } from 'styled-system';
export { FontSizeProps } from 'styled-system';

const config: CustomStyleDefinitions = {
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
};

export const fontSize = system(config);
