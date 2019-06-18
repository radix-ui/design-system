import { system, CustomStyleDefinitions } from 'styled-system';
export { GridAutoRowsProps } from 'styled-system';

export const config: CustomStyleDefinitions = { gridAutoRows: true };

export const gridAutoRows = system(config);
