import { system, CustomStyleDefinitions } from 'styled-system';
export { BackgroundColorProps } from 'styled-system';

const config: CustomStyleDefinitions = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};
config.bg = config.backgroundColor;

export const backgroundColor = system(config);
