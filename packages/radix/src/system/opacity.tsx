import { system, CustomStyleDefinitions } from 'styled-system';
export { OpacityProps } from 'styled-system';

const config: CustomStyleDefinitions = {
  opacity: true,
};

export const opacity = system(config);
