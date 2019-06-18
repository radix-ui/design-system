import { system, CustomStyleDefinitions } from 'styled-system';
export { GridColumnProps } from 'styled-system';

export const config: CustomStyleDefinitions = { gridColumn: true };

export const gridColumn = system(config);
