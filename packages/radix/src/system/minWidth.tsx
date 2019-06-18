import { system, CustomStyleDefinitions } from 'styled-system';
export { MinWidthProps } from 'styled-system';

const config: CustomStyleDefinitions = { minWidth: true };

export const minWidth = system(config);
