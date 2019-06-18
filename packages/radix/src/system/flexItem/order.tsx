import { system, CustomStyleDefinitions } from 'styled-system';
export { OrderProps } from 'styled-system';

export const config: CustomStyleDefinitions = { order: true };

export const order = system(config);
