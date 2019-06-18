import { system, Config } from 'styled-system';
export { ZIndexProps } from 'styled-system';

export const config: Config = {
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

export const zIndex = system(config);
