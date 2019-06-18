import { system, CustomStyleDefinitions } from 'styled-system';
export { MinHeightProps } from 'styled-system';

const config: CustomStyleDefinitions = { minHeight: true };

export const minHeight = system(config);
