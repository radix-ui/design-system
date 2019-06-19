import { system, Config } from 'styled-system';
export { MinWidthProps } from 'styled-system';

const config: Config = { minWidth: true };

export const minWidth = system(config);
