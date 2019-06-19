import { system, Config } from '@styled-system/core';
export { MaxHeightProps } from '@styled-system/core';

const config: Config = {
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
};

export const maxHeight = system(config);
