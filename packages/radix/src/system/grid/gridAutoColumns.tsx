import { system, CustomStyleDefinitions } from 'styled-system';
export { GridAutoColumnsProps } from 'styled-system';

export const config: CustomStyleDefinitions = { gridAutoColumns: true };

export const gridAutoColumns = system(config);
