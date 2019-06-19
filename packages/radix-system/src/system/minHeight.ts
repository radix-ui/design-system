import { system, Config } from '@styled-system/core';
export { MinHeightProps } from '@styled-system/core';

const config: Config = {
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
};

export const minHeight = system(config);
