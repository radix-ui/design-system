import { system, CustomStyleDefinitions } from 'styled-system';
export { MaxWidthProps } from 'styled-system';

const config: CustomStyleDefinitions = { maxWidth: true };

export const maxWidth = system(config);
