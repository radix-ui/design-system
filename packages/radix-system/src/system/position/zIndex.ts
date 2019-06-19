import { system, Config } from '@styled-system/core';
export { ZIndexProps } from '@styled-system/core';

export const config: Config = {
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

export const zIndex = system(config);
