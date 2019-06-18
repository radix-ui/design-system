import { system, CustomStyleDefinitions } from 'styled-system';
export { JustifyItemsProps } from 'styled-system';

const config: CustomStyleDefinitions = { justifyItems: true };

export const justifyItems = system(config);
