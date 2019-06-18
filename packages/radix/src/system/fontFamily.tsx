import { system, CustomStyleDefinitions } from 'styled-system';
export { FontFamilyProps } from 'styled-system';

const config: CustomStyleDefinitions = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
};

export const fontFamily = system(config);
